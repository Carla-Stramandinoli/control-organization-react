import React from 'react';
import {
    Box, Button, Paper, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function TableProducts({ category, products, deleteElement }) {
    const prodFilter = products.filter((prod) => prod.category === category);

    return (
        <div>
            <Box>
                <TableContainer component={Paper} sx={{ alignItems: "center", width: "50%" }}>
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
            </Box>
        </div>
    )
}

export default TableProducts;
