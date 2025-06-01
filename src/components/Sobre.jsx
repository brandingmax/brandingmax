import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'

const Sobre = () => {
  return (
    <Box sx={{ py: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" columns={{ xs: 4, sm: 12, md: 12 }}>
          {/* Coluna esquerda - texto */}
          <Grid size={{ xs: 6, sm: 12, md: 6 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
              Uma Agência Catalisadora
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ whiteSpace: 'pre-line' }}>
              {`No mundo dinâmico do empreendedorismo sustentável, a BrandingMax Co. se destaca como uma catalisadora estratégica, impulsionando negócios e marcas a atingirem seu máximo potencial por meio da inovação, propósito social e práticas éticas. Mais do que uma agência de branding e marketing, somos um ecossistema de transformação, onde empresas visionárias encontram suporte para construir identidade, relevância e impacto positivo no mercado e na sociedade.`}
            </Typography>
          </Grid>

          {/* Coluna direita - imagem */}
          <Grid size={6}>
            <Box
              component="img"
              src="/img/lamp.png"
              alt="BrandingMax Co."
              sx={{
                width: '100%',
                objectFit: 'cover',
                maxHeight: 400,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Sobre
