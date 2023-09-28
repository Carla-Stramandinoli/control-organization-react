import React from "react";
import TabsProducts from "../tabsContainer/tabsProducts";
import AddProduct from "../../components/addProdComponent/addProduct";
import NavBar from "../../components/navBarComponent/navBar";
import TableProducts from "../../components/tableProdComponent/tableProducts";

const categoriesShopping = [
  { id: "all", title: "todos", key: 0 },
  { id: "greengrocery", title: "verduleria", key: 1 },
  { id: "supermarket", title: "supermercado", key: 2 },
  { id: "others", title: "otros", key: 3 },
];

function ListShopping() {
  const [products, setProducts] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState(categoriesShopping);


  const handleSendData = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const deleteElement = (id) => {
    const deleteElement = products.filter((prod) => prod.id !== id);
    setProducts(deleteElement);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    console.log(category)
  };

  return (
    <div>
      <NavBar />
      <AddProduct sendProdLoad={handleSendData} />
      <TabsProducts
        categories={categoriesShopping}
        onCategoryChange={handleCategoryChange}
      />
      <TableProducts
        category={selectedCategory}
        products={products}
        deleteElement={deleteElement}
      />
    </div>
  );
}

export default ListShopping;
