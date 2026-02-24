import React, { useContext } from "react";
import styles from "./Sidebar.module.css";
import ArticleIcon from "@mui/icons-material/Article";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HistoryIcon from "@mui/icons-material/History";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../utils/HOC/AuthContext";

const Sidebar = ({ darkMode, toggleTheme }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { setLogin, userInfo, setUserInfo } = useContext(AuthContext);

  const handleLogOut = () => {
    localStorage.clear();
    setLogin(false);
    setUserInfo(null);
    navigate("/");
  };

  return (
    <div className={styles.sideBar}>
      {/* Top Logo Section */}
      <div className={styles.sideBarIcon}>
        <ArticleIcon sx={{ fontSize: 54, marginBottom: 2 }} />
        <div className={styles.sideBarTopContent}>Resume Screening</div>
      </div>

      {/* Dashboard */}
      <div className={styles.sideBarOptionBlock}>
        <Link
          to={"/dashboard"}
          className={[
            styles.sideBarOption,
            (location.pathname === "/" ||
              location.pathname.startsWith("/dashboard")) &&
              styles.selectedOption,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <DashboardIcon sx={{ fontSize: 22 }} />
          <div>Dashboard</div>
        </Link>
      </div>

      {/* History */}
      <div className={styles.sideBarOptionBlock}>
        <Link
          to={"/history"}
          className={[
            styles.sideBarOption,
            location.pathname.startsWith("/history") && styles.selectedOption,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <HistoryIcon sx={{ fontSize: 22 }} />
          <div>History</div>
        </Link>
      </div>

      {/* Admin (only if role is admin) */}
      {userInfo?.role === "admin" && (
        <div className={styles.sideBarOptionBlock}>
          <Link
            to={"/admin"}
            className={[
              styles.sideBarOption,
              location.pathname.startsWith("/admin") && styles.selectedOption,
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <AdminPanelSettingsIcon sx={{ fontSize: 22 }} />
            <div>Admin</div>
          </Link>
        </div>
      )}

      {/* Logout */}
      <div onClick={handleLogOut} className={styles.sideBarOptionBlock}>
        <div className={styles.sideBarOption}>
          <ExitToAppIcon sx={{ fontSize: 22 }} />
          <div>LogOut</div>
        </div>
      </div>

      {/* Theme Toggle at Bottom */}
      <div className={styles.themeToggleWrapper}>
        <button onClick={toggleTheme} className={styles.themeToggle}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
