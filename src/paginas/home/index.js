import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "../../hooks/withRouter";
import Personaje from "../../componentes/personaje";
import "./index.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { personajes: [] };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const response = await fetch(
      "https://gateway.marvel.com/v1/public/characters?ts=1000&limit=100&apikey=b6847664cfd533605e325588b62af044&hash=4990c9ec6007b3a745c1bbc20f22b7a3&events=321,314,315"
    );
    const data = await response.json();
    this.setState({ personajes: data.data.results });
  };

  navegarDetallePersonaje = (p) => {
    const { router } = this.props;
    router.navigate("/perfil", { state: { datosPersonaje: p } });
  };

  render() {
    const { personajes } = this.state;
    return (
      <div className="Home">
        <div className="container">
        <div className="row">
        
        {personajes.map((p, key) => (
          <Personaje personaje={p} key={key.toString()} onClick={this.navegarDetallePersonaje} />
        ))}
      
      </div>
      </div>
      </div>
    );
  }
}

export default withRouter(Home);
