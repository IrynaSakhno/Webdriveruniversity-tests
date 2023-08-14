class DropdownPage{
    
    static get getPageHeader(){
        return cy.xpath('//div[@id="main-header"]//h1')
    }

    static getDivByTitle(title){
        return cy.xpath(`//div[@class='thumbnail']/*[contains(text(), '${title}')]`)
    }

    static getDropdownById(id){
        return cy.xpath(`//div[@class='thumbnail']/*[contains(text(), 'Dropdown Menu(s)')]/..//select[@id="dropdowm-menu-${id}"]`)
    }
    
    static verifyAllDropdownOptions(arrayOfValues, dropdownID){
        arrayOfValues.forEach(value => {
            let el = value.toLowerCase().trim();
            this.getDropdownById(dropdownID).should('exist').select(value).invoke('val').should('eq', value);
        })
    }

    //static get getCheckboxDiv(){
    //    return cy.xpath('//div[@id="checkboxes"]');
    //}
    
    //static get get1option(){
    //    return cy.xpath('//input[value="option-1"]');
    //}

    //static get get2option(){
    //    return cy.xpath('//input[value="option-2"]');
    //}

    //static get get3option(){
     //   return cy.xpath('//input[value="option-3"]');
    //}

    //static get get4option(){
    //    return cy.xpath('//input[value="option-4"]');
    //}

    static get getAllCheckboxes(){
        return cy.get('input[type="checkbox"]');
    }

    static get getAllRadioButtons(){
        return cy.xpath(`//form[@id="radio-buttons"]//input[@type="radio"]`)
    }

    static get getRadioButtonsWithDisabled(){
        return cy.xpath(`//form[@id="radio-buttons-selected-disabled"]//input`)
    }

    static get getLettuceRadioButton(){
    return cy.xpath(`//input[@value="lettuce"]`)
}

    static get getCabbageRadioButton(){
    return cy.xpath(`//input[@value="cabbage"]`)
}

    static get getSelectAndDisabledDropdown(){
        return cy.xpath('//select[@id="fruit-selects"]')
    }

    static get getOrangeValueInDropdown(){
        return cy.xpath('//option[@value="orange"]')
    }

}
export default DropdownPage