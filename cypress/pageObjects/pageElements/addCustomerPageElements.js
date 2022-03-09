/// <reference types = "Cypress" />
const or = require("../../locators.json")


export default class addCustomerPageElements{
       
    addCustomerBtn(){
        return cy.get(or.addCustomerPage.addCustomerBtn);
    };

    firstNameField(){
        return cy.get(or.addCustomerPage.firstName);
    };

    lastNameField(){
        return cy.get(or.addCustomerPage.lastName);
    };

    postcodeField(){
        return cy.get(or.addCustomerPage.postcode);
    };

    addCustomerSubmitBtn(){
        return cy.get(or.addCustomerPage.addCustomerSubmit);
    };

}