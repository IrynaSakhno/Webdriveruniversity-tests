class DropdownPage{
    visitDropdownPage(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    }

    getPageHeader(){
        return cy.xpath('//div[@id="main-header"]//h1')
    }

    getDivByTitle(title){
        return cy.xpath(`//div[@class='thumbnail']/*[contains(text(), '${title}')]`)
    }

    getDropdownById(id){
        return cy.xpath(`//div[@class='thumbnail']/*[contains(text(), 'Dropdown Menu(s)')]/..//select[@id="dropdowm-menu-${id}"]`)
    }
    
    verifyAllDropdownOptions(arrayOfValues, dropdownID){
        arrayOfValues.forEach(value => {
            let el = value.toLowerCase().trim();
            this.getDropdownById(dropdownID).should('exist').select(value).invoke('val').should('eq', value);
        })
    }

    getCheckboxDiv(){
        return cy.xpath('//div[@id="checkboxes"]');
    }
    
    get1option(){
        return cy.xpath('//input[value="option-1"]');
    }

    get2option(){
        return cy.xpath('//input[value="option-2"]');
    }

    get3option(){
        return cy.xpath('//input[value="option-3"]');
    }

    get4option(){
        return cy.xpath('//input[value="option-4"]');
    }

    getAllCheckboxes(){
        return cy.get('input[type="checkbox"]');
    }

    getAllRadioButtons(){
        return cy.xpath(`//form[@id="radio-buttons"]//input[@type="radio"]`)
    }

    getRadioButtonsWithDisabled(){
        return cy.xpath(`//form[@id="radio-buttons-selected-disabled"]//input`)
    }

    getSelectAndDisabledDropdown(){
        return cy.xpath('//select[@id="fruit-selects"]')
    }
}

export default DropdownPage