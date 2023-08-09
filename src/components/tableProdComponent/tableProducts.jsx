import React from 'react'
import { useParams } from 'react-router-dom';
import TabsProducts from '../../container/tabsContainer/tabsProducts';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const categories = [{ id: 'greengrocery', title: 'verduleria' }, { id: 'supermarket', title: 'supermercado' }, { id: 'others', title: 'otros' }]


function TableProducts({ data }) {
    const { itemId } = useParams;


    React.useEffect(() => {
        if (data.category === 'verduleria') {

        }
    }, [itemId])

    return (
        <div>
            <TabsProducts categories={categories} />
            <Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">ID</TableCell>
                                <TableCell align="center">Producto</TableCell>
                                <TableCell align="center">Categoria</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((prod) => (
                                <TableRow key={prod.id} >
                                    <TableCell align="center">{prod.id}</TableCell>
                                    <TableCell align="center">{prod.product}</TableCell>
                                    <TableCell align="center">{prod.category}</TableCell>
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
