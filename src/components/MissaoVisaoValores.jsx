import React from 'react'
import { Box, Container, Grid, Card, CardContent, Typography } from '@mui/material'

const MissaoVisaoValores = () => {
  return (
    <Box sx={{ py: 5, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} columns={{ xs: 4, sm: 12, md: 12 }}>
          {/* Card Missão */}
          <Grid size={{ xs: 4, sm: 12, md: 4 }}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Missão
                </Typography>
                <Typography variant="body1" color="text.secondary" whiteSpace="pre-line">
                  {`Nossa missão é potencializar negócios por meio de soluções inovadoras e conscientes, criando um impacto positivo no mundo. Acreditamos que a verdadeira transformação acontece quando as marcas se alinham ao seu propósito e aos valores do Ecossistema Universal Integrado Aquariano (EUIA).`}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card Visão */}
          <Grid size={{ xs: 4, sm: 12, md: 4 }}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Visão
                </Typography>
                <Typography variant="body1" color="text.secondary" whiteSpace="pre-line">
                  {`Ser referência global em soluções criativas e sustentáveis para marcas que desejam transformar o mundo através da colaboração, inovação e respeito ao meio ambiente. Queremos criar um legado de prosperidade compartilhada e bem-estar para a civilização humana.`}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card Valores */}
          <Grid size={{ xs: 4, sm: 12, md: 4 }}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Valores
                </Typography>
                <Typography variant="body1" color="text.secondary" whiteSpace="pre-line">
                  {`Inovação: Criamos soluções criativas para os desafios do mercado.\nTransparência: Atuamos com honestidade e clareza em todas as nossas interações.\nImpacto Social: Buscamos não apenas o sucesso das marcas, mas também o bem-estar coletivo.`}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default MissaoVisaoValores
