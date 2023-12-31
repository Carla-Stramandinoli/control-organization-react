import React from "react"
import {
  Button,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"

function TableProducts({ category, products, deleteElement }) {
  const prodFilter =
  category.key === 0
    ? products
    : products.filter((prod) => prod.category === category.key);
    
  return (
    <Container>
      <Grid container style={styleGrid}>
        <TableContainer component={Paper} sx={{ width: "70%" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow sx={{backgroundColor: '#B98A7A'}}>
                <TableCell align="center" style={styleTiTable}>Producto</TableCell>
                <TableCell align="center" style={styleTiTable}>Cantidad</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {category === 0
                ? products.map((prod) => (
                    <TableRow key={prod.id}>
                      <TableCell align="center">{prod.product}</TableCell>
                      {prod.quantity <= 1 ? (
                        <TableCell align="center">
                          {prod.quantity + " " + prod.measure}
                        </TableCell>
                      ) : (
                        <TableCell align="center">
                          {prod.quantity + " " + prod.measure + "s"}
                        </TableCell>
                      )}
                      <TableCell align="center">
                        <Button
                          onClick={() => deleteElement(prod.id)}
                          sx={{ color: "black" }}
                        >
                          <DeleteOutlineIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                : prodFilter.map((prod) => (
                    <TableRow key={prod.id}>
                      <TableCell align="center">{prod.product}</TableCell>
                      {prod.quantity <= 1 ? (
                        <TableCell align="center">
                          {prod.quantity + " " + prod.measure}
                        </TableCell>
                      ) : (
                        <TableCell align="center">
                          {prod.quantity + " " + prod.measure + "s"}
                        </TableCell>
                      )}
                      <TableCell align="center">
                        <Button
                          onClick={() => deleteElement(prod.id)}
                          sx={{ color: "black" }}
                        >
                          <DeleteOutlineIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Container>
  );
}

export default TableProducts;

const styleGrid = {
  direction: "row",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: 20,
} 

const styleTiTable = {
  color: 'white',
  fontSize: '20px'
}