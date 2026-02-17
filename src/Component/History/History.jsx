import React from "react";
import styles from "./History.module.css";
import Skeleton from "@mui/material/Skeleton";



const History = () => {
  return (
    <div className={styles.history}>
      <div className={styles.historyCardBlock}>
        <Skeleton
          variant="rectangural"
          sx={{ borderRadius: "20px" }}
          width={266}
          height={200}
        />


        <div className={styles.historyCard}>
          <div className={styles.cardPercentage}>80%</div>
          <h2>Fronted Developer</h2>
          <p>Resume Name : Resume.pdf</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
            fugiat excepturi fuga voluptatem magni id vel incidunt perspiciatis
            vero dolorem voluptatibus sequi, tempora iste? Totam nam dolore
            laborum aut est!
          </p>
          <p>Dated : 2006-11-08</p>
        </div>

        <div className={styles.historyCard}>
          <div className={styles.cardPercentage}>80%</div>
          <h2>Fronted Developer</h2>
          <p>Resume Name : Resume.pdf</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
            fugiat excepturi fuga voluptatem magni id vel incidunt perspiciatis
            vero dolorem voluptatibus sequi, tempora iste? Totam nam dolore
            laborum aut est!
          </p>
          <p>Dated : 2006-11-08</p>
        </div>

        <div className={styles.historyCard}>
          <div className={styles.cardPercentage}>80%</div>
          <h2>Fronted Developer</h2>
          <p>Resume Name : Resume.pdf</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
            fugiat excepturi fuga voluptatem magni id vel incidunt perspiciatis
            vero dolorem voluptatibus sequi, tempora iste? Totam nam dolore
            laborum aut est!
          </p>
          <p>Dated : 2006-11-08</p>
        </div>

        <div className={styles.historyCard}>
          <div className={styles.cardPercentage}>80%</div>
          <h2>Fronted Developer</h2>
          <p>Resume Name : Resume.pdf</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
            fugiat excepturi fuga voluptatem magni id vel incidunt perspiciatis
            vero dolorem voluptatibus sequi, tempora iste? Totam nam dolore
            laborum aut est!
          </p>
          <p>Dated : 2006-11-08</p>
        </div>

        <div className={styles.historyCard}>
          <div className={styles.cardPercentage}>80%</div>
          <h2>Fronted Developer</h2>
          <p>Resume Name : Resume.pdf</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
            fugiat excepturi fuga voluptatem magni id vel incidunt perspiciatis
            vero dolorem voluptatibus sequi, tempora iste? Totam nam dolore
            laborum aut est!
          </p>
          <p>Dated : 2006-11-08</p>
        </div>

        <div className={styles.historyCard}>
          <div className={styles.cardPercentage}>80%</div>
          <h2>Fronted Developer</h2>
          <p>Resume Name : Resume.pdf</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
            fugiat excepturi fuga voluptatem magni id vel incidunt perspiciatis
            vero dolorem voluptatibus sequi, tempora iste? Totam nam dolore
            laborum aut est!
          </p>
          <p>Dated : 2006-11-08</p>
        </div>
      </div>
    </div>
  );
};

export default History;
