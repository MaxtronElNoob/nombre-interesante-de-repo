import './App.css';



import Home from './Home';
import Pagos from './payments/Pagos';
import Login from './user/Login';
import Register from './user/Register';
import { Routes, Route, BrowserRouter } from 'react-router-dom';



function App() {

  return (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/pagos" element={<Pagos />} />
            </Routes>
          </BrowserRouter>
  );
}

export default App;
