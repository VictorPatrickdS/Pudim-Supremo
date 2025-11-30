import {listaProdutos} from './scriptsNossosPudins/criarProduto.js'
import {abreMenuPrecos} from './scriptsNossosPudins/tabelaPrecos.js'
import {ativarCampoPesquisa} from './scriptsNossosPudins/campoPesquisaProdutos.js'

async function iniciarNossosPudins() {
    await listaProdutos('classicos','lista_classicos')
    await listaProdutos('especiais','lista_especiais')
    await listaProdutos('premium','lista_premium')
    await listaProdutos('bebida','lista_bebidas')

    abreMenuPrecos()

    ativarCampoPesquisa()
}

iniciarNossosPudins()



