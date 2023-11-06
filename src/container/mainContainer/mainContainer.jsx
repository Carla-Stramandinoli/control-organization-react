import { styled } from "@mui/material/styles";
import { Button, Grid, Paper } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import firebaseApp from "../../firebase/config";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(firebaseApp);

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

function MainContainer({ emailUser }) {
  // var carloncha = 'te amo';

  return (
    <Container maxWidth="lg" sx={{ marginTop: "17%" }}>

      <Grid container>
        <p>Bienvenido: {emailUser}</p>
        <CustomButton
          variant="contained"
          sx={{ mb: 2, ml: 97 }}
          onClick={() => signOut(auth)}
        >
          Cerrar sesion
        </CustomButton>
      </Grid>

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

export default MainContainer;


const CustomButton = styled(Button)({
  backgroundColor: "#628D97",
  color: "white",
  border: "1px solid #628D97",
  borderRadius: "8px",
  fontSize: "12px",
  "&:hover": {
    backgroundColor: "#628D97",
  }
});