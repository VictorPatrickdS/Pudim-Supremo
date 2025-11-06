async function buscarPlanilha() {
    try{
        const planilhaProdutos = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vS0W1-0Cx7728DuEzsse2oKm6PmjNdAOTKjfbPl9w-498aYo54wb_R2TkueiPG5C3HUzJKPLTRG19fN/pub?output=tsv')
        const dadosPlanilha = await planilhaProdutos.text()
        const dadosGerais = dadosPlanilha.split('\n')
        dadosGerais.shift()

        const produtosDB = []
        
        for(const dadosProdutos of dadosGerais){
            const [id, nome,img,descricao,categoria] = dadosProdutos.split('\t')
        
            produtosDB.push({
                id: id,
                nome: nome,
                img: img,
                descricao: descricao,
                categoria: categoria.trim() 
            })
        }

        
        return console.log(produtosDB)
    }catch{
        alert('Dados não encontrados')
    }
}
    
console.log(buscarPlanilha())