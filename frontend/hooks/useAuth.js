import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const useAuth = () => {
  const [autenticado, setAutenticado] = useState(false);
  const router = useRouter();

  const checarAutenticado = async () => {
    const token = localStorage.getItem("token");

    console.log(token);

    if (!token) {
      router.push("/auth/logar");
    } else {
      setAutenticado(true);
    }
  };

  useEffect(() => {
    checarAutenticado();
  }, []);

  return { autenticado };
};

export { useAuth };
