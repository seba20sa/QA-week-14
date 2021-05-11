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
            RegisterPage.setName()            
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
        /*SECOND PASSWORD*/
        it('Second password empty', () => {
            RegisterPage.setFirstPassword();
            expect(RegisterPage.errorSecondPassword).toHaveText("Passwords must have the correct format and match");
            browser.pause(2000);
        });
        it('Second password wrong format: less than 8 characters', () => {
            RegisterPage.setFirstPassword('abc123');
            expect(RegisterPage.errorSecondPassword).toHaveText("Passwords must have the correct format and match");
            browser.pause(2000);
        });
        it('Second password wrong format: only letters', () => {
            RegisterPage.setFirstPassword('abcdefghijk');
            expect(RegisterPage.errorSecondPassword).toHaveText("Passwords must have the correct format and match");
            browser.pause(2000);
        });
        it('Second password wrong format: only numbers', () => {
            RegisterPage.setFirstPassword('123456789');
            expect(RegisterPage.errorSecondPassword).toHaveText("Passwords must have the correct format and match");
            browser.pause(2000);
        });
        // it('Second password correct format but not matching the first password', () => {
        //     RegisterPage.testRegister('Sebastian Sileoni', 'seba20sa@gmail.com', 'abc123456', 'abc654321');
        //     expect(RegisterPage.errorSecondPassword).toBe('Passwords must have the correct format and match');
        //     browser.pause(2000);
        // });
        /*ALL VALID*/
        // it('All fields are correct', () => {
        //     RegisterPage.testRegister('Sebastian Sileoni', 'seba20sa@gmail.com', 'abc123456', 'abc123456');
        //     expect(RegisterPage.errorSecondPassword).toBe('');
        //     browser.pause(2000);
        // });
        /*BACK TO LOGIN*/

        // it('Testing the Login button and the target url', () => {
        //     RegisterPage.backToLogin();
        //     if (browser.getUrl() === urlLogin);
        //     else throw new Error('ERROR');
        //     browser.pause(2000);
        // });
        
    });

});