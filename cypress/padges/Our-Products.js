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
    return cy.get('ul.nav.navbar-nav > li').should('have.length', 3)
}
    getSpecialOffersTitle(){
        return cy.get('.sub-heading').contains('Special Offers')
    }
    getSpecialOffersImg(){
        return cy.get('#amp-img')
    }

    getCamerasTitle(){
        return cy.get('.sub-heading').contains('Cameras')
    }
    getCamerasImg(){
        return cy.get('#camera-img')
    }

    getNewLaptopsTitle(){
        return cy.get('.sub-heading').contains('New Laptops')
    }
    getNewLaptopsImg(){
        return cy.get('#laptop1')
    }

    getUsedLaptopsTitle(){
        return cy.get('.sub-heading').contains('Used Laptops')
    }
    getUsedLaptopsImg(){
        return cy.get('#laptop2')
    }

    getConsolesTitle(){
        return cy.get('.sub-heading').contains('Game Consoles')
    }
    getConsolesImg(){
        return cy.get('#nintendo')
    }

    getComponentsTitle(){
        return cy.get('.sub-heading').contains('Components')
    }
    getComponentsImg(){
        return cy.get('#graphic-card')
    }

    getDesctopTitle(){
        return cy.get('.sub-heading').contains('Desktop Systems')
    }
    getDesctopImg(){
        return cy.get('#computer')
    }
    
    getAudioTitle(){
        return cy.get('.sub-heading').contains('Audio')
    }
    getAudioImg(){
        return cy.get('#boombox')
    }


    getModalPopup(){
        return cy.get('.modal-content')
    }
    getModalTitle(){
        return cy.get('.modal-title')
    }
    getModalCloseXbutton(){
        return cy.get('.close')
    }
    getModalBody(){
        return cy.get('.modal-body')
    }
    getModalProceedButton(){
        return cy.xpath('//div[@class="modal-footer"]/button[contains(text(), "Proceed")]')
    }
    getModalCloseButton(){
        return cy.xpath('//div[@class="modal-footer"]/button[contains(text(), "Close")]')
    }
}

export default OurProducts