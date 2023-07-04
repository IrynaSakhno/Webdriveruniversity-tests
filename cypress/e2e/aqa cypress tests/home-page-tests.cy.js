/// <reference types="Cypress" />

import HomePage from "../../padges/home-page";
const homePage = new HomePage();

describe("Check all elements on the Home page", () => {
    it("Check Navigation block", () => {
        homePage.openHomePage();
        homePage.getHomeLink().should("have.text", "Home").click().url().should("eq","http://www.webdriveruniversity.com/Page-Object-Model/index.html");
        homePage.getOurProductsLink().click().url().should("eq","http://www.webdriveruniversity.com/Page-Object-Model/products.html");
        homePage.getContactUsLink().click().url().should("eq","http://www.webdriveruniversity.com/Contact-Us/contactus.html");

    })

    it("Check Images block", () => {
        homePage.openHomePage();
        homePage.getLeftArrow().click();
        homePage.thirdImgShows();
        homePage.getRightArrow().click();
        homePage.firstImgShows();
    })

    it("Check Who are we block", () => {
        homePage.openHomePage();
        homePage.getWhoAreWeText().should("have.text", "Who Are We?");
        homePage.getTextBelowWhoAreWe().should("have.text", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci. Praesent sed velit odio. Ut massa arcu, suscipit viverra molestie at, aliquet a metus. Nullam sit amet tellus dui, ut tincidunt justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        homePage.getFindOutMoreButton().should("have.text", "Find Out More!");
    })

    it("Check Greate Service block", () => {
        homePage.openHomePage();
        homePage.getGreatServiceHeader().should("have.text", "GREAT SERVICE!");
        homePage.getTextBelowGreatService().should('not.be.empty');
        homePage.getGreatServiceStars();
    })

    it("Check Why Choose Us block", () => {
        homePage.openHomePage();
        homePage.getWhyChooseUsHeader().should("have.text", "Why Choose Us?");
        homePage.getTextBelowGreatService().should('not.be.empty');
    })

    it("Check Excellent Customer Service block", () => {
        homePage.openHomePage();
        homePage.getExcellentCustomerServiceHeader().should("have.text", "Excellent Customer Service!");
        homePage.getTextBelowExcellentCustomerService().should("have.text", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci. ");
        homePage.getGreatServiceStars();
    })
})