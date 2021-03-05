import React from 'react';
import ContatoForm from "./components/ContatoForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css';

function Agenda() {
  let [contatos, setContatos] = React.useState([
    {"nome": "Joao", "telefone": "83 88998899"},
    {"nome": "Maria", "telefone": "84 87798899"},
    {"nome": "Pedro", "telefone": "85 99998899"}
  ]);

  let [novoContato, setNovoContato] = React.useState({ nome: '', telefone: ''});

  const onContatoChange = (name, value) => {
    let contatoCopia = Object.assign({}, novoContato);
    contatoCopia[name] = value;

    setNovoContato(contatoCopia);
  };

  const salvarContato = (evt) => {
    evt.preventDefault();
    let contatosCopia = [...contatos];
    contatosCopia.push(novoContato);
    setContatos(contatosCopia);
  };

  return (
    <React.Fragment>
      <Navegacao onContatoChange={onContatoChange} onContatoSubmit={salvarContato} />
      <Main contatos={contatos} />
    </React.Fragment>
  );
}

function Navegacao(props) {
  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1 nav-titulo">Agenda</span>
          <button type="button" className="btn btn-primary" data-toggle="modal"
                  data-target="#contatoModal">
            Criar contato
          </button>
          <React.Fragment>
            <ContatoForm onContatoChange={props.onContatoChange} salvarContato={props.onContatoSubmit} />
          </React.Fragment>
      </nav>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <div className="container main-section">
        <Rastreador caminho="Contatos" />
        <Contatos contatos={props.contatos} />
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
    <div className="card shadow-sm bg-white rounded contato">
      <div className="card-body">
        <h3 className="card-title contato-titulo">{props.nome}</h3>
        <h4 className="card-title">{props.telefone}</h4>
      </div>
    </div>
  );
}

function Contatos(props) {

  let listaContatos = props.contatos.map((contato, idx) => {
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
  );
}

export default App;
