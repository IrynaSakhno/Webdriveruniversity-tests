/// <reference types="Cypress" />
import { users } from "../../test data/users-test-data";
import ContactUsPage from "../../padges/Contact-us-page";

import {contactUsStep} from "../../steps/contact-us-step";


const contactUsPage = new ContactUsPage;
const userWithValidData = users [0];
const userEmptyEmail = users [1];
const userEmptyFirstName = users [2];


describe ('Contact Us form', () => {
  beforeEach(() => {
    contactUsStep.visit();
})
     it(`Open and fill in the Contact us form with test case name ${userWithValidData}`, () => {
     contactUsStep.fillContactUsForm(userWithValidData);
     contactUsStep.verifyContactUsForm(userWithValidData);
     contactUsStep.submitContactUsForm();
     contactUsStep.verifyThatSuccessMessageIsDisplayed();
     contactUsStep.openMainPage();
    })

   it(`Open and fill in the Contact us form with empty email field ${userEmptyEmail}`, () => {
    contactUsStep.fillContactUsForm(userEmptyEmail);
    contactUsStep.verifyContactUsForm(userEmptyEmail);
    contactUsStep.submitContactUsForm();
    contactUsStep.verifyThatTwoErrorsIsDisplayed();
  })

   it.only(`Open and fill in the Contact us form with empty First name field ${userEmptyFirstName}`, () => {
    contactUsStep.fillContactUsForm(userEmptyFirstName);
    contactUsStep.verifyContactUsForm(userEmptyFirstName);
    contactUsStep.submitContactUsForm();
    contactUsStep.verifyAllFieldsAreRequiredErrorIsDisplayed();
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
   