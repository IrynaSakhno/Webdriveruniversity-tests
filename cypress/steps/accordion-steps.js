import AccordionPage from "../padges/Accordion-page";

const accordionPage = new AccordionPage();

export default class AccordionStep {
    visitAccordionPage(){
        cy.visit('http://www.webdriveruniversity.com/Accordion/index.html')
        cy.url().should('include', 'Accordion');
}
verifyPageHeaderExist(){
    AccordionPage.getPageHeader.should('have.text', 'Click on One of the Accordian Items Below!');
}
verifyTextAppearBoxByPageOpening(){
    AccordionPage.getTextAppearBoxByPageOpening.should('have.text','LOADING.. PLEASE WAIT..');
    
}
verifyManualTestingTitleExistAndClicked(){
    AccordionPage.getManualTestingTitle.should('have.text', 'Manual Testing').click();
}
verifyCucumberTitleExistAndClicked(){
    AccordionPage.getCucumberTitle.should('have.text', 'Cucumber BDD').click();
}
verifyAutomationTestingTitleExistAndClicked(){
    AccordionPage.getAutoTestingTitle.should('have.text', 'Automation Testing').click();
}
verifyKeepClickingTitleExistAndClicked(){
    AccordionPage.getKeepClickingTitle.should('have.text', 'Keep Clicking! - Text will Appear After 5 Seconds!').click();
}

verifyManualTestingBodyIsVisible(){
    AccordionPage.getManualTestingBody.should('be.visible');
}

verifyCucumberBodyIsVisible(){
    AccordionPage.getCucumberBody.should('be.visible');
}
verifyAutomationTestingBodyIsVisible(){
    AccordionPage.getAutoTestingBody.should('be.visible');
}
verifyKeepClickingBodyNotVisible(){
    AccordionPage.getKeepClickingBody.should('not.be.visible');
}

verifyKeepClickingBodyAfter5Seconds(){
    AccordionPage.getManualTestingBody.should('be.visible');
}

verifyTextAppearBoxAfter5Seconds(){
    AccordionPage.getTextAppearBoxByPageOpening.should('have.text','LOADING COMPLETE.');
}


}

export const accordionStep = new AccordionStep