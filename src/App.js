// Hello world
// ddwfdwf

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./app/HomePage"
import Login from "./app/Login";
import Forgot from "./app/Login/forgot";
import Register from "./app/Login/Register";
import Cart from "./app/Cart/cart";
import SideCart from "./app/Cart/SideCart";

function App() {
  return (
    <div className="App">
      {/* This is comment */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="Login" element={<Login/>}/>  
          <Route path="Forgot" element={<Forgot/>}/>
          <Route path="Register" element={<Register />}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/SideCart" element={<SideCart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
