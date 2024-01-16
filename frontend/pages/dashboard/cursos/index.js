import Navbarlateral from "@/components/NavDash";
import Head from "next/head";
import {
  Button,
  Container,
  CssBaseline,
  Paper,
  Typography,
} from '@mui/material';
import CursoCardList from "@/components/CursosCard";


const ConteudoPrincipal = ({ pageTitle }) => (
  <Container sx={{ mt: 20, display: 'flex', justifyContent: 'flex-end' }}>
    <CssBaseline />
    <Paper sx={{ width: '1020px', padding: 2, display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="h4">{pageTitle}</Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<span>+</span>}
      >
        Add
      </Button>
    </Paper>
  </Container>
);

export default function Cursos() {
  return (
    <div>
      <Head>
        <title> Jb Company</title>
      </Head>
      <ConteudoPrincipal pageTitle="Cursos" />
      <Navbarlateral content={[<CursoCardList />]} />
    </div>
  );
}
