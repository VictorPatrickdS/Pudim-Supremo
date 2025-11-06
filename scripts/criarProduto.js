import {buscarPlanilha} from './carregarPlanilha.js' 

async function criarArrayProduto(){
    const dadosPlanilha = await buscarPlanilha()
    const produtosDB = []
        
    for(const dadosProdutos of dadosPlanilha){
        if(dadosProdutos){
            const [id, nome,img,descricao,categoria] = dadosProdutos.split('\t')
        
            produtosDB.push({
                id: id,
                nome: nome,
                img: img,
                descricao: descricao,
                categoria: categoria.trim()
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
                    <p class="preco_descricao_card-tipos-produto">R$ 50,00</p>
                </div>
            </button>
        </li>`
    });
}

export async function listaClassicos(){
    const produtos = await criarArrayProduto()

    const produtosClassicos = produtos.filter( produtosDB => {
        return produtosDB.categoria.trim().toLowerCase() === 'classicos';
    });

    return criarCardProduto('lista_classicos', produtosClassicos)
}

listaClassicos()




            




