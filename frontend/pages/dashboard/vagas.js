import Navbarlateral from "@/components/NavDash";
import Head from "next/head";
import VagaCardList from "@/components/VagasCard";
import {
    Button,
    Container,
    CssBaseline,
    Paper,
    Typography,

} from '@mui/material';



export default function Vagas() {
    return (
        <div>
            <Head>
                <title> Jb Company</title>
            </Head>
            <Navbarlateral />
            <Container sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                <CssBaseline />
                <Paper sx={{ mb: 5, width: '1020px', padding: 2, display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h4">Vagas</Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<span>+</span>}
                    >
                        Add
                    </Button>
                </Paper>

            </Container>
            <VagaCardList />
        </div>
    )
}

