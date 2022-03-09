/// <reference types = "Cypress" />
const or = require("../../locators.json")


export default class openAccountPageElements{
       
   openAccountBtn(){
        return cy.get(or.openAccountPage.openAccountBtn);
    };

    customerDropdown(){
        return cy.get(or.openAccountPage.customerDropdown);
    };

    currencyDropdown(){
        return cy.get(or.openAccountPage.currencyDropdown);
    };

    submitProcessBtn(){
        return cy.get(or.openAccountPage.processBtn);
    };

    addCustomerSubmitBtn(){
        return cy.get(or.addCustomerPage.addCustomerSubmit);
    };

}