const LoginPage = require('../pageobjects/login.page');

describe ('login section with two input fields and two buttons',  () => {
    function browserPause() {
        browser.pause(2000);
    }
    /*URLs to perform the test*/
    const urlLogin = 'http://seba20sa.github.io/QA-week-14/public/login.html';  
    const urlRegister = 'https://seba20sa.github.io/QA-week-14/public/register.html';

    describe ('Email field testing', () => {
        it('Valid credentials', () => {
            browser.url(urlLogin);
            LoginPage.testLogin('seba20sa@gmail.com', 'abc123456')
            expect(LoginPage.errorEmail).toBe('');
            browserPause();
        });

    });

});