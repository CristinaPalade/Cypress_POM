import openAccountPageElements from "../pageelements/openAccountPageElements";

export default class openAccountPageActions{
  constructor() {
    globalThis.openAccountelement = new openAccountPageElements();
  }

  openAccount(customer, currency) {
    openAccountelement.openAccountBtn().click();
    openAccountelement.customerDropdown().select(customer);
    openAccountelement.currencyDropdown().select(currency);
    openAccountelement.submitProcessBtn().click();
  }
  validateAlert(alertMsg) {
    cy.on("window:alert", (alertText) => {
      expect(alertText).contains(alertText);
    });
  }
}
