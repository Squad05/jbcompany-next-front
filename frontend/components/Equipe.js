import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import membros from '@/data/dataMembros';


export default function Equipe() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedUser, setSelectedUser] = React.useState(null);

    const handleClick = (event, user) => {
        setSelectedUser(user);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setSelectedUser(null);
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);


    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={4}>
                <Box textAlign="center" sx={{mt: 15}}>
                    <Typography variant="h5" gutterBottom id="equipe">
                        Equipe
                    </Typography>
                    <Typography variant="body1" color='text.secondary'>
                        Além da publicação de vagas e cursos, fornecemos ferramentas analíticas para rastrear o desempenho das postagens, opções de destaque para aumentar a visibilidade e a capacidade de personalizar a experiência de recrutamento.
                        Além da publicação de vagas e cursos, fornecemos ferramentas analíticas para rastrear o desempenho das postagens, opções de destaque para aumentar a visibilidade e a capacidade de personalizar a experiência de recrutamento.
                        Além da publicação de vagas e cursos, fornecemos ferramentas analíticas para rastrear o desempenho das postagens, opções de destaque para aumentar a visibilidade e a capacidade de personalizar a experiência de recrutamento.
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={4}>
                <Timeline position="alternate">
                    {membros.map((user, index) => (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" color={index % 2 === 0 ? 'primary' : 'secondary'} />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{py:0}}>
                                <IconButton onClick={(e) => handleClick(e, user)}>
                                    <Avatar
                                        alt={user.name}
                                        src={user.image}
                                        sx={{ width: 60, height: 60 }}
                                    />
                                </IconButton>
                                <Typography variant="body2" sx={{ mx: 2 }} color="text.secondary">
                                    {user.name}
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Grid>

            {selectedUser && (
                <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <Box p={2}>
                        <Typography variant="h6">{selectedUser.name}</Typography>
                        <Typography>
                            {selectedUser.descricao}.
                        </Typography>
                        {selectedUser.github && (
                            <Link href={selectedUser.github} target='_blank'>GitHub</Link>
                        )}

                    </Box>
                </Popover>
            )}
        </Grid>
    );
}
