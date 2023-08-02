import { Button } from '@mui/base';
import React from 'react'
import AddProduct from '../components/addProductComponent/addProduct';
import TableProd from '../components/addProductComponent/tableProd';

function HomeContainer() {
const [data, setData] = React.useState([]);

const onSendData = (newProdData) => {
    setData([...data, newProdData])
}
    return (
        <div>
            <AddProduct onSendData={onSendData}/>
            <Button>
                <TableProd data={data}/>
            </Button>
        </div>
    )
}

export default HomeContainer;