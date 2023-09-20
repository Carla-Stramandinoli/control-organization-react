import styled from "@emotion/styled";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import React from "react";
import Swal from "sweetalert2";

function AddProduct({ sendProdLoad }) {
  const [product, setProduct] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [quantity, setQuantity] = React.useState(0);
  const [measure, setMeasure] = React.useState("kg");
  const [id, setId] = React.useState(0);

  const handleChangeProd = (e) => {
    setProduct(e.target.value);
  };

  const handleChangeCat = (e) => {
    setCategory(e.target.value);
  };

  const handleChangeQuantity = (e) => {
    const inputValue = parseInt(e.target.value, 10);
    if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 1000) {
      setQuantity(inputValue);
    }
  };

  const handleChangeMeasure = (e) => {
    setMeasure(e.target.value);
  };

  const addProductTable = () => {
    if (
      product === "" ||
      category === "" ||
      quantity === "" ||
      measure === ""
    ) {
      console.log(product);
      Swal.fire("Todos los campos deben estar completos!");
      return;
    }
    const newProduct = {
      id,
      product,
      quantity,
      measure,
      category,
    };
    sendProdLoad(newProduct);
    setProduct("");
    setCategory("");
    setQuantity(0);
    setMeasure("kg");
    setId(id + 1);
  };

  return (
    <Container>
      <CustomCard>
        <CardActionArea>
          <CardContent sx={{ padding: "17px" }}>
            <Grid>
              <Grid container item xs={12} style={gridStyle}>
                <FormLabel>Producto</FormLabel>
                <Input
                  placeholder="Producto"
                  type="text"
                  value={product}
                  onChange={handleChangeProd}
                />
                <FormLabel>Cantidad</FormLabel>
                <Input
                  type="interger"
                  value={quantity}
                  onChange={handleChangeQuantity}
                />
              </Grid>
              <FormControl
                style={gridStyle}
                sx={{ minWidth: 225, marginTop: 1 }}
              >
                <FormLabel>Medida</FormLabel>
                <RadioGroup
                  style={gridStyle}
                  value={measure}
                  onChange={handleChangeMeasure}
                  row
                >
                  <FormControlLabel
                    value="kg"
                    control={<Radio style={{color:"#9E768F"}} />}
                    label="Kg"
                  />
                  <FormControlLabel
                    value="grs"
                    control={<Radio style={{color:"#9E768F"}} />}
                    label="Grs"
                  />
                  <FormControlLabel
                    value="paquete"
                    control={<Radio style={{color:"#9E768F"}} />}
                    label="Paquete"
                  />
                  <FormControlLabel
                    value="unidad"
                    control={<Radio style={{color:"#9E768F"}} />}
                    label="Unidad"
                  />
                </RadioGroup>
              </FormControl>
              <Grid container item xs={12} style={gridStyle}>
                <FormControl sx={{ width: "64%" }} fullWidth>
                  <InputLabel sx={{ top: "8px" }} id="demo-simple-select-label">
                    Categoria
                  </InputLabel>
                  <Select
                    value={category}
                    onChange={handleChangeCat}
                    sx={{ marginTop: 1 }}
                  >
                    <MenuItem value={1}>Verduleria</MenuItem>
                    <MenuItem value={2}>Supermercado</MenuItem>
                    <MenuItem value={3}>Otros</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid container item xs={12} style={gridStyle}>
                <CustomButtonAdd onClick={addProductTable}>
                  Agregar producto
                </CustomButtonAdd>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </CustomCard>
    </Container>
  );
}

export default AddProduct;

const CustomButtonAdd = styled(Button)({
  backgroundColor: "#AC8085",
  color: "white",
  padding: "10px",
  margin: "6px",
  border: "1px solid black",
  borderRadius: "8px",
  fontSize: "14px",
  "&:hover": {
    backgroundColor: "#B98A7A",
  }
});

const CustomCard = styled(Card)({
  margin: "6px",
  border: "2px solid rosybrown",
  borderRadius: "8px",
  maxWidth: "23%",
  marginTop: "2%",
  marginLeft: "40%",
});

const gridStyle = {
  direction: "row",
  justifyContent: "center",
  alignItems: "center",
};
