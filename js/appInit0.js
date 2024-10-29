
var point1 = localStorage.getItem('point1') ? localStorage.getItem('point1') : 0;
var point2 = localStorage.getItem('point2') ? localStorage.getItem('point2') : 0;

/* https://stackoverflow.com/questions/39838058/how-to-avoid-javascript-variable-being-reset-at-page-refresh  */

function setSessionItem(name, value) {
    var mySession;
    try {
        mySession = JSON.parse(localStorage.getItem('mySession'));
    } catch (e) {
        console.log(e);
        mySession = {};
    }

    mySession[name] = value;

    mySession = JSON.stringify(mySession);

    localStorage.setItem('mySession', mySession);
}

function getSessionItem(name) {
    var mySession = localStroage.getItem('mySession');
    if (mySession) {
        try {
            mySession = JSON.stringify(mySession);
            return mySession[name];
        } catch (e) {
            console.log(e);
        }
    }
}

function restoreSession(data) {
    for (var x in data) {
        //use saved data to set values as needed
        console.log(x, data[x]);
    }
}



window.addEventListener('load', function(e) {
    var mySession = localStorage.getItem('mySession');
    if (mySession) {
        try {
            mySession = JSON.parse(localStorage.getItem('mySession'));
        } catch (e) {
            console.log(e);
            mySession = {};
        }
        restoreSession(mySession);
    } else {
        localStorage.setItem('mySession', '{}');
    }

    setSessionItem('foo', Date.now()); //should change each time

    if (!mySession.bar) {
        setSessionItem('bar', Date.now()); //should not change on refresh
    }
}, false);


 <!--- ===================================== LOGIN   ==================================== --->
   /* <script type = "text/javascript" id="initConfig">*/
      if (localStorage.user === undefined) {
	  console.log("chequeos de usuario");
      var usr_name  = prompt("Please enter your name: ");
      localStorage.setItem('user', usr_name);
      var usr_mail  = prompt(usr_name, "Please enter your email: ");
      var id_usr = usr_name + "|" + usr_mail
      localStorage.setItem('id_usr', id_usr);
      } else {
       usr_name = localStorage.getItem('user');
       /*alert('Usuario encontrado: ' + usr_name);*/
      }
       /* inicializacion de un proyecto */
       var usr_prjDB = usr_name + "-prjDB"
       var usr_brdDB = usr_name + "-brdDB"

      // alert("user: " + usr_name + "; Proyectos:" + usr_prjDB + "; Boards:" + usr_brdDB);
       alert("Buscando Base datos proyectos " + usr_prjDB);//

       if (localStorage.usr_prjDB  === undefined) {
           var prj_name = prompt("Enter a name for your first project");
           localStorage.setItem(usr_prjDB, prj_name);

        /*alert("Creando Primer Board para " + prj_name);*/
           /* si estoy creando un nuevo proyecto, debo agregar un board*/
           var brd_name = prompt("Enter a name for your first board");
           localStorage.setItem(usr_brdDB , brd_name);

           var usr_nameDB = usr_name + "|"+ usr_mail + "|(" + prj_name + ":(" + brd_name +"))|";
           localStorage.setItem(usr_nameDB , usr_nameDB);
        }
  /*   </script>*/

   <!--- "lgnRegisterResetValidateForm" --->
   /* <script id="loginregister.js" type="text/javascript"> */
      function ShowLoginForm() {
        SetTitle("Login");
        ShowHideForm("LoginFrom", "Show");
        ShowHideForm("RegistrationFrom", "Hide");
        ShowHideForm("ForgotPasswordForm", "Hide");
        ActiveInactiveBtn("ShowLoginBtn", "Active");
        ActiveInactiveBtn("ShowRegistrationBtn", "Inactive");
        ShowHideFromSwitchBtn("Show");
      };

      function ShowRegistrationForm() {
        debugger;
        SetTitle("Registration");
        ShowHideForm("RegistrationFrom", "Show");
        ShowHideForm("LoginFrom", "Hide");
        ShowHideForm("ForgotPasswordForm", "Hide");
        ActiveInactiveBtn("ShowLoginBtn", "Inactive");
        ActiveInactiveBtn("ShowRegistrationBtn", "Active");
        ShowHideFromSwitchBtn("Show");
      };

      function ShowForgotPasswordForm() {
        SetTitle("Forgot Password");
        ShowHideForm("RegistrationFrom", "Hide");
        ShowHideForm("LoginFrom", "Hide");
        ShowHideForm("ForgotPasswordForm", "Show");
        ActiveInactiveBtn("ShowLoginBtn", "Inactive");
        ActiveInactiveBtn("ShowRegistrationBtn", "Inactive");
        ShowHideFromSwitchBtn("Hide");
      }

      function SetTitle(Title) {
        var formTitle = document.getElementById('formTitle');
        formTitle.innerHTML = Title;
      }

      function ShowHideForm(FormID, ShowOrHide) {
        var Form = document.getElementById(FormID);
        if (ShowOrHide == "Show") {
          Form.style.display = 'block';
        } else {
          Form.style.display = 'none';
        }
      }

      function ActiveInactiveBtn(ButtonID, ActiveORInactive) {
        debugger;
        var Button = document.getElementById(ButtonID);
        if (ActiveORInactive == "Active") {
          Button.classList.add('active');
        } else {
          Button.classList.remove('active');
        }
      }

      function ShowHideFromSwitchBtn(ShowOrHide) {
        var formSwitchBtn = document.getElementById('formSwitchBtn');
        if (ShowOrHide == 'Show') {
          formSwitchBtn.style.display = '';
        } else {
          formSwitchBtn.style.display = 'none';
        }
      }
      // end
   /*  </script>  */

   /* <script id="validation.js" type="text/javascript"> */
      function ValidateLoginForm() {
        RemoveAllErrorMessage();
        var LoginEmail = document.getElementById('LoginEmail').value;
        var LoginPassword = document.getElementById('LoginPassword').value;
        var PasswordValidationMessage;
        var emailValidationMessage;
        emailValidationMessage = isValidEmail(LoginEmail);
        if (emailValidationMessage != "valid") {
          ShowErrorMessage('LoginEmail', emailValidationMessage);
          //return false;
          return true;
        }
        PasswordValidationMessage = isValidPassword(LoginPassword);
        if (PasswordValidationMessage != "valid") {
          ShowErrorMessage('LoginPassword', PasswordValidationMessage);
          //return false;
          return true;
        }
        sessionStorage.setItem("loggeduser", btoa(LoginEmail));
        sessionStorage.setItem("loggedUsr", "true");
        return true;
      }

      function ValidateRegistrationForm() {
        RemoveAllErrorMessage();
        var RegiName = document.getElementById('RegiName').value;
        var RegiEmailAddres = document.getElementById('RegiEmailAddres').value;
        var RegiPassword = document.getElementById('RegiPassword').value;
        var RegiConfirmPassword = document.getElementById('RegiConfirmPassword').value;
        var PasswordValidationMessage;
        var ConfirmPasswordMessage;
        var emailValidationMessage;
        if (RegiName == "") {
          ShowErrorMessage('RegiName', "Please fill the filed.");
          return false;
        } else if (RegiName.length < 6 || RegiName.length > 20) {
          ShowErrorMessage('RegiName', "Name should be minimum 3 and maximum 20 characters long.");
          return false;
        }
        emailValidationMessage = isValidEmail(RegiEmailAddres);
        if (emailValidationMessage != "valid") {
          ShowErrorMessage('RegiEmailAddres', emailValidationMessage);
          return false;
        }
        PasswordValidationMessage = isValidPassword(RegiPassword);
        if (PasswordValidationMessage != "valid") {
          ShowErrorMessage('RegiPassword', PasswordValidationMessage);
          return false;
        }
        ConfirmPasswordMessage = isValidPassword(RegiConfirmPassword);
        if (ConfirmPasswordMessage != "valid") {
          ShowErrorMessage('RegiConfirmPassword', ConfirmPasswordMessage);
          return false;
        }
        if (RegiPassword != RegiConfirmPassword) {
          ShowErrorMessage('RegiConfirmPassword', "Password not match.");
          return false;
        }
        sessionStorage.setItem("loggeduser", btoa(LoginEmail));
        sessionStorage.setItem("loggedUsr", "true");
        return true;
      }

      function ValidateForgotPasswordForm() {
        RemoveAllErrorMessage();
        var forgotPassEmail = document.getElementById('forgotPassEmail').value;
        var emailValidationMessage;
        emailValidationMessage = isValidEmail(forgotPassEmail);
        if (emailValidationMessage != "valid") {
          ShowErrorMessage('forgotPassEmail', emailValidationMessage);
          return false;
        }
      }

      function ValidateResetPasswordForm() {
        RemoveAllErrorMessage();
        var NewPassword = document.getElementById('NewPassword').value;
        var ConfirmNewPassword = document.getElementById('ConfirmNewPassword').value;
        var PasswordValidationMessage;
        var ConfirmPasswordMessage;
        PasswordValidationMessage = isValidPassword(NewPassword);
        if (PasswordValidationMessage != "valid") {
          ShowErrorMessage('NewPassword', PasswordValidationMessage);
          return false;
        }
        ConfirmPasswordMessage = isValidPassword(ConfirmNewPassword);
        if (ConfirmPasswordMessage != "valid") {
          ShowErrorMessage('ConfirmNewPassword', ConfirmPasswordMessage);
          return false;
        }
        if (NewPassword != ConfirmNewPassword) {
          ShowErrorMessage('ConfirmNewPassword', "Password not match.");
          return false;
        }
        sessionStorage.setItem("loggeduser", btoa(LoginEmail));
        sessionStorage.setItem("loggedUsr", "true");
        return true;
      }

      function RemoveAllErrorMessage() {
        var allErrorMessage = document.getElementsByClassName('error-message');
        var allErrorFiled = document.getElementsByClassName('error-input');
        var i;
        for (i = (allErrorMessage.length - 1); i >= 0; i--) {
          allErrorMessage[i].remove();
        }
        for (i = (allErrorFiled.length - 1); i >= 0; i--) {
          allErrorFiled[i].classList.remove('error-input');
        }
      }

      function ShowErrorMessage(InputBoxID, Message) {
        var InputBox = document.getElementById(InputBoxID);
        InputBox.classList.add('error-input');
        InputBox.focus();
        var ErrorMessageElement = document.createElement("p");
        ErrorMessageElement.innerHTML = Message;
        ErrorMessageElement.classList.add('error-message');
        ErrorMessageElement.setAttribute("id", InputBoxID + '-error');
        InputBox.parentNode.insertBefore(ErrorMessageElement, InputBox.nextSibling);
      }

      function isValidEmail(email) {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email == "") {
          return "Please fill the field.";
        }
        if (emailRegex.test(email) == false) {
          return "This is not a valid email.";
        }
        return "valid";
      }

      function isValidPassword(password) {
        const minLength = 8;
        const maxLength = 32;
        const letterNumberRegexSpecialChar = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
        if (password == "") {
          return "Please fill the field."
        }
        if (password.length < minLength || password.length > maxLength) {
          return "Password length should be minimum 8 & maximum 32 characters.";
        }
        if (!letterNumberRegexSpecialChar.test(password)) {
          return "Password should contain alphabetic, numeric and special characters.";
        }
        return "valid";
      }


