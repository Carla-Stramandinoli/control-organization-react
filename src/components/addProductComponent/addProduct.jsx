import { Box, Button, Card, CardActionArea, CardContent, Container, Input } from '@mui/material';
import React from 'react'
import TableProd from './tableProd';

function AddProduct() {
    const [newProduct, setNewProduct] = React.useState([]);

    const addProduct = () => {
        const newProdLoad = [...newProduct];
        console.log(newProdLoad);
        console.log(newProduct);
        setNewProduct([]);
    }

    return (
        <Container>
            <Card sx={{ maxWidth: '30%', padding: '2%', marginTop: '15%', marginLeft: '31%' }}>
                <CardActionArea>
                    <CardContent>
                        <Box sx={{ width: "100%" }}>
                            <Input type="text" value={newProduct} onChange={(event) => setNewProduct(event.target.value)} />
                            <Button onClick={addProduct}>Agregar producto</Button>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
                <Button>
                        <TableProd />
                </Button>
        </Container>
    )
}

export default AddProduct;

