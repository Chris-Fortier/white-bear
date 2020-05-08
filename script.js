// brings down success banner when save is clicked
$("#save-imagery").click(function () {
   $("#overlay-success").toggleClass("d-flex d-none");
});

// brings down error banner when back to answer is clicked
$("#back-to-answer").click(function () {
   $("#overlay-error").toggleClass("d-flex d-none");
});
