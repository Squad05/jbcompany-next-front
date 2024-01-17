import Head from "next/head";
import VagaCardList from "@/components/VagasCard";
import {
  Button,
  Container,
  CssBaseline,
  Paper,
  Typography,
} from "@mui/material";
import FormualarioVagas from "@/components/FormularioVagas";

const ConteudoPrincipal = ({ pageTitle }) => (
  <Container sx={{ mt: 20, display: "flex", justifyContent: "flex-end" }}>
    <CssBaseline />
    <Paper
      sx={{
        width: "1020px",
        padding: 2,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h4">{pageTitle}</Typography>
      <Button variant="contained" color="primary" startIcon={<span>+</span>}>
        Add
      </Button>
    </Paper>
  </Container>
);

export default function Vagas() {
  return (
    <div>
      <Head>
        <title> Jb Company</title>
      </Head>
    </div>
  );
}
