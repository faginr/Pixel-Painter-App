// Global Variables
let cells = document.querySelectorAll(".cell");
let activeColor = "rgb(255,255,255)";
let table = document.querySelector("table.table");
let activeCell = document.querySelector(".cell");
let dropper;
let eyeCell = document.querySelector(".eye-cell");
let eyeText = document.querySelector(".eye-text");


// Set all initial color values
for (let i=0; i<cells.length; i++){
  cells[i].style.backgroundColor = "rgb(255,255,255)";
}

// Listen for EyeDropper
document.querySelector("#eye-check").addEventListener("click", evt => {
  dropper = document.querySelector("#eye-check");
  if (dropper.checked) {
    // Set Dropper Indicator on Table Border
    table.style.border = "5px dashed black";
  } else {
    // Set Paint Indicator on Table Border
    table.style.border = "5px solid silver";
  }
});

// Listen for Clicks
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", evt => {
    activeCell = cells[i];
    // Check for EyeDropper Toggle
    checkDropper();
  });
}

// Check for Eye Dropper Checked
function checkDropper() {
  dropper = document.querySelector("#eye-check");
  if (dropper.checked) {
    activateDropper();
  } else {
    activatePaint();
  }
}

// Dropper is Active, Activate Dropper

function activateDropper() {
  // Set EyeDropper Color
  eyeCell.style.backgroundColor = activeCell.style.backgroundColor;
  // Set Text Value
  eyeText.innerHTML = activeCell.style.backgroundColor.replace(/\s/g, "");
}

// Dropper is Inactive, Activate Painting

function activatePaint() {
  // Get Active Color
  getActiveColor();
  // Paint Color into Cell
  paintColor();
}

// Get Brush Color
function getActiveColor() {
  activeColor = document.querySelector("#brush-color").value;
}

// Paint Color into active cell
function paintColor() {
  activeCell.style.backgroundColor = activeColor;
}

// Save
$("#snap").click(function() {
  $(".table").css("borderStyle", "hidden");
  $("td").css('borderStyle', 'hidden');
  html2canvas($(".table"), {
    onrendered: function(canvas) {
      $("#test").attr("href", canvas.toDataURL("image/png"));
      $("#test").attr("download", "PixelArt.png");
      $("#test")[0].click();
      $(".table").css("border", "5px solid silver");
      $("td").css("border", "1px solid lightgrey");
      $(".eye-cell").css("border", "1px dashed black");
    }
  });
});
