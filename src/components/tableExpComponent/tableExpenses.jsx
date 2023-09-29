import React from 'react'
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

function TableExpenses({ months, expenses, deleteElement }) {
  const prodFilter = expenses.filter((prod) => prod.months === months.key);

  return (
    <Container>
      <Grid container style={styleGrid}>
        <TableContainer component={Paper} sx={{ width: "70%" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#B98A7A' }}>
                <TableCell align="center" style={styleTiTable}>Descripcion del gasto</TableCell>
                <TableCell align="center" style={styleTiTable}>Precio</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {prodFilter.map((prod, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{prod.expense}</TableCell>
                  <TableCell align="center">${prod.price}</TableCell>
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

export default TableExpenses;

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