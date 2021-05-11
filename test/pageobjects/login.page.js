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
    return $('input[id="loginErrorEmail"]');
  }

  /*selector for Password error*/
  get errorPassword () {
    return $('input[id="loginErrorPassword"]');
  }

  /*selector for the Register button*/
  get btnRegister {
    return $('input[id="backToRegister"]');
  }

  /*selector for login button*/
  get btnLogin {
    return $('input[id="loginButton"]');
  }

  // /*selector for clean form  function*/
  // get btnFinish {
  //   return $('input[id="cleanFormLink"]');
  // }




    
}
  
module.exports = new LoginPage();
