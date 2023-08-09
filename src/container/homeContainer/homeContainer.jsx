import { Button } from '@mui/base';
import React from 'react'
import AddProduct from '../../components/addProdComponent/addProduct';
import ModalTableProd from '../../components/tableProdComponent/modalTableProd';
import TableProducts from '../../components/tableProdComponent/tableProducts';


function HomeContainer() {
const [data, setData] = React.useState([]);

const handleSendData = (newProduct) => {
    setData([...data, newProduct]);
}
    return (
        <div>
            <AddProduct sendProdLoad={handleSendData}/>
            <TableProducts data={data}/>
            <Button>
                <ModalTableProd data={data}/>
            </Button>
        </div>
    )
}

export default HomeContainer;