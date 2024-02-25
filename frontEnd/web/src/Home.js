import * as React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { Container, Typography,Grid, Button} from "@mui/material";
import Alert18 from './Alert'
import Footer from './footer'
import "./Home.css";

export default function Home() {
return (
  <>
      <ResponsiveAppBar/>
      <Alert18></Alert18>
      <img className="imgvina" src="images/viña2.jpg" alt="Viña" />
      <Container sx={{textAlign: "center", marginTop: "10px"}}>
        <Typography id="quien" variant="h2" gutterBottom>¿Quienes somos?</Typography>
        <Typography align="justify" sx={{margin: "20px"}}>
        Viña Hope Valley de Colchagua SpA, es una viña familiar, localizada en la Región del Libertador Bernardo O'Higgins (VI), Provincia de Colchagua, Comuna de Santa Cruz, en el corazón del valle vitivinícola chileno. Sus viñas centenarias, de tipo espaldera, producen uvas de la variedad Cabernet Sauvignon que han sido cosechadas manualmente.\n
        El nombre de la Viña “Valle de la Esperanza” (por su traducción en español) rescata la sana intención de los dueños de impedir que sean arrancadas las parras y darle una nueva oportunidad de vida y brindar todo su sabor y color a través de la elaboración de un vino de calidad. 
        </Typography>
        <Typography id="products" variant="h2" gutterBottom>Productos</Typography>
        <Typography sx={{marginTop: "20px"}} variant="h3" gutterBottom>Gran Reserva Cabernet Sauvignon Doña Yolanda</Typography>
        <Grid container spacing={2} columns={16}>
          <Grid xs={8}>
            <img src="images/yolanda.jpg" alt="vino" className="yolanda"/>
          </Grid>
          <Grid xs={8}>
            <Typography align="justify" sx={{margin: "20px"}}>
              Doña Yolanda, es un vino Gran Reserva Cabernet Sauvignon que hace honor a una Gran mujer Yolanda Santillana de Otárola, quien con temple y sabiduría enfrentó la vida y enseñó a sus hijos, esposo, nietos y a todos los que compartían con ella, el AMOR por la Vida, de manera profunda y espiritual. Esa intensidad y majestuosidad que derrochaba Yolanda la hemos querido rescatar en el aroma y sabor de este gran vino.
            </Typography>
            <Typography align="justify" sx={{margin: "20px"}}>
              Es un vino de un color rojo brillante e intenso. Presenta una nariz muy elegante y franca a la cepa Cabernet Sauvignon, con aromas a frutos rojos, cerezas y tabaco. En boca presenta un ataque sabroso, con muy buena acidez, cuerpo medio, redondo y persistente. Notas a frutos rojos frescos, finas hierbas, especias y pimientas. Su final de boca es carnoso y sedoso por ricos taninos.
            </Typography>
            <Typography align="justify" sx={{margin: "20px"}}>
              Se recomenda disfrutar este vino con carnes, quesos, pescados y especialmente en buena compañía.
            </Typography>
            <Button>Saber mas...</Button>
          </Grid>
        </Grid>
        <Typography sx={{marginTop: "20px"}} variant="h3" gutterBottom>Vino Reserva Carmenere</Typography>
        <Grid container spacing={2} columns={16}>
          <Grid xs={8}>
            <img src="images/Carmenere.jpg" alt="vino" className="yolanda"/>
          </Grid>
          <Grid xs={8}>
            <Typography align="justify" sx={{margin: "20px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.            </Typography>
            <Button>Saber mas...</Button>
          </Grid>
        </Grid>
        <Typography sx={{marginTop: "20px"}} variant="h3" gutterBottom>Vino Reserva 2020 Merlot</Typography>
        <Grid container spacing={2} columns={16}>
          <Grid xs={8}>
            <img src="images/Merlot.jpg" alt="vino" className="yolanda"/>
          </Grid>
          <Grid xs={8}>
            <Typography align="justify" sx={{margin: "20px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.            </Typography>
            <Button>Saber mas...</Button>
          </Grid>
        </Grid>
        <Typography sx={{marginTop: "20px"}} variant="h3" gutterBottom>Vino Reserva 2020 Merlot</Typography>
        <Grid container spacing={2} columns={16}>
          <Grid xs={8}>
            <img src="images/Layito.jpg" alt="vino" className="yolanda"/>
          </Grid>
          <Grid xs={8}>
            <Typography align="justify" sx={{margin: "20px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Button>Saber mas...</Button>
          </Grid>
        </Grid>
      </Container>
      <Footer/>
  </>
  )}