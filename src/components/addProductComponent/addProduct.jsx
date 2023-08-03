import { Box, Button, Card, CardActionArea, CardContent, Container, Input } from '@mui/material';
import React from 'react'


function AddProduct({ sendProdLoad }) {
    const [product, setProduct] = React.useState([]);
    const [category, setCategory] = React.useState([]);

    const handleChangeProd = (e) => {
        setProduct(e.target.value);
    }

    const handleChangeCat = (e) => {
        setCategory(e.target.value);
    }

    const addProductTable = () => {
        const newProduct = {
            product,
            category,
        };
        sendProdLoad(newProduct);
        console.log(newProduct);
        setProduct('');
        setCategory('');
    }

    return (
        <Container>
            <Card sx={{ maxWidth: '30%', padding: '2%', marginTop: '15%', marginLeft: '31%' }}>
                <CardActionArea>
                    <CardContent>
                        <Box sx={{ width: "100%" }}>
                            <Input placeholder='producto' type="text" value={product} onChange={handleChangeProd} />
                            <Input placeholder='categoria' type="text" value={category} onChange={handleChangeCat} />
                            <Button onClick={addProductTable}>Agregar producto</Button>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Container>
    )
}

export default AddProduct;

