import { errors } from "../test data/errors"

class contactUsPage{
    visit(){
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    }
getFirstName(){
    return cy.get('input[name="first_name"]')
}
getLastName(){
    return cy.get('input[name="last_name"]')   
}
getEmail(){
    return cy.get('input[name="email"]')
}
getComments () {
    return cy.get('textarea[name="message"]')
}

getResetButton () {
    return cy.get('#form_buttons').contains('RESET')
}

getSubmitButton () {
    return cy.get('#form_buttons').contains('SUBMIT')
}

getContactUsHeader () {
    return cy.get('name="contactme"')
}

getSuccessSubmitMessage () {
    return cy.get('div#contact_reply > h1').contains('Thank You for your Message!')
}

fillContactUsForm(user) {
    if (user.first_name) {
      this.getFirstName().type(user.first_name);
    }
    if (user.last_name) {
      this.getLastName().type(user.last_name);
    }
    if (user.email) {
      this.getEmail().type(user.email);
    }
    if (user.comment) {
      this.getComments().type(user.comment);
    }
    this.getSubmitButton().click(); 
  }

  getInvalidEmailError() {
    return cy.contains(errors.invalidEamil)
}

  getallFieldsAreRequiredError() {
    return cy.contains(errors.allFieldsAreRequired)
}

}

export default contactUsPage