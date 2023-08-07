import { Box, Button, Card, CardActionArea, CardContent, Container, Input } from '@mui/material';
import React from 'react'
import Swal from 'sweetalert2';

function AddProduct({ sendProdLoad }) {
    const [product, setProduct] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [id, setId] = React.useState(0)

    const handleChangeProd = (e) => {
        setProduct(e.target.value);
    }

    const handleChangeCat = (e) => {
        setCategory(e.target.value);
    }

    const addProductTable = () => {
        if(product === '' || category === ''){
            console.log(product);
            Swal.fire(
                'Todos los campos deben estar completos!'
            )
            return;
        }
        const newProduct = {
            id,
            product,
            category,
        };
        sendProdLoad(newProduct);
        console.log(newProduct);
        setProduct('');
        setCategory('');
        setId(id + 1);
    }

    return (
        <Container>
            <Card sx={{width: '70%', maxWidth: '24%', padding: '2%', marginTop: '7%', marginLeft: '35%' }}>
                <CardActionArea>
                    <CardContent>
                        <Box sx={{ width: "80%" }}>
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

