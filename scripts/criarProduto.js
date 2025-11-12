import {buscarPlanilha} from './carregarPlanilha.js' 

export async function criarArrayProduto(){
    const dadosPlanilha = await buscarPlanilha()
    const produtosDB = []
        
    for(const dadosProdutos of dadosPlanilha){
        
        const [id, nome,img,descricao,categoria,pIndividual,pPequeno,pMedio,pGrande,vendidos] = dadosProdutos.split('\t')
        
        produtosDB.push({
            id: id,
            nome: nome,
            img: img,
            descricao: descricao,
            categoria: categoria,
            pIndividual: pIndividual,
            pPequeno: pPequeno,
            pMedio: pMedio,
            pGrande: pGrande.trim(),
            vendidos: parseInt(vendidos)
        })
        
    }

    return produtosDB
}

function criarCardProduto(listaAdd,arrayFiltrada){

    const listaRecebida = document.getElementById(listaAdd)

    arrayFiltrada.forEach(produto => {
        listaRecebida.innerHTML += 
            `<li class="itens_lista_card-tipos-produto">
                <button id="buttom-tabela-precos" class="card-tipos-produto">
                    <div class="informacao-produtos">
                        <img class="img_card-tipos-produto" src="${produto.img}" alt="Foto ${produto.nome}" height="120px" width="120px">
                        <div class="descricao_card-tipos-produto">
                            <h3 class="titulo_descricao_card-tipos-produto">${produto.nome}</h3>
                            <p class="txt_descricao_card-tipos-produto">${produto.descricao}</p>
                            <p class="preco_descricao_card-tipos-produto">R$ ${produto.pIndividual}</p>
                        </div>
                    </div>
                      <img class="seta__menu-precos" src="img/setaMenu.png" alt="" height="30px" width="60px">
                </button>
                <div class="menu-precos">
                    <img class='img-produto__menu-precos' src="${produto.img}" alt="Foto ${produto.nome}" height="260px" width="320px">
                    <div class="precos-produtos">
                        <h3 class="titulo__menu-precos">Tamanhos disponíveis</h3>
                        <p>Individual 150g........................R$ ${produto.pIndividual}</p>
                        <p>Pequeno 300g...........................R$ ${produto.pPequeno}</p>
                        <p>Médio 550g.............................R$ ${produto.pMedio}</p>
                        <p>Grande 1100g...........................R$ ${produto.pGrande}</p>
                    </div>
                </div>
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
