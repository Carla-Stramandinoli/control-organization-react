import React from 'react';
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

    const deleteElement = (id) => {
        const deleteElement = products.filter((prod) => prod.id !== id);
        setProducts(deleteElement)
        console.log(deleteElement);
    }

    return (
        <div>
            <AddProduct sendProdLoad={handleSendData} />
            <TabsProducts categories={categories} products={products} deleteElement={deleteElement} />
        </div>
    )
}

export default HomeContainer;

