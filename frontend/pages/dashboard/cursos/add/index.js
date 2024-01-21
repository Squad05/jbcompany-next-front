import FormularioCursos from "@/components/FormCursos";
import Menu from "@/components/NavDash";
import Head from "next/head";

export default function AdicionarCurso() {
    return (
        <div>
            <Head>
                <title> Jb Company </title>
            </Head>
            <Menu />
            <FormularioCursos />
        </div>
    )
}