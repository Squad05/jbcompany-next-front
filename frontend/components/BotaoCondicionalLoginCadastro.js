import styles from "../styles/BotaoCondicionalLoginCadastro.module.css";

export function BotaoCondicionalLoginCadastro() {
  return (
    <button onClick={handleOpenUserMenu} sx={{ p: 0 }}>
      LOGIN
    </button>
  );
}
