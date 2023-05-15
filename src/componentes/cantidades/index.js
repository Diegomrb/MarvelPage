import React, { Component } from "react";

import "./index.css";

class Cantidades extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {title, cantidad, img} = this.props;
    return (
      <div className="Cantidades">
        <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm border-danger">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">{title}</h4> <img src={img} />
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">{cantidad}</h1>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Cantidades;
