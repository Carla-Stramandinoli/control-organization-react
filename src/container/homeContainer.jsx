import { Button } from '@mui/base';
import React from 'react'
import AddProduct from '../components/addProductComponent/addProduct';
import TableProd from '../components/addProductComponent/tableProd';

function HomeContainer() {
const [data, setData] = React.useState([]);

const handleSendData = (newProduct) => {
    setData([...data, newProduct])
}
    return (
        <div>
            <AddProduct sendProdLoad={handleSendData}/>
            <Button>
                <TableProd data={data}/>
            </Button>
        </div>
    )
}

export default HomeContainer;