class ResiterPage {
  /*selector for name field*/
  get inputName () {
    return $('input[id="formRegisterName"]');
  }

  /*selector for email field*/
  get inputEmail () {
    return $('input[id="formRegisterEmail"]');
  } 

    /*selector for create password  field*/
  get inputFirstPassword () {
    return $('input[id="formRegisterFirstPassword"]');
  }

    /*selector for confirm password  field*/
    get inputSecondPassword () {
        return $('input[id="formRegisterSecondPassword"]');
    }

    /*selector for the Name  error*/
    get errorName () {
        return $('div[id="registerErrorName"]');
    }

    /*selector for the Email  error*/
    get errorEmail () {
        return $('div[id="registerErrorEmail"]');
    }

    /*selector for the First Password  error*/
    get errorFirstPassword () {
        return $('div[id="registerErrorFirstPassword"]');
    }

    /*selector for the Second Password  error*/
    get errorSecondPassword () {
        return $('div[id="registerErrorSecondPassword"]');
    }


    /*selector for the back to login button*/
    get btnLogin  () {
        return $('button[id="backToLogin"]');
    }

    /*selector for the Back to login button*/
    get btnLogin  () {
        return $('button[id="backToLogin"]');
    }

    /*selector for the Reset fields  button*/
    get btnReset  () {
        return $('button[id="resetFieldsButton"]');
    }

    /*selector for the Submit button*/
    get btnSubmit  () {
        return $('button[id="submitButton"]');
    }

    /*methods*/

    backToLogin () {
        this.btnLogin.click();
    }

    cleanForm () {
      this.btnReset.click();
    }


    
    login(name, email, firstPassword, secondPassword) {

      this.inputName.setValue(name);
      this.inputEmail.setValue(email);
      this.inputFirstPassword.setValue(firstPassword);
      this.inputSecondPassword.setValue(secondPassword);
      this.btnSubmit.click();
  }
    
}

module.exports = new RegisterPage();