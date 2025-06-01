import React from 'react'
import { Box, Typography, Button, List, ListItem, ListItemText } from '@mui/material'

const CTA = () => {
  return (
    <Box sx={{
      backgroundColor: '#e6003c',
      color: '#fff',
      textAlign: 'center',
      borderRadius: 2,
      p: 5,
      mt: 1
    }}>
      <Typography variant="h4" gutterBottom>
        Faça Parte Dessa Transformação
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
        A BrandingMax Co. não é apenas uma agência de branding — somos uma força motriz de inovação e impacto positivo.
      </Typography>

      <List sx={{ display: 'inline-block', textAlign: 'left', mb: 2, px: 0 }}>
        {[
          "Transforme sua marca com propósito.",
          "Crie conexões estratégicas.",
          "Impulsione seu impacto positivo no mundo."
        ].map((text, i) => (
          <ListItem
            key={i}
            sx={{
              py: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              textAlign: 'center'
            }}
          >
            <Typography variant="h6" component="span" sx={{ mr: 1 }}>🔹</Typography>
            <ListItemText
              primary={text}
              sx={{ m: 0, '& .MuiTypography-root': { textAlign: 'center' } }}
            />
          </ListItem>
        ))}
      </List>

      <Box sx={{ mt: 1 }}>
        <Button variant="contained" sx={{ backgroundColor: '#0D0D0D', color: '#ffffff' }}>
          Solicitar Consultoria
        </Button>
      </Box>
    </Box>
  )
}

export default CTA
