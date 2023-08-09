import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TableProducts from './container/tabsContainer/tabsProducts';
import HomeContainer from './container/homeContainer/homeContainer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<HomeContainer />} />
          <Route path={'/items/:itemId'} element={<TableProducts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
