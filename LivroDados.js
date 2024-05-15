import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import controleLivro from './controladorLivros'; 
import controleEditora from './controladorEditoras'; 



const LivroDados = () => {
  return (
    <main>
      <p>Olá mundo</p>
    </main>
  );
}

export default LivroDados;


function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">Livros</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Lista</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dados">Dados</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Route path="/" exact component={LivroLista} />
        <Route path="/dados" component={LivroDados} />
      </div>
    </Router>
  );
}

export default App;


function LivroDados() {
  const navigate = useNavigate();
  
  const opcoes = controleEditora.getEditoras().map(editora => ({
    value: editora.codEditora,
    text: editora.nome
  }));
  
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes[0].value);
  
  const tratarCombo = (event) => {
    setCodEditora(Number(event.target.value));
  };
  
  const incluir = (event) => {
    event.preventDefault(); 
    
    const novoLivro = {
      codigo: 0, 
      titulo: titulo,
      resumo: resumo,
      autores: autores.split('\n'),
      codEditora: codEditora
    };
    
    controleLivro.incluir(novoLivro);
    
    navigate('/');
  };
  
  return (
    <main>
      <h1>Formulário de Inclusão de Livro</h1>
      <form onSubmit={incluir}>
        <label htmlFor="titulo">Título:</label>
        <input type="text" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        
        <label htmlFor="resumo">Resumo:</label>
        <textarea id="resumo" value={resumo} onChange={(e) => setResumo(e.target.value)} />
        
        <label htmlFor="autores">Autores (separados por linha):</label>
        <textarea id="autores" value={autores} onChange={(e) => setAutores(e.target.value)} />
        
        <label htmlFor="editora">Editora:</label>
        <select id="editora" value={codEditora} onChange={tratarCombo}>
          {opcoes.map(opcao => (
            <option key={opcao.value} value={opcao.value}>{opcao.text}</option>
          ))}
        </select>
        
        <button type="submit">Incluir Livro</button>
      </form>
    </main>
  );
}

export default LivroDados;

