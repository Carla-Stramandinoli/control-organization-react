import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TableProd from './components/addProductComponent/tableProd';
import HomeContainer from './container/homeContainer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path={'/'} element={<HomeContainer />} />
        <Route path={'/table'} element={<TableProd />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
