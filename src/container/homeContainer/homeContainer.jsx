import React from 'react'
import AddProduct from '../../components/addProdComponent/addProduct';
import TabsProducts from '../tabsContainer/tabsProducts';

const categories = 
[
{ id: 'all', title: 'todos' }, 
{ id: 'greengrocery', title: 'verduleria' }, 
{ id: 'supermarket', title: 'supermercado' },
{ id: 'others', title: 'otros' }
]

function HomeContainer() {
    const [products, setProducts] = React.useState([]);

    const handleSendData = (newProduct) => {
        setProducts([...products, newProduct]);
    }

    return (
        <div>
            <AddProduct sendProdLoad={handleSendData} />
            <TabsProducts  categories={categories} products={products} />
        </div>
    )
}

export default HomeContainer;