import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articulos: [
        { codigo: 1, descripcion: "coca-cola", precio: 2.5 },
        { codigo: 2, descripcion: "inka-cola", precio: 2.2 },
        { codigo: 3, descripcion: "fanta", precio: 1.7 },
      ],
    };
    this.borrar = this.borrar.bind(this);
  }

  render() {
    return (
      <div className="bg-dark text-light min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <div className="container py-5">
          <h2 className="text-center mb-4">Lista de Artículos</h2>
          {this.state.articulos.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-striped table-hover table-bordered">
                <thead className="thead-dark">
                  <tr className="text-center">
                    <th>Código</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.articulos.map((elemento) => (
                    <tr key={elemento.codigo} className="text-center">
                      <td>{elemento.codigo}</td>
                      <td>{elemento.descripcion}</td>
                      <td>${elemento.precio.toFixed(2)}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => this.borrar(elemento.codigo)}
                        >
                          Borrar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center">No hay articulos disponibles</p>
          )}
        </div>
      </div>
    );
  }

  borrar(cod) {
    const temp = this.state.articulos.filter((el) => el.codigo !== cod);
    this.setState({
      articulos: temp,
    });
  }
}

export default App;
