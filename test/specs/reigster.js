const RegisterPage  = require('../pageobjects/register.page');
describe ('register section with four input fields, one link and two buttons',  () => {    
    /*URLs to perform the test*/
    const urlLogin = 'http://seba20sa.github.io/QA-week-14/public/login.html';  
    const urlRegister = 'https://seba20sa.github.io/QA-week-14/public/register.html';

    beforeAll("Open browser", () => {
        browser.url(urlRegister);
      });

    describe ('Name, Email and both Passwords fields testing', () => {
        /*NAME*/
        it('empty name', () => {
            RegisterPage.testRegister('', 'seba20sa@gmail.com', 'abc123456', 'abc123456');
            expect(RegisterPage.errorName).toBe('Name must be at least 6 characters long and have a space');
            browser.pause(2000);
        });
        it('name with no spaces in between', () => {
            RegisterPage.testRegister('sebastianSileoni', 'seba20sa@gmail.com', 'abc123456', 'abc123456');
            expect(RegisterPage.errorName).toBe('Name must be at least 6 characters long and have a space');
            browser.pause(2000);
        });
        it('name  shorter than 6 characters long', () => {
            RegisterPage.testRegister('seb a', 'seba20sa@gmail.com', 'abc123456', 'abc123456');
            expect(RegisterPage.errorName).toBe('Name must be at least 6 characters long and have a space');
            browser.pause(2000);
        });
        /*MAIL*/
        it('empty mail', () => {
            RegisterPage.testRegister('Sebastian Sileoni', '', 'abc123456', 'abc123456');
            expect(RegisterPage.errorEmail).toBe('E-mail must have a valid format');
            browser.pause(2000);
        });
        it('wrongly formated email no @', () => {
            RegisterPage.testRegister('Sebastian Sileoni', 'seba20sagmail.com', 'abc123456', 'abc123456');
            expect(RegisterPage.errorEmail).toBe('E-mail must have a valid format');
            browser.pause(2000);
        });
        it('wrongly formated email no .com', () => {
            RegisterPage.testRegister('Sebastian Sileoni', 'seba20sa@gmail', 'abc123456', 'abc123456');
            expect(RegisterPage.errorEmail).toBe('E-mail must have a valid format');
            browser.pause(2000);
        });
        /*FIRST PASSWORD*/
        it('First password empty', () => {
            RegisterPage.testRegister('Sebastian Sileoni', 'seba20sa@gmail.com', '', 'abc123456');
            expect(RegisterPage.errorFirstPassword).toBe('Password must have the correct format');
            browser.pause(2000);
        });
        it('First password wrong format: less than 8 characters', () => {
            RegisterPage.testRegister('Sebastian Sileoni', 'seba20sa@gmail.com', 'abc123', 'abc123456');
            expect(RegisterPage.errorFirstPassword).toBe('Password must have the correct format');
            browser.pause(2000);
        });
        it('First password wrong format: only letters', () => {
            RegisterPage.testRegister('Sebastian Sileoni', 'seba20sa@gmail.com', 'abcdefghijk', 'abc123456');
            expect(RegisterPage.errorFirstPassword).toBe('Password must have the correct format');
            browser.pause(2000);
        });
        it('First password wrong format: only numbers', () => {
            RegisterPage.testRegister('Sebastian Sileoni', 'seba20sa@gmail.com', '123456789', 'abc123456');
            expect(RegisterPage.errorFirstPassword).toBe('Password must have the correct format');
            browser.pause(2000);
        });
        /*SECOND PASSWORD*/
        it('Second password empty', () => {
            RegisterPage.testRegister('Sebastian Sileoni', 'seba20sa@gmail.com', 'abc123456', '');
            expect(RegisterPage.errorSecondPassword).toBe('Passwords must have the correct format and match');
            browser.pause(2000);
        });
        it('Second password wrong format: less than 8 characters', () => {
            RegisterPage.testRegister('Sebastian Sileoni', 'seba20sa@gmail.com', 'abc123456', 'abc123');
            expect(RegisterPage.errorSecondPassword).toBe('Passwords must have the correct format and match');
            browser.pause(2000);
        });
        it('Second password wrong format: only letters', () => {
            RegisterPage.testRegister('Sebastian Sileoni', 'seba20sa@gmail.com', 'abc123456', 'abcdefghijk');
            expect(RegisterPage.errorSecondPassword).toBe('Passwords must have the correct format and match');
            browser.pause(2000);
        });
        it('Second password wrong format: only numbers', () => {
            RegisterPage.testRegister('Sebastian Sileoni', 'seba20sa@gmail.com', 'abc123456', '123456789');
            expect(RegisterPage.errorSecondPassword).toBe('Passwords must have the correct format and match');
            browser.pause(2000);
        });
        it('Second password correct format but not matching the first password', () => {
            RegisterPage.testRegister('Sebastian Sileoni', 'seba20sa@gmail.com', 'abc123456', 'abc654321');
            expect(RegisterPage.errorSecondPassword).toBe('Passwords must have the correct format and match');
            browser.pause(2000);
        });
        /*ALL VALID*/
        it('All fields are correct', () => {
            RegisterPage.testRegister('Sebastian Sileoni', 'seba20sa@gmail.com', 'abc123456', 'abc123456');
            expect(RegisterPage.errorSecondPassword).toBe('');
            browser.pause(2000);
        });
        /*BACK TO LOGIN*/

        // it('Testing the Login button and the target url', () => {
        //     RegisterPage.backToLogin();
        //     if (browser.getUrl() === urlLogin);
        //     else throw new Error('ERROR');
        //     browser.pause(2000);
        // });
        
    });

});