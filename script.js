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

// Find the Length of a String
function charCount() {
   // finds the length of the input string
   // return input.length;
   // console.log("charCount called");
   var string = $("#answerField").val();
   $(".counter").replaceWith(string + "/240");
}

$("#answerField").keyup(function () {
   stringLength = $("#answerField").val().length;
   // console.log("updating counter to " + stringLength);
   $(".counter").text(stringLength + "/240");
});

$(".login-button").click(function () {
   // this function can work on either the sign up or log in form as it uses the realtive html structure to know what to work on

   console.log("clicked log in button");

   // $(event.target)
   //    .parent()
   //    .children()
   //    .children(".email-error")
   //    .removeClass("d-none"); // show the email error message

   var siblingPath = $(event.target).parent().children(); // made this a variable to simplify code below

   // check if email is gtg
   var emailLength = siblingPath.children(".email-input").val().length;
   if (emailLength == 0) {
      siblingPath.children(".email-error").removeClass("d-none"); // show the email error message
      siblingPath.children(".email-error").text("Please enter your email.");
   } else {
      siblingPath.children(".email-error").addClass("d-none"); // hide the error message
   }

   // check if password is gtg
   var passwordLength = siblingPath.children(".password-input").val().length;
   if (passwordLength < 9) {
      // password needs to be fixed
      siblingPath.children(".password-error").removeClass("d-none"); // show the error message
      siblingPath
         .children(".password-error")
         .text("Your password must be at least 9 characters.");

      if (passwordLength == 0) {
         // password is empty
         siblingPath
            .children(".password-error")
            .text("Please enter your password.");
      }
   } else {
      // password is fine
      siblingPath.children(".password-error").addClass("d-none"); // hide the error message
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
