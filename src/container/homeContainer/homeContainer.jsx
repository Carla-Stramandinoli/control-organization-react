import { styled } from "@mui/material/styles";
import { Grid, Paper } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#AC8085",
  color: "white",
  fontSize: "20px",
  padding: theme.spacing(1),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "200%",
}));

function HomeContainer() {
  // var carloncha = 'te amo';

  return (
    <Container maxWidth="lg" sx={{ marginTop: "15%" }}>
      <h1>Aca hacer la pagina home </h1>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Link to={"/compras"} style={{ textDecoration: "none" }}>
            <Item>COMPRAS</Item>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link to={"/gastos"} style={{ textDecoration: "none" }}>
            <Item>GASTOS</Item>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link to={"/pendientes"} style={{ textDecoration: "none" }}>
            <Item>PENDIENTES</Item>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomeContainer;
