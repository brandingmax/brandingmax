import React from 'react'
import { Box, Container, Grid, Card, CardContent, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import SchoolIcon from '@mui/icons-material/School'

const ComoAtuamos = () => {
  const cards = [
    {
      icon: <StarIcon color="primary" sx={{ fontSize: 40 }} />,
      title: 'Estratégias de Comunicação Sustentável',
      description: `Criamos narrativas autênticas e utilizamos ferramentas digitais para amplificar a mensagem de marcas comprometidas com a sustentabilidade. Ajudamos empresas a se posicionarem de forma consistente, ética e engajadora, fortalecendo sua presença em mercados orientados por valores ecológicos e sociais.`,
    },
    {
      icon: <EmojiEventsIcon color="primary" sx={{ fontSize: 40 }} />,
      title: 'Gamificação e Fidelização Consciente',
      description: `Desenvolvemos sistemas de engajamento inteligente, que incentivam consumidores a adotarem hábitos sustentáveis e criarem vínculos genuínos com as marcas. Por meio de gamificação e programas de fidelização, transformamos o relacionamento entre empresas e clientes, promovendo interações significativas e duradouras.`,
    },
    {
      icon: <EventAvailableIcon color="primary" sx={{ fontSize: 40 }} />,
      title: 'Branding Experience Transformador',
      description: `Criamos experiências imersivas que aproximam marcas e públicos, transmitindo seus valores de forma autêntica. Através de eventos, campanhas interativas e estratégias de storytelling, fortalecemos o impacto positivo das marcas na sociedade e no meio ambiente.`,
    },
    {
      icon: <SchoolIcon color="primary" sx={{ fontSize: 40 }} />,
      title: 'Educação e Capacitação Empreendedora',
      description: `Acreditamos que o conhecimento é a chave para um futuro sustentável. Por isso, oferecemos workshops, consultorias e conteúdos educativos, capacitando empreendedores a aplicarem práticas éticas e inovadoras em seus negócios.`,
    },
  ]

  return (
    <Box sx={{ py: 5 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
          Como Atuamos?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 6, textAlign: 'center', maxWidth: 700, mx: 'auto' }}>
          A BrandingMax Co. une estratégia, criatividade e tecnologia para oferecer soluções inovadoras que fortalecem marcas e negócios. Nossa abordagem é fundamentada em pilares essenciais:
        </Typography>

        <Grid container spacing={4} columns={{ xs: 6, sm: 12, md: 12 }}>
          {cards.map(({ icon, title, description }, index) => (
            <Grid size={{ xs: 6, sm: 12, md: 6 }} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ mb: 2 }}>{icon}</Box>
                  <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" whiteSpace="pre-line">
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

export default ComoAtuamos