import React, { useEffect, useState } from "react";
import styles from "./Admin.module.css";
import { Skeleton } from "@mui/material";
import WithAuthHOC from "../../utils/withAuthHOC";
import axios from '../../utils/axios'

const Admin = () => {

  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchAllData = async () => {
      setLoader(true)
      try {
        const results = await axios.get('/api/resume/get')
        console.log(results.data.resumes)
        setData(results.data.resumes);
      } catch (error) {
        console.log(error)
        alert("something went wrong!")
      }
      finally {
        setLoader(false)
      }
    }
    fetchAllData()
  },[])

  return (
    <div className={styles.admin}>
      <div className={styles.adminBlock}>
        {loader && (
          <>
            <Skeleton
              variant="rectangural"
              sx={{ borderRadius: "20px" }}
              width={266}
              height={200}
            />
            <Skeleton
              variant="rectangural"
              sx={{ borderRadius: "20px" }}
              width={266}
              height={200}
            />
            <Skeleton
              variant="rectangural"
              sx={{ borderRadius: "20px" }}
              width={266}
              height={200}
            />
          </>
        )}
        {
          data.map((item, index) => {
            return (
              <div className={styles.adminCard}>
                <h2>{item.user?.name}</h2>
                <p style={{ color: "blue" }}>{item?.user?.email}</p>
                <h3>Score : {item.score}%</h3>
                <p>
                  {item.feedback}
                </p>
              </div>
            );
          })
        }
       
      </div>
    </div>
  );
};

export default WithAuthHOC(Admin);
