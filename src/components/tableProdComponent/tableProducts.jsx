import React from 'react'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function TableProducts({ category, products }) {
    const prodLeaked = products.filter((prod) => prod.category === category);

    console.log("Medida", products.measure);
    console.log("cantidad", products.quantity);

    return (
        <div>
            <Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">ID</TableCell>
                                <TableCell align="center">Producto</TableCell>
                                <TableCell align="center">Cantidad</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {prodLeaked.map((prod) => (
                                <TableRow key={prod.id} >
                                    <TableCell align="center">{prod.id}</TableCell>
                                    <TableCell align="center">{prod.product}</TableCell>
                                    <TableCell align="center">{prod.quantity + prod.measure}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </div>
    )
}

export default TableProducts;
