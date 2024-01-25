import React, { useCallback, useEffect, useState } from "react";
import {
    FormControl,
    InputLabel,
    Button,
    Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import SchoolIcon from "@mui/icons-material/School";
import styles from "../styles/FormsDashboard.module.css";
import CursoService from "@/services/CursoService";

export default function AtualizarCurso() {
    const [dadosCurso, setDadosCurso] = useState({
        materia: "",
        descricao: "",
        duracao: "",
        categoria: "",
    });

    const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
    const router = useRouter();
    const { id } = router.query;

    const handleChange = useCallback((event) => {
        setDadosCurso((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    }, []);

    const obterDetalhesDoCurso = async () => {
        try {
            const detalhesCurso = await CursoService.listarCursosPorEmpresa(id, token);

            setDadosCurso({
                materia: detalhesCurso.materia,
                descricao: detalhesCurso.descricao,
                duracao: detalhesCurso.duracao,
                categoria: detalhesCurso.categoria
            });
        } catch (error) {
            console.error("Erro ao obter detalhes da vaga:", error);
        }
    };

    useEffect(() => {
        if (token && id) {
            obterDetalhesDoCurso();
        } else {
            router.push("/login");
        }
    }, [token, router]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await CursoService.atualizarCurso(id, token, dadosCurso);
            router.push("/dashboard/cursos");
        } catch (erro) {
            console.error("Erro ao enviar requisição:", erro.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.estiloFormularioDashBoard}>
            <Typography
                className={styles.tituloFormulario}
                variant="h1"
                component="h1"
            >

                Atualizar Curso
            </Typography>

            <InputLabel htmlFor="materia">Matéria</InputLabel>
            <FormControl fullWidth className={styles.formControlDashBoard}>
                <input
                    id="materia"
                    name="materia"
                    className={styles.formControlDashBoardInput}
                    aria-describedby="Digite a matéria"
                    value={dadosCurso.materia}
                    onChange={handleChange}
                    required
                />
            </FormControl>

            <InputLabel htmlFor="descricao">Descrição</InputLabel>
            <FormControl fullWidth className={styles.formControlDashBoard}>
                <input
                    id="descricao"
                    name="descricao"
                    className={styles.formControlDashBoardInput}
                    aria-describedby="Digite a descrição"
                    value={dadosCurso.descricao}
                    onChange={handleChange}
                    required
                />
            </FormControl>

            <InputLabel htmlFor="duracao">Duração</InputLabel>
            <FormControl fullWidth className={styles.formControlDashBoard}>
                <input
                    id="duracao"
                    name="duracao"
                    className={styles.formControlDashBoardInput}
                    aria-describedby="Digite a duração"
                    value={dadosCurso.duracao}
                    onChange={handleChange}
                    required
                />
            </FormControl>

            <InputLabel htmlFor="categoria">Categoria</InputLabel>
            <FormControl fullWidth >
                <select
                    id="categoria"
                    name="categoria"
                    className={styles.formControlDashBoardInput}
                    value={dadosCurso.categoria}
                    onChange={handleChange}
                    required
                >
                    <option disabled value="">
                        Selecione uma categoria
                    </option>
                    <option value="Tecnologia">Tecnologia</option>
                    <option value="Negocios">Negocios</option>
                    <option value="Design">Design</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Produtividade">Produtividade</option>
                    <option value="Jogos">Jogos</option>
                    <option value="Linguas">Linguas</option>
                </select>
            </FormControl>

            <Button
                variant="contained"
                color="primary"
                style={{ marginTop: 20 }}
                type="submit"
            >
                Atualizar
            </Button>
        </form>
    );
}
