import HomePage from "../padges/Home-Page";

const homePage = new HomePage();

export default class HomePageStep {
    visit(){
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/index.html');
        cy.url().should('include', 'Page-Object-Model');
}

verifyLeftArrowExistsAndCanBeClicked(){
    HomePage.getLeftArrow.should('exist').click();
}

verifyImageIsChanged1(){
    HomePage.thirdImgShows.should("be.visible");
    }

verifyRightArrowExistsAndCanBeClicked(){
    HomePage.getRightArrow.should('exist').click();
}

verifyImageIsChanged2(){
    HomePage.firstImgShows.should("be.visible");
}

verifyHomeInNavBAr(){
    HomePage.getHomeLink.should("have.text", "Home").click().url().should("eq","http://www.webdriveruniversity.com/Page-Object-Model/index.html");
}

verifyOurProductsInNavBAr(){
    HomePage.getOurProductsLink.click().url().should("eq","http://www.webdriveruniversity.com/Page-Object-Model/products.html");
}

verifyContactUsInNavBAr(){
    HomePage.getContactUsLink.click().url().should("eq","http://www.webdriveruniversity.com/Contact-Us/contactus.html");
}

verifyWhoAreWeHeaderIsPresent(){
    HomePage.getWhoAreWeHeader.should("have.text", "Who Are We?");
}
verifyWhoAreWeTextIsPresent(){
    HomePage.getTextBelowWhoAreWe.should("have.text", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci. Praesent sed velit odio. Ut massa arcu, suscipit viverra molestie at, aliquet a metus. Nullam sit amet tellus dui, ut tincidunt justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
}

verifyFindOutButtonPresentAndClicked(){
    HomePage.getFindOutMoreButton.should("have.text", "Find Out More!").click();
}


verifyPopUpIsOpened(){
    HomePage.getPopUp.should('exist');
}

verifyPopUpIsClosed(){
    HomePage.getPopUp.should('not.be.visible')
}

verifyPopUpTitleIsPresent(){
    HomePage.getPopUpTitle.should("contain", "Welcome to ");
}

verifyPopUpBodyIsPresent(){
    HomePage.getPopUpBody.should('exist');
}

verifyFindButtonPresentAndClicked(){
    HomePage.getFindOutMoreButton.should('be.enabled').click();
    }

verifyCloseButtonPresentAndClicked(){
    HomePage.getPopUpCloseButton.should('be.enabled').click();
    }

verifyXButtonPresentAndClicked(){
    HomePage.getPopUpCloseXbutton.should('be.enabled').click();
    }

verifyGrServiceHeaderIsPresent(){
    HomePage.getGreatServiceHeader.should("have.text", "GREAT SERVICE!");
}

verifyGrServiceStarsIsPresent(){
    HomePage.getGreatServiceStars.should('exist');   
}

verifyGrServiceTextIsPresent(){
    HomePage.getTextBelowGreatService.should('not.be.empty');   
}

verifyWhyChooseUsHeaderIsPresent(){
    HomePage.getWhyChooseUsHeader.should("have.text", "Why Choose Us?");
}

verifyWhyChooseUsTextIsPresent(){
    HomePage.getTextBelowWhyChooseUs.should('not.be.empty');
}

verifyExServiceHeaderIsPresent(){
    HomePage.getExcellentCustomerServiceHeader.should("have.text", "Excellent Customer Service!");
}

verifyExServiceStarsIsPresent(){
    HomePage.getGreatServiceStars.should('exist');   
}

verifyExServiceTextIsPresent(){
    HomePage.getTextBelowExcellentCustomerService.should('not.be.empty');   
}

}

export const homePageStep = new HomePageStep