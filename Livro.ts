class Livro {
    private codigo: number;
    private codEditora: number;
    private titulo: string;
    private resumo: string;
    private autores: string[];

    constructor(codigo: number, codEditora: number, titulo: string, resumo: string, autores: string[]) {
        this.codigo = codigo;
        this.codEditora = codEditora;
        this.titulo = titulo;
        this.resumo = resumo;
        this.autores = autores;}
    }