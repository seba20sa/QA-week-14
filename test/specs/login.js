const LoginPage = require('../pageobjects/login.page');

describe ('login section with two input fields and two buttons',  () => {
    function browserPause() {
        browser.pause(1500);
    }
    /*URLs to perform the test*/
    const urlLogin = 'http://seba20sa.github.io/QA-week-14/public/login.html';  
    const urlRegister = 'https://seba20sa.github.io/QA-week-14/public/register.html';

    describe ('Email field and password testing', () => {

        it('empty email', () => {
            browser.url(urlLogin);
            LoginPage.testLogin('', 'abc123456')
            expect(LoginPage.errorEmail).toBe('E-mail must have a valid format');
            browserPause();
        });
        it('wrongly formated email only @', () => {
            browser.url(urlLogin);
            LoginPage.testLogin('@', 'abc123456')
            expect(LoginPage.errorEmail).toBe('E-mail must have a valid format');
            browserPause();
        });

        it('wrongly formated email no @', () => {
            browser.url(urlLogin);
            LoginPage.testLogin('seba20sagmail.com', 'abc123456')
            expect(LoginPage.errorEmail).toBe('E-mail must have a valid format');
            browserPause();
        });

        it('wrongly formated email no .com', () => {
            browser.url(urlLogin);
            LoginPage.testLogin('seba20sa@gmail', 'abc123456')
            expect(LoginPage.errorEmail).toBe('E-mail must have a valid format');
            browserPause();
        });

        it('empty password', () => {
            browser.url(urlLogin);
            LoginPage.testLogin('seba20sa@gmail.com', '')
            expect(LoginPage.errorPassword).toBe('Password must have the correct format');
            browserPause();
        });

        it('wrongly formated password less than 8 characters', () => {
            browser.url(urlLogin);
            LoginPage.testLogin('seba20sa@gmail.com', 'abc123')
            expect(LoginPage.errorPassword).toBe('Password must have the correct format');
            browserPause();
        });

        it('wrongly formated password no numbers just letters', () => {
            browser.url(urlLogin);
            LoginPage.testLogin('seba20sa@gmail.com', 'abcabcabcabcabc')
            expect(LoginPage.errorPassword).toBe('Password must have the correct format');
            browserPause();
        });
        
        it('empty email  and password', () => {
            browser.url(urlLogin);
            LoginPage.testLogin('', '')
            expect(LoginPage.errorEmail).toBe('E-mail must have a valid format');
            expect(LoginPage.errorPassword).toBe('Password must have the correct format');
            browserPause();
        });

        it('wrongly formated email and password', () => {
            browser.url(urlLogin);
            LoginPage.testLogin('seba20sagmail.com', 'abc')
            expect(LoginPage.errorEmail).toBe('E-mail must have a valid format');
            expect(LoginPage.errorPassword).toBe('Password must have the correct format');
            browserPause();
        });        
        
        it('Valid credentials', () => {
            browser.url(urlLogin);
            LoginPage.testLogin('seba20sa@gmail.com', 'abc123456')
            expect(LoginPage.errorEmail).toBe('');
            browserPause();
        });

        it('Testing the register button and the target url', () => {
            LoginPage.buttonRegister();
            if (browser.getUrl() === urlRegister);
            else throw new Error('ERROR');
            browserPause();
        });

    });

});