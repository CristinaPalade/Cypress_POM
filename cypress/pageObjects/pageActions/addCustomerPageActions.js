import addCustomerPageElements from "../pageelements/addCustomerPageElements";

export default class addCustomerPageActions {
  constructor() {
    globalThis.addcustelement = new addCustomerPageElements();
  }

  addCustomerDetails(firstName, lastName, postcode) {
    addcustelement.addCustomerBtn().click();
    addcustelement.firstNameField().type(firstName);
    addcustelement.lastNameField().type(lastName);
    addcustelement.postcodeField().type(postcode);
    addcustelement.addCustomerSubmitBtn().click();
  }
  validateAlert(alertMsg) {
    cy.on("window:alert", (alertText) => {
      expect(alertText).contains(alertText);
    });
  }
}
