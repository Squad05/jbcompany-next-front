import Cards from "@/components/Cards";
import Navbarlateral from "@/components/NavDash";
import Head from "next/head";

export default function Settings() {
    return (
        <div>
            <Head>
                <title> Jb Company</title>
            </Head>
            <Navbarlateral />
            <Cards />
        </div>
    )
}