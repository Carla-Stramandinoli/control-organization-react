import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Expenses from "./container/expensesContainer/expenses";
import ListShopping from "./container/listShoppingContainer/listShopping";
import Pending from "./container/pendingContainer/pending";
import MainContainer from "./container/mainContainer/mainContainer";
import Home from "./components/homeComponent/home";

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
        <Route path={"/"} element={<Home />} />
          <Route path={"/main"} element={<MainContainer />} />
          <Route path={"/compras"} element={<ListShopping />} />
          <Route path={"/gastos"} element={<Expenses />} />
          <Route path={"/pendientes"} element={<Pending />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
