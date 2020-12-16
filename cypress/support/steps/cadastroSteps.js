/* global Given, When, Then */


import CadastroPage from '../page/cadastroPage'
const cadPage = new CadastroPage

Given("que acesso o site de registro", () =>{
    cadPage.acessarSite()
})

When("preencho todos os campos", () =>{
    cadPage.preencherCampos()
    cadPage.clicarCheckbox()
    cadPage.clicarSelect()
    cadPage.preencherPassword()
})

Then("valido o cadastro finalizado", () =>{
    cadPage.clicarBotao()
    cadPage.validarCadastro()
})