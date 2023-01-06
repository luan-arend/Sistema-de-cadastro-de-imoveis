const nome = prompt("Seja bem-vindo ao Cadastro de Imóveis Arend, digite seu nome para começar:")
const imoveis = []

do {
    opcao = prompt("Olá " + nome + ", seja Bem-vindo!\n" + 
    "Total de imóveis cadastrados: " + imoveis.length +
    "\nEscolha uma opção:" +
    "\n1. Salvar novo Imóvel" + 
    "\n2. Listar imóveis" +
    "\n3. Sair"
    )

switch (opcao) {
    case "1": 
        const imovel = {}
        imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:")
        imovel.quartos = prompt("Informe a quantidade de quartos do imóvel:")
        imovel.banheiros = prompt("Informe a quantidade de banheiros do imóvel:")
        imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")
        
        const confirmacao = confirm("Está correto as informações digitadas?" +
            "\nProprietário: " + imovel.proprietario +
            "\nQuartos: " + imovel.quartos +
            "\nBanheiros: " + imovel.banheiros +
            "\nPossui garagem? " + imovel.garagem
        )
        if (confirmacao == true) {
            alert("Imóvel salvo com sucesso!")
            imoveis.push(imovel)
        } else {
            alert("Retornando ao menu!")
        }
        break
    case "2":
        for (i = 0; i < imoveis.length; i++) {
            alert("Lista de imóveis:\n" +
            "Imóvel " + (i + 1) + ":" +
            "\nProprietário: " + imoveis[i].proprietario +
            "\nQuartos: " + imoveis[i].quartos +
            "\nBanheiros: " + imoveis[i].banheiros +
            "\nPossui garagem? " + imoveis[i].garagem
            )
        }
        break
    case "3":
        alert("Encerrando programa...")
        break
    default:
        alert("Entrada inválida")
}

} while (opcao !== "3")