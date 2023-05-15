import React, { Component } from "react";

import "./index.css";

class Personaje extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {personaje, onClick} = this.props;
    return (
        <div className="Personaje">
       <div className="col mb-4" key={personaje.id.toString()}>
        <div className="card mt-4 tarjeta"  onClick={() => onClick(personaje)} >
        <img src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`} className="card-img-top" style={{height:"18rem"}}/>
        <div className="card-body">
        <p className="card-text">{personaje.name}</p>
        </div>
        </div>
</div>
</div>
    );
  }
}

export default Personaje;
