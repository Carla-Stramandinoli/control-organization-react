import { Box, Button, Card, CardActionArea, CardContent, Container, FormControl, FormControlLabel, FormLabel, Input, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material';
import React from 'react'
import Swal from 'sweetalert2';

function AddProduct({ sendProdLoad }) {
    const [product, setProduct] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [quantity, setQuantity] = React.useState(0);
    const [measure, setMeasure] = React.useState('kg');
    const [id, setId] = React.useState(0)

    const handleChangeProd = (e) => {
        setProduct(e.target.value);
    }

    const handleChangeCat = (e) => {
        setCategory(e.target.value);
    }

    const handleChangeQuantity = (e) => {
        const inputValue = parseInt(e.target.value, 10); 
        if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 1000) {
            setQuantity(inputValue);
        }
    }

    const handleChangeMeasure = (e) => {
        setMeasure(e.target.value);
    }

    const addProductTable = () => {
        if (product === '' || category === '' || quantity === '' || measure === '') {
            console.log(product);
            Swal.fire(
                'Todos los campos deben estar completos!'
            )
            return;
        }
        const newProduct = {
            id,
            product,
            quantity,
            measure,
            category,
        };
        sendProdLoad(newProduct);
        console.log(newProduct);
        setProduct('');
        setCategory('');
        setQuantity(0);
        setMeasure("kg")
        setId(id + 1);
    }

    return (
        <Container>
            <Card sx={{ width: '70%', maxWidth: '24%', padding: '2%', marginTop: '7%', marginLeft: '35%' }}>
                <CardActionArea>
                    <CardContent>
                        <Box sx={{ width: "80%" }}>
                            <Input placeholder='Producto' type="text" value={product} onChange={handleChangeProd} />
                            <FormLabel sx={{ marginTop: 1 }}>Cantidad</FormLabel>
                            <Input type="interger" value={quantity} onChange={handleChangeQuantity} />
                            <FormControl sx={{ minWidth: 240, marginTop: 1 }}>
                                <FormLabel id="demo-row-radio-buttons-group-label">Medida</FormLabel>
                                <RadioGroup value={measure} onChange={handleChangeMeasure} row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                    <FormControlLabel value="kg" control={<Radio color="success" />} label="Kg" />
                                    <FormControlLabel value="gr" control={<Radio color="success" />} label="Gr" />
                                    <FormControlLabel value="paquete" control={<Radio color="success" />} label="Paquete" />
                                </RadioGroup>
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel sx={{ top: "8px" }} id="demo-simple-select-label">Categoria</InputLabel>
                                <Select
                                    value={category}
                                    onChange={handleChangeCat}
                                    sx={{ marginTop: 1 }}
                                >
                                    <MenuItem value={1}>Verduleria</MenuItem>
                                    <MenuItem value={2}>Supermercado</MenuItem>
                                    <MenuItem value={3}>Otros</MenuItem>
                                </Select>
                            </FormControl>
                            <Button onClick={addProductTable}>Agregar producto</Button>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Container>
    )
}

export default AddProduct;

