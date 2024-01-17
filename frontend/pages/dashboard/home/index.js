import Head from "next/head";
import { useAuth } from "@/hooks/useAuth";
import Menu from "@/components/NavDash";

const Home = () => {
  const { autenticado } = useAuth();

  if (!autenticado) {
    return null;
  }

  return (
    <div>
      <Head>
        <title>Jb Company</title>
      </Head>{" "}
      <Menu />
    </div>
  );
};

export default Home;
