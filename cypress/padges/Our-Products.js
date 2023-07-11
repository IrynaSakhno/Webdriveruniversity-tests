class OurProducts{
    openOurProducts(){
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/products.html')
    }
    getHomeLink(){
        return cy.contains('Home')
    }
    getOurProductsLink(){
        return cy.contains('Our Products')    
    }
    getContactUsLink(){
        return cy.contains('Contact Us')    
    }
    getOrderOfNavigation (){
    return cy.xpath('//ul[@class="nav navbar-nav"]/li').should('have.length', 3)
}
    getSpecialOffersTitle(){
        return cy.xpath('//p[@class="sub-heading"]').contains('Special Offers')
    }
    getSpecialOffersImg(){
        return cy.xpath('//img[@id="amp-img"]')
    }

    getCamerasTitle(){
        return cy.xpath('//p[@class="sub-heading"]').contains('Cameras')
    }
    getCamerasImg(){
        return cy.xpath('//img[@id="camera-img"]')
    }

    getNewLaptopsTitle(){
        return cy.xpath('//p[@class="sub-heading"]').contains('New Laptops')
    }
    getNewLaptopsImg(){
        return cy.xpath('//img[@id="laptop1"]')
    }

    getUsedLaptopsTitle(){
        return cy.xpath('//p[@class="sub-heading"]').contains('Used Laptops')
    }
    getUsedLaptopsImg(){
        return cy.xpath('//img[@id="laptop2"]')
    }

    getConsolesTitle(){
        return cy.xpath('//p[@class="sub-heading"]').contains('Game Consoles')
    }
    getConsolesImg(){
        return cy.xpath('//img[@id="nintendo"]')
    }

    getComponentsTitle(){
        return cy.xpath('//p[@class="sub-heading"]').contains('Components')
    }
    getComponentsImg(){
        return cy.xpath('//img[@id="graphic-card"]')
    }

    getDesctopTitle(){
        return cy.xpath('//p[@class="sub-heading"]').contains('Desktop Systems')
    }
    getDesctopImg(){
        return cy.xpath('//img[@id="computer"]')
    }
    
    getAudioTitle(){
        return cy.xpath('//p[@class="sub-heading"]').contains('Audio')
    }
    getAudioImg(){
        return cy.xpath('//img[@id="boombox"]')
    }


    getModalPopup(){
        return cy.xpath('//div[@class="modal-content"]')
    }
    getModalTitle(){
        return cy.xpath('//h4[@class="modal-title"]')
    }
    getModalCloseXbutton(){
        return cy.xpath('//button[@class="close"]')
    }
    getModalBody(){
        return cy.xpath('//div[@class="modal-body"]')
    }
    getModalProceedButton(){
        return cy.xpath('//div[@class="modal-footer"]/button[contains(text(), "Proceed")]')
    }
    getModalCloseButton(){
        return cy.xpath('//div[@class="modal-footer"]/button[contains(text(), "Close")]')
    }
}

export default OurProducts