export class Item{
    codigo: number
    descricao: string
    tipo: string
    preco: number
    estoque: number
    loja: string



    constructor(codigo:number, descricao:string, tipo:string, preco:number, estoque:number, loja:string ){
        this.codigo = codigo
        this.descricao = descricao
        this.tipo = tipo
        this.preco = preco
        this.estoque = estoque
        this.loja = loja
    }

}
