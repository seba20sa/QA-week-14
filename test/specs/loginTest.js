const LoginPage = require('../pageobjects/login.page');

describe ('login section with two input fields and two buttons',  () => {    
    /*URLs to perform the test*/
    const urlLogin = 'https://seba20sa.github.io/QA-week-14/public/login.html';  
    const urlRegister = 'https://seba20sa.github.io/QA-week-14/public/register.html';
    beforeAll("Open browser on the tested page", () => {
        browser.url(urlLogin);
      });
    describe ('Email field testing', () => {
        it('empty email', () => {            
            LoginPage.setEmail()            
            expect(LoginPage.errorEmail).toHaveText("E-mail must have a valid format");
            browser.pause(2000);
        });
        it('wrongly formated email only @', () => {            
            LoginPage.setEmail('@')
            expect(LoginPage.errorEmail).toHaveText("E-mail must have a valid format");
            browser.pause(2000);
        });
        it('wrongly formated email no @', () => {            
            LoginPage.setEmail('seba20sagmail.com')
            expect(LoginPage.errorEmail).toHaveText("E-mail must have a valid format");
            browser.pause(2000);
        });
        it('wrongly formated email no .com', () => {            
            LoginPage.setEmail('seba20sa@gmail')
            expect(LoginPage.errorEmail).toHaveText("E-mail must have a valid format");
            browser.pause(2000);
        });
        it('correctly formated email', () => {            
            LoginPage.setEmail('seba20sa@gmail.com')
            expect(LoginPage.errorEmail).toHaveText("");
            browser.pause(2000);
        });
    });
    describe('Password testing', () => {
        it('empty password', () => {            
            LoginPage.setPassword()            
            expect(LoginPage.errorPassword).toHaveText("Password must have the correct format");
            browser.pause(2000);
        });
        it('wrongly formated password less than 8 characters', () => {            
            LoginPage.setPassword('abc123')
            expect(LoginPage.errorPassword).toHaveText("Password must have the correct format");
            browser.pause(2000);
        });
        it('wrongly formated password no numbers just letters', () => {            
            LoginPage.setPassword('abcabcabcabcabc')
            expect(LoginPage.errorPassword).toHaveText("Password must have the correct format");
            browser.pause(2000);
        });
        it('correctly formated password', () => {            
            LoginPage.setPassword('abc123456')
            expect(LoginPage.errorPassword).toHaveText("");
            browser.pause(2000);
        });
    });
    describe('List of results', () => {
        it('After inserting all the valid credentials on the two fields, click the Login'+
        'button and test if they show on the validations section below', () => {
            LoginPage.testLogin('seba20sa@gmail', 'abc123456')
            expect(LoginPage.listOfResults).toHaveTextContaining([                
                "The e-mail is: seba20sa@gmail.com",
                "Password is: abc123456",
            ]);
            browser.pause(2000);
        });
    });
    describe('links and buttons', () => {
        it('Press the Register button and check if the URL is correct', () => {
            LoginPage.btnRegister.click();
            expect(browser).toHaveUrl(
                'https://seba20sa.github.io/QA-week-14/public/register.html'
            );
            expect(browser).toHaveTitle("REGISTER");
            browser.pause(2000);
        });
    });
});