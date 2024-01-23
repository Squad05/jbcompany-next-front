import styles from "../styles/Logo.module.css";

export default function Logo({ versaoEscura }) {
  const caminhoImagem = versaoEscura
    ? "/imagens/logojbcompany_preta.png"
    : "/imagens/logojbcompany.png";

  return (
    <img
      className={styles.estilologo}
      src={caminhoImagem}
      alt="logo jobdelas"
    ></img>
  );
}
