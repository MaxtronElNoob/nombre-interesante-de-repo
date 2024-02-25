import * as React from "react";
import { Container, Typography,Paper,Box} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./footer.css";

export default function Footer() {
return (
  <>
    <Paper className="footer" component="footer" square variant="outlined">
      <Container maxWidth="lg" align="center">
        <img priority src="images/logo.png" alt="Logo" className="logof"/>
        <Box className="contacto">
            <Typography id="contacto" variant="h6" color="initial">Contacto:</Typography>
            <div className="links">
                <a href="mailto:vinos@hopevalley.cl"><EmailIcon/></a>
                <a href="tel:+56998217801"><PhoneIcon/></a>
                <a href="https://www.instagram.com/vinoshopevalley/"><InstagramIcon/></a>
            </div>
        </Box>
        <Box sx={{flexGrow: 1,justifyContent: "center",display: "flex",mb: 2}}>
          <Typography variant="caption" color="initial">Viña Hope Valley © 2020 - 2024 Todos los derechos reservados</Typography>
        </Box>
      </Container>
    </Paper>
  </>
)}