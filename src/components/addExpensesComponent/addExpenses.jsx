import styled from "@emotion/styled";
import {
  Card,
  Container,
  FormLabel,
  Input,
} from "@mui/material";
import React from "react";

function AddExpenses() {
  return (
    <Container>
      <CustomCard>
        <FormLabel>Descripcion del gasto:</FormLabel>
        <Input
          type="text"
        />
        <FormLabel>Precio:</FormLabel>
        <Input
          type="interger"
        />
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