class OurProducts{
    
    static get getHomeLink(){
        return cy.contains('Home')
    }
    static get getOurProductsLink(){
        return cy.contains('Our Products')    
    }
    static get getContactUsLink(){
        return cy.contains('Contact Us')    
    }
    static get getOrderOfNavigation (){
    return cy.xpath('//ul[@class="nav navbar-nav"]/li')
}
    static get getSpecialOffersTitle(){
        return cy.xpath('//p[@class="sub-heading"]').contains('Special Offers')
    }
    static get getSpecialOffersImg(){
        return cy.xpath('//img[@id="amp-img"]')
    }

    static get getCamerasTitle(){
        return cy.xpath('//p[@class="sub-heading"]').contains('Cameras')
    }
    static get getCamerasImg(){
        return cy.xpath('//img[@id="camera-img"]')
    }

    static get getNewLaptopsTitle(){
        return cy.xpath('//p[@class="sub-heading"]').contains('New Laptops')
    }
    static get getNewLaptopsImg(){
        return cy.xpath('//img[@id="laptop1"]')
    }

    static get getUsedLaptopsTitle(){
        return cy.xpath('//p[@class="sub-heading"]').contains('Used Laptops')
    }
    static get getUsedLaptopsImg(){
        return cy.xpath('//img[@id="laptop2"]')
    }

    static get getConsolesTitle(){
        return cy.xpath('//p[@class="sub-heading"]').contains('Game Consoles')
    }
    static get getConsolesImg(){
        return cy.xpath('//img[@id="nintendo"]')
    }

    static get getComponentsTitle(){
        return cy.xpath('//p[@class="sub-heading"]').contains('Components')
    }
    static get getComponentsImg(){
        return cy.xpath('//img[@id="graphic-card"]')
    }

    static get getDesctopTitle(){
        return cy.xpath('//p[@class="sub-heading"]').contains('Desktop Systems')
    }
    static get getDesctopImg(){
        return cy.xpath('//img[@id="computer"]')
    }
    
    static get getAudioTitle(){
        return cy.xpath('//p[@class="sub-heading"]').contains('Audio')
    }
    static get getAudioImg(){
        return cy.xpath('//img[@id="boombox"]')
    }


    static get getModalPopup(){
        return cy.xpath('//div[@class="modal-content"]')
    }
    static get getModalTitle(){
        return cy.xpath('//h4[@class="modal-title"]')
    }
    static get getModalCloseXbutton(){
        return cy.xpath('//button[@class="close"]')
    }
    static get getModalBody(){
        return cy.xpath('//div[@class="modal-body"]')
    }
    static get getModalProceedButton(){
        return cy.xpath('//div[@class="modal-footer"]/button[contains(text(), "Proceed")]')
    }
    static get getModalCloseButton(){
        return cy.xpath('//div[@class="modal-footer"]/button[contains(text(), "Close")]')
    }
}

export default OurProducts