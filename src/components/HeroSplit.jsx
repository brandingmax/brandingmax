import React from 'react'
import { Box, Grid, Typography, Button, Container } from '@mui/material'

const HeroSplit = () => {
  return (
    <Box sx={{ backgroundColor: '#0D0D0D', color: '#fff', mt: 5, py: 6, px: 2 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" columns={{ xs: 4, sm: 12, md: 12 }}>
          {/* Coluna esquerda */}
          <Grid size={{ xs: 6, sm: 12, md: 6 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
              Transformação com Propósito Sustentável
            </Typography>
            <Typography variant="body" color="" paragraph>
              Impulsionamos transformações globais e sustentáveis, unindo inovação, estratégia e propósito para levar cada empreendimento a novos patamares, focando em soluções que gerem impacto social positivo e que contribuam para um futuro mais equilibrado e próspero para todos.
            </Typography>
                <Button
                component="a"
                href="https://wa.me/5511950604767" // substitua pelo número real com DDD e sem espaços ou símbolos
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                sx={{
                    mt: 3,
                    backgroundColor: '#e6003c',
                    color: '#fff',
                    '&:hover': {
                    backgroundColor: '#e6003c',
                    color: '#fff',
                    boxShadow: '0 0 8px 3px #99002a'
                    },
                }}
                >
                Comece a sua Transformação
                </Button>

          </Grid>

          {/* Coluna direita - vídeo */}
          <Grid size={{ xs: 6, sm: 12, md: 6 }}>
            <Box
              component="img"
              src="/img/brain.png"
              alt="BrandingMax Co."
              sx={{
                width: '100%',
                objectFit: 'contain',
                maxHeight: 300,
              }}
            />
              {/*
<iframe
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="Vídeo Institucional"
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none',
  }}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
</Box>
*/}
            
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HeroSplit
