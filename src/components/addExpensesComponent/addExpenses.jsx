import styled from "@emotion/styled";
import {
  Button,
  Card,
  Container,
  FormLabel,
  Grid,
  Input,
} from "@mui/material";
import React from "react";

function AddExpenses() {
  return (
    <Container>
      <CustomCard>
        <Grid p={1} >
          <FormLabel>Descripcion del gasto:</FormLabel>
          <Input
            type="text"
          />
          <FormLabel>Precio:</FormLabel>
          <Input
            type="number"
          />
        </Grid>

        <Grid container item xs={12} sx={{ justifyContent: "center" }} p={1}>
          <CustomButtonAdd>Agregar</CustomButtonAdd>
        </Grid>
      </CustomCard>
    </Container>
  );
}

export default AddExpenses;

const CustomCard = styled(Card)({
  border: "2px solid rosybrown",
  borderRadius: "8px",
  maxWidth: "50%",
  marginTop: "2%",
  marginLeft: "22%",
  padding: "8px"
});

const CustomButtonAdd = styled(Button)({
  backgroundColor: "#AC8085",
  color: "white",
  padding: "10px",
  margin: "6px",
  border: "1px solid black",
  borderRadius: "8px",
  fontSize: "15px",
});