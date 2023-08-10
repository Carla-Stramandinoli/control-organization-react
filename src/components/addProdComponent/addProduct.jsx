import styled from '@emotion/styled';
import {
    Box, Button, Card, CardActionArea, CardContent, Container, FormControl, FormControlLabel,
    FormLabel, Input, InputLabel, MenuItem, Radio, RadioGroup, Select
} from '@mui/material';
import React from 'react';
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
        setProduct('');
        setCategory('');
        setQuantity(0);
        setMeasure("kg")
        setId(id + 1);
    }

    return (
        <Container>
            <CustomCard >
                <CardActionArea>
                    <CardContent>
                        <Box sx={{ width: "80%" }}>
                            <Input placeholder='Producto' type="text" value={product} onChange={handleChangeProd} />
                            <FormLabel sx={{ margin: 1 }}>Cantidad</FormLabel>
                            <Input type="interger" value={quantity} onChange={handleChangeQuantity} />
                            <FormControl sx={{ minWidth: 240, marginTop: 1 }}>
                                <FormLabel id="demo-row-radio-buttons-group-label">Medida</FormLabel>
                                <RadioGroup value={measure} onChange={handleChangeMeasure} row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                    <FormControlLabel value="kg" control={<Radio color="success" />} label="Kg" />
                                    <FormControlLabel value="gr" control={<Radio color="success" />} label="Gr" />
                                    <FormControlLabel value="paquete" control={<Radio color="success" />} label="Paquete" />
                                </RadioGroup>
                            </FormControl>
                            <FormControl sx={{ width: "54%"}} fullWidth>
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
                            <CustomButtonAdd onClick={addProductTable}>Agregar producto</CustomButtonAdd>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </CustomCard>
        </Container>
    )
}

export default AddProduct;

const CustomButtonAdd = styled(Button)({
    backgroundColor: '#037171',
    color: 'white',
    padding: '10px',
    margin: '6px',
    border: '1px solid black',
    borderRadius: '8px',
    fontSize: '14px',
    '&:hover': {
        backgroundColor: '#54B6B6',
    },
});

const CustomCard = styled(Card)({
    padding: '2px',
    margin: '6px',
    border: '2px solid black',
    borderRadius: '8px',
    fontSize: '10px',
    maxWidth: '48%',
    marginTop: '7%',
    marginLeft: '26%',
});