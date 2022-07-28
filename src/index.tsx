
import ReactDOM from 'react-dom/client';
import './global.css';
import { BrowserRouter, Routes, Route,Navigate} from 'react-router-dom';
import Home from './pages/home/Home';
import Adicionar from './pages/Adicionar/Adicionar';
import Filtro from './pages/Filtro/Filtro';
import Editar from './pages/Editar/Editar';
import { CartProvider } from './contexts/CartContext';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import {AuthProvider } from './contexts/AuthContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <CartProvider>
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path='/adicionar' element={<Adicionar/>}/>
        <Route path='/filtro' element={<Filtro/>}/>
        <Route path='/editar/:id' element={<Editar/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </AuthProvider>  
    </BrowserRouter>
  </CartProvider>

);

