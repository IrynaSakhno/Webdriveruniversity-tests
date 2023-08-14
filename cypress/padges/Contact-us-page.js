import { errors } from "../test data/errors"

class ContactUsPage{

static get getFirstName(){
    return cy.xpath('//input[@name="first_name"]')
}

static get getLastName(){
    return cy.get('input[name="last_name"]')   
}

static get getEmail(){
    return cy.get('input[name="email"]')
}

static get getComments () {
    return cy.get('textarea[name="message"]')
}

static get getResetButton () {
    return cy.xpath('//div[@id="form_buttons"]').contains('RESET')
}

static get getSubmitButton () {
    return cy.xpath('//div[@id="form_buttons"]').contains('SUBMIT')
}

static get getContactUsHeader () {
    return cy.get('name="contactme"')
}

static get getSuccessSubmitMessage () {
    return cy.xpath('//div[@id="contact_reply"]/child::h1').contains('Thank You for your Message!')
}

  static get getInvalidEmailError() {
    return cy.contains(errors.invalidEamil)
}

static get getAllFieldsAreRequiredError() {
    return cy.contains(errors.allFieldsAreRequired)
}

static fillContactUsForm(user){
    if (user.first_name) {
      this.getFirstName.type(user.first_name);
    }
    if (user.last_name) {
        this.getLastName.type(user.last_name);
    }
    if (user.email) {
        this.getEmail.type(user.email);
    }
    if (user.comment) {
        this.getComments.type(user.comment);
    }
}

}

export default ContactUsPage