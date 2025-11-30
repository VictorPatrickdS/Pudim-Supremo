import {listaProdutos} from './criarProduto.js'
import {abreMenuPrecos} from './tabelaPrecos.js'
import {ativarCampoPesquisa} from './campoPesquisaProdutos.js'

async function iniciarNossosPudins() {
    await listaProdutos('classicos','lista_classicos')
    await listaProdutos('especiais','lista_especiais')
    await listaProdutos('premium','lista_premium')
    await listaProdutos('bebida','lista_bebidas')

    abreMenuPrecos()

    ativarCampoPesquisa()
}

iniciarNossosPudins()



