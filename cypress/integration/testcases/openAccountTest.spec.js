/// <reference types = "Cypress" />
import homePageActions from "../../pageobjects/pageactions/homePageActions";
import addCustomerPageActions from "../../pageobjects/pageactions/addCustomerPageActions"
import openAccountPageActions from "../../pageObjects/pageActions/openAccountPageActions"

describe("Open Customer account", () => {
    const homePage = new homePageActions();
    const addCustomer = new addCustomerPageActions();
    const openAccount = new openAccountPageActions();
    
    before(()=>{
        cy.fixture('testdata').then((data)=>{
            globalThis.data=data;
        })
    })
   
    beforeEach(() => {
    homePage.navigateToUrl();
  });

  it("Open account", () => {
    homePage.loginAsBankManager();

    addCustomer.addCustomerDetails(
      data.firstname,
      data.lastname,
      data.postcode
    );
    addCustomer.validateAlert(data.alertmsg);

    openAccount.openAccount(data.customer,data.currency);
    openAccount.validateAlert(data.openAccountalert);
  });
})