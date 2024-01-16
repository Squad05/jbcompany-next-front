import axios from "axios";
import React, { useState } from "react";
import {
    FormControl,
    InputLabel,
    Input,
    Button,
    Typography,
} from "@mui/material";

export default function FormualarioVagas() {
    const [descricao, setDescricao] = useState("");
    const [cep, setCep] = useState("");
    const [localizacao, setLocalizacao] = useState("");
    const [funcao, setFuncao] = useState("");
    const [statusVaga, setStatusVaga] = useState(false);
    const [salario, setSalario] = useState(0);
    const [token, setToken] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dados = {
            descricao,
            cep,
            localizacao,
            funcao,
            status_vaga: statusVaga,
            salario,
        };

        try {
            const response = await axios.post(
                "https://jbcompanyapi.onrender.com/api/vagas",
                dados,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log("response", response);

           
        } catch (erro) {
            console.error("Erro ao enviar requisição:", erro.message);
        }
    };

    return (
        <form  onSubmit={handleSubmit}>
            <Typography variant="h1" component="h1">
               Formulario
            </Typography>

            <FormControl fullWidth>
                <InputLabel htmlFor="descricao">Descrição</InputLabel>
                <Input
                    id="descricao"
                    aria-describedby="Digite a descrição"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    required
                />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel htmlFor="cep">CEP</InputLabel>
                <Input
                    id="cep"
                    aria-describedby="Digite o CEP"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    required
                />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel htmlFor="localizacao">Localização</InputLabel>
                <Input
                    id="localizacao"
                    aria-describedby="Digite a localização"
                    value={localizacao}
                    onChange={(e) => setLocalizacao(e.target.value)}
                    required
                />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel htmlFor="funcao">Função</InputLabel>
                <Input
                    id="funcao"
                    aria-describedby="Digite a função"
                    value={funcao}
                    onChange={(e) => setFuncao(e.target.value)}
                    required
                />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel htmlFor="statusVaga">Status da Vaga</InputLabel>
                <Input
                    id="statusVaga"
                    type="checkbox"
                    checked={statusVaga}
                    onChange={(e) => setStatusVaga(e.target.checked)}
                />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel htmlFor="salario">Salário</InputLabel>
                <Input
                    id="salario"
                    type="number"
                    aria-describedby="Digite o salário"
                    value={salario}
                    onChange={(e) => setSalario(Number(e.target.value))}
                    required
                />
            </FormControl>

            <Button
                variant="contained"
                color="primary"
                style={{ marginTop: 20 }}
                type="submit"
            >
                Enviar
            </Button>
        </form>
    );
}
