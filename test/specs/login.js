const LoginPage = require('../pageobjects/login.page');

describe ('login section with two input fields and two buttons',  () => {    
    /*URLs to perform the test*/
    const urlLogin = 'http://seba20sa.github.io/QA-week-14/public/login.html';  
    const urlRegister = 'https://seba20sa.github.io/QA-week-14/public/register.html';

    beforeAll("Open browser", () => {
        browser.url(urlLogin);
      });

    describe ('Email field and password testing', () => {

        it('empty email', () => {
            
            LoginPage.testLogin('', 'abc123456')
            expect(LoginPage.errorEmail).toBe('E-mail must have a valid format');
            browser.pause(2000);
        });
        it('wrongly formated email only @', () => {
            
            LoginPage.testLogin('@', 'abc123456')
            expect(LoginPage.errorEmail).toBe('E-mail must have a valid format');
            browser.pause(2000);
        });

        it('wrongly formated email no @', () => {
            
            LoginPage.testLogin('seba20sagmail.com', 'abc123456')
            expect(LoginPage.errorEmail).toBe('E-mail must have a valid format');
            browser.pause(2000);
        });

        it('wrongly formated email no .com', () => {
            
            LoginPage.testLogin('seba20sa@gmail', 'abc123456')
            expect(LoginPage.errorEmail).toBe('E-mail must have a valid format');
            browser.pause(2000);
        });

        it('empty password', () => {
            
            LoginPage.testLogin('seba20sa@gmail.com', '')
            expect(LoginPage.errorPassword).toBe('Password must have the correct format');
            browser.pause(2000);
        });

        it('wrongly formated password less than 8 characters', () => {
            
            LoginPage.testLogin('seba20sa@gmail.com', 'abc123')
            expect(LoginPage.errorPassword).toBe('Password must have the correct format');
            browser.pause(2000);
        });

        it('wrongly formated password no numbers just letters', () => {
            
            LoginPage.testLogin('seba20sa@gmail.com', 'abcabcabcabcabc')
            expect(LoginPage.errorPassword).toBe('Password must have the correct format');
            browser.pause(2000);
        });
        
        it('empty email  and password', () => {
            
            LoginPage.testLogin('', '')
            expect(LoginPage.errorEmail).toBe('E-mail must have a valid format');
            expect(LoginPage.errorPassword).toBe('Password must have the correct format');
            browser.pause(2000);
        });

        it('wrongly formated email and password', () => {
            
            LoginPage.testLogin('seba20sagmail.com', 'abc')
            expect(LoginPage.errorEmail).toBe('E-mail must have a valid format');
            expect(LoginPage.errorPassword).toBe('Password must have the correct format');
            browser.pause(2000);
        });        
        
        it('Valid credentials', () => {
            
            LoginPage.testLogin('seba20sa@gmail.com', 'abc123456')
            expect(LoginPage.errorEmail).toBe('');
            browser.pause(2000);
        });

        // it('Testing the register button and the target url', () => {
        //     LoginPage.buttonRegister();
        //     if (browser.getUrl() === urlRegister);
        //     else throw new Error('ERROR');
        //     browser.pause(2000);
        // });

    });

});