class LoginPage {
    /*GETTERS*/
    
    
    // get validationContainer () { return $('#validation-container') }
    
    
    /*LABELS*/
    get labelEmail () { return $$('label')[0] }
    get labelPassword () { return $$('label')[1] }


    /*selector for email field*/
    // get inputEmail() {
    //   return $('input[id="formLoginEmail"]');
    // }
    get inputEmail () { return $('#form-login-emaill') }
    /*selector for password field*/
    // get inputPassword () {
    //   return $('input[id="formLoginPassword"]');
    // }
    get inputPassword () { return $('#form-login-password') }

    /*selector for Email error*/
    // get errorEmail () {
    //   return $('div[id="loginErrorEmail"]');
    // }
    
    get errorEmail () { return $('#login-error-email') }
    /*selector for Password error*/
    // get errorPassword () {
    //   return $('div[id="loginErrorPassword"]');
    // }
    get errorPassword () { return $('#login-error-password') }
    
    /*selector for the Register button*/
    // get btnRegister () {
    //   return $('button[id="backToRegister"]');
    // }
    get btnRegister () { return $('#back-to-register') }
    
    /*selector for login submit button*/
    // get btnSubmit () {
    //   return $('button[id="loginButton"]');
    // }
    get btnSubmit () { return $('#login-button') }
    /*SETTERS*/
    setEmail (email) {
      this.inputEmail.setValue(email);
      browser.keys('Tab');
    }
    setPassword (password) {
      this.inputPassword.setValue(password);
      browser.keys('Tab');
    }
    // /*selector for clean form  function*/
    // get btnFinish {
    //   return $('input[id="cleanFormLink"]');
    // }  
    /* METHODS */
     
    buttonRegister () {
      this.btnRegister.click();
    }    
    testLogin (email, password) {
      this.setEmail(email);
      this.setPassword(password);
      this.btnSubmit.click();
    }
  }
    
  module.exports = new LoginPage();
