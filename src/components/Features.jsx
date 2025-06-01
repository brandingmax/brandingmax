import React from 'react'
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material'

const featuresData = [
  {
    title: 'Centro de Conhecimento',
    description:
      'Workshops, cursos e biblioteca digital com conteúdos sobre branding sustentável e inovação.',
  },
  {
    title: 'Plataforma de Networking',
    description:
      'Eventos, feiras de negócios e um Mapa de Conexões Locais para conectar empreendedores.',
  },
  {
    title: 'Consultoria Estratégica',
    description:
      'Diagnóstico de negócios, planejamento estratégico e suporte em branding e comunicação.',
  },
  {
    title: 'Hub de Inovação Digital',
    description:
      'Um ecossistema colaborativo onde equipes e empreendedores conectam ideias, trocam experiências e impulsionam projetos.',
  },
]

const Features = () => {
  return (
    <Box sx={{ py: 5}}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          Community by BrandingMax Co.
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 6 }}
        >
          Potencializando o impacto social e fomentando redes de colaboração para empreendedores.
        </Typography>

        <Grid container spacing={2} columns={{ xs: 4, sm: 12, md: 12 }}>
          {featuresData.map(({ title, description }) => (
            <Grid size={{ xs: 4, sm: 12, md: 6 }}>
              <Card
                elevation={3}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  px: 3,
                  py: 4,
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: '600' }}>
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Features