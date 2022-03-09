/// <reference types = "Cypress" />
import homePageActions from "../../pageobjects/pageactions/homePageActions";
const allure = Cypress.Allure.reporter.getInterface();

describe("Login as Bank Manager", () => {
  const homePage = new homePageActions();
  beforeEach(() => {
    homePage.navigateToUrl();
  });

  it("Validate page title", () => {
    allure.feature("Validating the title of the page")
    allure.epic('This is epic');
    allure.issue('google', 'https://google.com');  
    homePage.validateTitle().should('eq', 'Protractor practice website - Banking App')
  });

  it("Verify login as bank manager", () => {
    
    cy.allure()
    .feature('This is feature')
    .epic('This is epic')
    .issue('google', 'https://google.com')
    .parameter('name', 'value')
    .tag('this is nice tag', 'as well as this');
    
    homePage.loginAsBankManager();
  });
});
