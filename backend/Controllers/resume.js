const ResumeModel = require("../Models/resume");
const fs = require("fs");
const pdfParse = require("pdf-parse");
const { CohereClient } = require("cohere-ai");

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

exports.addResume = async (req, res) => {
  try {
    const { job_desc, user } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const pdfPath = req.file.path;
    const dataBuffer = fs.readFileSync(pdfPath);
    const pdfData = await pdfParse(dataBuffer);

    const prompt = `
You are a resume screening assistant.
Compare the following resume text with the provided Job Description (JD) and give a match score (0-100) and feedback.

Resume:
${pdfData.text}

Job Description:
${job_desc}

Return the score and explanation in this format:
Score: XX
Reason: ...
`;

    let score = null;
    let reason = "Analysis failed";

    try {
      const response = await cohere.chat({
        model: "command-r",
        message: prompt,
        temperature: 0.7,
      });

      const result = response.text || "";

      const match = result.match(/Score:\s*(\d+)/);
      score = match ? parseInt(match[1], 10) : null;

      const reasonMatch = result.match(/Reason:\s*([\s\S]*)/);
      reason = reasonMatch ? reasonMatch[1].trim() : "No feedback generated";
    } catch (aiError) {
      console.error("Cohere Error:", aiError.message);
      score = 0;
      reason = "AI analysis temporarily unavailable.";
    }

    const newResume = new ResumeModel({
      user,
      resume_name: req.file.originalname,
      job_desc,
      score,
      feedback: reason,
    });

    await newResume.save();

    fs.unlinkSync(pdfPath);

    res.status(200).json({
      message: "Analysis complete",
      data: newResume,
    });
  } catch (error) {
    console.error("Resume Controller Error:", error.message);
    res.status(500).json({
      error: "Server Error",
      message: error.message,
    });
  }
};

exports.getAllResumesForUser = async (req, res) => {
  try {
    const { user } = req.params;

    const resumes = await ResumeModel.find({ user }).sort({ createdAt: -1 });

    res.status(200).json({
      message: "Your Previous History",
      resumes,
    });
  } catch (error) {
    console.error("User Resume Fetch Error:", error.message);
    res.status(500).json({
      error: "Server Error",
      message: error.message,
    });
  }
};

exports.getResumeForAdmin = async (req, res) => {
  try {
    const resumes = await ResumeModel.find()
      .sort({ createdAt: -1 })
      .populate("user");

    res.status(200).json({
      message: "Fetched All History",
      resumes,
    });
  } catch (error) {
    console.error("Admin Resume Fetch Error:", error.message);
    res.status(500).json({
      error: "Server Error",
      message: error.message,
    });
  }
};
