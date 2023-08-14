/// <reference types="Cypress" />

import OurProducts from "../../padges/Our-Products";
import OurProductStep from "../../steps/our-prod-steps";

const ourProducts = new OurProducts();
const ourProductStep = new OurProductStep();

describe("Check all elements on the Products page", () => {
    beforeEach(() => {
        ourProductStep.openOurProducts();
    })

    it("Check Navigation block (Home, Our Products, Contact Us)", () => {
        ourProductStep.verifyTopNavBarIsPresent();
        ourProductStep.verifyHomeIsClicked();
        ourProductStep.verifyOurProductIsClicked();
        ourProductStep.verifyContactUsIsCliched();
            })

    it("Check Special Offers block", () => {
        ourProductStep.verifySpecialOffersTitlePresent();
        ourProductStep.verifySpecialOffersImg();

    })

    it.only("Check Modal Pop Up", () => {
        ourProductStep.verifyModalPopUpExists();
        ourProductStep.verifyModalTitleIsPresent();
        ourProductStep.verifyModalBodyIsPresent();
        ourProductStep.verifyModalCloseXbuttonEnabled();
        ourProductStep.verifyModalProceedButtonEnabled();
        ourProductStep.verifyModalCloseButtonEnabled();
        ourProductStep.verifyModalPopUpNotVisible();
    })

    it("Check Cameras block", () => {
        ourProductStep.verifyCamerasTitle();
        ourProductStep.verifyCamerasImg();

    })

    it("Check New Laptop block", () => {
        ourProductStep.verifyNewLapTopsTitle();
        ourProductStep.verifyNewLapTopsImg();

    })

    it("Check Used Laptop block", () => {
        ourProductStep.verifyUsedLapTopsTitle();
        ourProductStep.verifyUsedLapTopsImg();

    })

    it("Check Consoles block", () => {
        ourProductStep.verifyConsolesTitle();
        ourProductStep.verifyConsolesImg();

    })

    it("Check Components block", () => {
        ourProductStep.verifyComponentsTitle();
        ourProductStep.verifyComponentsImg();

    })

    it("Check Desctop Systems block", () => {
        ourProductStep.verifyDesctopsTitle();
        ourProductStep.verifyDesctopsImg();

    })

    it("Check Audio block", () => {
        ourProductStep.verifyAudioTitle();
        ourProductStep.verifyAudioImg();

    })


})