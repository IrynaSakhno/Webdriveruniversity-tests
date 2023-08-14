class TablesPage{
    
    static get getPageHeader(){
        return cy.xpath('//div[@id="main-header"]//h1')
    }

    static get getFirstTableTitles(){
        return cy.xpath('//table[@id="t01"]//th') 
    }
    static get getFirstTableRows(){
        return cy.xpath('//table[@id="t01"]//tr')
    }


    static get getSecondTableTitles(){
        return cy.xpath('//table[@id="t02"]//th') 
    }
    static get getSecondTableRows(){
        return cy.xpath('//table[@id="t02"]//tr')
    }


    static get getForm(){
        return cy.xpath('//form[@id="form-textfield"]')
    }
    static get getFirstName(){
        return cy.xpath('//input[@name="firstname"]')
    }
    static get getLastName(){
        return cy.xpath('//input[@name="lastname"]')   
    }
    static get getTextBelow () {
        return cy.xpath('//textarea')
    }

    static get getBreadcrumbHeader(){
        return cy.xpath('//div[@class="thumbnail"]/h2[contains(text(), "Breadcrumb")]')
    }
    static get getBreadcrumbItems(){
        return cy.xpath('//ol[@class="breadcrumb traversal-breadcrumb"]/li')
    }
    static get getHomeBreadcrumb(){
        return cy.xpath('//li[@class="breadcrumb-item"]/a[contains(text(), "Home")]')
    }
    static get getAboutUsBreadcrumb(){
        return cy.xpath('//li[@class="breadcrumb-item"]/a[contains(text(), "About Us")]')
    }
    static get getContactUsBreadcrumb(){
        return cy.xpath('//li[@class="breadcrumb-item active"]')
    }

    static get getBadgesHeader(){
        return cy.xpath('//div[@class="thumbnail"]/h2[contains(text(), "Badges")]')
    }
    static get getBadgesItems(){
        return cy.xpath('//ul[@class="list-group"]/li')
    }
    static get getTodaysDealItem(){
        return cy.xpath(`//li[@class="list-group-item badge-text"][contains(text(), "Today's Deals")]`)
    }
    static get getTodaysDealBadge(){
        return cy.xpath(`//span[@class="badge badge-light"]`)
    }
    static get getAllProductItem(){
        return cy.xpath('//li[@class="list-group-item badge-text"][contains(text(), "All Products")]')
    }
    static get getAllProductBadge(){
        return cy.xpath('//span[@class="badge traversal-badge"]')
    }


    static get getPaginationHeader(){
        return cy.xpath('//div[@class="thumbnail"]/h2[contains(text(), "Pagination")]')
    }
    static get getPaginationItems(){
        return cy.xpath('//ul[@class="pagination traversal-pagination"]/li')
    }
    static get getPaginationOptions(){
        return cy.xpath('//a[@class="page-link"]')
    }
    
    static get getTableHeader(){
        return cy.xpath('//div[@class="thumbnail"]/h2[contains(text(), "Table")]')
    }
    static get getTitlesDataTable(){
        return cy.xpath('//tr[@class="bg-primary"]//th') // or: //table[@class="table table-light traversal-table"]//thead
    }
    static get getBodyDataTable(){
        return cy.xpath('//table[@class="table table-light traversal-table"]//tbody//tr') // or: //table[@class="table table-light traversal-table"]//tbody
    }


    static get getButtonsStatesHeader(){
        return cy.xpath('//div[@class="thumbnail"]/h2[contains(text(), "Buttons & States")]')
    }
    static get getFirstLineButtons(){
        return cy.xpath('//div[@class="traversal-buttons"]/*')
    }
    static get getLinkButton(){
        return cy.xpath('//a[@class="btn btn-primary"][contains(text(), "Link")]')
    }
    static get getButtonButton(){
        return cy.xpath('//button[@type="submit"][contains(text(), "Button")]')
    }
    static get getInputButton(){
        return cy.xpath('//input[@type="button"]')
    }
    static get getSubmitButton(){
        return cy.xpath('//input[@type="submit"]')
    }
    static get getResetButton(){
        return cy.xpath('//input[@type="reset"]')
    }

    static get getSecongLineButtons(){
        return cy.xpath('//div[@class="traversal-button-states"]/*')
    }
    static get getDangerButton(){
        return cy.xpath('//button[@class="btn btn-outline-danger"]')
    }
    static get getWarningButton(){
        return cy.xpath('//button[@class="btn btn-outline-warning disabled"]')
    }
    static get getInfoButton(){
        return cy.xpath('//button[@class="btn btn-outline-info"][contains(text(), "Info")]')
    }
    static get getAlertButton(){
        return cy.xpath('//button[@class="btn btn-outline-info"][contains(text(), "Alert")]')
    }

    static get getThirdLineButtons(){
        return cy.xpath('//div[@class="btn-group btn-group-toggle"]/*')
    }
    static get getButton1(){
        return cy.xpath('//button[@class="btn btn-primary active"]')
    }
    static get getButton2(){
        return cy.xpath('//button[@class="btn btn-primary"][contains(text(), "Button-2")]')
    }
    static get getButton3(){
        return cy.xpath('//button[@class="btn btn-primary"][contains(text(), "Button-3")]')
    }
    static get getButton4(){
        return cy.xpath('//button[@class="btn btn-primary"][contains(text(), "Button-4")]')
    }

    static get getRandomTextHeader(){
        return cy.xpath('//div[@class="thumbnail"]/h2[contains(text(), "Random Text")]')
    }
    static get getRandomTextDiv(){
        return cy.xpath('//div[@class="traversal-marked-text"]/p')
    }
    static get getMarkedText(){
        return cy.xpath('//mark[@class="traversal-mark"]')
    }
    static get getBlockquoteSection(){
        return cy.xpath('//div[@class="traversal-cite-text"]/blockquote')
    }
    static get getBlockquoteText(){
        return cy.xpath('//blockquote/p')
    }
    static get getBlockquoteFooter(){
        return cy.xpath('//blockquote//footer')
    }

    static get getListsHeader(){
        return cy.xpath('//div[@class="thumbnail"]/h2[contains(text(), "Lists")]')
    }
    static get getDrinksList(){
        return cy.xpath('//ul[@class="traversal-drinks-list"]')
    }
    static get getFoodList(){
        return cy.xpath('//ul[@class="traversal-food-list"]')
    }
    static get getJobList(){
        return cy.xpath('//ul[@class="traversal-job-list"]')
    }
    static get getDrinksListItems(){
        return cy.xpath('//ul[@class="traversal-drinks-list"]//li')
    }
    static get getFoodListItems(){
        return cy.xpath('//ul[@class="traversal-food-list"]//li')
    }
    static get getJobListItems(){
        return cy.xpath('//ul[@class="traversal-job-list"]//li')
    }
    static getTitleOfLists(title){
        return cy.xpath(`//li[@class="list-header"][contains(text(), '${title}')]`)
    }
}
export default TablesPage