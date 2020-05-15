// opens sign up form when Sign Up is clicked
$("#sign-up-button").click(function () {
   $("#sign-up-form").toggleClass("d-none");
   $("#sign-up-button").toggleClass("d-none");
});

// brings down success banner when save is clicked
$("#save-imagery").click(function () {
   $("#overlay-success").toggleClass("d-flex d-none");
});

// brings down error banner when back to answer is clicked
$("#back-to-answer").click(function () {
   $("#overlay-error").toggleClass("d-flex d-none");
});

// makes the checkbox show the delete button
$("#show-delete").click(function () {
   // $("#delete-button").toggleClass("d-none");
   $("#delete-button").toggleClass("visible invisible");
});

// // makes the checkbox show the delete button
// $("#bubba").click(function () {
//    console.log("bubba");
// });

$("#answerField").keyup(function () {
   // disables the Next button unless there are between 1 and 240 characters in the field
   stringLength = $("#answerField").val().length;
   $("#counter").text(stringLength + "/240");

   if (stringLength == 0 || stringLength > 240) {
      $("#next-button").addClass("disabled");
      $("#counter").addClass("text-danger");
   } else {
      $("#next-button").removeClass("disabled");
      $("#counter").removeClass("text-danger");
   }
});

$("#new-user-button").click(function () {
   // check if email is gtg

   var emailInput = $("#new-email-input").val();

   var atPos = emailInput.indexOf("@");

   var emailError = ""; // initialize this to no error

   var emailLength = emailInput.length;

   if (emailLength == 0) {
      emailError = "Please enter your email.";
   } else if (atPos == -1) {
      emailError = "This doesn't look like a real email address.";
   }

   if (emailError != "") {
      // if there is an error, show it and display it
      console.log(emailError);
      $("#new-email-error").text(emailError); // place the error message
      $("#new-email-error").removeClass("d-none"); // show the error message
      $("#new-email-input").addClass("text-danger border-danger"); // Style the email input to highlight the error
   } else {
      // password is fine
      $("#new-email-error").addClass("d-none"); // hide the error message
      $("#new-email-input").removeClass("text-danger border-danger"); // remove the error style from input
   }

   // end email checking

   // check if password is gtg

   var passwordInput = $("#new-password-input").val();

   var passwordLength = passwordInput.length;

   var passwordError = ""; // initialize this to no error

   // The password cannot contain the local-part of the email address the user entered.
   // find the local part of the email address
   emailLocalpart = emailInput.slice(0, atPos);
   if (passwordInput.indexOf(emailLocalpart) > -1) {
      passwordError = "Your email address cannot be used in your password.";
   } else if (passwordLength < 9) {
      // password needs to be fixed
      passwordError = "Your password must be at least 9 characters";

      if (passwordLength == 0) {
         // password is empty
         passwordError = "Please enter your password.";
      }
   }

   if (passwordError != "") {
      // if there is an error, show it and display it
      console.log(passwordError);
      $("#new-password-error").text(passwordError); // place the error message
      $("#new-password-error").removeClass("d-none"); // show the error message
      $("#new-password-input").addClass("text-danger border-danger"); // Style the email input to highlight the error
   } else {
      // password is fine
      $("#new-password-error").addClass("d-none"); // hide the error message
      $("#new-password-input").removeClass("text-danger border-danger"); // remove the error style from input
   }

   // end password checking

   // check if successful and if so go to next page
   if (emailError == "" && passwordError == "") {
      // go to the next page if user entered data into the form correctly
      console.log("submit successful!");

      // createdOn: a new number based on the JavaScript Date object of today's date and time.
      var dateCode = Date.now(); // js number representing the date and time
      var theDate = new Date(Date.now());
      var finalDate = "";
      finalDate += String(theDate.getFullYear()).slice(-2);
      finalDate += ("00" + String(theDate.getMonth() + 1)).slice(-2);
      finalDate += ("00" + String(theDate.getDate())).slice(-2);
      finalDate += ("00" + String(theDate.getHours())).slice(-2);
      finalDate += ("00" + String(theDate.getMinutes())).slice(-2);
      finalDate += ("00" + String(theDate.getSeconds())).slice(-2);

      // _id: concatenating the milliseconds of the current datetime with a random number between 000 and 999.
      dateStr = String(dateCode);
      var dateMS = dateStr.slice(dateStr.length - 3);
      var rando = Math.floor(Math.random() * 1000);
      var randoStr = String(rando);
      // If the number of milliseconds or your random numbers is less that 3 characters long, be sure you pad it with 0s to the left, enuring each is 3 characters long.
      if (rando < 10) {
         randoStr = "0" + randoStr;
      }
      if (rando < 100) {
         randoStr = "0" + randoStr;
      }
      // console.log(dateCode, rando);
      // console.log("_id:", dateMS + rando);

      var newUserSubmission = {
         _id: dateMS + rando,
         email: emailInput,
         password: passwordInput,
         createdOn: finalDate,
      };

      console.log(newUserSubmission);

      // take the user to the next page
      // window.location.replace("create-answer.html");
   }
});

$("#login-button").click(function () {
   // check if email is gtg

   var emailInput = $("#existing-email-input").val();

   var emailError = ""; // initialize this to no error

   var emailLength = emailInput.length;

   if (emailLength == 0) {
      emailError = "Please enter your email.";
   }

   if (emailError != "") {
      // if there is an error, show it and display it
      console.log(emailError);
      $("#existing-email-error").text(emailError); // place the error message
      $("#existing-email-error").removeClass("d-none"); // show the error message
      $("#existing-email-input").addClass("text-danger border-danger"); // Style the email input to highlight the error
   } else {
      // password is fine
      $("#existing-email-error").addClass("d-none"); // hide the error message
      $("#existing-email-input").removeClass("text-danger border-danger"); // remove the error style from input
   }

   // end email checking

   // check if password is gtg

   var passwordInput = $("#existing-password-input").val();

   var passwordLength = passwordInput.length;

   var passwordError = ""; // initialize this to no error

   if (passwordLength == 0) {
      // password is empty
      passwordError = "Please enter your password.";
   }

   if (passwordError != "") {
      // if there is an error, show it and display it
      console.log(passwordError);
      $("#existing-password-error").text(passwordError); // place the error message
      $("#existing-password-error").removeClass("d-none"); // show the error message
      $("#existing-password-input").addClass("text-danger border-danger"); // Style the email input to highlight the error
   } else {
      // password is fine
      $("#existing-password-error").addClass("d-none"); // hide the error message
      $("#existing-password-input").removeClass("text-danger border-danger"); // remove the error style from input
   }

   // end password checking

   // check if successful and if so go to next page
   if (emailError == "" && passwordError == "") {
      // go to the next page if user entered data into the form correctly
      console.log("submit successful!");

      // take the user to the next page
      window.location.replace("create-answer.html");
   }
});

// $("#login-button").click(function () {

// });
