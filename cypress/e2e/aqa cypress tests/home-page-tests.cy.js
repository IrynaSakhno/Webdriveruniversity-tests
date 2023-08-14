/// <reference types="Cypress" />

import HomePage from "../../padges/Home-Page";
import HomePageStep from "../../steps/home-page-steps";

const homePage = new HomePage();
const homePageStep = new HomePageStep();

describe("Check all elements on the Home page", () => {
    
    it("Check Carousel with Images", () => {
        homePageStep.visit();
        homePageStep.verifyLeftArrowExistsAndCanBeClicked();
        homePageStep.verifyImageIsChanged1();
        homePageStep.verifyRightArrowExistsAndCanBeClicked();
        homePageStep.verifyImageIsChanged2();
    })

    it("Check Navigation block", () => {
        homePageStep.visit();
        homePageStep.verifyHomeInNavBAr();
        homePageStep.verifyOurProductsInNavBAr();
        homePageStep.verifyContactUsInNavBAr();
    })

    it("Check Who are we block", () => {
        homePageStep.visit();
        homePageStep.verifyWhoAreWeHeaderIsPresent();
        homePageStep.verifyWhoAreWeTextIsPresent();
        homePageStep.verifyFindOutButtonPresentAndClicked();
    })

    it("Check Modal Pop Up", () => {
        homePageStep.verifyPopUpIsOpened();
        homePageStep.verifyPopUpTitleIsPresent();
        homePageStep.verifyPopUpBodyIsPresent();
        homePageStep.verifyFindButtonPresentAndClicked();
        homePageStep.verifyPopUpIsClosed();
        homePageStep.verifyFindOutButtonPresentAndClicked();
        homePageStep.verifyCloseButtonPresentAndClicked();
        homePageStep.verifyPopUpIsClosed();
        homePageStep.verifyXButtonPresentAndClicked()
        homePageStep.verifyPopUpIsClosed();
    })

    it("Check Greate Service block", () => {
        homePageStep.visit();
        homePageStep.verifyGrServiceHeaderIsPresent();
        homePageStep.verifyGrServiceStarsIsPresent();
        homePageStep.verifyGrServiceTextIsPresent();
    })

    it("Check Why Choose Us block", () => {
        homePageStep.visit();
        homePageStep.verifyWhyChooseUsHeaderIsPresent();
        homePageStep.verifyWhyChooseUsTextIsPresent();
    })

    it("Check Excellent Customer Service block", () => {
        homePageStep.visit();
        homePageStep.verifyExServiceHeaderIsPresent();
        homePageStep.verifyGrServiceStarsIsPresent();
        homePageStep.verifyExServiceTextIsPresent();
    })
})