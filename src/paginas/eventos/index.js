import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "../../hooks/withRouter";
import {eventos, parametrosComunes} from "../../api.js";
import "./index.css";
import Personaje from "../../componentes/personaje";

class Eventos extends Component {
  constructor(props) {
    super(props);
    this.state = { eventosDelPersonaje: []};
  }

    componentDidMount() {
    this.getEvent();
  }

  navegarDetalleEvento = (e) => {
    const { router } = this.props;
    router.navigate("/detalleEvento", { state: { evento: e} });
  };


getEvent = async () => {
    const {personajeId} = this.props.router.location.state;
    const response = await fetch(
      `https://gateway.marvel.com/v1/public/characters/${personajeId}/events?ts=1000&limit=100&apikey=b6847664cfd533605e325588b62af044&hash=4990c9ec6007b3a745c1bbc20f22b7a3`
    );
    const data = await response.json();
    this.setState({eventosDelPersonaje: data.data.results});
  };

  render() {
  const { eventosDelPersonaje } = this.state;
  const {personaje} = this.props;
    return (
      <div className="Eventos">
        <div className="text-left container">
          
        <h2>Eventos</h2>
        <div className="row text-center"  >
        {eventosDelPersonaje.map((e, key) => (
        <div className="col mb-4" key={key.toString()}>
        <div className="card mt-4" onClick={() =>this.navegarDetalleEvento(e)} style={{width:"18rem"}}>
        <img src={`${e.thumbnail.path}.${e.thumbnail.extension}`} className="card-img-top" style={{height:"18rem"}}/>
        <div className="card-body">
        <p className="card-text">{e.title}</p>
        </div>
        </div>
</div>
        ))}
        </div>
</div>
       
      </div>
    );
  }
}

export default withRouter(Eventos);
