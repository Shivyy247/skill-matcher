import React from "react";
import styles from "./Login.module.css";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
  return (
    <div className={styles.Login}>
      <div className={styles.loginCard}>
        <div className={styles.loginCardTitle}>
                  <h1>Login</h1>
                  <VpnKeyIcon />
            </div>
            <div className={styles.googleBtn}> <GoogleIcon sx={{fontSize: 20, color: "red"}} /> Sign in with Google</div>
      </div>
    </div>
  );
};



export default Login;
