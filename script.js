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
