import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Drawer, AppBar as MuiAppBar, Toolbar, Typography, IconButton, List, ListItem, ListItemButton, ListItemText, CssBaseline } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion , useScroll } from "motion/react"

const drawerWidth = 280;

const AppBar = styled(MuiAppBar)(() => ({
  background: 'white', // الخلفية البيضاء اللي طلبتها
  boxShadow: '0px 2px 10px rgba(0,0,0,0.1)', // ضل خفيف عشان يفصل عن بقية الموقع
  borderBottom: '1px solid #e0e0e0',
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 2),
  ...theme.mixins.toolbar,
  justifyContent: 'space-between',
  background: 'white', // خلفية رأس المنيو بيضاء
  borderBottom: '1px solid #f0f0f0',
}));

export default function DrawerS() {
  const [open, setOpen] = React.useState(false);
  const {scrollYProgress} = useScroll()

  const navItems = [
    { name: 'Home', id: '#' },
    { name: 'Projects', id: '#Projects' },
    { name: 'About', id: '#About' },
    { name: 'Skills', id: '#skills' },
    { name: 'Contact', id: '#Contact' },
  ];

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const handleNavClick = (id: string) => {
    handleDrawerClose();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='flex w-fit'>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* غيرت النص لـ black عشان يبان على الخلفية البيضاء */}
          <Typography variant="h6" noWrap component="div" className="font-seif tracking-widest text-black">
            SEIF <span className="text-gray-400">VENOM</span>
          </Typography>
          
          {/* غيرت لون الأيقونة لـ black */}
          <IconButton
            sx={{ color: 'black', display: open ? 'none' : 'flex' }}
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          
        </Toolbar>
        <motion.span style={{ scaleX: scrollYProgress, originX: 0 }} className="border-2 w-full border-black relative top-0.5 "></motion.span>

      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            backgroundColor: '#0a0a0a', // المنيو نفسها فضلت سودة عشان الـ Venom vibe
            color: 'white',
          },
        }}
        variant="temporary"
        anchor="right"
        open={open}
        onClose={handleDrawerClose}
      >
        <DrawerHeader>
          <Typography className="font-seif text-sm text-black opacity-70">Seif Venom</Typography>
          <IconButton onClick={handleDrawerClose} sx={{ color: 'black' }}>
            <CloseIcon />
          </IconButton>
        </DrawerHeader>

        <List sx={{ mt: 4 }}>
          {navItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton onClick={() => handleNavClick(item.id)} sx={{ py: 2 }}>
                <ListItemText 
                  primary={item.name} 
                  primaryTypographyProps={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    className: 'font-seif hover:text-gray-400  transition-colors uppercase tracking-widest'
                  }} 
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}