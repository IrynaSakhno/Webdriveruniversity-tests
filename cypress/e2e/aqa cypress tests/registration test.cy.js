/// <reference types="Cypress" />
import { users } from "../../test data/users-test-data";
import contactUsPage from "../../padges/Contact-us-page";


const ContactUsPage = new contactUsPage ();
const userWithValidData = users [0];
const userEmptyEmail = users [1];
const userEmptyFirstName = users [2];

describe ('Contact Us form', () => {
  beforeEach(() => {
    ContactUsPage.visit();
})
     it(`Open and fill in the Contact us form with test case name ${userWithValidData}`, () => {
     ContactUsPage.fillContactUsForm(userWithValidData);
     ContactUsPage.getSuccessSubmitMessage().should('exist');
     ContactUsPage.getallFieldsAreRequiredError().should('not.exist');
     ContactUsPage.getInvalidEmailError().should('not.exist');
      // cy.get('h1').should('have.text', 'Thank You for your Message!');
   })

   it(`Open and fill in the Contact us form with empty email field ${userEmptyEmail}`, () => {
   ContactUsPage.fillContactUsForm(userEmptyEmail);
   ContactUsPage.getallFieldsAreRequiredError().should('exist');
   ContactUsPage.getInvalidEmailError().should('exist');
  })

   it(`Open and fill in the Contact us form with empty First name field ${userEmptyFirstName}`, () => {
   ContactUsPage.fillContactUsForm(userEmptyFirstName);
   ContactUsPage.getallFieldsAreRequiredError().should('exist');
   ContactUsPage.getInvalidEmailError().should('not.exist');
  })
})

//it(`Open and fill in the Contact us form without Email`, () => {
//  cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
//  fillContactUsForm(userWithoutEmail)
  //cy.contains('Error: Invalid email address').click();
 //  })

 //  it(`Open and fill in the Contact us form without first name`, () => {
  //  cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
  //  fillContactUsForm(userWithoutfirstname)
  // cy.contains('Error: all fields are required').click();
   //  })
   