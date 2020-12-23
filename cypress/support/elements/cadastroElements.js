class CadastroElements {
    preencherNome = () => {return 'input[ng-model="FirstName"]'}
    preencherSobrenome = () => {return 'input[ng-model="LastName"]'}
    preencherEndereco = () => {return 'textarea[ng-model="Adress"]'}
    preencherEmail = () => {return 'input[ng-model="EmailAdress"]'}
    preencherTelefone = () => {return 'input[ng-model="Phone"]'}

    // CheckBox e Clicks
    clicarSexo = () => {return 'input[value="Male"]'}
    clicarHobbies = () => {return 'input[type="checkbox"]'}
    clicarLanguage = () => {return '#msdd'}
    clicarVazio = () => {return '#section > .container > .row'}

    // select e select2
    selecionarLanguage = () => {return ':nth-child(8) > .ui-corner-all'}
    selecionarLanguage2 = () => {return ':nth-child(1) > .ui-corner-all'}
    selecionarSkill = () => {return '#Skills'}
    selecionarCountries = () => {return '#countries'}
    selecionarCountry = () => {return '#country'}
    selecionarAno = () => {return '#yearbox'}
    selecionarMes = () => {return "select[ng-model='monthbox']"}
    selecionarDia = () => {return '#daybox'}


    //password
    password = () => {return '#firstpassword'}
    confirmaPassword = () => {return '#secondpassword'}

    // Botão
    btnSubmit = () => {return '#submitbtn'}

    // Validação
    textoValidado = () => {return 'h4'}

}
export default CadastroElements


/*
 cy.get('#Skills').select('Javascript')
    cy.get('#countries').select('Brazil')
    cy.get('#country').select('Netherlands', { force: true })
    cy.get('#yearbox').select('1987')
    cy.get("select[ng-model='monthbox']").select('April')
    cy.get('#daybox').select('8')

    cy.get('#firstpassword').type('Abc123@')
    cy.get('#secondpassword').type('Abc123@')

    cy.get('#submitbtn').click()
*/