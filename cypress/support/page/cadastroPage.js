/// <reference types="Cypress" />

import CadastroElements from '../elements/cadastroElements'
const cadElements = new CadastroElements
const url = Cypress.config("baseUrl")

class CadastroPage {
    acessarSite(){
        cy.visit(url)
    }

    preencherCampos(){
        cy.get(cadElements.preencherNome()).type('Romilton')
        cy.get(cadElements.preencherSobrenome()).type('Viana')
        cy.get(cadElements.preencherEndereco()).type('Via Transversal sul')
        cy.get(cadElements.preencherEmail()).type('teste02@gmail.com')
        cy.get(cadElements.preencherTelefone()).type('1195990604')
    }

    clicarCheckbox(){
        cy.get(cadElements.clicarSexo()).check()
        cy.get(cadElements.clicarHobbies()).check('Movies')
    }

    clicarSelect(){
        cy.get(cadElements.selecionarSkill()).select('Javascript')
        cy.get(cadElements.selecionarCountries()).select('Brazil')
        cy.get(cadElements.selecionarCountry()).select('Netherlands', { force: true })
        cy.get(cadElements.selecionarAno()).select('1987')
        cy.get(cadElements.selecionarMes()).select('April')
        cy.get(cadElements.selecionarDia()).select('8')
    }

    preencherPassword(){
        cy.get(cadElements.password()).type('Abc123@')
        cy.get(cadElements.confirmaPassword()).type('Abc123@')
        cy.screenshot()
    }

    clicarBotao(){
        cy.get(cadElements.btnSubmit()).click()
    }

    validarCadastro(){
        cy.wait(3000)
        cy.get(cadElements.textoValidado()).contains(' - Double Click on Edit Icon to ')
        cy.screenshot()
    }

}
export default CadastroPage