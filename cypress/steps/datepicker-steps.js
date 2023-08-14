import DatepickerPage from "../padges/Datepicker-page";

const datepickerPage = new DatepickerPage();

export default class DatepickerStep {
    visitDatepickerPage(){
        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        cy.url().should('include', 'Datepicker');
}
verifyPageHeaderExist(){
    DatepickerPage.getPageHeader.should('have.text', 'Datepicker');
}
verifySelectDateSubheaderExist(){
    DatepickerPage.getSelectDateLabel.should('have.text', 'Select Date: ');
}
verifyDivDatepickerExist(){
    DatepickerPage.getDivDatepicker.should('exist');
}
verifyCurrentDate() {
    // Отримую поточну дату у форматі mm-dd-yyyy
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const year = today.getFullYear();
    const currentDate = `${month}-${day}-${year}`;
    //let currentDate = dayjs().format('MM-DD-YYYY')
    // перевіряю, що поточна дата відображається всередині елемента:
    
    DatepickerPage.getInputField.invoke('val').should('eq', currentDate);         
  }


verifyNextDate(){
    Cypress.Commands.add('addDaysMonthsYearsToDate', (days, months, years) => {
        const currentDate = new Date();
        const futureDate = new Date(
          currentDate.getFullYear() + years,
          currentDate.getMonth() + months,
          currentDate.getDate() + days
        );
  
        const futureDateString = `${futureDate.getMonth() + 1}-${futureDate.getDate()}-${futureDate.getFullYear()}`;

      });
  
    DatepickerPage.getInputField.invoke('val').then($val => {
        cy.wrap($val).addDaysMonthsYearsToDate(1, 1, 1);
})
}

verifyDateIconExistAndClicked(){
    DatepickerPage.getDateIcon.should('exist').click();
    DatepickerPage.getCalendar.should('exist');                            // як перевірити, що відкривається календар?
}
verifyCalendarHeader(){
    DatepickerPage.getPreviousButton.should('contain', '«');
    DatepickerPage.getMounth.should('contain', 'August 2023');
    DatepickerPage.getNextButton.should('contain', '»');
    DatepickerPage.getDaysOfWeek.each($el => {
        let el = $el
        cy.wrap(el).should('exist');
      })
}

checkRandomDate(){
    DatepickerPage.getDateIcon.click();
    DatepickerPage.getMounth.click();
    DatepickerPage.getYear.click();
    DatepickerPage.getListOfYears.then($elements => {
        const randomIndex = Math.floor(Math.random() * $elements.length);
        const randomElement = $elements[randomIndex];
        cy.wrap(randomElement).click();
      });
    DatepickerPage.getListOfMonths.then($elements => {
        const randomIndex = Math.floor(Math.random() * $elements.length);
        const randomElement = $elements[randomIndex];
      
        cy.wrap(randomElement).click();
      });
      DatepickerPage.getListOfDays.then($elements => {
        const randomIndex = Math.floor(Math.random() * $elements.length);
        const randomElement = $elements[randomIndex];
        cy.wrap(randomElement).click();
      });
    }

verifyRandomDate(){
  const selectedDate = `${randomMonthIndex + 1}-${randomDayElement.text()}-${randomYearElement.text()}`;
    DatepickerPage.getInputField().should('have.value', selectedDate);
}


}

export const datepickerStep = new DatepickerStep