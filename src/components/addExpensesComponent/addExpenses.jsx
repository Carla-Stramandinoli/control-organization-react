//modificar que se borre el id correcto
// modificar que cuando se agregue un producto se imprima a la primera vez
// en todas las tabs, y no cuando se cambie de tabs. 

import styled from "@emotion/styled";
import {
  Button,
  Card,
  Container,
  FormControl,
  FormLabel,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import Swal from "sweetalert2";

function AddExpenses({ sendExpenseLoad }) {
  const [expense, setExpense] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [months, setMonths] = React.useState("Enero");
  const [id, setId] = React.useState(1);

  const handleExpense = (e) => {
    setExpense(e.target.value);
  };

  const handleChangeMonths = (e) => {
    setMonths(e.target.value);
  };

  const handlePrice = (e) => {
    const inputValue = parseInt(e.target.value, 10);
    if (!isNaN(inputValue) && inputValue >= 0) {
      setPrice(inputValue);
    }
  };

  const addExpense = () => {
    if (
      expense === "" ||
      price === "" ||
      months === ""
    ) {
      Swal.fire("Todos los campos deben estar completos!");
      return;
    }
    const newExpense = {
      expense,
      price,
      months,
      id
    };
    sendExpenseLoad(newExpense);
    setExpense("");
    setPrice(0);
    setMonths("");
    if(id === 1 ){
      setId(id);
    }
    setId( id + 1);
  };
  return (
    <Container>
      <CustomCard>
        <Grid p={1}>
          <FormLabel>Descripcion del gasto:</FormLabel>
          <Input
            type="text"
            value={expense}
            onChange={handleExpense}
          />
          <FormLabel sx={{ top: "8px" }}>Precio: $</FormLabel>
          <Input
            type="number"
            value={price}
            onChange={handlePrice}
            sx={{ top: "8px" }}
          />
        </Grid>
        <Grid container item xs={12} sx={{ justifyContent: "center" }}>
                <FormControl sx={{ width: "40%", top: "10px" }} fullWidth>
                  <InputLabel>
                    Mes
                  </InputLabel>
                  <Select
                    value={months}
                    onChange={handleChangeMonths}
                    sx={{ marginTop: 1 }}
                  >
                    <MenuItem value={1}>Enero</MenuItem>
                    <MenuItem value={2}>Febrero</MenuItem>
                    <MenuItem value={3}>Marzo</MenuItem>
                    <MenuItem value={4}>Abril</MenuItem>
                    <MenuItem value={5}>Mayo</MenuItem>
                    <MenuItem value={6}>Junio</MenuItem>
                    <MenuItem value={7}>Julio</MenuItem>
                    <MenuItem value={8}>Agosto</MenuItem>
                    <MenuItem value={9}>Septiembre</MenuItem>
                    <MenuItem value={10}>Octubre</MenuItem>
                    <MenuItem value={11}>Noviembre</MenuItem>
                    <MenuItem value={12}>Diciembre</MenuItem>
                  </Select>
                </FormControl>
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
  maxWidth: "33%",
  marginTop: "2%",
  marginLeft: "30%",
  padding: "8px",
  textAlign: "center"
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
    backgroundColor: "#AC8085",
  },
});