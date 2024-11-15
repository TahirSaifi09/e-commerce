
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./app/HomePage"
import Login from "./app/Login";
import Forgot from "./app/Login/forgot";
import Register from "./app/Login/Register";
import Cart from "./app/Cart/cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="Login" element={<Login/>}/>  
          <Route path="Forgot" element={<Forgot/>}/>
          <Route path="Register" element={<Register />}/>
          <Route path="/Cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
