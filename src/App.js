import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Button from './components/button'
import Home from "./views/home";
import Detalles from "./views/detalles";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="detalles">detalles</Link>
          </li>
        </ul>

        <Button />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalles/:userID" element={<Detalles />} />
        </Routes>

        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
