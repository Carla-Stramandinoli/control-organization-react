import React from 'react'
import AddProduct from '../../components/addProdComponent/addProduct';
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
        </div>
    )
}

export default HomeContainer;