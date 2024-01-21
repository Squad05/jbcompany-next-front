import FormualarioVagas from "@/components/FormularioVagas";
import Menu from "@/components/NavDash";
import Head from "next/head";

export default function AdicionarVaga() {
    return (
        <div>
            <Head>
                <title> Jb Company</title>
            </Head>
            <Menu />
            <FormualarioVagas />
        </div>
    )
}