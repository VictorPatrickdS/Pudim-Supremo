import {listaProdutos} from './criarProduto.js'
import {abreMenuPrecos} from './tabelaPrecos.js'
import {iniciarCarrosel} from './carousel.js'

async function iniciarSite() {
    await listaProdutos('classicos','lista_classicos')
    await listaProdutos('especiais','lista_especiais')
    await listaProdutos('premium','lista_premium')
    await listaProdutos('bebida','lista_bebidas')

    abreMenuPrecos()

    iniciarCarrosel()

}

iniciarSite()



