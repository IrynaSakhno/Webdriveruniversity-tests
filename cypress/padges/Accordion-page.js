class AccordionPage{
    
    static get getPageHeader(){
        return cy.xpath('//div[@id="main-header"]//h1')
    }

    static get getTextAppearBoxByPageOpening(){
        return cy.xpath('//div[@id="text-appear-box"]/p')
    }

    static get getManualTestingTitle(){
            return cy.xpath(`//button[@id='manual-testing-accordion']`)
        }

    static get getCucumberTitle(){
            return cy.xpath(`//button[@id='cucumber-accordion']`)
        }

    static get getAutoTestingTitle(){
            return cy.xpath(`//button[@id='automation-accordion']`)
        }
        
    static get getKeepClickingTitle(){
        return cy.xpath(`//button[@id='click-accordion']`)
    }

    static get getManualTestingBody(){
        return cy.xpath(`//div[@id="manual-testing-description"]/p`)
    }

static get getCucumberBody(){
        return cy.xpath(`//div[@id="cucumber-testing-description"]/p`)
    }

static get getAutoTestingBody(){
        return cy.xpath(`//div[@id="automation-testing-description"]/p`)
    }
    
static get getKeepClickingBody(){
    return cy.xpath(`//div[@id="timeout"]`)
}

}

export default AccordionPage