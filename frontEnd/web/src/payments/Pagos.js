import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Card, Grid } from "@mui/material";
import ResponsiveAppBar from "../ResponsiveAppBar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//import pagos from './pagos.json';

export default function Pagos() {
    const [pagos, setPagos] = useState(null);

    const [seller, setSeller] = useState("");
    const [buyer, setBuyer] = useState("");
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");


    const axios = require('axios');
    useEffect(() => {
        axios.get('http://localhost:4000/payments')
        .then(function (response) {
            const data = response.data;
            if (!pagos) {
                setPagos(data);
            }}).catch(function (error) {
                console.log(error);
            });
    }, [pagos]);

    const addPago = (e) => {
        e.preventDefault();
        const data = {
            seller_id: seller,
            buyer_id: buyer,
            amount: amount,
            description: description
        }
        axios.post('http://localhost:4000/payments', data)
        .then(function (response) {
            window.location.reload();
        }).catch(function (error) {
            console.log(error);
        }
        );
        
    }

 // It will be very useful to create a function that sets the user in the sessionStorage
 return  pagos  && pagos.payments ? (
  <>
  <ResponsiveAppBar/>
  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Seller</TableCell>
            <TableCell align="right">Buyer</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pagos.payments.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.seller}</TableCell>
              <TableCell align="right">{row.buyer}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
            </TableRow>
          ))}
          
        </TableBody>
      </Table>
    </TableContainer>
    <Card>
        <form onSubmit={addPago}>
            <Grid 
            container
            alignItems="center"
            justifyContent="center"
            spacing={2}
            >
                <Grid item xs={1} justify='center'>
                    <TextField
                        fullWidth
                        label="Seller"
                        name="seller"
                        variant="outlined"
                        value={seller}
                        onChange={(e) => setSeller(e.target.value)}
                    />
                    </Grid>
                    <Grid item xs={1} justify='center'>
                    <TextField
                        fullWidth
                        label="Buyer"
                        name="buyer"
                        variant="outlined"
                        value={buyer}
                        onChange={(e) => setBuyer(e.target.value)}
                    />
                     </Grid>
                    <Grid item xs={2} justify='center'>
                    <TextField
                        fullWidth
                        label="Amount"
                        name="Amount"
                        variant="outlined"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    </Grid>
                    <Grid item xs={4} justify='center'>
                    <TextField
                        fullWidth
                        label="Description"
                        name="description"
                        variant="outlined"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    </Grid>
                    <Grid item xs={4} justify='center'>
                   <Button type="submit" variant="contained" color="primary">
                        Add Pago
                    </Button>
                    </Grid>


        </Grid>
        </form>
    </Card>
  </>
) : (<>Cargando</>)
}
