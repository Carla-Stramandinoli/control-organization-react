import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ModalTableProd from './components/tableProdComponent/modalTableProd';
import TableProducts from './container/tabsContainer/tabsProducts';
import HomeContainer from './container/homeContainer/homeContainer';

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
