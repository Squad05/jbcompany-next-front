import styles from "../styles/AuthDivLateral.module.css";
import Link from "next/link";
import Logo from "./Logo";

export default function AuthDivLateral() {
  return (
    <div className={styles.divlateral}>
      <div className={styles.header_div}>
        <Logo />
        <Link className={styles.linkHome} href={"/"}>
          {" "}
          Home{" "}
        </Link>
      </div>
      <img
        className={styles.imgdiv}
        src="../imagens/mulheres_imagem_home.png"
        alt="Mulheres"
      />
    </div>
  );
}
