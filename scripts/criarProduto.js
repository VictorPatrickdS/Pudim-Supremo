import {buscarPlanilha} from './carregarPlanilha.js' 

export async function criarArrayProduto(){
    const dadosPlanilha = await buscarPlanilha()
    const produtosDB = []
        
    for(const dadosProdutos of dadosPlanilha){
        if(dadosProdutos){
            const [id, nome,img,descricao,categoria,preco,vendidos] = dadosProdutos.split('\t')
        
            produtosDB.push({
                id: id,
                nome: nome,
                img: img,
                descricao: descricao,
                categoria: categoria,
                preco: preco.trim(),
                vendidos: parseInt(vendidos)
            })
        }
    }

    return produtosDB
}

function criarCardProduto(listaAdd,arrayFiltrada){

    const listaRecebida = document.getElementById(listaAdd)

    arrayFiltrada.forEach(produto => {
        listaRecebida.innerHTML += 
            `<li class="itens_lista_card-tipos-produto">
                <button class="card-tipos-produto">
                    <img class="img_card-tipos-produto" src="${produto.img}" alt="Foto ${produto.nome}">
                    <div class="descricao_card-tipos-produto">
                        <h3 class="titulo_descricao_card-tipos-produto">${produto.nome}</h3>
                        <p class="txt_descricao_card-tipos-produto">${produto.descricao}</p>
                        <p class="preco_descricao_card-tipos-produto">R$ ${produto.preco}</p>
                    </div>
                </button>
            </li>`
    });
}

export async function listaProdutos(categoriaProduto, listaAdicionada) {
    const produtos = await criarArrayProduto()

    const filtraproduto = produtos.filter( produtosDB => {
        return produtosDB.categoria.trim().toLowerCase() === categoriaProduto;
    });

    return criarCardProduto(listaAdicionada, filtraproduto)
}
