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
  get btnRegister {
    return $('button[id="backToRegister"]');
  }

  /*selector for login button*/
  get btnLogin {
    return $('button[id="loginButton"]');
  }

  // /*selector for clean form  function*/
  // get btnFinish {
  //   return $('input[id="cleanFormLink"]');
  // }




    
}
  
module.exports = new LoginPage();
