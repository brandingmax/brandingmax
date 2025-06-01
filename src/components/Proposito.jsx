import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'

const Proposito = () => {
  return (
    <Box sx={{ py: 2 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" columns={{ xs: 4, sm: 8, md: 12 }}>

          {/* Coluna esquerda - imagem */}
          <Grid size={6}>
            <Box
              component="img"
              src="img/world.png"
              alt="BrandingMax Co."
              sx={{
                width: '100%',
                objectFit: 'cover',
                maxHeight: 350,
              }}
            />
          </Grid>

          {/* Coluna direita - texto */}
          <Grid size={6}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
              Nosso Propósito
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ whiteSpace: 'pre-line', pb: 3 }}>
              {`Vivemos uma nova era, onde o sucesso empresarial está diretamente ligado à sustentabilidade, colaboração e consciência global. A BrandingMax Co. nasceu para ajudar marcas a se conectarem com essa realidade, traduzindo seus valores e diferenciais em narrativas autênticas, experiências memoráveis e estratégias eficazes.`}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ whiteSpace: 'pre-line' }}>
              {`Acreditamos no poder do branding transformador, que vai além do visual e da comunicação: ele molda percepções, fortalece comunidades e impulsiona mudanças reais no mundo.`}
            </Typography>
          </Grid>

        </Grid>
      </Container>
    </Box>
  )
}

export default Proposito
