import FormularioCursos from "@/components/FormCursos";
import Menu from "@/components/NavDash";
import Head from "next/head";
import styles from "../../../../styles/Dashboard.module.css";
import DashboardMenuAdd from "@/components/DashboardMenuAdd";

export default function AdicionarCurso() {
    return (
        <div>
            <Head>
                <title> Jb Company </title>
            </Head>
            <Menu />
            <main className={styles.estilo_container_main}>
            <DashboardMenuAdd
                titulo={"Cadastrar Cursos"}
                linkRota={"/dashboard/cursos"}
                textoLink={"Listar"}
            />{" "}
            <FormularioCursos />
            </main>
        </div>
    )
}