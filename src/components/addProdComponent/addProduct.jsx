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
import React, { useEffect } from "react";
import Swal from "sweetalert2";
import FirebaseApp from '../../firebase/config';
import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore(FirebaseApp);

function AddProduct({ sendProdLoad ,productoEditar}) {

  const initialValue = {
    name: "",
    quantity: "",
    measure: "",
    category: "",
    id: 1
  }

  // variables de estado
  const [product, setProduct] = React.useState(initialValue);

  // funcion para capturar inputs
  const captureInputs = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });


  }

  useEffect(()=>{
    console.log(productoEditar)
    if (productoEditar.length !== 0){
      setProduct(productoEditar)
    }
  }, [productoEditar])

  const addProductTable = async (e) => {
    e.preventDefault();
    if (
      product.name === "" ||
      product.category === "" ||
      product.quantity === "" ||
      product.measure === ""
    ) {
      Swal.fire("Todos los campos deben estar completos!");
      return;
    }
    sendProdLoad(product);
    try {
      await addDoc(collection(db, "productosCompras"), {
        ...product
      })
    } catch (error) {
      console.log(error);
    }
    setProduct({ ...initialValue });
  }

  return (
    <Container>
      <CustomCard>
        <CardActionArea 
        component="a"
        >
          <CardContent onSubmit={addProductTable} sx={{ padding: "17px" }}>
            <Grid>
              <Grid container item xs={12} style={gridStyle}>
                <FormLabel>Producto</FormLabel>
                <Input
                  name="name"
                  placeholder="Producto"
                  type="text"
                  value={product.name}
                  onChange={captureInputs}
                />
                <FormLabel>Cantidad</FormLabel>
                <Input
                  name="quantity"
                  type="interger"
                  value={product.quantity}
                  onChange={captureInputs}
                />
              </Grid>
              <FormControl
                style={gridStyle}
                sx={{ minWidth: 225, marginTop: 1 }}
              >
                <FormLabel>Medida</FormLabel>
                <RadioGroup
                  name="measure"
                  style={gridStyle}
                  value={product.measure}
                  onChange={captureInputs}
                  row
                >
                  <FormControlLabel
                    value="kg"
                    control={<Radio style={{ color: "#9E768F" }} />}
                    label="Kg"
                  />
                  <FormControlLabel
                    value="grs"
                    control={<Radio style={{ color: "#9E768F" }} />}
                    label="Gr"
                  />
                  <FormControlLabel
                    value="paquete"
                    control={<Radio style={{ color: "#9E768F" }} />}
                    label="Paquete"
                  />
                  <FormControlLabel
                    value="unidad"
                    control={<Radio style={{ color: "#9E768F" }} />}
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
                    name="category"
                    value={product.category}
                    onChange={captureInputs}
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
    backgroundColor: "#AC8085",
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
