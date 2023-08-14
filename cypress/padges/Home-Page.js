class HomePage{

    static get getLeftArrow(){
        return cy.xpath('//span[@class="glyphicon glyphicon-chevron-left"]');
    }
    static get thirdImgShows() {
        return cy.xpath('//img[@id="slide-image-3"]');
      }
    static get getRightArrow(){
        return cy.xpath('//span[@class="glyphicon glyphicon-chevron-right"]');
    }
    static get firstImgShows() {
        return cy.xpath('//img[@id="slide-image-1"]');
      }
    static  get getCarouselIndicator(){
        return cy.xpath('//ol[@class="carousel-indicators"]')
    }
    static get getHomeLink(){
        return cy.contains('Home')
    }
    static get getOurProductsLink(){
        return cy.contains('Our Products')    
    }
    static get getContactUsLink(){
        return cy.contains('Contact Us')    
    }
    static get getWhoAreWeHeader(){
        return cy.contains("Who Are We?").should("have.text", "Who Are We?")
    }
    static get getTextBelowWhoAreWe(){
        return cy.get('div.caption').eq(0).children().contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci. Praesent sed velit odio. Ut massa arcu, suscipit viverra molestie at, aliquet a metus. Nullam sit amet tellus dui, ut tincidunt justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
    }
    static get getFindOutMoreButton(){
        return cy.xpath('//button[@id="button-find-out-more"]').contains('Find Out More!')
    }
    static get getGreatServiceHeader(){
        return cy.contains('GREAT SERVICE!').should('have.text', 'GREAT SERVICE!')
    }
    static get getGreatServiceStars(){
        return cy.xpath('//div[@class="div-star"]').eq(0).children()
    }
    static get getTextBelowGreatService(){
        return cy.xpath('//div[@class="caption"]').eq(1).children()
    }
    static get getWhyChooseUsHeader(){
        return cy.contains("Why Choose Us?").should("have.text", "Why Choose Us?")
    }
    static get getTextBelowWhyChooseUs(){
        return cy.get('div.caption').eq(2).children().contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci.')
    }
    static get getExcellentCustomerServiceHeader(){
        return cy.contains('Excellent Customer Service!').should('have.text', 'Excellent Customer Service!')
    }
    static get getExcellentCustomerServiceStars(){
        return cy.get('.div-star').eq(1).find('span')
    }
    static get getTextBelowExcellentCustomerService(){
        return cy.get('div.caption').eq(3).children().contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci. ')
    }

    static get getPopUp(){
        return cy.xpath('//div[@class="modal-content"]')
    }
    static get getPopUpTitle(){
        return cy.xpath('//h4[@class="modal-title"]')
    }
    static get getPopUpBody(){
        return cy.xpath('//div[@class="modal-body"]')
    }
    static get getPopUpCloseXbutton(){
        return cy.xpath('//button[@class="close"]')
    }
    static get getPopUpFindOutMoreButton(){
        return cy.xpath('//div[@class="modal-footer"]/button[contains(text(), "Find Out More")]')
    }
    static get getPopUpCloseButton(){
        return cy.xpath('//div[@class="modal-footer"]/button[contains(text(), "Close")]')
    }
}

export default HomePage