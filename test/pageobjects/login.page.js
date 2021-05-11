class LoginPage {
  /*selector for email field*/
  get inputEmail() {
    return $('input[id="formLoginEmail"]');
  }

  /*selector for password field*/
  get inputPassword () {
    return $('input[id="formLoginPassword"]');
  }

  /*selector for Email error*/
  get errorEmail () {
    return $('div[id="loginErrorEmail"]');
  }

  /*selector for Password error*/
  get errorPassword () {
    return $('div[id="loginErrorPassword"]');
  }

  /*selector for the Register button*/
  get btnRegister () {
    return $('button[id="backToRegister"]');
  }

  /*selector for login submit button*/
  get btnSubmit () {
    return $('button[id="loginButton"]');
  }

  // /*selector for clean form  function*/
  // get btnFinish {
  //   return $('input[id="cleanFormLink"]');
  // }

  /* methods */

    buttonRegister () {
      this.btnRegister.click();
    }
  
    login(email, password) {
      this.inputEmail.setValue(email);
      this.inputPassword.setValue(password);
      this.btnSubmit.click();
  }



    
}
  
module.exports = new LoginPage();
