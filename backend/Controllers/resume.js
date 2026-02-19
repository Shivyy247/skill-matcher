const ResumeModel = require('../Models/resume')
const multer = require("multer")
const pdfParse = require("pdf-parse")
const path = require("path")
const cohere = require("cohere-ai")



exports.addResume = async (req, res) => {
    try {
        const { job_desc, user } = req.body;
        console.log(job_desc)
    } catch (error) {
        console.log(error);
        res.status(500).json({
          error: "Server Error",
          message: error.message,
        });
    }
}