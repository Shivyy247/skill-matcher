import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import BarChartIcon from "@mui/icons-material/BarChart";
import Skeleton from "@mui/material/Skeleton";
import WithAuthHOC from "../../utils/withAuthHOC";

const Dashboard = () => {

  const [uploadFiletext, setUploadFiletext] = useState("Upload Resume")
  const [loading, setLoading] = useState(false)
  const [resumeFile, setResumeFile] = useState(null)
  const [jobDesc, setJobDesc] = useState("")

  const handleOnChangeFile = (e) => {
    setResumeFile(e.target.files[0]);
    setUploadFiletext(e.target.files[0].name);
  }

  return (
    <div className={styles.Dashboard}>
      <div className={styles.DashboardLeft}>
        <div className={styles.DashboardHeader}>
          <div className={styles.DashboardHeaderTitle}>
            Smart Resume Screening
          </div>
          <div className={styles.DashboardHeaderLargeTitle}>
            Resume Match Score
          </div>
        </div>

        <div className={styles.alertInfo}>
          <div>Important Instructions:</div>
          <div className={styles.dashboardInstruction}>
            <div>
              Please paste the complete job description in the "Job Description"
              field before submitting.
            </div>
            <div>Only PDF format (.pdf) resumes are accepted.</div>
          </div>
        </div>

        <div className={styles.DashboardUploadResume}>
          <div className={styles.DashboardResumeBlock}>{uploadFiletext}</div>
          <div className={styles.DashboardInputField}>
            <label htmlFor="inputField" className={styles.analyzeAIBtn}>
              Upload Resume
            </label>
            <input
              type="file"
              accept=".pdf"
              id="inputField"
              onChange={handleOnChangeFile}
            />
          </div>
        </div>

        <div className={styles.jobDesc}>
          <textarea
            className={styles.textArea}
            placeholder="Paste your Job Description"
            rows={10}
            cols={50}
          />
          <div className={styles.AnalyzeBtn}>Analyze</div>
        </div>
      </div>

      <div className={styles.DashboardRight}>
        <div className={styles.DashboardRightTopCard}>
          <div>Analyze With AI</div>
          <img
            className={styles.profileImg}
            src="https://i.pinimg.com/originals/bc/05/29/bc05295deed15211fc8ac34dc966dab5.jpg"
            alt="ladybug"
          />
          <h2>Shivyy</h2>
        </div>

        {/* <div className={styles.DashboardRightTopCard}>
          <div>Result</div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
            }}
          >
            <h1>75%</h1>
            <BarChartIcon sx={{ fontSize: 42 }} />
          </div>
          <div className={styles.feedback}>
            <h2>feedback</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              officia eius, voluptatum veritatis assumenda impedit alias
              repudiandae minus rem at?
            </p>
          </div>
        </div> */}

        <Skeleton
          variant="rectangural"
          sx={{ borderRadius: "20px" }}
          width={280}
          height={280}
        />
      </div>
    </div>
  );
};

export default WithAuthHOC(Dashboard)
