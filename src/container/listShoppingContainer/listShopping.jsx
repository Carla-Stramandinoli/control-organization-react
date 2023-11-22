// modificar que cuando se agregue un producto se imprima a la primera vez
// en todas las tabs, y no cuando se cambie de tabs. 


import React, { useEffect } from "react";
import TabsProducts from "../tabsContainer/tabsProducts";
import AddProduct from "../../components/addProdComponent/addProduct";
import NavBar from "../../components/navBarComponent/navBar";
import TableProducts from "../../components/tableProdComponent/tableProducts";
import FirebaseApp from '../../firebase/config';
import { getFirestore, collection, getDocs, doc, deleteDoc, getDoc, setDoc } from "firebase/firestore";

const db = getFirestore(FirebaseApp);


const all = { id: "all", title: "todos", key: 0 };

const categoriesShopping = [
 all,
  { id: "greengrocery", title: "verduleria", key: 1 },
  { id: "supermarket", title: "supermercado", key: 2 },
  { id: "others", title: "otros", key: 3 },
];

function ListShopping() {
  const [products, setProducts] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState(  all);

  const [listProducts, setListProducts] = React.useState([]);

  const handleSendData = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const deleteElement = (id) => {
    const updatedProducts = products.filter((prod) => prod.id !== id);
    console.log(id);
    setProducts(updatedProducts);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // funcion para renderizar la lista de productos
  useEffect(() => {
    const getListProduct = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "productosCompras"))
        const docs = [];
        querySnapshot.forEach(function(doc){
          return   docs.push(
            { ...doc.data(), id: doc.id }
            )
        })
        console.log(docs);
        setListProducts(docs);
      } catch (error) {
        console.log("error", error);
      }
    }
    getListProduct();
  }, [])

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
        listProducts={listProducts}
        deleteElement={deleteElement}
      />
    </div>
  );
}

export default ListShopping;
