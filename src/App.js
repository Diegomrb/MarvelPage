import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componentes/header";
import Footer from "./componentes/footer";
import Home from "./paginas/home";
import Perfil from "./paginas/perfil";
import Eventos from "./paginas/eventos";
import DetalleEvento from "./paginas/detalleEvento";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/detalleEvento" element={<DetalleEvento />} />
          </Routes>
          <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;
