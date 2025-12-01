import {criarArrayProduto} from './criarProduto.js'
import {criarCardProduto} from './criarProduto.js'
import {abreMenuPrecos} from './tabelaPrecos.js'

export async function ativarCampoPesquisa(){
    const campoPesquisa = document.getElementById('campo-pesquisa-produtos')
    const resultadoNaoEncontrado = document.querySelector('.resultado-pesquisa-nao-encontrado')
    const resultadoEncontrado = document.querySelector('.resultado-pesquisa-encontrado')
    const conteudoNormal = document.querySelector('.listas-produtos')
    const produtosEmGeral = await criarArrayProduto()

    campoPesquisa.addEventListener('input', (evento) =>{
        
        const pesquisa = evento.target.value.toLowerCase()

        if(pesquisa === ""){
            conteudoNormal.classList.remove('esconder')
            resultadoEncontrado.classList.remove('active')
            resultadoNaoEncontrado.classList.remove('active')
            return
        }

        const filtroProdutos =  produtosEmGeral.filter (produto => {
            const resultadoPesquisa = produto.nome.toLowerCase().includes(pesquisa)
            return resultadoPesquisa
        })
        
        if(filtroProdutos.length === 0){
            conteudoNormal.classList.add('esconder')
            resultadoNaoEncontrado.classList.add('active')
            resultadoEncontrado.classList.remove('active')
            
        } else{
            conteudoNormal.classList.add('esconder')
            resultadoNaoEncontrado.classList.remove('active');
            resultadoEncontrado.classList.add('active')

            criarCardProduto('lista__Resultado-pesquisa-encontrado',filtroProdutos)
        }

        abreMenuPrecos()
    })
}