import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  randomCreatedDate,
  randomTraderName,
} from "@mui/x-data-grid-generator";

import styles from "../styles/Tabela_Ultimos_Lancamentos_Home.module.css";

export default function TabelaUltimosCursosLancados() {
  return (
    <div className={styles.container}>
      <table className={styles.estilo_tabela}>
        <thead>
          <tr>
            <th>Projetos</th>
            <th>Categoria</th>
            <th>Inscritas</th>
            <th>Data da Postagem</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>{row.category}</td>
              <td>{row.inscritas}</td>
              <td>{row.dataPostagem}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const rows = [
  {
    id: 1,
    name: randomTraderName(),
    category: "Productivity",
    inscritas: 18,
    dataPostagem: "randomCreatedDate()",
  },
  {
    id: 2,
    name: randomTraderName(),
    category: "Active tasks",
    inscritas: 28,
    dataPostagem: "randomCreatedDate()",
  },
  {
    id: 3,
    name: randomTraderName(),
    category: "Teams",
    inscritas: 1,
    dataPostagem: "randomCreatedDate()",
  },
  {
    id: 4,
    name: randomTraderName(),
    category: "Completed",
    inscritas: 2,
    dataPostagem: "randomCreatedDate()",
  },
  {
    id: 5,
    name: randomTraderName(),
    category: "Completed",
    inscritas: 8,
    dataPostagem: "randomCreatedDate",
  },
];
