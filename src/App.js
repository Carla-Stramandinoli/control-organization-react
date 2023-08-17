import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeContainer from "./container/homeContainer/homeContainer";
import ListSuper from "./container/listSuperContainer/listSuper";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomeContainer />} />
          <Route path={"/compras"} element={<ListSuper />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
