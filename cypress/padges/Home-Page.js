class HomePage{
    openHomePage(){
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/index.html')
    }
    getLeftArrow(){
        return cy.xpath('//span[@class="glyphicon glyphicon-chevron-left"]')
    }
    thirdImgShows() {
        return cy.get(".active > #slide-image-3").should("be.visible");
      }
    getRightArrow(){
        return cy.xpath('//span[@class="glyphicon glyphicon-chevron-right"]')
    }
    firstImgShows() {
        return cy.xpath('//div[@class="item"]/img[@id="slide-image-1"]').should("be.visible");
      }
    getCarouselIndicator(){
        return cy.get('ol.carousel-indicators')
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
    getWhoAreWeText(){
        return cy.contains("Who Are We?").should("have.text", "Who Are We?")
    }
    getTextBelowWhoAreWe(){
        return cy.get('div.caption').eq(0).children().contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci. Praesent sed velit odio. Ut massa arcu, suscipit viverra molestie at, aliquet a metus. Nullam sit amet tellus dui, ut tincidunt justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
    }
    getFindOutMoreButton(){
        return cy.get('#button-find-out-more').contains('Find Out More!')
    }
    getGreatServiceHeader(){
        return cy.contains('GREAT SERVICE!').should('have.text', 'GREAT SERVICE!')
    }
    getGreatServiceStars(){
        return cy.get('.div-star').eq(0).children()
    }
    getTextBelowGreatService(){
        return cy.get('div[class="caption"]').eq(1).children()
    }
    getWhyChooseUsHeader(){
        return cy.contains("Why Choose Us?").should("have.text", "Why Choose Us?")
    }
    getTextBelowWhyChooseUs(){
        return cy.get('div.caption').eq(2).children().contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci.')
    }
    getExcellentCustomerServiceHeader(){
        return cy.contains('Excellent Customer Service!').should('have.text', 'Excellent Customer Service!')
    }
    getExcellentCustomerServiceStars(){
        return cy.get('.div-star').eq(1).find('span')
    }
    getTextBelowExcellentCustomerService(){
        return cy.get('div.caption').eq(3).children().contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci. ')
    }
}

export default HomePage