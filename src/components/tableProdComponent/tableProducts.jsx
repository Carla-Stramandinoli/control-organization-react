import React from 'react';
import {
    Button, Container, Grid, Paper, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function TableProducts({ category, products, deleteElement }) {
    const prodFilter = products.filter((prod) => prod.category === category);

    return (
        <Container>
            <Grid container style={styleGrid}>
                <TableContainer component={Paper} sx={{ width: "70%" }}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Producto</TableCell>
                                <TableCell align="center">Cantidad</TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {category === 0 ?
                                products.map((prod) => (
                                    <TableRow key={prod.id} >
                                        <TableCell align="center">{prod.product}</TableCell>
                                        {prod.quantity <= 1 ?
                                            <TableCell align="center">{prod.quantity + " " + prod.measure}</TableCell>
                                            : <TableCell align="center">{prod.quantity + " " + prod.measure + "s"}</TableCell>
                                        }
                                        <TableCell align="center">
                                            <Button onClick={() => deleteElement(prod.id)} sx={{ color: 'black' }}>
                                                <DeleteOutlineIcon />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                )) :
                                prodFilter.map((prod) => (
                                    <TableRow key={prod.id} >
                                        <TableCell align="center">{prod.product}</TableCell>
                                        {prod.quantity <= 1 ?
                                            <TableCell align="center">{prod.quantity + " " + prod.measure}</TableCell>
                                            : <TableCell align="center">{prod.quantity + " " + prod.measure + "s"}</TableCell>
                                        }
                                        <TableCell align="center">
                                            <Button onClick={() => deleteElement(prod.id)} sx={{ color: 'black' }}>
                                                <DeleteOutlineIcon />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Container>
    )
}

export default TableProducts;

const styleGrid = {
    direction:"row",
    justifyContent:"center",
    alignItems:"center",
    paddingTop: 20,
}