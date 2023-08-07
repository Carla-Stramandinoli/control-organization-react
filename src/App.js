import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ModalTableProd from './components/addProdComponent/modalTableProd';
import TableProducts from './components/tableProdComponent/tableProducts';
import HomeContainer from './container/homeContainer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path={'/'} element={<HomeContainer />} />
        <Route path={'/items/:itemId'} element={<TableProducts />} />
        <Route path={'/table'} element={<ModalTableProd />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
