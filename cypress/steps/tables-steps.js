import TablesPage from "../padges/Tables-page";

const tablesPage = new TablesPage();

export default class TablesStep {
    visitTablesPage(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html#')
        cy.url().should('include', 'Data-Table');
}

verifyPageHeaderExist(){
    TablesPage.getPageHeader.should('have.text', 'Data, Tables & Button States');
}


verifyFirstTableHead(){
    TablesPage.getFirstTableTitles.should('have.length', 3).should('contain', 'Firstname');
    TablesPage.getFirstTableTitles.eq(1).should('contain', 'Lastname');
    TablesPage.getFirstTableTitles.eq(2).should('contain', 'Age');
}
verifyFirstTableRows(){
    TablesPage.getFirstTableRows.should('have.length', 4).should('not.be.empty');
}

verifySecondTableHead(){
    TablesPage.getSecondTableTitles.should('have.length', 3).should('contain', 'Firstname');
    TablesPage.getSecondTableTitles.eq(1).should('contain', 'Lastname');
    TablesPage.getSecondTableTitles.eq(2).should('contain', 'Age');
}
verifySecondTableRows(){
    TablesPage.getSecondTableRows.should('have.length', 4).should('not.be.empty');
}

verifyFormSubtitles(){
    TablesPage.getForm.should('have.text', '\n      First name: \n      Last name: \n      Input Text Below:\n            \n    ');
}
fillForm(user){
    TablesPage.getFirstName.type(user[0].first_name);
    TablesPage.getLastName.type(user[0].last_name);
    TablesPage.getTextBelow.type(user[0].text_below);
    }

verifyFilledForm(user){
   if(user.first_name){
    TablesPage.getFirstName.should('have.value', user[0].first_name);
  }
  if(user.last_name){
    TablesPage.getLastName.should('have.value', user[0].last_name);
  }
  if(user.text_below){
    TablesPage.getTextBelow.should('have.value', user[0].text_below);
  }
}

verifyBreadcrumbHeader(){
    TablesPage.getBreadcrumbHeader.should('exist');
}
verifyBreadcrumbItemsIsThree(){
    TablesPage.getBreadcrumbItems.should('have.length', 3);
}
verifyHomeBreadcrumb(){
    TablesPage.getHomeBreadcrumb.should('exist').click().url().should("eq","http://www.webdriveruniversity.com/Data-Table/index.html#");
}
verifyAboutUsBreadcrumb(){
    TablesPage.getAboutUsBreadcrumb.should('exist').click().url().should("eq","http://www.webdriveruniversity.com/Data-Table/index.html#");
}
verifyContactUsBreadcrumb(){
    TablesPage.getContactUsBreadcrumb.should('have.text', 'Contact Us');
}


verifyBadgesHeader(){
    TablesPage.getBadgesHeader.should('exist');
}
verifyBadgesItemsIsTwo(){
    TablesPage.getBadgesItems.should('have.length', 2);
}
verifyTodaysDealItem(){
    TablesPage.getTodaysDealItem.should('exist');
}
verifyTodaysDealBadge(){
    TablesPage.getTodaysDealBadge.should('exist').and('contain', '5');
}
verifyAllProductItem(){
    TablesPage.getAllProductItem.should('exist');
}
verifyAllProductBadge(){
    TablesPage.getAllProductBadge.should('exist').and('contain', '20');
}

verifyPaginationHeader(){
    TablesPage.getPaginationHeader.should('exist');
}
verifyPaginationItemsIsSeven(){
    TablesPage.getPaginationItems.should('have.length', 7);
}
verifyPaginationItemsOrder(){

}
verifyPaginationItemsIsClicked(){
    TablesPage.getPaginationItems.each($el => {
        let el = $el
        cy.wrap(el).click({force: true}).url().should("eq","http://www.webdriveruniversity.com/Data-Table/index.html#");
      })
}


verifyTableHeader(){
    TablesPage.getTableHeader.should('exist');
}
verifyTableHead(){
    TablesPage.getTitlesDataTable.should('have.length', 3).should('contain', '#');
    TablesPage.getTitlesDataTable.eq(1).should('contain', 'First');
    TablesPage.getTitlesDataTable.eq(2).should('contain', 'Last');
}
verifyTableBody(){
    TablesPage.getBodyDataTable.should('have.length', 3).should('not.be.empty');
}


verifyButtonsStatesHeader(){
    TablesPage.getButtonsStatesHeader.should('exist');
}
verifyFirstLineButtonsIsFive(){
    TablesPage.getFirstLineButtons.should('have.length', 5);
}
verifyLinkButton(){
    TablesPage.getLinkButton.should('exist').click().url().should("eq","http://www.webdriveruniversity.com/Data-Table/index.html#");
}
verifyButtonButton(){
    TablesPage.getButtonButton.should('exist').click();
}
verifyInputButton(){
        TablesPage.getInputButton.should('have.value', "Input").click();
    }
verifySubmitButton(){
        TablesPage.getSubmitButton.should('have.value', "Submit").click();
    }
verifyResetButton(){
        TablesPage.getResetButton.should('have.value', "Reset").click();
    }

verifySecondLineButtonsIsFour(){
        TablesPage.getSecongLineButtons.should('have.length', 4);
    }
verifyDangerButton(){
        TablesPage.getDangerButton.should('contain', "Danger").click();
    }
verifyWarningButton(){
        TablesPage.getWarningButton.should('contain', "Warning").should('have.class', "disabled");
    }
verifyInfoButton(){
        TablesPage.getInfoButton.should('exist').click();
    }
verifyAllertButton(){
        TablesPage.getAlertButton.should('exist').click();
    }

verifyThirdLineButtonsIsFour(){
        TablesPage.getThirdLineButtons.should('have.length', 4);
    }
verifyButton1(){
        TablesPage.getButton1.should('contain', "Button-1").click().should('be.focused');
        TablesPage.getButton2.should('not.be.focused');
        TablesPage.getButton3.should('not.be.focused');
        TablesPage.getButton4.should('not.be.focused');
    }
verifyButton2(){
        TablesPage.getButton2.should('exist').click().should('be.focused');
        TablesPage.getButton1.should('not.be.focused');
        TablesPage.getButton3.should('not.be.focused');
        TablesPage.getButton4.should('not.be.focused');
    }
verifyButton3(){
        TablesPage.getButton3.should('exist').click().should('be.focused');
        TablesPage.getButton1.should('not.be.focused');
        TablesPage.getButton2.should('not.be.focused');
        TablesPage.getButton4.should('not.be.focused');
    }
verifyButton4(){
        TablesPage.getButton4.should('exist').click().should('be.focused');
        TablesPage.getButton1.should('not.be.focused');
        TablesPage.getButton2.should('not.be.focused');
        TablesPage.getButton3.should('not.be.focused');
        }

verifyRandomTextHeader(){
            TablesPage.getRandomTextHeader.should('exist');
        }
verifyRandomTextExist(){
            TablesPage.getRandomTextDiv.should('exist').should('not.be.empty');
        }
verifyMarkedTextExist(){
            TablesPage.getMarkedText.should('exist').should('not.be.empty');
        }
verifyBlockquote(){
            TablesPage.getBlockquoteSection.should('exist').should('not.be.empty');
            TablesPage.getBlockquoteText.should('exist').should('not.be.empty');
            TablesPage.getBlockquoteFooter.should('exist').should('not.be.empty');
        }

verifyListsHeader(){
            TablesPage.getListsHeader.should('exist');
        }
verifyAllListsExist() {
            TablesPage.getDrinksList.should('exist');
            TablesPage.getFoodList.should('exist');

            TablesPage.getJobList.should('exist');
        }

verifyAllDrinksOptions(arrayOfValues) {
            TablesPage.getDrinksListItems.should('have.length', arrayOfValues.length);
        
            arrayOfValues.forEach((expectedValue, index) => {
                let listOfDrinks = expectedValue;
                     TablesPage.getDrinksListItems.eq(index).should('have.text', listOfDrinks).then(($element => {
                        const markerStyle = getComputedStyle($element[0], '::marker');
                        expect(markerStyle.content).to.not.equal('none'); // Проверяем, что контент маркера не равен 'none'
                      }));
            });
        }

verifyOrderOfDrinkOptions(){
    TablesPage.getDrinksListItems.each((item, index, list) => {
        if (index > 0) {
          const currentText = Cypress.$(item).text();
          const previousText = Cypress.$(list[index - 1]).text();
      
          expect(currentText).to.be.greaterThan(previousText);
        }
      });
}

veriTitleOfLists(){
    TablesPage.getTitleOfLists('Fruits').should('exist');
    TablesPage.getTitleOfLists('Vegetables').should('exist');
    TablesPage.getTitleOfLists('Fruits').should('exist');
}
verifyAllFoodOptions(arrayOfValues) {
    TablesPage.getFoodListItems.should('have.length', arrayOfValues.length);

    arrayOfValues.forEach((expectedValue, index) => {
        let listOfFoods = expectedValue;
             TablesPage.getFoodListItems.eq(index).should('have.text', listOfFoods).then(($element => {
                const markerStyle = getComputedStyle($element[0], '::marker');
                expect(markerStyle.content).to.not.equal('none'); // Проверяем, что контент маркера не равен 'none'
              }));
    });
}

verifyAllJobsOptions(arrayOfValues) {
    TablesPage.getJobListItems.should('have.length', arrayOfValues.length);

    arrayOfValues.forEach((expectedValue, index) => {
        let listOfJobs = expectedValue;
             TablesPage.getJobListItems.eq(index).should('have.text', listOfJobs).then(($element => {
                const markerStyle = getComputedStyle($element[0], '::marker');
                expect(markerStyle.content).to.not.equal('none'); // Проверяем, что контент маркера не равен 'none'
              }));
    });
}

    }

export const tablesStep = new TablesStep