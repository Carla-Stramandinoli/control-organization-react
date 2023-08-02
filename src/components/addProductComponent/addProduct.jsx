import { Box, Button, Card, CardActionArea, CardContent, Container, Input } from '@mui/material';
import React from 'react'


function AddProduct({onSendData}) {
    const [newProduct, setNewProduct] = React.useState([]);
    const [newCategory, setCategory] = React.useState([]);

    const handleChangeProd = (e) => {
        setNewProduct(e.target.value);
    }

    const handleChangeCat = (e) => {
        setCategory(e.target.value);
    }

    const addProductTable = () => {
        const newProd = {
            id: onSendData.length + 1,
            newProduct,
            newCategory
        }
        onSendData(newProd);
        console.log(newProduct);
        console.log(newCategory);
        setNewProduct([]);
        setCategory([]);

    }

    return (
        <Container>
            <Card sx={{ maxWidth: '30%', padding: '2%', marginTop: '15%', marginLeft: '31%' }}>
                <CardActionArea>
                    <CardContent>
                        <Box sx={{ width: "100%" }}>
                            <Input placeholder='producto' type="text" value={newProduct} onChange={handleChangeProd} />
                            <Input placeholder='categoria' type="text" value={newCategory} onChange={handleChangeCat} />
                            <Button onClick={addProductTable}>Agregar producto</Button>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        
        </Container>
    )
}

export default AddProduct;

