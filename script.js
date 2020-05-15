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

$(".new-user-button").click(function () {
   // this function can work on either the sign up or log in form as it uses the realtive html structure to know what to work on

   console.log("clicked submit button");

   var siblingPath = $(event.target).parent().children(); // made this a variable to simplify code below

   // check if email is gtg

   var emailInput = siblingPath.children(".email-input").val();

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
      siblingPath.children(".email-error").text(emailError); // place the error message
      siblingPath.children(".email-error").removeClass("d-none"); // show the error message
      siblingPath
         .children(".email-input")
         .addClass("text-danger border-danger"); // Style the email input to highlight the error
   } else {
      // password is fine
      siblingPath.children(".email-error").addClass("d-none"); // hide the error message
      siblingPath
         .children(".email-input")
         .removeClass("text-danger border-danger"); // remove the error style from input
   }

   // end email checking

   // check if password is gtg

   var passwordInput = siblingPath.children(".password-input").val();

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
      siblingPath.children(".password-error").text(passwordError); // place the error message
      siblingPath.children(".password-error").removeClass("d-none"); // show the error message
      siblingPath
         .children(".password-input")
         .addClass("text-danger border-danger"); // Style the email input to highlight the error
   } else {
      // password is fine
      siblingPath.children(".password-error").addClass("d-none"); // hide the error message
      siblingPath
         .children(".password-input")
         .removeClass("text-danger border-danger"); // remove the error style from input
   }

   // end password checking

   // check if successful and if so go to next page
   if (emailError == "" && passwordError == "") {
      // go to the next page if user entered data into the form correctly
      console.log("submit successful!");
      window.location.replace("create-answer.html");
   }
});

// console.log("hello")(
//    // Example starter JavaScript for disabling form submissions if there are invalid fields
//    function () {
//       "use strict";
//       window.addEventListener(
//          "load",
//          function () {
//             // Fetch all the forms we want to apply custom Bootstrap validation styles to
//             var forms = document.getElementsByClassName("needs-validation");
//             // Loop over them and prevent submission
//             var validation = Array.prototype.filter.call(forms, function (
//                form
//             ) {
//                form.addEventListener(
//                   "submit",
//                   function (event) {
//                      if (form.checkValidity() === false) {
//                         console.log("form is not valid");
//                         event.preventDefault();
//                         event.stopPropagation();
//                      }
//                      form.classList.add("was-validated");
//                   },
//                   false
//                );
//             });
//          },
//          false
//       );
//    }
// )();
