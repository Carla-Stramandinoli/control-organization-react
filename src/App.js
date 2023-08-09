import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeContainer from './container/homeContainer/homeContainer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<HomeContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
