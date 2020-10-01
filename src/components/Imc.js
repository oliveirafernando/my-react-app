import React from 'react';

export const Imc = (props) => {
  return (
    <div>
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-4">Calculadora de IMC</h1>
          <p className="lead">
            Esta página é uma exemplo de calculadora de IMC usando programação
            reativa com React.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="form-group row">
          <label htmlFor="nomeInputLabel" className="col-sm-2 col-form-label">
            Nome
          </label>
          <div className="col-sm-10">
            <input
              autoFocus
              type="text"
              className="form-control"
              id="nomeInputLabel"
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="pesoInputLabel" className="col-sm-2 col-form-label">
            Peso
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="pesoInputLabel" />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="alturaInputLabel" className="col-sm-2 col-form-label">
            Altura
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="alturaInputLabel" />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label"></label>
          <div className="col-sm-10">
            <button
              onClick={props.onAddPessoa}
              className="btn btn-primary mb-4"
            >
              Calcular
            </button>
          </div>
        </div>

        {/* BEGIN */}
        <div className="row">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Peso</th>
                <th scope="col">Altura</th>
                <th scope="col">IMC</th>
              </tr>
            </thead>

            <tbody>
              {props.pessoas.map((pessoa) => {
                return (
                  <tr>
                    <td itemScope="row">{pessoa.nome}</td>
                    <td itemScope="row">{pessoa.peso}</td>
                    <td itemScope="row">{pessoa.altura}</td>
                    <td itemScope="row">{pessoa.imc}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* END */}
      </div>
    </div>
  );
};
