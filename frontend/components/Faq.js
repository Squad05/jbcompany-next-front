import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import faqData from '@/data/dataFaq';

export default function Faq() {
    const [expanded, setExpanded] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState('');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <Container maxWidth='lg'>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{ mb: 1 }}>FAQ</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Pesquisar"
                        variant="outlined"
                        fullWidth
                        sx={{ mb: 2 }}
                        value={searchQuery}
                        onChange={handleSearchChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
            </Grid>

            {faqData.filter(item => item.pergunta.toLowerCase().includes(searchQuery.toLowerCase())).map(item => (
                <Accordion key={item.id} expanded={expanded === item.faq} onChange={handleChange(item.faq)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${item.faq}bh-content`}
                        id={`${item.faq}bh-header`}
                    >
                        <Typography sx={{ width: '100%', flexShrink: 0 }}>
                            {item.pergunta}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>R: {item.resposta}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
            <Typography variant="h5" sx={{ my: 2, mx: 1 }}>Caso ainda tenha dúvidas entre em contato.</Typography>
        </Container>
    );
}
