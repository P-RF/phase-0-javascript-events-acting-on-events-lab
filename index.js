// Your code here
// Grab dodger
const dodger = document.getElementById("dodger");

// Width of the dodger
const dodgerWidth = 40;

// build 'moveDodgerLeft()' function
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}

// build 'moveDodgerRight()' function
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    // Prevent dodger from moving past the right side
    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
      }
}

// Add event listeners
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});