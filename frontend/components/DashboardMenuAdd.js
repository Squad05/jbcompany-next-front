import { useState, useEffect } from "react";
import styles from "../styles/DashboardMenuAdd.module.css";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import { Button, InputAdornment, TextField } from "@mui/material";

const DashboardMenuAdd = ({ titulo, linkRota, textoLink }) => {
  return (
    <div className={styles.dashboardMenuContainer}>
      <div className={styles.containerInfo}>
        <h3> {titulo} </h3>
      </div>
      <div className={styles.containerADD}>
        <Link className={styles.botaoADD} href={linkRota} passHref>
          {textoLink}
        </Link>
      </div>
    </div>
  );
};

export default DashboardMenuAdd;
