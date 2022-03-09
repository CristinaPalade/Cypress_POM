/// <reference types = "Cypress" />
import homePageActions from "../../pageobjects/pageactions/homePageActions";
import addCustomerPageActions from "../../pageobjects/pageactions/addCustomerPageActions";

describe("Add Customer details", () => {
  const homePage = new homePageActions();
  const addCustomer = new addCustomerPageActions();
  before(() => {
    cy.fixture("testdata").then((data) => {
      globalThis.data = data;
    });
  });
  beforeEach(() => {
    homePage.navigateToUrl();
  });

  it("Add customer details", () => {
    homePage.loginAsBankManager();
    addCustomer.addCustomerDetails(
      data.firstname,
      data.lastname,
      data.postcode
    );
    addCustomer.validateAlert(data.alertmsg);
  });
});
