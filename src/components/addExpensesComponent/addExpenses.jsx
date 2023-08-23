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
import Swal from "sweetalert2";

function AddExpenses() {
  const [expense, setExpense] = React.useState("");
  const [price, setPrice] = React.useState(0);

  const handleExpense = (e) => {
    setExpense(e.target.value);
  };

  const handlePrice = (e) => {
    const inputValue = parseInt(e.target.value, 10);
    if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 1000) {
      setPrice(inputValue);
    }
  };

  const addExpense = () => {
    if (
      expense === "" ||
      price === ""
    ) {
      Swal.fire("Todos los campos deben estar completos!");
      return;
    }
    const newProduct = {
      expense,
      price,
    };
    // sendProdLoad(newProduct);
    setExpense("");
    setPrice(0);
    console.log(newProduct);
  };
  return (
    <Container>
      <CustomCard>
        <Grid p={1} >
          <FormLabel>Descripcion del gasto:</FormLabel>
          <Input
            type="text"
            value={expense}
            onChange={handleExpense}
          />
          <FormLabel>Precio:</FormLabel>
          <Input
            type="number"
            value={price}
            onChange={handlePrice}
          />
        </Grid>

        <Grid container item xs={12} sx={{ justifyContent: "center" }} p={1}>
          <CustomButtonAdd onClick={addExpense}>Agregar</CustomButtonAdd>
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
  padding: "8px",
});

const CustomButtonAdd = styled(Button)({
  backgroundColor: "#AC8085",
  color: "white",
  padding: "10px",
  margin: "6px",
  border: "1px solid black",
  borderRadius: "8px",
  fontSize: "15px",
  "&:hover": {
    backgroundColor: "#B98A7A",
  },
});