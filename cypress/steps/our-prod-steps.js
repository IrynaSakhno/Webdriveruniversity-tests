import OurProducts from "../padges/Our-Products";

const ourProducts = new OurProducts();

export default class OurProductStep {
    openOurProducts(){
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/products.html')
        cy.url().should('include', 'products');
}

verifyTopNavBarIsPresent(){
   OurProducts.getOrderOfNavigation.should('have.length', 3);
}
verifyHomeIsClicked(){
   OurProducts.getHomeLink.should("have.text", "Home").click().url().should("eq","http://www.webdriveruniversity.com/Page-Object-Model/index.html");
}
verifyOurProductIsClicked(){
   OurProducts.getOurProductsLink.click().url().should("eq","http://www.webdriveruniversity.com/Page-Object-Model/products.html");
}
verifyContactUsIsCliched(){
    OurProducts.getContactUsLink.click().url().should("eq","http://www.webdriveruniversity.com/Contact-Us/contactus.html");
}

verifySpecialOffersTitlePresent(){
    OurProducts.getSpecialOffersTitle.should("have.text", "Special Offers");
}

verifySpecialOffersImg(){
    OurProducts.getSpecialOffersImg.should('exist');
}

verifyModalPopUpExists(){
    OurProducts.getModalPopup.should('exist');
}

verifyModalTitleIsPresent(){
    OurProducts.getModalTitle.should("contain", " - GET 30% OFF YOUR FIRST ORDER AT ");
}

verifyModalBodyIsPresent(){
    OurProducts.getModalBody.should('exist');
}

verifyModalCloseXbuttonEnabled(){
    OurProducts.getModalCloseXbutton.should('be.enabled').click({force: true});
}

verifyModalProceedButtonEnabled(){
    OurProducts.getModalProceedButton.should('be.enabled').click({force: true});
}

verifyModalCloseButtonEnabled(){
    OurProducts.getModalCloseButton.should('be.enabled').click({force: true});
}

verifyModalPopUpNotVisible(){
    OurProducts.getModalPopup.should('not.be.visible');
}

verifyCamerasTitle(){
    OurProducts.getCamerasTitle.should("have.text", "Cameras");
}

verifyCamerasImg(){
    OurProducts.getCamerasImg.should('exist');
}

verifyNewLapTopsTitle(){
    OurProducts.getNewLaptopsTitle.should("have.text", "New Laptops");
}

verifyNewLapTopsImg(){
    OurProducts.getNewLaptopsImg.should('exist');
}

verifyUsedLapTopsTitle(){
    OurProducts.getUsedLaptopsTitle.should("have.text", "Used Laptops");
}

verifyUsedLapTopsImg(){
    OurProducts.getUsedLaptopsImg.should('exist');
}

verifyConsolesTitle(){
    OurProducts.getConsolesTitle.should("have.text", "Game Consoles");
}

verifyConsolesImg(){
    OurProducts.getConsolesImg.should('exist');
}

verifyComponentsTitle(){
    OurProducts.getComponentsTitle.should("have.text", "Components");
}

verifyComponentsImg(){
    OurProducts.getComponentsImg.should('exist');
}

verifyDesctopsTitle(){
    OurProducts.getDesctopTitle.should("have.text", "Desktop Systems");
}

verifyDesctopsImg(){
    OurProducts.getDesctopImg.should('exist');
}

verifyAudioTitle(){
    OurProducts.getAudioTitle.should("have.text", "Audio");
}

verifyAudioImg(){
    OurProducts.getAudioImg.should('exist');
}
}

export const ourProductStep = new OurProductStep