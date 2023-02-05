// JavaScript file

// Function that displays a message in the console
function displayMessage() {
  console.log("Hello, World!");
}

// Function that changes the background color of an element
function changeBackgroundColor(elementId, color) {
  document.getElementById(elementId).style.backgroundColor = color;
}

// Function that creates a circle
function create_circle(radius, x, y, color) {
  // Get reference to the canvas element
  var canvas = document.getElementById("canvas");
  
  // Get the 2D rendering context
  var context = canvas.getContext("2d");
  
  // Set the fill style to the specified color
  context.fillStyle = color;
  
  // Start a new path
  context.beginPath();
  
  // Draw an arc to create a circle
  context.arc(x, y, radius, 0, 2 * Math.PI);
  
  // Fill the circle with the fill style
  context.fill();
}

// Animate the moving circle
function moving_around(centerX, centerY, movingRadius,radius, color, angularVelocity, angle) {
  // Update the position of the moving circle
  angle += angularVelocity;
  x = centerX + movingRadius * Math.cos(angle);
  y = centerY + movingRadius * Math.sin(angle);

  // Draw the moving circle at the updated position
  create_circle(radius, x, y, color);
  requestAnimationFrame(moving_around);
}
