import Head from "next/head";
import Menu from "@/components/NavDash";
import { FormularioAulas } from "@/components/FormAulas";
import { useAuth } from "@/hooks/useAuth";
import TabelaUltimasAulasLancadas from "@/components/Aulas";


export default function Aulas() {
    const { autenticado } = useAuth();

    if (!autenticado) {
      return null;
    }

    return (
        <div>
            <Head>
                <title> Jb Company </title>
            </Head>
            <Menu />
            <main >
                <FormularioAulas />
                <TabelaUltimasAulasLancadas />
            </main>
        </div>
    )
}