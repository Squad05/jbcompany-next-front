import React, { useCallback, useState, useEffect } from "react";
import styles from "../styles/FormsDashboard.module.css";
import { useRouter } from "next/router";
import VagaService from "@/services/VagaService";

import {
    Button,
    CardActions,
    CardContent,
    Divider,
    FormControl,
    InputLabel,
    Typography,
} from "@mui/material";

export default function AtualizarVaga() {
    const [dadosVaga, setDadosVaga] = useState({
        descricao: "",
        cep: "",
        localizacao: "",
        funcao: "",
        statusVaga: "",
        salario: "",
    });


    const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
    const router = useRouter();
    const { id } = router.query;

    const handleChange = useCallback((event) => {
        setDadosVaga((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    }, []);

    const obterDetalhesDaVaga = async () => {
        try {
            const detalhesVaga = await VagaService.listarVagasPorEmpresa(id, token);

            setDadosVaga({
                descricao: detalhesVaga.descricao,
                cep: detalhesVaga.cep,
                localizacao: detalhesVaga.localizacao,
                funcao: detalhesVaga.funcao,
                statusVaga: detalhesVaga.statusVaga,
                salario: detalhesVaga.salario,
            });
        } catch (error) {
            console.error("Erro ao obter detalhes da vaga:", error);
        }
    };

    useEffect(() => {
        if (token && id) {
            obterDetalhesDaVaga();
        } else {
            router.push("/login");
        }
    }, [token, router]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await VagaService.atualizarVagas(id, token, dadosVaga);
            router.push("/dashboard/vagas");
        } catch (erro) {
            console.error("Erro ao enviar requisição:", erro.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.estiloFormularioDashBoard}>
           
            <CardContent>
                <Typography
                    className={styles.tituloFormulario}
                    variant="h1"
                    component="h1"
                >
                    Atualizar Vaga
                </Typography>

                <InputLabel htmlFor="descricao">Descrição</InputLabel>
                <FormControl fullWidth>
                    <input
                        className={styles.formControlDashBoardInput}
                        id="descricao"
                        name="descricao"
                        value={dadosVaga.descricao}
                        onChange={handleChange}
                        required
                    />
                </FormControl>

                <InputLabel htmlFor="cep">CEP</InputLabel>
                <FormControl fullWidth>
                    <input
                        className={styles.formControlDashBoardInput}
                        id="cep"
                        name="cep"
                        value={dadosVaga.cep}
                        onChange={handleChange}
                        required
                    />
                </FormControl>

                <InputLabel htmlFor="localizacao">Localização</InputLabel>
                <FormControl fullWidth>
                    <input
                        className={styles.formControlDashBoardInput}
                        id="localizacao"
                        name="localizacao"
                        value={dadosVaga.localizacao}
                        onChange={handleChange}
                        required
                    />
                </FormControl>

                <InputLabel htmlFor="funcao">Função</InputLabel>
                <FormControl fullWidth>
                    <input
                        className={styles.formControlDashBoardInput}
                        id="funcao"
                        name="funcao"
                        value={dadosVaga.funcao}
                        onChange={handleChange}
                        required
                    />
                </FormControl>

                <InputLabel id="statusVaga-label">Status da Vaga</InputLabel>
                <FormControl fullWidth>
                    <select
                        className={styles.formControlDashBoardInput}
                        labelId="statusVaga-label"
                        name="statusVaga"
                        id="statusVaga"
                        value={dadosVaga.statusVaga}
                        onChange={handleChange}
                        required
                    >
                        <option value="true">Ativa</option>
                        <option value="false">Não Ativa</option>
                    </select>
                </FormControl>

                <InputLabel htmlFor="salario">Salário</InputLabel>
                <FormControl fullWidth>
                    <input
                        className={styles.formControlDashBoardInput}
                        id="salario"
                        type="number"
                        name="salario"
                        value={dadosVaga.salario}
                        onChange={handleChange}
                        required
                    />
                </FormControl>
            </CardContent>
            <Divider />
            <CardActions sx={{ justifyContent: "flex-start", marginLeft: 1 }}>
                <Button variant="contained" type="submit">
                    Atualizar
                </Button>
            </CardActions>
        </form>
    );
}
