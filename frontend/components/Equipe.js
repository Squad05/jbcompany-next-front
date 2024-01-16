import * as React from "react";
import styles from "../styles/Equipe.module.css";
import dataMembros from "@/data/dataMembros";
import { LinkedIn, GitHub, Email } from "@mui/icons-material";

export default function Equipe() {
  return (
    <div className={styles.container_equipe}>
      <h2> EQUIPE </h2>
      <div className={styles.listamembros}>
        {dataMembros.map((membro) => (
          <div className={styles.card_membro}>
            <img src={membro.imagem} />
            <h4> {membro.nome} </h4>
            <p> {membro.descricao} </p>
            <div className={styles.container_redes}>
              <a href={membro.github} target="_blank" rel="noopener noreferrer">
                <GitHub />
              </a>
              <a
                href={membro.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn />
              </a>
              <a
                href={membro.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Email />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
