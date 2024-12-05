import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Historia from "./pages/Historia";
import Galeria from "./pages/Galeria";
import Contato from "./pages/Contato";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Menu></Menu>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/historia" element={<Historia/>}></Route>
            <Route path="/galeria" element={<Galeria/>}></Route>
            <Route path="/contato" element={<Contato/>}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
