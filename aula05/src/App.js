import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Agenda() {
  return (
    <React.Fragment>
      <Navegacao />
      <Main />
    </React.Fragment>
  );
}

function Navegacao() {
  const [n, setN] = React.useState(1);
  setInterval(() => {
    setN(n + 1);
  }, 1000);

  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1 nav-titulo">Agenda</span>
        <span>{n}</span>
        <a href="/novocontato" className="btn btn-primary" role="button">Criar Contato</a>
      </nav>
    </header>
  );
}

function Main() {
  return (
    <section>
      <div className="container main-section">
        <Rastreador caminho="Contatos" />
        <Contatos />
      </div>
    </section>
  );
}

function Rastreador(props) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb rastreador bg-white">
        <li className="breadcrumb-item active">{props.caminho}</li>
      </ol>
    </nav>
  );
}

function Contato(props) {
  return (
    <div className="card shadow-sm bg-white rounded">
      <div className="card-body contato">
        <h4 className="card-title contato-titulo">{props.nome}</h4>
        <h3 className="card-title">{props.telefone}</h3>
      </div>
    </div>
  );
}

function Contatos() {
  const contatos = [
    {"nome": "Joao", "telefone": "83 88998899"},
    {"nome": "Maria", "telefone": "84 87798899"},
    {"nome": "Pedro", "telefone": "85 99998899"}
  ];

  const listaContatos = contatos.map((contato, idx) => {
    return <Contato nome={contato.nome} telefone={contato.telefone} key={idx} />;
  });

  return (
    <React.Fragment>
      { listaContatos }
    </React.Fragment>
  );
}

function App() {
  return (
    <Agenda />
    //<div className="App">
    //  <h1>Olá, PW2!</h1>
    //</div>
    //React.createElement('div', { className: 'App' },
    //  React.createElement('h1', null, 'Olá, PW2!'));
  );
}

export default App;
