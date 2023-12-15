import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import cards from '../data/dataCards';


export default function Cards() {
    return (
        <Container maxWidth='lg'>
            <Grid container spacing={3}>
                {cards.map((step, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ maxWidth: 345 }} style={{ padding: '10px', marginBottom: '30px', marginTop: '30px' }}>
                            <CardMedia component="img" height="140" image={step.imagem} alt={step.titulo} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {step.titulo}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {step.descricao}
                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
