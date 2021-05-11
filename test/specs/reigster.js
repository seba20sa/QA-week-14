const RegisterPage  = require('../pageobjects/register.page');
describe ('register section with four input fields, one link and two buttons',  () => {
    function browserPause() {
        browser.pause(1500);
    }
    /*URLs to perform the test*/
    const urlLogin = 'http://seba20sa.github.io/QA-week-14/public/login.html';  
    const urlRegister = 'https://seba20sa.github.io/QA-week-14/public/register.html';

    describe ('Name, Email and both Passwords fields testing', () => {
        /*NAME*/
        it('empty name', () => {
            browser.url(urlRegister);
            RegisterPage.testRegister('', 'seba20sa@gmail.com', 'abc123456', 'abc123456');
            expect(RegisterPage.errorName).toBe('Name must be at least 6 characters long and have a space');
            browserPause();
        });
        it('name with no spaces in between', () => {
            browser.url(urlRegister);
            RegisterPage.testRegister('sebastianSileoni', 'seba20sa@gmail.com', 'abc123456', 'abc123456');
            expect(RegisterPage.errorName).toBe('Name must be at least 6 characters long and have a space');
            browserPause();
        });
        it('name  shorter than 6 characters long', () => {
            browser.url(urlRegister);
            RegisterPage.testRegister('seb a', 'seba20sa@gmail.com', 'abc123456', 'abc123456');
            expect(RegisterPage.errorName).toBe('Name must be at least 6 characters long and have a space');
            browserPause();
        });
        /*MAIL*/
        it('empty mail', () => {
            browser.url(urlRegister);
            RegisterPage.testRegister('Sebastian Sileoni', '', 'abc123456', 'abc123456');
            expect(RegisterPage.errorEmail).toBe('E-mail must have a valid format');
            browserPause();
        });
        it('wrongly formated email no @', () => {
            browser.url(urlRegister);
            RegisterPage.testRegister('Sebastian Sileoni', 'seba20sagmail.com', 'abc123456', 'abc123456');
            expect(RegisterPage.errorEmail).toBe('E-mail must have a valid format');
            browserPause();
        });
        it('wrongly formated email no .com', () => {
            browser.url(urlRegister);
            RegisterPage.testRegister('Sebastian Sileoni', 'seba20sa@gmail', 'abc123456', 'abc123456');
            expect(RegisterPage.errorEmail).toBe('E-mail must have a valid format');
            browserPause();
        });
        /*FIRST PASSWORD*/
        it('First password empty', () => {
            browser.url(urlRegister);
            RegisterPage.testRegister('Sebastian Sileoni', 'seba20sa@gmail.com', '', 'abc123456');
            expect(RegisterPage.errorFirstPassword).toBe('Password must have the correct format');
            browserPause();
        });
        it('First password wrong format: less than 8 characters', () => {
            browser.url(urlRegister);
            RegisterPage.testRegister('Sebastian Sileoni', 'seba20sa@gmail.com', 'abc123', 'abc123456');
            expect(RegisterPage.errorFirstPassword).toBe('Password must have the correct format');
            browserPause();
        });
        it('First password wrong format: only letters', () => {
            browser.url(urlRegister);
            RegisterPage.testRegister('Sebastian Sileoni', 'seba20sa@gmail.com', 'abcdefghijk', 'abc123456');
            expect(RegisterPage.errorFirstPassword).toBe('Password must have the correct format');
            browserPause();
        });
        it('First password wrong format: only numbers', () => {
            browser.url(urlRegister);
            RegisterPage.testRegister('Sebastian Sileoni', 'seba20sa@gmail.com', '123456789', 'abc123456');
            expect(RegisterPage.errorFirstPassword).toBe('Password must have the correct format');
            browserPause();
        });
        /*SECOND PASSWORD*/
        it('Second password empty', () => {
            browser.url(urlRegister);
            RegisterPage.testRegister('Sebastian Sileoni', 'seba20sa@gmail.com', 'abc123456', '');
            expect(RegisterPage.errorSecondPassword).toBe('Passwords must have the correct format and match');
            browserPause();
        });
        it('Second password wrong format: less than 8 characters', () => {
            browser.url(urlRegister);
            RegisterPage.testRegister('Sebastian Sileoni', 'seba20sa@gmail.com', 'abc123456', 'abc123');
            expect(RegisterPage.errorSecondPassword).toBe('Passwords must have the correct format and match');
            browserPause();
        });
        it('Second password wrong format: only letters', () => {
            browser.url(urlRegister);
            RegisterPage.testRegister('Sebastian Sileoni', 'seba20sa@gmail.com', 'abc123456', 'abcdefghijk');
            expect(RegisterPage.errorSecondPassword).toBe('Passwords must have the correct format and match');
            browserPause();
        });
        it('Second password wrong format: only numbers', () => {
            browser.url(urlRegister);
            RegisterPage.testRegister('Sebastian Sileoni', 'seba20sa@gmail.com', 'abc123456', '123456789');
            expect(RegisterPage.errorSecondPassword).toBe('Passwords must have the correct format and match');
            browserPause();
        });
        it('Second password correct format but not matching the first password', () => {
            browser.url(urlRegister);
            RegisterPage.testRegister('Sebastian Sileoni', 'seba20sa@gmail.com', 'abc123456', 'abc654321');
            expect(RegisterPage.errorSecondPassword).toBe('Passwords must have the correct format and match');
            browserPause();
        });
        /*ALL VALID*/
        it('All fields are correct', () => {
            browser.url(urlRegister);
            RegisterPage.testRegister('Sebastian Sileoni', 'seba20sa@gmail.com', 'abc123456', 'abc123456');
            expect(RegisterPage.errorSecondPassword).toBe('');
            browserPause();
        });
        /*BACK TO LOGIN*/

        it('Testing the Login button and the target url', () => {
            RegisterPage.backToLogin();
            if (browser.getUrl() === urlLogin);
            else throw new Error('ERROR');
            browserPause();
        });
        
    });

});