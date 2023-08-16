import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBarComponent/navBar';
import HomeContainer from './container/homeContainer/homeContainer';
import ListSuper from './container/listSuperContainer/listSuper';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={'/'} element={<HomeContainer />} />
          <Route path={'/compras'} element={<ListSuper />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
