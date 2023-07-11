import DropdownPage from "../../padges/Dropdown-page";
import { dropdown1, dropdown2, dropdown3 } from "../../test data/dropdowns-value";

const dropdownPage = new DropdownPage();

describe("Dropdown", () => {
    it ("Check Page Header", () => {
        dropdownPage.visitDropdownPage();
        dropdownPage.getPageHeader().should('have.text', 'Dropdown Menu(s), Checkboxe(s) & Radio Button(s)');
    })

    it ("Select dropdown", () => {
        dropdownPage.visitDropdownPage();
        dropdownPage.getDivByTitle('Dropdown Menu(s)').should('exist');
        dropdownPage.getDivByTitle('Checkboxe(s)').should('exist');
        dropdownPage.getDivByTitle('Radio Button(s)').should('exist');
        dropdownPage.getDivByTitle('Selected & Disabled').should('exist');
        
        //dropdown1.forEach(value => {
        //    dropdownPage.getDropdownById('1').should('exist').select(value).invoke('val').should('eq', value);
        //})
        //dropdownPage.getDropdownById('1').should('exist').select(0).invoke('val').should('eq', 'java');
        //dropdownPage.getDropdownById('1').should('exist').select(1).invoke('val').should('eq', 'c#');
        //dropdownPage.getDropdownById('1').should('exist').select(2).invoke('val').should('eq', 'python');
        //dropdownPage.getDropdownById('1').should('exist').select(3).invoke('val').should('eq', 'sql');
        
        //dropdown2.forEach(value => {
        //   dropdownPage.getDropdownById('2').should('exist').select(value).invoke('val').should('eq', value);
        //})
        //dropdown3.forEach(value => {
        //    dropdownPage.getDropdownById('3').should('exist').select(value).invoke('val').should('eq', value);
        //})

        dropdownPage.verifyAllDropdownOptions(dropdown1, 1);
        dropdownPage.verifyAllDropdownOptions(dropdown2, 2);
        dropdownPage.verifyAllDropdownOptions(dropdown3, 3);
    })

    it("Checkboxes", () => {
        dropdownPage.visitDropdownPage();
        //dropdownPage.get1option().click().should('be.checked');
        //dropdownPage.get2option().check().should('be.checked');
        //dropdownPage.get3option().uncheck().should('not.be.checked');
        //dropdownPage.get4option().click().should('be.checked');
        //dropdownPage.getAllCheckboxes().should('have.length', 4).first().check().should('be.checked'); // перeвіряємо, що у нас на сторінці 4 чекбокси, 1ий-чекнутий - треба закоментувати перевурку 1-го чекбоксу, щоб пройшов тест
// можна замість перевірок 36-40 записати це такою перевіркою(використаємо jquery і огорнимо у  cy.wrap):
        dropdownPage.getAllCheckboxes().each($el => {
          let el = $el
          cy.wrap(el).check().should('be.checked');
        })
//якби у нас чекбокси на сторінці були огорнуті у form (як радіобатони)б то можна було б зробити простіше, в check передати масив чекбоксів (опшинів):
        //dropdownPage.getAllCheckboxes().check(['Option 1', 'Option 2', 'Option 3', 'Option 4'])
    })

    it("Radio Buttons", () => {
        dropdownPage.visitDropdownPage();
        dropdownPage.getAllRadioButtons().check('green').should('be.checked'); //в лапках '' маємо передати value -> green
        // або можна записати так:
        //dropdownPage.getAllRadioButtons().first().check().should('be.checked');

        dropdownPage.getAllRadioButtons().check('blue').should('be.checked');
        dropdownPage.getAllRadioButtons().check('yellow').should('be.checked');
        dropdownPage.getAllRadioButtons().check('orange').should('be.checked');
        dropdownPage.getAllRadioButtons().check('purple').should('be.checked');
        //cy.get('input[value="blue"]').should('not.be.checked');
        //cy.get('input[value="yellow"]').should('not.be.checked');
        //cy.get('input[value="orange"]').should('not.be.checked');
        //cy.get('input[value="purple"]').should('not.be.checked');
        
        // можна взаємодіяти з елементом через document, іноді це буде єжина можливість, щоб звренутись до елементу. Наприклад:
        //cy.get('body').document(doc => {
        //    const test = doc.querySelector('#button1');
        //})
    })

    it("Selected & Disabled", () => {
        dropdownPage.visitDropdownPage();
        dropdownPage.getRadioButtonsWithDisabled().check('pumpkin').should('be.checked'); 
        cy.get('input[value="lettuce"]').should('not.be.checked');
        cy.get('input[value="cabbage"]').should('be.disabled');
        dropdownPage.getSelectAndDisabledDropdown().should('exist').select(0).invoke('val').should('eq', 'apple');
        cy.get('option[value="orange"]').should('be.disabled');
        dropdownPage.getSelectAndDisabledDropdown().should('exist').select(2).invoke('val').should('eq', 'pear');
        dropdownPage.getSelectAndDisabledDropdown().should('exist').select(3).invoke('val').should('eq', 'grape');
    })
})