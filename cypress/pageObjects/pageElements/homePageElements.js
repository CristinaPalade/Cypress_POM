/// <reference types = "Cypress" />
const or = require("../../locators.json")


export default class homePageElements{
       
    customerLoginBtn(){
        return cy.get(or.homepage.customerLoginBtn);
    };

    bankManagerLoginBtn(){
        return cy.get(or.homepage.bankManagerLoginBtn);
    };
}