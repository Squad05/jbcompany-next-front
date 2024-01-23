import Logo from "./Logo";
import styles from "../styles/Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.estilo_loading}>
      <Logo />
      <p className={styles.loadingText}>Carregando...</p>
    </div>
  );
};

export default Loading;
