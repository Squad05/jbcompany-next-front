import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Tooltip from "@mui/material/Tooltip";

import styles from "../styles/Scrollbtn.module.css";

export default function Scrollbtn() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowButton(scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Tooltip title="Voltar ao topo">
      <Button
        onClick={handleScrollTop}
        style={{
          position: "fixed",
          bottom: 30,
          right: 25,
          display: showButton ? "block" : "none",
        }}
        className={styles.botaoscroll}
      >
        <KeyboardArrowUpIcon />
      </Button>
    </Tooltip>
  );
}
