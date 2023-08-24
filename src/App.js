import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Expenses from "./container/expensesContainer/expenses";
import HomeContainer from "./container/homeContainer/homeContainer";
import ListShopping from "./container/listShoppingContainer/listShopping";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomeContainer />} />
          <Route path={"/compras"} element={<ListShopping />} />
          <Route path={"/gastos"} element={<Expenses />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
