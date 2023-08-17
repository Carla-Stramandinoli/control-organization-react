import { styled } from "@mui/material/styles";
import { Grid, Paper } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "200%",
}));

function HomeContainer() {
  // var carloncha = 'te amo';

  return (
    <Container maxWidth="lg" sx={{ alignContent: "center" }}>
      <h1>Aca hacer la pagina home </h1>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>compras</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>gastos</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>pendientes</Item>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomeContainer;
