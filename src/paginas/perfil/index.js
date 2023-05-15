import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "../../hooks/withRouter";

import comic from "../../iconos/comics.png";
import historias from "../../iconos/historias.png";
import serie from "../../iconos/series.png";
import evento from "../../iconos/evento.png";
import todas from "../../iconos/todas.png";

import "./index.css";
import Cantidades from "../../componentes/cantidades";



class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

    navegarAEventos = (personajeId) => {
    const { router } = this.props;
    router.navigate("/eventos", { state: { personajeId: personajeId} });
  };

  render() {
    const { datosPersonaje } = this.props.router.location.state;
    const {name, description, comics, series, stories, events} = datosPersonaje;
    const aparicionesTotales = comics.available + series.available + stories.available;
    
    const descripcionFinal = description?description:"No tenemos una descripción para este personaje.";

    return (
      <div className="Perfil">
        <div className="colorDiferente">
          <div className="text-left container">
        <h2>{name}</h2>
        
        <img src={`${datosPersonaje.thumbnail.path}.${datosPersonaje.thumbnail.extension}`} className="card-img-top mb-5" style={{width:"30rem"}}/>

        <h3>Description:</h3>
        <p>{descripcionFinal}</p>
        </div>
        </div>
      <div className="text-left container">

      <div className="row text-center">

      <Cantidades title="Cantidad de comics" img={comic} cantidad={comics.available}/>
      <Cantidades title="Cantidad de series:" img={serie} cantidad={series.available}/>
      <Cantidades title="Cantidad de historias:" img={historias} cantidad={stories.available}/>
      <Cantidades title="Apariciones totales:" img={todas} cantidad={aparicionesTotales}/>

      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm border-danger">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">Eventos disponibles</h4> <img src={evento} />
          </div>
          <div className="card-body">
          <h1 className="card-title pricing-card-title">{events.available}</h1>
            <button type="button" className="w-100 btn btn-lg btn-danger" onClick={() => this.navegarAEventos(datosPersonaje.id)}>Ver eventos</button>
          </div>
        </div>
      </div>
    </div>
        
      </div>
      </div>
    );
  }
}

export default withRouter(Perfil);
