import DropdownPage from "../padges/Dropdown-page";

const dropdownPage = new DropdownPage();

export default class DropdownStep {
    visitDropdownPage(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.url().should('include', 'Dropdown-Checkboxes-RadioButtons');
}
verifyPageHeaderExist(){
    DropdownPage.getPageHeader.should('have.text', 'Dropdown Menu(s), Checkboxe(s) & Radio Button(s)');
}
verifyDropdownDivByTitle(){
    DropdownPage.getDivByTitle('Dropdown Menu(s)').should('exist');
}
verifyCheckboxesDivByTitle(){
    DropdownPage.getDivByTitle('Checkboxe(s)').should('exist');
}
verifyRadioDivByTitle(){
    DropdownPage.getDivByTitle('Radio Button(s)').should('exist');
}
verifySelectedDivByTitle(){
    DropdownPage.getDivByTitle('Selected & Disabled').should('exist');
}

verifyAllDropdownOptions(arrayOfValues, dropdownID){
    arrayOfValues.forEach(value => {
        let el = value.toLowerCase().trim();
        DropdownPage.getDropdownById(dropdownID).should('exist').select(value).invoke('val').should('eq', value);
    })
}

verifyAllCheckboxes(){
    DropdownPage.getAllCheckboxes.each($el => {
        let el = $el
        cy.wrap(el).check().should('be.checked');
      })
}

verifyGreenRidioButtonIsChecked(){
    DropdownPage.getAllRadioButtons.check('green').should('be.checked');
}

verifyBlueRidioButtonIsChecked(){
    DropdownPage.getAllRadioButtons.check('blue').should('be.checked');
}

verifyYellowidioButtonIsChecked(){
    DropdownPage.getAllRadioButtons.check('yellow').should('be.checked');
}

verifyOrangeRidioButtonIsChecked(){
    DropdownPage.getAllRadioButtons.check('orange').should('be.checked');
}

verifyPurpleRidioButtonIsChecked(){
    DropdownPage.getAllRadioButtons.check('purple').should('be.checked');
}

verifyPumpkinRidioButtonIsChecked(){
    DropdownPage.getRadioButtonsWithDisabled.check('pumpkin').should('be.checked');
}

verifyLettuceRidioButtonIsChecked(){
    DropdownPage.getRadioButtonsWithDisabled.check('lettuce').should('be.checked');
}

verifyCabbageRadioButtonIsDisabled(){
    DropdownPage.getCabbageRadioButton.click({force: true}).should('be.disabled');
}

verifyOption1CanBeSelected(){
    DropdownPage.getSelectAndDisabledDropdown.should('exist').select(0).invoke('val').should('eq', 'apple');
}
verifyOption2IsDisabled(){
    DropdownPage.getOrangeValueInDropdown.should('be.disabled');
}
verifyOption3CanBeSelected(){
    DropdownPage.getSelectAndDisabledDropdown.should('exist').select(2).invoke('val').should('eq', 'pear');
}
verifyOption4CanBeSelectedd(){
    DropdownPage.getSelectAndDisabledDropdown.should('exist').select(3).invoke('val').should('eq', 'grape');
}
}

export const dropdownStep = new DropdownStep