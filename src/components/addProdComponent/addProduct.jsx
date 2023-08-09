import { Box, Button, Card, CardActionArea, CardContent, Container, FormControl, FormControlLabel, FormLabel, Input, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@mui/material';
import React from 'react'
import Swal from 'sweetalert2';

function AddProduct({ sendProdLoad }) {
    const [product, setProduct] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [quantity, setQuantity] = React.useState('');
    const [measure, setMeasure] = React.useState('kg');
    const [id, setId] = React.useState(0)

    const handleChangeProd = (e) => {
        setProduct(e.target.value);
    }

    const handleChangeCat = (e) => {
        setCategory(e.target.value);
    }

    const handleChangeQuantity = (e) => {
        setQuantity(e.target.value);
    }

    const handleChangeMeasure = (e) => {
        setMeasure(e.target.value);
    }

    const addProductTable = () => {
        if (product === '' || category === '') {
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
        setQuantity('');
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
                            <Input placeholder='Cantidad' type="number" value={quantity} onChange={handleChangeQuantity} />
                            <FormControl sx={{ minWidth: 231, marginTop: 1 }}>
                                <FormLabel id="demo-row-radio-buttons-group-label">Medida</FormLabel>
                                <RadioGroup value={measure} onChange={handleChangeMeasure} row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                    <FormControlLabel value="kg" control={<Radio color="success" />} label="Kg" />
                                    <FormControlLabel value="gr" control={<Radio color="success" />} label="Gr" />
                                    <FormControlLabel value="unidad" control={<Radio color="success" />} label="Unidad" />
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

