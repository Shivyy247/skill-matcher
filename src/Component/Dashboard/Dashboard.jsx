import React from 'react'
import styles from "./Dashboard.module.css";


const Dashboard = () => {
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
        </div>


      </div>
    </div>
  );
}

export default Dashboard
