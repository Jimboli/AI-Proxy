// Get the form element
var form = document.getElementById("proxy-form");

// Add an event listener for the submit event of the form
form.addEventListener("submit", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the URL from the form
  var url = document.getElementById("url").value;

  // Create a new XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // Set the callback function that will be called when the request completes
  xhr.onload = function() {
    // Check the status code of the response
    if (xhr.status == 200) {
      // If the response is successful, display the response data and update the title of the page
      document.getElementById("output").innerHTML = xhr.responseText;
    } else {
      // If the response is not successful, display an error message
      document.getElementById("output").innerHTML = "Error: " + xhr.status;
    }
  };

  // Set the request method and URL
  xhr.open("GET", url);

  // Set the request header
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  // Send the request
  xhr.send();
});
