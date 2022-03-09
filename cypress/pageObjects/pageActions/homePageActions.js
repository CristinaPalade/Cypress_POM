import homePageElements from "../pageelements/homePageElements";

export default class homePageActions {
  constructor() {
    globalThis.homepageelement = new homePageElements();
  }

  navigateToUrl() {
    cy.visit("/");
  }
  validateTitle() {
    return cy.title();
  }
  loginAsBankManager() {
    homepageelement.bankManagerLoginBtn().click();
  }
  loginAsCustomer() {
    homepageelement.customerLoginBtn().click();
  }
}
