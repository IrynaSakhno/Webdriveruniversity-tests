import DatepickerPage from "../../padges/Datepicker-page";
import DatepickerStep from "../../steps/datepicker-steps";

const datepickerPage = new DatepickerPage();
const datepickerStep = new DatepickerStep();

describe("Check Datepicker Functionality", () => {

    it ("Check Main Elements on Datepicker page", () => {
        datepickerStep.visitDatepickerPage();
        datepickerStep.verifyPageHeaderExist();
        datepickerStep.verifySelectDateSubheaderExist()
        datepickerStep.verifyDivDatepickerExist();
        datepickerStep.verifyNextDate();
        datepickerStep.verifyDateIconExistAndClicked();
        datepickerStep.verifyCalendarHeader();
        
    })

    it("Check Current Date on the page", () => {
        datepickerStep.visitDatepickerPage();
        datepickerStep.verifyCurrentDate(); 
        
    })

    it("Check Next Date (+1 day, +1 month, +1 year)", () => {
        datepickerStep.visitDatepickerPage();
        datepickerStep.verifyNextDate();
        
    })

    it ("Choose Random Date", () => {
        datepickerStep.visitDatepickerPage();
        datepickerStep.checkRandomDate();
        
    })
})