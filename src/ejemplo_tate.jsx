import React, { Component } from 'react';

class EjemploPr extends Component {
  constructor() {
    super();
    this.state = {
      nombreInicial: "Erik",
    };
  }

  cambiarNombre = () => {
    this.setState({ nombreInicial: "Jorge" });
  }

  render() {
    return (
      <div>
        <p>Contador: {this.state.nombreInicial}</p>
        <button onClick={this.cambiarNombre}>Incrementar</button> 
      </div>
    );
  }
}

export default EjemploPr;