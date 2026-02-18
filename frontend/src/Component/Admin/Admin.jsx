import React from "react";
import styles from "./Admin.module.css";
import { Skeleton } from "@mui/material";
import WithAuthHOC from "../../utils/withAuthHOC";


const Admin = () => {
  return (
    <div className={styles.admin}>
      <div className={styles.adminBlock}>
        <Skeleton
          variant="rectangural"
          sx={{ borderRadius: "20px" }}
          width={266}
          height={200}
        />
        <div className={styles.adminCard}>
          <h2>Shivyy</h2>
          <p style={{ color: "blue" }}>shivyyy@gmail.com</p>
          <h3>Score : 50%</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            laborum enim quo dolores facere magnam commodi odio ratione ut
            veritatis, porro placeat et, aliquam nostrum minus similique quos
            aspernatur consequuntur adipisci laboriosam molestias! Id assumenda,
            molestias laudantium corrupti fugit similique?
          </p>
        </div>

        <div className={styles.adminCard}>
          <h2>Shivyy</h2>
          <p style={{ color: "blue" }}>shivyyy@gmail.com</p>
          <h3>Score : 50%</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            laborum enim quo dolores facere magnam commodi odio ratione ut
            veritatis, porro placeat et, aliquam nostrum minus similique quos
            aspernatur consequuntur adipisci laboriosam molestias! Id assumenda,
            molestias laudantium corrupti fugit similique?
          </p>
        </div>

        <div className={styles.adminCard}>
          <h2>Shivyy</h2>
          <p style={{ color: "blue" }}>shivyyy@gmail.com</p>
          <h3>Score : 50%</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            laborum enim quo dolores facere magnam commodi odio ratione ut
            veritatis, porro placeat et, aliquam nostrum minus similique quos
            aspernatur consequuntur adipisci laboriosam molestias! Id assumenda,
            molestias laudantium corrupti fugit similique?
          </p>
        </div>

        <div className={styles.adminCard}>
          <h2>Shivyy</h2>
          <p style={{ color: "blue" }}>shivyyy@gmail.com</p>
          <h3>Score : 50%</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            laborum enim quo dolores facere magnam commodi odio ratione ut
            veritatis, porro placeat et, aliquam nostrum minus similique quos
            aspernatur consequuntur adipisci laboriosam molestias! Id assumenda,
            molestias laudantium corrupti fugit similique?
          </p>
        </div>

        <div className={styles.adminCard}>
          <h2>Shivyy</h2>
          <p style={{ color: "blue" }}>shivyyy@gmail.com</p>
          <h3>Score : 50%</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            laborum enim quo dolores facere magnam commodi odio ratione ut
            veritatis, porro placeat et, aliquam nostrum minus similique quos
            aspernatur consequuntur adipisci laboriosam molestias! Id assumenda,
            molestias laudantium corrupti fugit similique?
          </p>
        </div>

        <div className={styles.adminCard}>
          <h2>Shivyy</h2>
          <p style={{ color: "blue" }}>shivyyy@gmail.com</p>
          <h3>Score : 50%</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            laborum enim quo dolores facere magnam commodi odio ratione ut
            veritatis, porro placeat et, aliquam nostrum minus similique quos
            aspernatur consequuntur adipisci laboriosam molestias! Id assumenda,
            molestias laudantium corrupti fugit similique?
          </p>
        </div>
      </div>
    </div>
  );
};

export default WithAuthHOC(Admin);
