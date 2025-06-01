import React from 'react'
import { Container, Typography, Grid, Paper, Box } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import GroupWorkIcon from '@mui/icons-material/GroupWork'
import AssessmentIcon from '@mui/icons-material/Assessment'

const uniqueCards = [
  {
    icon: <SettingsIcon color="primary" sx={{ fontSize: 40 }} />,
    title: 'Inovação Tecnológica Sustentável',
    description: 'Desenvolvemos e implementamos ferramentas digitais que aumentam a eficiência das marcas. Criamos plataformas colaborativas que conectam empreendedores, consumidores e organizações, formando redes sólidas de impacto positivo.',
  },
  {
    icon: <BusinessCenterIcon color="primary" sx={{ fontSize: 40 }} />,
    title: 'Consultoria Estratégica para Negócios Sustentáveis',
    description: 'Orientamos empresas na transição para modelos de economia circular, ajudando-as a reduzir sua pegada ambiental, adotar práticas justas e fortalecer a diversidade em suas operações.',
  },
  {
    icon: <RocketLaunchIcon color="primary" sx={{ fontSize: 40 }} />,
    title: 'Fomento ao Empreendedorismo de Impacto',
    description: 'Criamos programas de aceleração e suporte para startups e pequenas empresas, conectando-as a redes globais de conhecimento, financiadores éticos e parcerias estratégicas.',
  },
  {
    icon: <GroupWorkIcon color="primary" sx={{ fontSize: 40 }} />,
    title: 'Desenvolvimento de Ecossistemas Colaborativos',
    description: 'Promovemos iniciativas que integram setores econômicos, sociais e ambientais, conectando produtores, fabricantes, distribuidores e comérciantes para soluções sustentáveis e inovadoras.',
  },
  {
    icon: <AssessmentIcon color="primary" sx={{ fontSize: 40 }} />,
    title: 'Mensuração de Impacto Social e Ambiental',
    description: 'Ajudamos marcas a mensurar e comunicar seus impactos positivos, fortalecendo sua legitimidade no mercado e alinhando-as às expectativas do consumidor consciente.',
  },
]

export default function UniqueSection() {
  return (
    <Box sx={{ backgroundColor: '#121212', color: '#fff', py: 8 }}>
      <Container maxWidth="lg" columns={{ xs: 4, sm: 8, md: 12 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
          O Que nos Torna Únicos?
        </Typography>
        <Typography variant="subtitle1" gutterBottom sx={{ mb: 6, color: 'gray' }}>
          Na BrandingMax Co., pensamos além do marketing tradicional. Nosso compromisso vai além da estética e do posicionamento de marca — nós criamos conexões reais e geramos impacto positivo. Nossa atuação abrange diversas áreas para garantir que marcas sustentáveis prosperem e liderem o mercado com propósito.
        </Typography>

        <Grid container spacing={4} justifyContent="center" columns={{ xs: 4, sm: 8, md: 12 }}>
          {uniqueCards.map(({ icon, title, description }, index) => (
            <Grid key={index} size={4}>
              <Paper sx={{ p: 3, height: '100%', bgcolor: '#111' }} elevation={3}>
                <Box sx={{ mb: 2 }}>{icon}</Box>
                <Typography variant="h6" gutterBottom>
                  {title}
                </Typography>
                <Typography variant="body2" color="grey.200">
                  {description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
