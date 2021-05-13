const RegisterPage  = require('../pageobjects/register.page');
describe ('register section with four input fields, one link and two buttons',  () => {    
    /*URLs to perform the test*/
    const urlLogin = 'http://seba20sa.github.io/QA-week-14/public/login.html';  
    const urlRegister = 'https://seba20sa.github.io/QA-week-14/public/register.html';
    beforeAll("Open browser on register url", () => {
        browser.url(urlRegister);
      });
    describe ('Name, Email and both Passwords fields testing', () => {
        /*NAME*/
        it('empty name', () => {
            RegisterPage.setName();            
            expect(RegisterPage.errorName).toHaveText("Name must be at least 6 characters long and have a space");
            browser.pause(2000);
        });
        it('name with no spaces in between', () => {
            RegisterPage.setName('sebastianSileoni');
            expect(RegisterPage.errorName).toHaveText("Name must be at least 6 characters long and have a space");
            browser.pause(2000);
        });
        it('name  shorter than 6 characters long', () => {
            RegisterPage.setName('seb a');
            expect(RegisterPage.errorName).toHaveText("Name must be at least 6 characters long and have a space");
            browser.pause(2000);
        });
        it('Name correctly formated', () => {
            RegisterPage.setName('Sebastian Sileoni');
            expect(RegisterPage.errorName).toHaveText("");
            browser.pause(2000);
        });
        /*MAIL*/
        it('empty mail', () => {
            RegisterPage.setEmail();
            expect(RegisterPage.errorEmail).toHaveText("E-mail must have a valid format");
            browser.pause(2000);
        });
        it('wrongly formated email no @', () => {
            RegisterPage.setEmail('seba20sagmail.com');
            expect(RegisterPage.errorEmail).toHaveText("E-mail must have a valid format");
            browser.pause(2000);
        });
        it('wrongly formated email no .com', () => {
            RegisterPage.setEmail('seba20sa@gmail');
            expect(RegisterPage.errorEmail).toHaveText("E-mail must have a valid format");
            browser.pause(2000);
        });
        it('corerctly formated email', () => {
            RegisterPage.setEmail('seba20sa@gmail.com');
            expect(RegisterPage.errorEmail).toHaveText("");
            browser.pause(2000);
        });
        /*FIRST PASSWORD*/
        it('First password empty', () => {
            RegisterPage.setFirstPassword();
            expect(RegisterPage.errorFirstPassword).toHaveText("Password must have the correct format");
            browser.pause(2000);
        });
        it('First password wrong format: less than 8 characters', () => {
            RegisterPage.setFirstPassword('abc123');
            expect(RegisterPage.errorFirstPassword).toHaveText("Password must have the correct format");
            browser.pause(2000);
        });
        it('First password wrong format: only letters', () => {
            RegisterPage.setFirstPassword('abcdefghijk');
            expect(RegisterPage.errorFirstPassword).toHaveText("Password must have the correct format");
            browser.pause(2000);
        });
        it('First password wrong format: only numbers', () => {
            RegisterPage.setFirstPassword('123456789');
            expect(RegisterPage.errorFirstPassword).toHaveText("Password must have the correct format");
            browser.pause(2000);
        });
        it('First password with a valid format', () => {
            RegisterPage.setFirstPassword('abc123456');
            expect(RegisterPage.errorFirstPassword).toHaveText("");
            browser.pause(2000);
        });
        /*SECOND PASSWORD*/
        it('Second password empty', () => {
            RegisterPage.setSecondPassword();
            expect(RegisterPage.errorSecondPassword).toHaveText("Passwords must have the correct format and match");
            browser.pause(2000);
        });
        it('Second password wrong format: less than 8 characters', () => {
            RegisterPage.setSecondPassword('abc123');
            expect(RegisterPage.errorSecondPassword).toHaveText("Passwords must have the correct format and match");
            browser.pause(2000);
        });
        it('Second password wrong format: only letters', () => {
            RegisterPage.setSecondPassword('abcdefghijk');
            expect(RegisterPage.errorSecondPassword).toHaveText("Passwords must have the correct format and match");
            browser.pause(2000);
        });
        it('Second password wrong format: only numbers', () => {
            RegisterPage.setSecondPassword('123456789');
            expect(RegisterPage.errorSecondPassword).toHaveText("Passwords must have the correct format and match");
            browser.pause(2000);
        });
        it('Second password correctly formated but not matching the first password', () => {
            RegisterPage.setSecondPassword('abc654321');
            expect(RegisterPage.errorSecondPassword).toHaveText("Passwords must have the correct format and match");
            browser.pause(2000);
        });
        it('Second password correctly formated and matching the first password', () => {
            RegisterPage.setSecondPassword('abc123456');
            expect(RegisterPage.errorSecondPassword).toHaveText("");
            browser.pause(2000);
        });
        /*LIST OF RESULTS */
        it('After inserting all the valid credentials on all four fields, click the submit'+
        'button and test if they show on the validations section below', () => {
            RegisterPage.testRegister('Sebastian Sileoni', 'seba20sa@gmail', 'abc123456', 'abc123456');
            expect(RegisterPage.listOfResults).toHaveTextContaining([
                "Every validation has passed", 
                "The Name is: sebastian sileoni",
                "The e-mail is: seba20sa@gmail.com",
                "The first is: abc123456",
                "The second password is: abc123456"
            ]);
            browser.pause(2000);
        });
        it('Press the reset fields button and check if the fields are cleaned up', () => {
            RegisterPage.btnReset.click();
            expect(browser.refresh());
            expect(browser).toHaveUrl(
                'https://seba20sa.github.io/QA-week-14/public/register.html?name=&email=&first-password=&second-password='
            );
            expect(browser).toHaveTitle("REGISTER");
            browser.pause(2000);
        });
        it('Press Back to Login button and check if the URL is correct', () => {
            RegisterPage.btnLogin.click();
            expect(browser).toHaveUrl(
                'https://seba20sa.github.io/QA-week-14/public/login.html'
            );
            expect(browser).toHaveTitle("LOGIN");
            browser.pause(2000);
        });
    });
});