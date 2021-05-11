class ResiterPage {
  /*GETTERS*/
  

  /*LABELS*/
  get labelFullName () { return $$('label')[0] }
  get labelEmail () { return $$('label')[1] }
  get labelPassword () { return $$('label')[2] }
  get labelConfirmPass () { return $$('label')[3] }


  /*selector for name field*/
  // get inputName () {
  //   return $('input[id="formRegisterName"]');
  // }
  get inputName () { return $('#form-register-name') }
  /*selector for email field*/
  // get inputEmail () {
  //   return $('input[id="formRegisterEmail"]');
  // }
  get inputEmail () { return $('#form-register-email') }
    /*selector for create password  field*/
  // get inputFirstPassword () {
  //   return $('input[id="formRegisterFirstPassword"]');
  // }
  get inputFirstPassword () { return $('#form-register-first-password') }

  /*selector for confirm password  field*/
  // get inputSecondPassword () {
  //     return $('input[id="formRegisterSecondPassword"]');
  // }
  get inputSecondPassword () { return $('#form-register-second-password') }

  /*selector for the Name  error*/
  // get errorName () {
  //     return $('div[id="registerErrorName"]');
  // }
  get errorName () { return $('#register-error-name') }

  /*selector for the Email  error*/
  // get errorEmail () {
  //     return $('div[id="registerErrorEmail"]');
  // }
  get errorEmail () { return $('#register-error-email') }

  /*selector for the First Password  error*/
  // get errorFirstPassword () {
  //     return $('div[id="registerErrorFirstPassword"]');
  // }
  get errorFirstPassword () { return $('#register-error-first-password') }

  /*selector for the Second Password  error*/
  // get errorSecondPassword () {
  //     return $('div[id="registerErrorSecondPassword"]');
  // }
  get errorSecondPassword () { return $('#register-error-second-password') }


  /*selector for the back to login button*/
  // get btnLogin  () {
  //     return $('button[id="backToLogin"]');
  // }
  get btnLogin () { return $('#back-to-login') }
  

  /*selector for the Reset fields  button*/
  // get btnReset  () {
  //     return $('button[id="resetFieldsButton"]');
  // }
  get btnReset () { return $('#reset-fields-button') }

  /*selector for the Submit button*/
  // get btnSubmit  () {
  //     return $('button[id="submitButton"]');
  // }
  get btnSubmit () { return $('#submit-button') }



  /*SETTERS*/
  setName(name) {
    this.inputName.setValue(name);
    browser.keys('Tab');
  }
  setEmail (email) {
    this.inputEmail.setValue(email);
    browser.keys('Tab');
  }
  setFirstPassword (firstPassword) {
    this.inputFirstPassword.setValue(firstPassword);
    browser.keys('Tab');
  }
  setSecondPassword (secondPassword) {
    this.inputSecondPassword.setValue(secondPassword);
    browser.keys('Tab');
  }

  /*methods*/

  backToLogin () {
      this.btnLogin.click();
  }

  cleanForm () {
    this.btnReset.click();
  }

  


  
  testRegister(name, email, firstPassword, secondPassword) {

    this.setName(name);
    this.setEmail (email);
    this.setFirstPassword (firstPassword);
    this.setSecondPassword (secondPassword);
    this.btnSubmit.click();
  }
    
}

module.exports = new RegisterPage();