import * as React from 'react';
import "./ResponsiveAppBar.css";
import {AppBar,Box,CssBaseline,Toolbar,Button} from '@mui/material';

const navItems = [['Quienes somos',"/#quien"],['Productos',"/#products"], ['Contacto',"/#contacto"]];

function DrawerAppBar() {
  return (
    <Box>
      <CssBaseline />
      <AppBar sx={{backgroundColor:'#722F37'}}>
        <Toolbar className='navbar'>
          <img src="images/logo.png" className="logo" alt="Viña Hope Valley"/>
          <Box sx={{display: { xs: 'none', sm: 'block'}}}>
            {navItems.map((item) => (<Button href={item[1]} key={item[0]} sx={{ color: '#fff' }}>{item[0]}</Button>))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 2 }}><Toolbar/></Box>
    </Box>
  );
}
export default DrawerAppBar;