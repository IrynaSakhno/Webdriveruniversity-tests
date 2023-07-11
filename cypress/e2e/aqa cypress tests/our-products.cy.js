/// <reference types="Cypress" />

import OurProducts from "../../padges/Our-Products";

const ourProducts = new OurProducts();

describe("Check all elements on the Home page", () => {
    beforeEach(() => {
        ourProducts.openOurProducts();
    })

    it("Check Navigation block (Home, Our products, Contact Us)", () => {
        ourProducts.getOrderOfNavigation();
        ourProducts.getHomeLink().should("have.text", "Home").click().url().should("eq","http://www.webdriveruniversity.com/Page-Object-Model/index.html");
        ourProducts.getOurProductsLink().click().url().should("eq","http://www.webdriveruniversity.com/Page-Object-Model/products.html");
        ourProducts.getContactUsLink().click().url().should("eq","http://www.webdriveruniversity.com/Contact-Us/contactus.html");
            })

    it("Check Special Offers block", () => {
        ourProducts.getSpecialOffersTitle().should("have.text", "Special Offers");
        ourProducts.getSpecialOffersImg().should('exist');

    })

    it("Check Modal Pop Up", () => {
        ourProducts.getSpecialOffersTitle().click();
        ourProducts.getModalPopup().should('exist');
        ourProducts.getModalTitle().should("contain", " - GET 30% OFF YOUR FIRST ORDER AT ");
        ourProducts.getModalBody().should('exist');
        ourProducts.getModalCloseXbutton().should('be.enabled');
        ourProducts.getModalProceedButton().should('be.enabled');
        ourProducts.getModalCloseButton().should('be.enabled').click();
        ourProducts.getModalPopup().should('not.be.visible');
    })

    it("Check Cameras block", () => {
        ourProducts.getCamerasTitle().should("have.text", "Cameras");
        ourProducts.getCamerasImg().should('exist');

    })

    it("Check New Laptop block", () => {
        ourProducts.getNewLaptopsTitle().should("have.text", "New Laptops");
        ourProducts.getNewLaptopsImg().should('exist');

    })

    it("Check Used Laptop block", () => {
        ourProducts.getUsedLaptopsTitle().should("have.text", "Used Laptops");
        ourProducts.getUsedLaptopsImg().should('exist');

    })

    it("Check Consoles block", () => {
        ourProducts.getConsolesTitle().should("have.text", "Game Consoles");
        ourProducts.getCamerasImg().should('exist');

    })

    it("Check Components block", () => {
        ourProducts.getComponentsTitle().should("have.text", "Components");
        ourProducts.getComponentsImg().should('exist');

    })

    it("Check Desctop Systems block", () => {
        ourProducts.getDesctopTitle().should("have.text", "Desktop Systems");
        ourProducts.getDesctopImg().should('exist');

    })

    it("Check Audio block", () => {
        ourProducts.getAudioTitle().should("have.text", "Audio");
        ourProducts.getAudioImg().should('exist');

    })


})