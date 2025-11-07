import {criarArrayProduto} from './criarProduto.js'



function criarSlide(arrayProdutos, idCarrosel, titulo){
    const slideCarrosel = document.getElementById(idCarrosel)

    arrayProdutos.forEach(produto => {
        slideCarrosel.innerHTML +=
            `<div class="swiper-slide">
                <a class="slide-link" href="#">
                    <h2 class="titulo-slide">${titulo}</h2>
                    <div class="tipo-pudim">
                        <img class="img-pudim" src="${produto.img}" alt="Foto ${produto.nome}">
                        <div class="descrição-pudim">
                            <h3 class="nome-pudim">${produto.nome}</h3>
                            <p class="txt-pudim">${produto.descricao}</p>
                        </div>
                    </div>
                </a>
            </div>`
    });
}

async function criarSlidePopulares(){

    const puxarProdutos = await criarArrayProduto()
    
    const produtosOrdenados = [...puxarProdutos].sort((a,b) =>{return b.vendidos - a.vendidos;})
    const maisVendidos = produtosOrdenados.slice(0,3)

    return criarSlide(maisVendidos,"slide__pudim-populares",'Mais Populares')
    
}

async function criarSlideExclusivos(){
    
    const puxarprodutos = await criarArrayProduto()
    
        const produtosExclusivos = puxarprodutos.filter( produtosDB => {
            return produtosDB.categoria.toLowerCase() === 'especiais';
        });
    
        return criarSlide(produtosExclusivos,"slide__pudim-exclusivos",'Receitas Exclusivas')
}

export async function iniciarCarrosel(){
    try {
        await criarSlidePopulares()
        await criarSlideExclusivos()
    
        const swiperApresentacao = new Swiper('.carousel-apresentacao', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    const swiperCriarReceita = new Swiper('.carousel-criar_receita', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
    } catch (error) {
        alert('Deu ruim')
    }
}

iniciarCarrosel()




