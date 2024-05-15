import Editora from '../modelo/Editora';

const editoras: Array<Editora> = [
    {
        nome: "Editora A",
        localizacao: "Local A"
    },
    {
        nome: "Editora B",
        localizacao: "Local B"
    },
    {
        nome: "Editora C",
        localizacao: "Local C"
    }
];


class ControleEditora {
    private editoras: Array<Editora>;

    constructor(editoras: Array<Editora>) {
        this.editoras = editoras;
    }

    getEditoras(): Array<Editora> {
        return this.editoras;
    }

    getNomeEditora(codEditora: number): string | undefined {
        const editoraEncontrada = this.editoras.find(editora => editora.codEditora === codEditora);
        return editoraEncontrada ? editoraEncontrada.nome : undefined;
    }
}

const controleEditora = new ControleEditora([
    { codEditora: 1, nome: "Editora A", localizacao: "Local A" },
    { codEditora: 2, nome: "Editora B", localizacao: "Local B" },
    { codEditora: 3, nome: "Editora C", localizacao: "Local C" }
]);


const todasEditoras = controleEditora.getEditoras();
console.log("Todas as editoras:", todasEditoras);

const nomeEditora = controleEditora.getNomeEditora(2);
console.log("Nome da editora com código 2:", nomeEditora);





