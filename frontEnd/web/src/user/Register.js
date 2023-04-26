import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Card, Grid } from "@mui/material";
import ResponsiveAppBar from "../ResponsiveAppBar";

export default function Register() {
  // It will be very useful to create a function that create a new user in the database and the redirect to the login page
  return (
    <>
    <ResponsiveAppBar/>
    Pagina de Register
    </>
  )
}
