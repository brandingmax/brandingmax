import React from 'react'
import { Box, Typography, Link } from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{
      backgroundColor: '#0D0D0D',
      color: '#fff',
      py: 4,
      textAlign: 'center',
      mt: 8
    }}>
      <Typography variant="body1">
        © {new Date().getFullYear()} BrandingMax Co. — Todos os direitos reservados.
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Desenvolvido por <Link href="#" underline="hover" color="#F2A922">BrandingMax Co.</Link>
      </Typography>
    </Box>
  )
}

export default Footer
