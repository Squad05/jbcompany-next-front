import { useState } from "react";
import styles from "../styles/DashboardMenuAdd.module.css";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import { Button, InputAdornment, TextField } from "@mui/material";

export default function DashboardMenuAdd({
  titulo,
  linkRota,
  vagas,
  onPesquisar,
}) {
  const [termoPesquisa, setTermoPesquisa] = useState("");

  const handlePesquisa = () => {
    onPesquisar(termoPesquisa);
  };

  return (
    <div className={styles.dashboardMenuContainer}>
      <div className={styles.containerSearch}>
        <TextField
          type="text"
          placeholder="Pesquisar vagas"
          className={styles.inputSearch}
          value={termoPesquisa}
          onChange={(e) => setTermoPesquisa(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment className={styles.teste} position="end">
                <Button variant="text" onClick={handlePesquisa}>
                  <SearchIcon />
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className={styles.containerADD}>
        <Link className={styles.botaoADD} href={linkRota}>
          Adicionar
        </Link>
      </div>
    </div>
  );
}
