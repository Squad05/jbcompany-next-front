import Head from "next/head";
import FormLogin from "@/components/FormLogin";

import styles from "../../styles/AuthPage.module.css";
import AuthDivLateral from "@/components/AuthDivLateral";

export default function Logar() {
  return (
    <div>
      <Head>
        <title> Jb Company - Login </title>
      </Head>
      <main className={styles.container_principal}>
        <AuthDivLateral />
        <FormLogin />
      </main>
    </div>
  );
}
