document.addEventListener("DOMContentLoaded", function(e) {
  target = document.getElementById("text");
  target.textContent = "This is really cool!";
});

// Code seems to be working in the browser, but tests are still failing.
// Test gets unchanged text as a result but the text is changed in the browser.