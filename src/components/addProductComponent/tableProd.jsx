import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function TableProd({ data }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>ver lista</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">ID</TableCell>
                                <TableCell align="center">Producto</TableCell>
                                <TableCell align="center">Categoria</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((prod) => (
                                <TableRow key={prod.name}>
                                    <TableCell align="center">{prod.id}</TableCell>
                                    <TableCell align="center">{prod.product}</TableCell>
                                    {prod.category === 'verduleria'
                                        ? <TableCell style={{ backgroundColor: 'green', color: 'white' }} align="center">{prod.category}</TableCell>
                                        : prod.category === 'supermercado'
                                            ? <TableCell style={{ backgroundColor: 'red', color: 'white' }} align="center">{prod.category}</TableCell>
                                            : <TableCell align="center">{prod.category}</TableCell>
                                    }
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </Modal>
        </div >
    )
}

export default TableProd;