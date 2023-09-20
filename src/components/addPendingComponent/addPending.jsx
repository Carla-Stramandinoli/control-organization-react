import styled from '@emotion/styled';
import { Card, CardActions, Button, CardContent, FormLabel, Input } from '@mui/material';
import React from 'react'
import Swal from 'sweetalert2';

function AddPending({ sendNewDescription }) {
  const [description, setDescription] = React.useState('');

  const handleDescription = (e) => {
    setDescription(e.target.value);
  }

  const addToList = () => {
    if (description === '') {
      Swal.fire("Todos los campos deben estar completos!");
      return;
    }
    const newPending = {
      description
    }
    sendNewDescription(newPending);
    setDescription('');
    console.log(newPending);
  }

  return (
    <div>
      <CustomCard>
        <CardContent>
          <FormLabel>Descripcion:</FormLabel>
          <Input sx={{ width: "75%" }} type='text' value={description} onChange={handleDescription}></Input>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <CustomButtonAdd size="small" onClick={addToList}>Agregar</CustomButtonAdd>
        </CardActions>
      </CustomCard>
    </div>
  )
}

export default AddPending;

const CustomCard = styled(Card)({
  margin: "6px",
  border: "2px solid rosybrown",
  borderRadius: "8px",
  maxWidth: "40%",
  marginTop: "3%",
  marginLeft: "30%",
});


const CustomButtonAdd = styled(Button)({
  backgroundColor: "#AC8085",
  color: "white",
  padding: "10px",
  margin: "6px",
  border: "1px solid black",
  borderRadius: "8px",
  fontSize: "14px",
  "&:hover": {
    backgroundColor: "#AC8085",
  }
});