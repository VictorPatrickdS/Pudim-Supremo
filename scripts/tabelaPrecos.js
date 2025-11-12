export function abreMenuPrecos(){

const btMenuPrecos = document.querySelectorAll(".card-tipos-produto");

btMenuPrecos.forEach( (botao) => {
    
    botao.addEventListener('click', () => {
        const card = botao.closest('.itens_lista_card-tipos-produto');
        
        const menuBotao = card.querySelector('.menu-precos');
        botao.classList.toggle('active');
        menuBotao.classList.toggle('active');
    });
});
}