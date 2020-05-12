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

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
   "use strict";
   window.addEventListener(
      "load",
      function () {
         // Fetch all the forms we want to apply custom Bootstrap validation styles to
         var forms = document.getElementsByClassName("needs-validation");
         // Loop over them and prevent submission
         var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener(
               "submit",
               function (event) {
                  if (form.checkValidity() === false) {
                     console.log("form is not valid");
                     event.preventDefault();
                     event.stopPropagation();
                  }
                  form.classList.add("was-validated");
               },
               false
            );
         });
      },
      false
   );
})();
