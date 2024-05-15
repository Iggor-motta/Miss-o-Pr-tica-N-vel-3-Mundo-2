import React, { useState, useEffect } from 'react';
import { ControleLivro } from './ControleLivro';
import { ControleEditora } from './ControleEditora';


const LinhaLivro = ({ livro, excluir }) => {
    const controleEditora = new ControleEditora([]);
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    return (
        <tr>
            <td>
                <button onClick={() => excluir(livro.codigo)}>Excluir</button>
            </td>
            <td>{livro.titulo}</td>
            <td>{livro.autor.join(', ')}</td>
            <td>{nomeEditora}</td>
            <td>{livro.anoPublicacao}</td>
        </tr>
    );
};


const LivroLista = () => {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        const controleLivro = new ControleLivro([]);
        setLivros(controleLivro.obterLivros());
        setCarregado(true);
    }, [carregado]);

    const excluir = (codigoLivro) => {
        const controleLivro = new ControleLivro([]);
        controleLivro.excluir(codigoLivro);
        setCarregado(false);
    };

    return (
        <main>
            <h1>Lista de Livros</h1>
            <table>
                <thead>
                    <tr>
                        <th>Excluir</th>
                        <th>Título</th>
                        <th>Autor(es)</th>
                        <th>Editora</th>
                        <th>Ano de Publicação</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map((livro, index) => (
                        <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
                    ))}
                </tbody>
            </table>
        </main>
    );
};

export default LivroLista;
