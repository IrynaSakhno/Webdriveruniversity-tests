import AccordionPage from "../../padges/Accordion-page";
import AccordionStep from "../../steps/accordion-steps";

const accordionPage = new AccordionPage();
const accordionStep = new AccordionStep();

describe("Accordion Items and Text Appear", () => {
    beforeEach(() => {
        accordionStep.visitAccordionPage();
    })

        it("Check Page Header and Text in Appear box", () => {
        accordionStep.verifyPageHeaderExist();
        accordionStep.verifyTextAppearBoxByPageOpening();
        cy.wait(8000);
        accordionStep.verifyTextAppearBoxAfter5Seconds();
    })

        it ("Check all accordion title and body", () => {
        accordionStep.verifyManualTestingTitleExistAndClicked();
        accordionStep.verifyManualTestingBodyIsVisible();
        accordionStep.verifyCucumberTitleExistAndClicked();
        accordionStep.verifyCucumberBodyIsVisible();
        accordionStep.verifyAutomationTestingTitleExistAndClicked();
        accordionStep.verifyAutomationTestingBodyIsVisible();
        accordionStep.verifyKeepClickingTitleExistAndClicked();
        accordionStep.verifyKeepClickingBodyAfter5Seconds();
    })


})

