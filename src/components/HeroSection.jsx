import React from 'react'
import { AppBar, Toolbar, Typography, Box, Button, Container } from '@mui/material'

const HeroSection = () => {
  return (
    <Box sx={{ backgroundColor: '#0D0D0D', color: '#fff', py: 6 }}>

      <Container maxWidth="md" sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h3" gutterBottom>
          Estratégia que gera resultados
        </Typography>
        <Typography variant="h6" color="gray">
          Transformamos ideias em marcas com propósito, performance e posicionamento digital.
        </Typography>
        <Button variant="contained" sx={{ mt: 4, backgroundColor: '#F21326' }}>
          Conheça nossos serviços
        </Button>
      </Container>
    </Box>
  )
}

export default HeroSection
