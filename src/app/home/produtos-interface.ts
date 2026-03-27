export interface Produtos {
    nome: string,
    preco: number,
    descricao: string,
    estoque: number,
    categoria: Categorias[]
}

export interface Categorias {
    nome: string
}