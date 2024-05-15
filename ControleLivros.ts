import Livro from '../modelo/Livro';

const livros: Array<Livro> = [
    { codigo: 1, titulo: "Livro A", autor: "Autor A"},
    { codigo: 2, titulo: "Livro B", autor: "Autor B"},
    { codigo: 3, titulo: "Livro C", autor: "Autor C"}
];

class ControleLivro {
    private livros: Array<Livro>;

    constructor(livros: Array<Livro>) {
        this.livros = livros;
    }


    obterLivros(): Array<Livro> {
        return this.livros;
    }

    incluir(livro: Livro): void {
        const novoCodigo = this.livros.reduce((max, livro) => livro.codigo > max ? livro.codigo : max, 0) + 1;
        livro.codigo = novoCodigo;
        this.livros.push(livro);
    }

    excluir(codigo: number): void {
        const index = this.livros.findIndex(livro => livro.codigo === codigo);
        if (index !== -1) {
        this.livros.splice(index, 1);
        }
    }
}

const controleLivro = new ControleLivro(livros);

const todosLivros = controleLivro.obterLivros();
console.log("Todos os livros:", todosLivros);

controleLivro.incluir({ codigo: 4, titulo: "Livro D", autor: "Autor D", });
console.log("Livros após inclusão:", controleLivro.obterLivros());

controleLivro.excluir(2);
console.log("Livros após exclusão do livro com código 2:", controleLivro.obterLivros());