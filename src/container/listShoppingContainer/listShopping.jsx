import React from "react";
import TabsProducts from "../tabsContainer/tabsProducts";
import AddProduct from "../../components/addProdComponent/addProduct";
import NavBar from "../../components/navBarComponent/navBar";

const categoriesShopping = [
  { id: "all", title: "todos" },
  { id: "greengrocery", title: "verduleria" },
  { id: "supermarket", title: "supermercado" },
  { id: "others", title: "otros" },
];

function ListShopping() {
  const [products, setProducts] = React.useState([]);

  const handleSendData = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const deleteElement = (id) => {
    const deleteElement = products.filter((prod) => prod.id !== id);
    setProducts(deleteElement);
  };
  
  return (
    <div>
      <NavBar />
      <AddProduct sendProdLoad={handleSendData} />
      <TabsProducts
        categories={categoriesShopping}
        itemList={products}
        deleteElement={deleteElement}
      />
    </div>
  );
}

export default ListShopping;
