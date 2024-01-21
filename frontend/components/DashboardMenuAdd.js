import { useState, useEffect } from "react";
import styles from "../styles/DashboardMenuAdd.module.css";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import { Button, InputAdornment, TextField } from "@mui/material";
import { useRouter } from "next/router";

const DashboardMenuAdd = ({ titulo, linkRota, vagas, onPesquisar }) => {
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const router = useRouter();

  const handlePesquisa = () => {
    onPesquisar(termoPesquisa);
  };

  useEffect(() => {
    if (router.pathname === "/dashboard/cursos") {
      setPlaceholder("Pesquisar cursos");
    } else {
      setPlaceholder("Pesquisar vagas");
    }
  }, [router.pathname]);

  const [placeholder, setPlaceholder] = useState("Pesquisar vagas");

  const rotaAdicionar =
    router.pathname === "/dashboard/cursos"
      ? "/dashboard/cursos/add"
      : "/dashboard/vagas/add";

  return (
    <div className={styles.dashboardMenuContainer}>
      <div className={styles.containerSearch}>
        <TextField
          type="text"
          placeholder={placeholder}
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
        <Link className={styles.botaoADD} href={rotaAdicionar} passHref>
          Adicionar
        </Link>
      </div>
    </div>
  );
};

export default DashboardMenuAdd;
