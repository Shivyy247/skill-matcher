import React, { useState, useEffect, useContext } from "react";
import styles from "./History.module.css";
import Skeleton from "@mui/material/Skeleton";
import WithAuthHOC from "../../utils/withAuthHOC";
import axios from '../../utils/axios'
import { AuthContext } from "../../utils/HOC/AuthContext";


const History = () => {

  const [data, setData] = useState([])
  const [loader, setLoader] = useState(false)

  const {userInfo} = useContext(AuthContext)
  
  useEffect(() => {
    const fatchUserData = async () => {
      setLoader(true)
      try {
        const results = await axios.get(`/api/resume/get/${userInfo?._id}`);
        console.log(results.data.resumes)
        setData(results.data.resumes);
      } catch (error) {
        console.log(error)
        alert('something went wrong!')
      }
      finally {
        setLoader(false)
      }
    }
    fatchUserData()
  },[])

  return (
    <div className={styles.history}>
      <div className={styles.historyCardBlock}>
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
            <Skeleton
              variant="rectangural"
              sx={{ borderRadius: "20px" }}
              width={266}
              height={200}
            />
          </>
        )}

        {data.map((item, index) => {
          return (
            <div key={item._id} className={styles.historyCard}>
              <div className={styles.cardPercentage}>{item.score}%</div>
              {/* <h2></h2> */}
              <p>{item.resume_name}</p>
              <p>{item.feedback}</p>
              <p>Dated : {item.createdAt.slice(0, 10)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WithAuthHOC(History);
