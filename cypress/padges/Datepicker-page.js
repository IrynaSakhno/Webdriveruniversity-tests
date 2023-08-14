class DatepickerPage{
    
    static get getPageHeader(){
        return cy.xpath('//div[@id="main-header"]//h1')
    }

    static get getSelectDateLabel(){
            return cy.xpath('//div[@class="col-sm-12"]/label')
        }

    static get getDivDatepicker(){
            return cy.xpath('//div[@id="datepicker"]')
        }
    static get getInputField(){
            return cy.xpath('//input[@class="form-control"]')
        }
    static get getDateIcon(){
            return cy.xpath('//span[@class="input-group-addon"]')
        }
    static get getCalendar(){
            return cy.xpath('//div[@class="datepicker datepicker-dropdown dropdown-menu datepicker-orient-left datepicker-orient-top"]')
        }

        static get getPreviousButton(){
            return cy.xpath('//table[@class=" table-condensed"]//th[@class="prev"]')
        }
        static get getMounth(){
            return cy.xpath('//th[@class="datepicker-switch"]').eq(0)
        }
        static get getNextButton(){
            return cy.xpath('//table[@class=" table-condensed"]//th[@class="next"]')
        }
        static get getDaysOfWeek(){
            return cy.xpath('//th[@class="dow"]')
        }
        static get getYear(){
            return cy.xpath('//th[@class="datepicker-switch"]').eq(1)
        }
        static get getListOfYears(){
            return cy.xpath('//div[@class="datepicker-years"]//span')
        }
        static get getListOfMonths(){
            return cy.xpath('//div[@class="datepicker-months"]//span')
        }
        static get getListOfDays(){
            return cy.xpath('//div[@class="datepicker-days"]//td')
        }

        getCurrentYear() {
            const currentDate = new Date();
            return currentDate.getFullYear();
           }
          getCurrentMonth() {
            const currentDate = new Date();
            return currentDate.getMonth()+1;
           }
          getCurrentDate() {
            const currentDate = new Date();
            return currentDate.getDate();
           }

}


export default DatepickerPage