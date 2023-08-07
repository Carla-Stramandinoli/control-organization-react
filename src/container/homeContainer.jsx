import { Button } from '@mui/base';
import React from 'react'
import AddProduct from '../components/addProdComponent/addProduct';
import ModalTableProd from '../components/addProdComponent/modalTableProd';
import TableProducts from '../components/tableProdComponent/tableProducts';


function HomeContainer() {
const [data, setData] = React.useState([]);

const handleSendData = (newProduct) => {
    setData([...data, newProduct]);
}
    return (
        <div>
            <AddProduct sendProdLoad={handleSendData}/>
            <TableProducts />
            <Button>
                <ModalTableProd data={data}/>
            </Button>
        </div>
    )
}

export default HomeContainer;