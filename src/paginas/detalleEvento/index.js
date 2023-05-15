import React, { Component } from "react";
import { withRouter } from "../../hooks/withRouter";


import "./index.css";

class DetalleEvento extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { evento } = this.props.router.location.state;
    return (
      <div className="DetalleEvento">
        
        <div className="container text-left">
              <h2>{evento.title}</h2>
              <img src={`${evento.thumbnail.path}.${evento.thumbnail.extension}`}  className="card-img-top mb-5" style={{width:"30rem"}}/>

          <div className="row">
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-danger">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Fecha de inicio:</h4>
                </div>
              <div className="card-body">
                <h5 className="card-title pricing-card-title">{evento.start.slice(0,-8)}</h5>
              </div>
              </div>
            </div>

          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-danger">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Fecha de fin:</h4>
              </div>
            <div className="card-body">
              <h5 className="card-title pricing-card-title">{evento.end.slice(0,-8)}</h5>
            </div>
            </div>
          </div>
        </div>

          <h2>Descripción:</h2>
          <p>{evento.description}</p>
  
          <h2>Cantidad de personajes: {evento.characters.available}</h2>

        </div>
      </div>
    )
  }
}

export default withRouter(DetalleEvento);
