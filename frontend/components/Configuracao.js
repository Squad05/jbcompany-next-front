import React, { useCallback } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';

const Configuracoes = () => {
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <Card sx={{ mt: 3}}>
        <CardHeader subheader="Gerencie as notificações" title="Notificações" />
        <Divider />
        <CardContent>
          <Grid container spacing={4}>
            {["Notificações", "Mensagens"].map((secao, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <Stack spacing={1}>
                  <Typography variant="h6">{secao}</Typography>
                  <Stack sx={{ marginTop: 0.5 }}> 
                    {["E-mail", "Notificações Push", "Mensagens de Texto", "Chamadas Telefônicas"].map((rotulo, index) => (
                      <FormControlLabel key={index} control={<Checkbox defaultChecked={index !== 2} />} label={rotulo} />
                    ))}
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-start', marginLeft: 1 }}>
          <Button variant="contained">Salvar</Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default Configuracoes;
