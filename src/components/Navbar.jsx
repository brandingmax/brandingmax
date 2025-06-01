import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import logo from '/img/logo.png' // ajuste o caminho conforme seu projeto

const menuItems = [
  'A BrandingMax',
  'Conhecimento',
  'Treinamento',
  'Networking',
  'Consultoria'
]

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open)
  }

  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#0D0D0D' }} elevation={0}>
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          px: 2,
          maxWidth: 'lg',
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="BrandingMax Co. Logo"
          sx={{
            height: 26,
            width: 'auto',
            flexShrink: 0,
          }}
        />

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              {drawerList}
            </Drawer>
          </>
        ) : (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1, justifyContent: 'center' }}>
              {menuItems.map((item) => (
                <Button
                  key={item}
                  color="inherit"
                  sx={{ textTransform: 'none', mx: 1 }}
                >
                  {item}
                </Button>
              ))}
            </Box>
            <Button
              variant="contained"
              startIcon={<WhatsAppIcon />}
              href="https://wa.me/5511950604767"
              target="_blank"
              sx={{
                backgroundColor: '#25D366',
                ml: 2,
                '&:hover': {
                  backgroundColor: '#1DA851'
                }
              }}
            >
              WhatsApp
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
