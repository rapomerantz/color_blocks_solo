/* jshint esversion: 6 */

console.log('js');

let redCount = 0;
let blueCount = 0;
let greenCount = 0;
let yellowCount = 0;


$(document).ready(allReady);

function allReady () {
  $('#redCounter').append("There are " + redCount + " red blocks");
  $('#blueCounter').append("There are " + blueCount + " blue blocks");
  $('#greenCounter').append("There are " + greenCount + " green blocks");
  $('#yellowCounter').append("There are " + yellowCount + " yellow blocks");

  engageClickHandlers ();
}

function engageClickHandlers () {
  $('#redButton').on('click', redClicked);
  $('#blueButton').on('click', blueClicked);
  $('#greenButton').on('click', greenClicked);
  $('#yellowButton').on('click', yellowClicked);
  $('#content').on('click', '.blockRed', blockRemove);
  $('#content').on('click', '.blockBlue', blockRemove);
  $('#content').on('click', '.blockGreen', blockRemove);
  $('#content').on('click', '.blockYellow', blockRemove);
}

function blockRemove () {
  let thisBlock = this;
  let thisClass = $(this).attr("class");
  console.log(thisClass);
  this.remove();
   if (thisClass === "blockRed line") {
     console.log('that is a red block');
     redCount--;
     $('#redCounter').empty();
     if (redCount === 1) {
         redCounter.append("There is " + redCount + " red block");
     } else {
         redCounter.append("There are " + redCount + " red blocks");
   }
 }
   else if (thisClass === "blockBlue line") {
     console.log('that is a blue block');
     blueCount--;
     $('#blueCounter').empty();
     if (blueCount === 1) {
         blueCounter.append("There is " + blueCount + " blue block");
     } else {
         blueCounter.append("There are " + blueCount + " blue blocks");
     }
   }
   else if (thisClass === "blockGreen line") {
     console.log('that is a green block');
     greenCount--;
     $('#greenCounter').empty();
     if (greenCount === 1) {
         greenCounter.append("There is " + greenCount + " green block");
     } else {
         greenCounter.append("There are " + greenCount + " green blocks");
     }

   }
   else if (thisClass === "blockYellow line") {
     console.log('that is a yellow block');
     yellowCount--;
     $('#yellowCounter').empty();
     if (yellowCount === 1) {
         yellowCounter.append("There is " + yellowCount + " yellow block");
     } else {
         yellowCounter.append("There are " + yellowCount + " yellow blocks");
     }
   }
}




function redClicked () {
  console.log('Red Clicked!');
  $('#content').append('<div class="blockRed line"></div>');
  redCount ++;
  let redCounter = $('#redCounter');
  redCounter.empty();
  if (redCount === 1) {
      redCounter.append("There is " + redCount + " red block");
  } else {
      redCounter.append("There are " + redCount + " red blocks");
  }
}

function blueClicked () {
  console.log('Blue Clicked!');
  $('#content').append('<div class="blockBlue line"></div>');
  blueCount ++;
  let blueCounter = $('#blueCounter');
  blueCounter.empty();
  if (blueCount === 1) {
      blueCounter.append("There is " + blueCount + " blue block");
  } else {
      blueCounter.append("There are " + blueCount + " blue blocks");
  }
}

function greenClicked () {
  console.log('Green Clicked!');
  $('#content').append('<div class="blockGreen line"></div>');
  greenCount ++;
  let greenCounter = $('#greenCounter');
  greenCounter.empty();
  if (greenCount === 1) {
      greenCounter.append("There is " + greenCount + " green block");
  } else {
      greenCounter.append("There are " + greenCount + " green blocks");
  }
}

function yellowClicked () {
  console.log('yellow Clicked!');
  $('#content').append('<div class="blockYellow line"></div>');
  yellowCount ++;
  let yellowCounter = $('#yellowCounter');
  yellowCounter.empty();
  if (yellowCount === 1) {
      yellowCounter.append("There is " + yellowCount + " yellow block");
  } else {
      yellowCounter.append("There are " + yellowCount + " yellow blocks");
  }
}
