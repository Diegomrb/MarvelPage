import React, { Component } from "react";

import "./index.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <footer className="Footer">
  <p>Entrega Diego Rivero Nº 247222</p>
  <p><a href="mailto:diegomartinrivero@gmail.com">Enviar Mail</a></p>
</footer>

    );
  };
}

export default Footer;
