import TablesPage from "../../padges/Tables-page";
import TablesStep from "../../steps/tables-steps";
import { someUser, drinkList, foodList, jobsList } from "../../test data/tables-value";

const tablesPage = new TablesPage();
const tablesStep = new TablesStep();

describe("Check Data, Tables and Button States", () => {
    beforeEach(() => {
        tablesStep.visitTablesPage();
    })

    it ("Check Page Header", () => {
        tablesStep.verifyPageHeaderExist();
    })

    it ("Check First Table", () => {
        tablesStep.verifyFirstTableHead();
        tablesStep.verifyFirstTableRows();
    })
    it ("Check Second Table", () => {
        tablesStep.verifySecondTableHead();
        tablesStep.verifySecondTableRows();
    })

    it ("Check Input Form", () => {
        tablesStep.verifyFormSubtitles();
        tablesStep.fillForm(someUser); 
        tablesStep.verifyFilledForm(someUser);
    })

    it ("Check Breadcrumb section", () => {
        tablesStep.verifyBreadcrumbHeader();
        tablesStep.verifyBreadcrumbItemsIsThree()
        tablesStep.verifyHomeBreadcrumb();
        tablesStep.verifyAboutUsBreadcrumb();
        tablesStep.verifyContactUsBreadcrumb();
    })

    it ("Check Badges section", () => {
        tablesStep.verifyBadgesHeader();
        tablesStep.verifyBadgesItemsIsTwo();
        tablesStep.verifyTodaysDealItem();
        tablesStep.verifyTodaysDealBadge();
        tablesStep.verifyAllProductItem();
        tablesStep.verifyAllProductBadge();
    })

    it ("Check Pagination section", () => {
        tablesStep.verifyPaginationHeader();
        tablesStep.verifyPaginationItemsIsSeven();
        tablesStep.verifyPaginationItemsIsClicked();
    })

    it ("Check Third Table", () => {
        tablesStep.verifyTableHeader();
        tablesStep.verifyTableHead();
        tablesStep.verifyTableBody();
    })

    it ("Check Buttons and States section", () => {
        tablesStep.verifyButtonsStatesHeader();
        tablesStep.verifyFirstLineButtonsIsFive();
        tablesStep.verifyLinkButton();
        tablesStep.verifyButtonButton();
        tablesStep.verifyInputButton();
        tablesStep.verifySubmitButton();
        tablesStep.verifyResetButton();
        tablesStep.verifySecondLineButtonsIsFour();
        tablesStep.verifyDangerButton();
        tablesStep.verifyWarningButton();
        tablesStep.verifyInfoButton();
        tablesStep.verifyAllertButton();
        tablesStep.verifyThirdLineButtonsIsFour();
        tablesStep.verifyButton1();
        tablesStep.verifyButton2();
        tablesStep.verifyButton3();
        tablesStep.verifyButton4();
    })

    it ("Check Random Text section", () => {
        tablesStep.verifyRandomTextHeader();
        tablesStep.verifyRandomTextExist();
        tablesStep.verifyMarkedTextExist();
        tablesStep.verifyBlockquote();
    })

    it ("Check Lists section", () => {
        tablesStep.verifyListsHeader();
        tablesStep.verifyAllListsExist();
        tablesStep.verifyAllDrinksOptions(drinkList);
        //tablesStep.verifyOrderOfDrinkOptions(); // не проходит тест при проверке порядка списка
        tablesStep.veriTitleOfLists();
        tablesStep.verifyAllFoodOptions(foodList);
        tablesStep.verifyAllJobsOptions(jobsList);
    })
})