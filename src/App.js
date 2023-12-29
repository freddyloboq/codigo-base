import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import injectContext from './store/appContext';
import Button from './components/button'
import Home from "./views/home";
import Detalles from "./views/detalles";
import { ToastContainer } from "react-toastify";
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
          <Route path="*" element={<h1>404 Not founs</h1>}/>
        </Routes>

        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default injectContext(App);
