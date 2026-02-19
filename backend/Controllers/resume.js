const ResumeModel = require("../Models/resume");
const fs = require("fs");
const pdfParse = require("pdf-parse");
const { CohereClient } = require("cohere-ai");

// ⚠️ Move this to .env later
const cohere = new CohereClient({
  token: "enter your api keys",
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

Return the score and a brief explanation in this format:
Score: XX
Reason: ...
`;

    const response = await cohere.chat({
      model: "command-a-03-2025",
      message: prompt,
      temperature: 0.7,
    });

    const result = response.text;

    res.status(200).json({
      message: "PDF parsed and analyzed successfully",
      aiResponse: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Server Error",
      message: error.message,
    });
  }
};
