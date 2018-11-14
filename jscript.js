var colorInput;
var paintColor;
var ticked;
var dropCell = 0;

function dropper() {
  ticked = document.getElementById("eyeCheck");
    if (ticked.checked) {
    dropCell = 1;
     document.getElementById("kontainer").style.border = "3px dashed black";
  }
  else {
    dropCell = 0
    document.getElementById("kontainer").style.border = "5px solid silver";
  }
}

function brushColor() {
colorInput = document.getElementById("cursorColor");
paintColor = colorInput.value;
}

var activeCell;

var oneOneColor = "#FFFFFF";
var oneTwoColor = "#FFFFFF";
var oneThreeColor = "#FFFFFF";
var oneFourColor = "#FFFFFF";
var oneFiveColor = "#FFFFFF";
var oneSixColor = "#FFFFFF";
var oneSevenColor = "#FFFFFF";
var oneEightColor = "#FFFFFF";
var oneNineColor = "#FFFFFF";
var oneTenColor = "#FFFFFF";
var one11Color = "#FFFFFF";
var one12Color = "#FFFFFF";
var one13Color = "#FFFFFF";
var one14Color = "#FFFFFF";
var one15Color = "#FFFFFF";
var one16Color = "#FFFFFF";
var one17Color = "#FFFFFF";
var one18Color = "#FFFFFF";
var one19Color = "#FFFFFF";
var one20Color = "#FFFFFF";
var one21Color = "#FFFFFF";
var one22Color = "#FFFFFF";
var one23Color = "#FFFFFF";
var one24Color = "#FFFFFF";
var one25Color = "#FFFFFF";

var twoOneColor = "#FFFFFF";
var twoTwoColor = "#FFFFFF";
var twoThreeColor = "#FFFFFF";
var twoFourColor = "#FFFFFF";
var twoFiveColor = "#FFFFFF";
var twoSixColor = "#FFFFFF";
var twoSevenColor = "#FFFFFF";
var twoEightColor = "#FFFFFF";
var twoNineColor = "#FFFFFF";
var twoTenColor = "#FFFFFF";
var two11Color = "#FFFFFF";
var two12Color = "#FFFFFF";
var two13Color = "#FFFFFF";
var two14Color = "#FFFFFF";
var two15Color = "#FFFFFF";
var two16Color = "#FFFFFF";
var two17Color = "#FFFFFF";
var two18Color = "#FFFFFF";
var two19Color = "#FFFFFF";
var two20Color = "#FFFFFF";
var two21Color = "#FFFFFF";
var two22Color = "#FFFFFF";
var two23Color = "#FFFFFF";
var two24Color = "#FFFFFF";
var two25Color = "#FFFFFF";

var threeOneColor = "#FFFFFF";
var threeTwoColor = "#FFFFFF";
var threeThreeColor = "#FFFFFF";
var threeFourColor = "#FFFFFF";
var threeFiveColor = "#FFFFFF";
var threeSixColor = "#FFFFFF";
var threeSevenColor = "#FFFFFF";
var threeEightColor = "#FFFFFF";
var threeNineColor = "#FFFFFF";
var threeTenColor = "#FFFFFF";
var three11Color = "#FFFFFF";
var three12Color = "#FFFFFF";
var three13Color = "#FFFFFF";
var three14Color = "#FFFFFF";
var three15Color = "#FFFFFF";
var three16Color = "#FFFFFF";
var three17Color = "#FFFFFF";
var three18Color = "#FFFFFF";
var three19Color = "#FFFFFF";
var three20Color = "#FFFFFF";
var three21Color = "#FFFFFF";
var three22Color = "#FFFFFF";
var three23Color = "#FFFFFF";
var three24Color = "#FFFFFF";
var three25Color = "#FFFFFF";

var fourOneColor = "#FFFFFF";
var fourTwoColor = "#FFFFFF";
var fourThreeColor = "#FFFFFF";
var fourFourColor = "#FFFFFF";
var fourFiveColor = "#FFFFFF";
var fourSixColor = "#FFFFFF";
var fourSevenColor = "#FFFFFF";
var fourEightColor = "#FFFFFF";
var fourNineColor = "#FFFFFF";
var fourTenColor = "#FFFFFF";
var four11Color = "#FFFFFF";
var four12Color = "#FFFFFF";
var four13Color = "#FFFFFF";
var four14Color = "#FFFFFF";
var four15Color = "#FFFFFF";
var four16Color = "#FFFFFF";
var four17Color = "#FFFFFF";
var four18Color = "#FFFFFF";
var four19Color = "#FFFFFF";
var four20Color = "#FFFFFF";
var four21Color = "#FFFFFF";
var four22Color = "#FFFFFF";
var four23Color = "#FFFFFF";
var four24Color = "#FFFFFF";
var four25Color = "#FFFFFF";

var fiveOneColor = "#FFFFFF";
var fiveTwoColor = "#FFFFFF";
var fiveThreeColor = "#FFFFFF";
var fiveFourColor = "#FFFFFF";
var fiveFiveColor = "#FFFFFF";
var fiveSixColor = "#FFFFFF";
var fiveSevenColor = "#FFFFFF";
var fiveEightColor = "#FFFFFF";
var fiveNineColor = "#FFFFFF";
var fiveTenColor = "#FFFFFF";
var five11Color = "#FFFFFF";
var five12Color = "#FFFFFF";
var five13Color = "#FFFFFF";
var five14Color = "#FFFFFF";
var five15Color = "#FFFFFF";
var five16Color = "#FFFFFF";
var five17Color = "#FFFFFF";
var five18Color = "#FFFFFF";
var five19Color = "#FFFFFF";
var five20Color = "#FFFFFF";
var five21Color = "#FFFFFF";
var five22Color = "#FFFFFF";
var five23Color = "#FFFFFF";
var five24Color = "#FFFFFF";
var five25Color = "#FFFFFF";

var sixOneColor = "#FFFFFF";
var sixTwoColor = "#FFFFFF";
var sixThreeColor = "#FFFFFF";
var sixFourColor = "#FFFFFF";
var sixFiveColor = "#FFFFFF";
var sixSixColor = "#FFFFFF";
var sixSevenColor = "#FFFFFF";
var sixEightColor = "#FFFFFF";
var sixNineColor = "#FFFFFF";
var sixTenColor = "#FFFFFF";
var six11Color = "#FFFFFF";
var six12Color = "#FFFFFF";
var six13Color = "#FFFFFF";
var six14Color = "#FFFFFF";
var six15Color = "#FFFFFF";
var six16Color = "#FFFFFF";
var six17Color = "#FFFFFF";
var six18Color = "#FFFFFF";
var six19Color = "#FFFFFF";
var six20Color = "#FFFFFF";
var six21Color = "#FFFFFF";
var six22Color = "#FFFFFF";
var six23Color = "#FFFFFF";
var six24Color = "#FFFFFF";
var six25Color = "#FFFFFF";

var sevenOneColor = "#FFFFFF";
var sevenTwoColor = "#FFFFFF";
var sevenThreeColor = "#FFFFFF";
var sevenFourColor = "#FFFFFF";
var sevenFiveColor = "#FFFFFF";
var sevenSixColor = "#FFFFFF";
var sevenSevenColor = "#FFFFFF";
var sevenEightColor = "#FFFFFF";
var sevenNineColor = "#FFFFFF";
var sevenTenColor = "#FFFFFF";
var seven11Color = "#FFFFFF";
var seven12Color = "#FFFFFF";
var seven13Color = "#FFFFFF";
var seven14Color = "#FFFFFF";
var seven15Color = "#FFFFFF";
var seven16Color = "#FFFFFF";
var seven17Color = "#FFFFFF";
var seven18Color = "#FFFFFF";
var seven19Color = "#FFFFFF";
var seven20Color = "#FFFFFF";
var seven21Color = "#FFFFFF";
var seven22Color = "#FFFFFF";
var seven23Color = "#FFFFFF";
var seven24Color = "#FFFFFF";
var seven25Color = "#FFFFFF";

var eightOneColor = "#FFFFFF";
var eightTwoColor = "#FFFFFF";
var eightThreeColor = "#FFFFFF";
var eightFourColor = "#FFFFFF";
var eightFiveColor = "#FFFFFF";
var eightSixColor = "#FFFFFF";
var eightSevenColor = "#FFFFFF";
var eightEightColor = "#FFFFFF";
var eightNineColor = "#FFFFFF";
var eightTenColor = "#FFFFFF";
var eight11Color = "#FFFFFF";
var eight12Color = "#FFFFFF";
var eight13Color = "#FFFFFF";
var eight14Color = "#FFFFFF";
var eight15Color = "#FFFFFF";
var eight16Color = "#FFFFFF";
var eight17Color = "#FFFFFF";
var eight18Color = "#FFFFFF";
var eight19Color = "#FFFFFF";
var eight20Color = "#FFFFFF";
var eight21Color = "#FFFFFF";
var eight22Color = "#FFFFFF";
var eight23Color = "#FFFFFF";
var eight24Color = "#FFFFFF";
var eight25Color = "#FFFFFF";

var nineOneColor = "#FFFFFF";
var nineTwoColor = "#FFFFFF";
var nineThreeColor = "#FFFFFF";
var nineFourColor = "#FFFFFF";
var nineFiveColor = "#FFFFFF";
var nineSixColor = "#FFFFFF";
var nineSevenColor = "#FFFFFF";
var nineEightColor = "#FFFFFF";
var nineNineColor = "#FFFFFF";
var nineTenColor = "#FFFFFF";
var nine11Color = "#FFFFFF";
var nine12Color = "#FFFFFF";
var nine13Color = "#FFFFFF";
var nine14Color = "#FFFFFF";
var nine15Color = "#FFFFFF";
var nine16Color = "#FFFFFF";
var nine17Color = "#FFFFFF";
var nine18Color = "#FFFFFF";
var nine19Color = "#FFFFFF";
var nine20Color = "#FFFFFF";
var nine21Color = "#FFFFFF";
var nine22Color = "#FFFFFF";
var nine23Color = "#FFFFFF";
var nine24Color = "#FFFFFF";
var nine25Color = "#FFFFFF";

var tenOneColor = "#FFFFFF";
var tenTwoColor = "#FFFFFF";
var tenThreeColor = "#FFFFFF";
var tenFourColor = "#FFFFFF";
var tenFiveColor = "#FFFFFF";
var tenSixColor = "#FFFFFF";
var tenSevenColor = "#FFFFFF";
var tenEightColor = "#FFFFFF";
var tenNineColor = "#FFFFFF";
var tenTenColor = "#FFFFFF";
var ten11Color = "#FFFFFF";
var ten12Color = "#FFFFFF";
var ten13Color = "#FFFFFF";
var ten14Color = "#FFFFFF";
var ten15Color = "#FFFFFF";
var ten16Color = "#FFFFFF";
var ten17Color = "#FFFFFF";
var ten18Color = "#FFFFFF";
var ten19Color = "#FFFFFF";
var ten20Color = "#FFFFFF";
var ten21Color = "#FFFFFF";
var ten22Color = "#FFFFFF";
var ten23Color = "#FFFFFF";
var ten24Color = "#FFFFFF";
var ten25Color = "#FFFFFF";

var elevenOneColor = "#FFFFFF";
var elevenTwoColor = "#FFFFFF";
var elevenThreeColor = "#FFFFFF";
var elevenFourColor = "#FFFFFF";
var elevenFiveColor = "#FFFFFF";
var elevenSixColor = "#FFFFFF";
var elevenSevenColor = "#FFFFFF";
var elevenEightColor = "#FFFFFF";
var elevenNineColor = "#FFFFFF";
var elevenTenColor = "#FFFFFF";
var eleven11Color = "#FFFFFF";
var eleven12Color = "#FFFFFF";
var eleven13Color = "#FFFFFF";
var eleven14Color = "#FFFFFF";
var eleven15Color = "#FFFFFF";
var eleven16Color = "#FFFFFF";
var eleven17Color = "#FFFFFF";
var eleven18Color = "#FFFFFF";
var eleven19Color = "#FFFFFF";
var eleven20Color = "#FFFFFF";
var eleven21Color = "#FFFFFF";
var eleven22Color = "#FFFFFF";
var eleven23Color = "#FFFFFF";
var eleven24Color = "#FFFFFF";
var eleven25Color = "#FFFFFF";

var twelveOneColor = "#FFFFFF";
var twelveTwoColor = "#FFFFFF";
var twelveThreeColor = "#FFFFFF";
var twelveFourColor = "#FFFFFF";
var twelveFiveColor = "#FFFFFF";
var twelveSixColor = "#FFFFFF";
var twelveSevenColor = "#FFFFFF";
var twelveEightColor = "#FFFFFF";
var twelveNineColor = "#FFFFFF";
var twelveTenColor = "#FFFFFF";
var twelve11Color = "#FFFFFF";
var twelve12Color = "#FFFFFF";
var twelve13Color = "#FFFFFF";
var twelve14Color = "#FFFFFF";
var twelve15Color = "#FFFFFF";
var twelve16Color = "#FFFFFF";
var twelve17Color = "#FFFFFF";
var twelve18Color = "#FFFFFF";
var twelve19Color = "#FFFFFF";
var twelve20Color = "#FFFFFF";
var twelve21Color = "#FFFFFF";
var twelve22Color = "#FFFFFF";
var twelve23Color = "#FFFFFF";
var twelve24Color = "#FFFFFF";
var twelve25Color = "#FFFFFF";

var thirteenOneColor = "#FFFFFF";
var thirteenTwoColor = "#FFFFFF";
var thirteenThreeColor = "#FFFFFF";
var thirteenFourColor = "#FFFFFF";
var thirteenFiveColor = "#FFFFFF";
var thirteenSixColor = "#FFFFFF";
var thirteenSevenColor = "#FFFFFF";
var thirteenEightColor = "#FFFFFF";
var thirteenNineColor = "#FFFFFF";
var thirteenTenColor = "#FFFFFF";
var thirteen11Color = "#FFFFFF";
var thirteen12Color = "#FFFFFF";
var thirteen13Color = "#FFFFFF";
var thirteen14Color = "#FFFFFF";
var thirteen15Color = "#FFFFFF";
var thirteen16Color = "#FFFFFF";
var thirteen17Color = "#FFFFFF";
var thirteen18Color = "#FFFFFF";
var thirteen19Color = "#FFFFFF";
var thirteen20Color = "#FFFFFF";
var thirteen21Color = "#FFFFFF";
var thirteen22Color = "#FFFFFF";
var thirteen23Color = "#FFFFFF";
var thirteen24Color = "#FFFFFF";
var thirteen25Color = "#FFFFFF";

var fourteenOneColor = "#FFFFFF";
var fourteenTwoColor = "#FFFFFF";
var fourteenThreeColor = "#FFFFFF";
var fourteenFourColor = "#FFFFFF";
var fourteenFiveColor = "#FFFFFF";
var fourteenSixColor = "#FFFFFF";
var fourteenSevenColor = "#FFFFFF";
var fourteenEightColor = "#FFFFFF";
var fourteenNineColor = "#FFFFFF";
var fourteenTenColor = "#FFFFFF";
var fourteen11Color = "#FFFFFF";
var fourteen12Color = "#FFFFFF";
var fourteen13Color = "#FFFFFF";
var fourteen14Color = "#FFFFFF";
var fourteen15Color = "#FFFFFF";
var fourteen16Color = "#FFFFFF";
var fourteen17Color = "#FFFFFF";
var fourteen18Color = "#FFFFFF";
var fourteen19Color = "#FFFFFF";
var fourteen20Color = "#FFFFFF";
var fourteen21Color = "#FFFFFF";
var fourteen22Color = "#FFFFFF";
var fourteen23Color = "#FFFFFF";
var fourteen24Color = "#FFFFFF";
var fourteen25Color = "#FFFFFF";

var fifteenOneColor = "#FFFFFF";
var fifteenTwoColor = "#FFFFFF";
var fifteenThreeColor = "#FFFFFF";
var fifteenFourColor = "#FFFFFF";
var fifteenFiveColor = "#FFFFFF";
var fifteenSixColor = "#FFFFFF";
var fifteenSevenColor = "#FFFFFF";
var fifteenEightColor = "#FFFFFF";
var fifteenNineColor = "#FFFFFF";
var fifteenTenColor = "#FFFFFF";
var fifteen11Color = "#FFFFFF";
var fifteen12Color = "#FFFFFF";
var fifteen13Color = "#FFFFFF";
var fifteen14Color = "#FFFFFF";
var fifteen15Color = "#FFFFFF";
var fifteen16Color = "#FFFFFF";
var fifteen17Color = "#FFFFFF";
var fifteen18Color = "#FFFFFF";
var fifteen19Color = "#FFFFFF";
var fifteen20Color = "#FFFFFF";
var fifteen21Color = "#FFFFFF";
var fifteen22Color = "#FFFFFF";
var fifteen23Color = "#FFFFFF";
var fifteen24Color = "#FFFFFF";
var fifteen25Color = "#FFFFFF";

var sixteenOneColor = "#FFFFFF";
var sixteenTwoColor = "#FFFFFF";
var sixteenThreeColor = "#FFFFFF";
var sixteenFourColor = "#FFFFFF";
var sixteenFiveColor = "#FFFFFF";
var sixteenSixColor = "#FFFFFF";
var sixteenSevenColor = "#FFFFFF";
var sixteenEightColor = "#FFFFFF";
var sixteenNineColor = "#FFFFFF";
var sixteenTenColor = "#FFFFFF";
var sixteen11Color = "#FFFFFF";
var sixteen12Color = "#FFFFFF";
var sixteen13Color = "#FFFFFF";
var sixteen14Color = "#FFFFFF";
var sixteen15Color = "#FFFFFF";
var sixteen16Color = "#FFFFFF";
var sixteen17Color = "#FFFFFF";
var sixteen18Color = "#FFFFFF";
var sixteen19Color = "#FFFFFF";
var sixteen20Color = "#FFFFFF";
var sixteen21Color = "#FFFFFF";
var sixteen22Color = "#FFFFFF";
var sixteen23Color = "#FFFFFF";
var sixteen24Color = "#FFFFFF";
var sixteen25Color = "#FFFFFF";

var seventeenOneColor = "#FFFFFF";
var seventeenTwoColor = "#FFFFFF";
var seventeenThreeColor = "#FFFFFF";
var seventeenFourColor = "#FFFFFF";
var seventeenFiveColor = "#FFFFFF";
var seventeenSixColor = "#FFFFFF";
var seventeenSevenColor = "#FFFFFF";
var seventeenEightColor = "#FFFFFF";
var seventeenNineColor = "#FFFFFF";
var seventeenTenColor = "#FFFFFF";
var seventeen11Color = "#FFFFFF";
var seventeen12Color = "#FFFFFF";
var seventeen13Color = "#FFFFFF";
var seventeen14Color = "#FFFFFF";
var seventeen15Color = "#FFFFFF";
var seventeen16Color = "#FFFFFF";
var seventeen17Color = "#FFFFFF";
var seventeen18Color = "#FFFFFF";
var seventeen19Color = "#FFFFFF";
var seventeen20Color = "#FFFFFF";
var seventeen21Color = "#FFFFFF";
var seventeen22Color = "#FFFFFF";
var seventeen23Color = "#FFFFFF";
var seventeen24Color = "#FFFFFF";
var seventeen25Color = "#FFFFFF";

var eighteenOneColor = "#FFFFFF";
var eighteenTwoColor = "#FFFFFF";
var eighteenThreeColor = "#FFFFFF";
var eighteenFourColor = "#FFFFFF";
var eighteenFiveColor = "#FFFFFF";
var eighteenSixColor = "#FFFFFF";
var eighteenSevenColor = "#FFFFFF";
var eighteenEightColor = "#FFFFFF";
var eighteenNineColor = "#FFFFFF";
var eighteenTenColor = "#FFFFFF";
var eighteen11Color = "#FFFFFF";
var eighteen12Color = "#FFFFFF";
var eighteen13Color = "#FFFFFF";
var eighteen14Color = "#FFFFFF";
var eighteen15Color = "#FFFFFF";
var eighteen16Color = "#FFFFFF";
var eighteen17Color = "#FFFFFF";
var eighteen18Color = "#FFFFFF";
var eighteen19Color = "#FFFFFF";
var eighteen20Color = "#FFFFFF";
var eighteen21Color = "#FFFFFF";
var eighteen22Color = "#FFFFFF";
var eighteen23Color = "#FFFFFF";
var eighteen24Color = "#FFFFFF";
var eighteen25Color = "#FFFFFF";

var nineteenOneColor = "#FFFFFF";
var nineteenTwoColor = "#FFFFFF";
var nineteenThreeColor = "#FFFFFF";
var nineteenFourColor = "#FFFFFF";
var nineteenFiveColor = "#FFFFFF";
var nineteenSixColor = "#FFFFFF";
var nineteenSevenColor = "#FFFFFF";
var nineteenEightColor = "#FFFFFF";
var nineteenNineColor = "#FFFFFF";
var nineteenTenColor = "#FFFFFF";
var nineteen11Color = "#FFFFFF";
var nineteen12Color = "#FFFFFF";
var nineteen13Color = "#FFFFFF";
var nineteen14Color = "#FFFFFF";
var nineteen15Color = "#FFFFFF";
var nineteen16Color = "#FFFFFF";
var nineteen17Color = "#FFFFFF";
var nineteen18Color = "#FFFFFF";
var nineteen19Color = "#FFFFFF";
var nineteen20Color = "#FFFFFF";
var nineteen21Color = "#FFFFFF";
var nineteen22Color = "#FFFFFF";
var nineteen23Color = "#FFFFFF";
var nineteen24Color = "#FFFFFF";
var nineteen25Color = "#FFFFFF";

var twentyOneColor = "#FFFFFF";
var twentyTwoColor = "#FFFFFF";
var twentyThreeColor = "#FFFFFF";
var twentyFourColor = "#FFFFFF";
var twentyFiveColor = "#FFFFFF";
var twentySixColor = "#FFFFFF";
var twentySevenColor = "#FFFFFF";
var twentyEightColor = "#FFFFFF";
var twentyNineColor = "#FFFFFF";
var twentyTenColor = "#FFFFFF";
var twenty11Color = "#FFFFFF";
var twenty12Color = "#FFFFFF";
var twenty13Color = "#FFFFFF";
var twenty14Color = "#FFFFFF";
var twenty15Color = "#FFFFFF";
var twenty16Color = "#FFFFFF";
var twenty17Color = "#FFFFFF";
var twenty18Color = "#FFFFFF";
var twenty19Color = "#FFFFFF";
var twenty20Color = "#FFFFFF";
var twenty21Color = "#FFFFFF";
var twenty22Color = "#FFFFFF";
var twenty23Color = "#FFFFFF";
var twenty24Color = "#FFFFFF";
var twenty25Color = "#FFFFFF";

var twentyOneOneColor = "#FFFFFF";
var twentyOneTwoColor = "#FFFFFF";
var twentyOneThreeColor = "#FFFFFF";
var twentyOneFourColor = "#FFFFFF";
var twentyOneFiveColor = "#FFFFFF";
var twentyOneSixColor = "#FFFFFF";
var twentyOneSevenColor = "#FFFFFF";
var twentyOneEightColor = "#FFFFFF";
var twentyOneNineColor = "#FFFFFF";
var twentyOneTenColor = "#FFFFFF";
var twentyOne11Color = "#FFFFFF";
var twentyOne12Color = "#FFFFFF";
var twentyOne13Color = "#FFFFFF";
var twentyOne14Color = "#FFFFFF";
var twentyOne15Color = "#FFFFFF";
var twentyOne16Color = "#FFFFFF";
var twentyOne17Color = "#FFFFFF";
var twentyOne18Color = "#FFFFFF";
var twentyOne19Color = "#FFFFFF";
var twentyOne20Color = "#FFFFFF";
var twentyOne21Color = "#FFFFFF";
var twentyOne22Color = "#FFFFFF";
var twentyOne23Color = "#FFFFFF";
var twentyOne24Color = "#FFFFFF";
var twentyOne25Color = "#FFFFFF";

var twentyTwoOneColor = "#FFFFFF";
var twentyTwoTwoColor = "#FFFFFF";
var twentyTwoThreeColor = "#FFFFFF";
var twentyTwoFourColor = "#FFFFFF";
var twentyTwoFiveColor = "#FFFFFF";
var twentyTwoSixColor = "#FFFFFF";
var twentyTwoSevenColor = "#FFFFFF";
var twentyTwoEightColor = "#FFFFFF";
var twentyTwoNineColor = "#FFFFFF";
var twentyTwoTenColor = "#FFFFFF";
var twentyTwo11Color = "#FFFFFF";
var twentyTwo12Color = "#FFFFFF";
var twentyTwo13Color = "#FFFFFF";
var twentyTwo14Color = "#FFFFFF";
var twentyTwo15Color = "#FFFFFF";
var twentyTwo16Color = "#FFFFFF";
var twentyTwo17Color = "#FFFFFF";
var twentyTwo18Color = "#FFFFFF";
var twentyTwo19Color = "#FFFFFF";
var twentyTwo20Color = "#FFFFFF";
var twentyTwo21Color = "#FFFFFF";
var twentyTwo22Color = "#FFFFFF";
var twentyTwo23Color = "#FFFFFF";
var twentyTwo24Color = "#FFFFFF";
var twentyTwo25Color = "#FFFFFF";

var twentyThreeOneColor = "#FFFFFF";
var twentyThreeTwoColor = "#FFFFFF";
var twentyThreeThreeColor = "#FFFFFF";
var twentyThreeFourColor = "#FFFFFF";
var twentyThreeFiveColor = "#FFFFFF";
var twentyThreeSixColor = "#FFFFFF";
var twentyThreeSevenColor = "#FFFFFF";
var twentyThreeEightColor = "#FFFFFF";
var twentyThreeNineColor = "#FFFFFF";
var twentyThreeTenColor = "#FFFFFF";
var twentyThree11Color = "#FFFFFF";
var twentyThree12Color = "#FFFFFF";
var twentyThree13Color = "#FFFFFF";
var twentyThree14Color = "#FFFFFF";
var twentyThree15Color = "#FFFFFF";
var twentyThree16Color = "#FFFFFF";
var twentyThree17Color = "#FFFFFF";
var twentyThree18Color = "#FFFFFF";
var twentyThree19Color = "#FFFFFF";
var twentyThree20Color = "#FFFFFF";
var twentyThree21Color = "#FFFFFF";
var twentyThree22Color = "#FFFFFF";
var twentyThree23Color = "#FFFFFF";
var twentyThree24Color = "#FFFFFF";
var twentyThree25Color = "#FFFFFF";

var twentyFourOneColor = "#FFFFFF";
var twentyFourTwoColor = "#FFFFFF";
var twentyFourThreeColor = "#FFFFFF";
var twentyFourFourColor = "#FFFFFF";
var twentyFourFiveColor = "#FFFFFF";
var twentyFourSixColor = "#FFFFFF";
var twentyFourSevenColor = "#FFFFFF";
var twentyFourEightColor = "#FFFFFF";
var twentyFourNineColor = "#FFFFFF";
var twentyFourTenColor = "#FFFFFF";
var twentyFour11Color = "#FFFFFF";
var twentyFour12Color = "#FFFFFF";
var twentyFour13Color = "#FFFFFF";
var twentyFour14Color = "#FFFFFF";
var twentyFour15Color = "#FFFFFF";
var twentyFour16Color = "#FFFFFF";
var twentyFour17Color = "#FFFFFF";
var twentyFour18Color = "#FFFFFF";
var twentyFour19Color = "#FFFFFF";
var twentyFour20Color = "#FFFFFF";
var twentyFour21Color = "#FFFFFF";
var twentyFour22Color = "#FFFFFF";
var twentyFour23Color = "#FFFFFF";
var twentyFour24Color = "#FFFFFF";
var twentyFour25Color = "#FFFFFF";

var twentyFiveOneColor = "#FFFFFF";
var twentyFiveTwoColor = "#FFFFFF";
var twentyFiveThreeColor = "#FFFFFF";
var twentyFiveFourColor = "#FFFFFF";
var twentyFiveFiveColor = "#FFFFFF";
var twentyFiveSixColor = "#FFFFFF";
var twentyFiveSevenColor = "#FFFFFF";
var twentyFiveEightColor = "#FFFFFF";
var twentyFiveNineColor = "#FFFFFF";
var twentyFiveTenColor = "#FFFFFF";
var twentyFive11Color = "#FFFFFF";
var twentyFive12Color = "#FFFFFF";
var twentyFive13Color = "#FFFFFF";
var twentyFive14Color = "#FFFFFF";
var twentyFive15Color = "#FFFFFF";
var twentyFive16Color = "#FFFFFF";
var twentyFive17Color = "#FFFFFF";
var twentyFive18Color = "#FFFFFF";
var twentyFive19Color = "#FFFFFF";
var twentyFive20Color = "#FFFFFF";
var twentyFive21Color = "#FFFFFF";
var twentyFive22Color = "#FFFFFF";
var twentyFive23Color = "#FFFFFF";
var twentyFive24Color = "#FFFFFF";
var twentyFive25Color = "#FFFFFF";

var previewCell;

// Row 1

function paintOneOne() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = oneOneColor;  document.getElementById("hex").innerHTML = oneOneColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("oneOne").style.backgroundColor = paintColor;
     oneOneColor = paintColor;
;  
    }
}
function paintOneTwo() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = oneTwoColor;  document.getElementById("hex").innerHTML = oneTwoColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("oneTwo").style.backgroundColor = paintColor;
     oneTwoColor = paintColor;
;  
    }
}
function paintOneThree() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = oneThreeColor;  document.getElementById("hex").innerHTML = oneThreeColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("oneThree").style.backgroundColor = paintColor;
     oneThreeColor = paintColor;
;  
    }
}
function paintOneFour() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = oneFourColor;  document.getElementById("hex").innerHTML = oneFourColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("oneFour").style.backgroundColor = paintColor;
     oneFourColor = paintColor;
;  
    }
}
function paintOneFive() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = oneFiveColor;  document.getElementById("hex").innerHTML = oneFiveColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("oneFive").style.backgroundColor = paintColor;
     oneFiveColor = paintColor;
;  
    }
}
function paintOneSix() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = oneSixColor;  document.getElementById("hex").innerHTML = oneSixColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("oneSix").style.backgroundColor = paintColor;
     oneSixColor = paintColor;
;  
    }
}
function paintOneSeven() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = oneSevenColor;  document.getElementById("hex").innerHTML = oneSevenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("oneSeven").style.backgroundColor = paintColor;
     oneSevenColor = paintColor;
;  
    } 
}
function paintOneEight() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = oneEightColor;  document.getElementById("hex").innerHTML = oneEightColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("oneEight").style.backgroundColor = paintColor;
     oneEightColor = paintColor;
;  
    }
}
function paintOneNine() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = oneNineColor;  document.getElementById("hex").innerHTML = oneNineColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("oneNine").style.backgroundColor = paintColor;
     oneNineColor = paintColor;
;  
    }
}
function paintOneTen() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = oneTenColor;  document.getElementById("hex").innerHTML = oneTenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("oneTen").style.backgroundColor = paintColor;
     oneTenColor = paintColor;
;  
    }
}

function paintOne11() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = one11Color;  document.getElementById("hex").innerHTML = one11Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("one11").style.backgroundColor = paintColor;
     one11Color = paintColor;
;  
    }
}
function paintOne12() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = one12Color;  document.getElementById("hex").innerHTML = one12Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("one12").style.backgroundColor = paintColor;
     one12Color = paintColor;
;  
    }
}
function paintOne13() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = one13Color;  document.getElementById("hex").innerHTML = one13Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("one13").style.backgroundColor = paintColor;
     one13Color = paintColor;
;  
    }
}
function paintOne14() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = one14Color;  document.getElementById("hex").innerHTML = one14Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("one14").style.backgroundColor = paintColor;
     one14Color = paintColor;
;  
    }
}
function paintOne15() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = one15Color;  document.getElementById("hex").innerHTML = one15Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("one15").style.backgroundColor = paintColor;
     one15Color = paintColor;
;  
    }
}
function paintOne16() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = one16Color;  document.getElementById("hex").innerHTML = one16Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("one16").style.backgroundColor = paintColor;
     one16Color = paintColor;
;  
    }
}
function paintOne17() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = one17Color;  document.getElementById("hex").innerHTML = one17Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("one17").style.backgroundColor = paintColor;
     one17Color = paintColor;
;  
    }
}
function paintOne18() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = one18Color;  document.getElementById("hex").innerHTML = one18Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("one18").style.backgroundColor = paintColor;
     one18Color = paintColor;
;  
    }
}
function paintOne19() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = one19Color;  document.getElementById("hex").innerHTML = one19Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("one19").style.backgroundColor = paintColor;
     one19Color = paintColor;
;  
    }
}
function paintOne20() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = one20Color;  document.getElementById("hex").innerHTML = one20Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("one20").style.backgroundColor = paintColor;
     one20Color = paintColor;
;  
    }
}

function paintOne21() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = one21Color;  document.getElementById("hex").innerHTML = one21Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("one21").style.backgroundColor = paintColor;
     one21Color = paintColor;
;  
    }
}
function paintOne22() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = one22Color;  document.getElementById("hex").innerHTML = one22Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("one22").style.backgroundColor = paintColor;
     one22Color = paintColor;
;  
    }
}
function paintOne23() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = one23Color;  document.getElementById("hex").innerHTML = one23Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("one23").style.backgroundColor = paintColor;
     one23Color = paintColor;
;  
    }
}
function paintOne24() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = one24Color;  document.getElementById("hex").innerHTML = one24Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("one24").style.backgroundColor = paintColor;
     one24Color = paintColor;
;  
    }
}
function paintOne25() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = one25Color;  document.getElementById("hex").innerHTML = one25Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("one25").style.backgroundColor = paintColor;
     one25Color = paintColor;
;  
    }
}

// Row 2

function paintTwoOne() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twoOneColor;  document.getElementById("hex").innerHTML = twoOneColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twoOne").style.backgroundColor = paintColor;
     twoOneColor = paintColor;
;  
    }
}
function paintTwoTwo() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twoTwoColor;  document.getElementById("hex").innerHTML = twoTwoColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twoTwo").style.backgroundColor = paintColor;
     twoTwoColor = paintColor;
;  
    }
}
function paintTwoThree() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twoThreeColor;  document.getElementById("hex").innerHTML = twoThreeColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twoThree").style.backgroundColor = paintColor;
     twoThreeColor = paintColor;
;  
    }
}
function paintTwoFour() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twoFourColor;  document.getElementById("hex").innerHTML = twoFourColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twoFour").style.backgroundColor = paintColor;
     twoFourColor = paintColor;
;  
    }
}
function paintTwoFive() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twoFiveColor;  document.getElementById("hex").innerHTML = twoFiveColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twoFive").style.backgroundColor = paintColor;
     twoFiveColor = paintColor;
;  
    }
}
function paintTwoSix() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twoSixColor;  document.getElementById("hex").innerHTML = twoSixColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twoSix").style.backgroundColor = paintColor;
     twoSixColor = paintColor;
;  
    }
}
function paintTwoSeven() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twoSevenColor;  document.getElementById("hex").innerHTML = twoSevenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twoSeven").style.backgroundColor = paintColor;
     twoSevenColor = paintColor;
;  
    } 
}
function paintTwoEight() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twoEightColor;  document.getElementById("hex").innerHTML = twoEightColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twoEight").style.backgroundColor = paintColor;
     twoEightColor = paintColor;
;  
    }
}
function paintTwoNine() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twoNineColor;  document.getElementById("hex").innerHTML = twoNineColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twoNine").style.backgroundColor = paintColor;
     twoNineColor = paintColor;
;  
    }
}
function paintTwoTen() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twoTenColor;  document.getElementById("hex").innerHTML = twoTenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twoTen").style.backgroundColor = paintColor;
     twoTenColor = paintColor;
;  
    }
}

function paintTwo11() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = two11Color;  document.getElementById("hex").innerHTML = two11Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("two11").style.backgroundColor = paintColor;
     two11Color = paintColor;
;  
    }
}
function paintTwo12() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = two12Color;  document.getElementById("hex").innerHTML = two12Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("two12").style.backgroundColor = paintColor;
     two12Color = paintColor;
;  
    }
}
function paintTwo13() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = two13Color;  document.getElementById("hex").innerHTML = two13Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("two13").style.backgroundColor = paintColor;
     two13Color = paintColor;
;  
    }
}
function paintTwo14() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = two14Color;  document.getElementById("hex").innerHTML = two14Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("two14").style.backgroundColor = paintColor;
     two14Color = paintColor;
;  
    }
}
function paintTwo15() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = two15Color;  document.getElementById("hex").innerHTML = two15Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("two15").style.backgroundColor = paintColor;
     two15Color = paintColor;
;  
    }
}
function paintTwo16() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = two16Color;  document.getElementById("hex").innerHTML = two16Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("two16").style.backgroundColor = paintColor;
     two16Color = paintColor;
;  
    }
}
function paintTwo17() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = two17Color;  document.getElementById("hex").innerHTML = two17Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("two17").style.backgroundColor = paintColor;
     two17Color = paintColor;
;  
    }
}
function paintTwo18() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = two18Color;  document.getElementById("hex").innerHTML = two18Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("two18").style.backgroundColor = paintColor;
     two18Color = paintColor;
;  
    }
}
function paintTwo19() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = two19Color;  document.getElementById("hex").innerHTML = two19Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("two19").style.backgroundColor = paintColor;
     two19Color = paintColor;
;  
    }
}
function paintTwo20() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = two20Color;  document.getElementById("hex").innerHTML = two20Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("two20").style.backgroundColor = paintColor;
     two20Color = paintColor;
;  
    }
}

function paintTwo21() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = two21Color;  document.getElementById("hex").innerHTML = two21Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("two21").style.backgroundColor = paintColor;
     two21Color = paintColor;
;  
    }
}
function paintTwo22() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = two22Color;  document.getElementById("hex").innerHTML = two22Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("two22").style.backgroundColor = paintColor;
     two22Color = paintColor;
;  
    }
}
function paintTwo23() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = two23Color;  document.getElementById("hex").innerHTML = two23Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("two23").style.backgroundColor = paintColor;
     two23Color = paintColor;
;  
    }
}
function paintTwo24() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = two24Color;  document.getElementById("hex").innerHTML = two24Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("two24").style.backgroundColor = paintColor;
     two24Color = paintColor;
;  
    }
}
function paintTwo25() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = two25Color;  document.getElementById("hex").innerHTML = two25Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("two25").style.backgroundColor = paintColor;
     two25Color = paintColor;
;  
    }
}

// Row 3

function paintThreeOne() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = threeOneColor;  document.getElementById("hex").innerHTML = threeOneColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("threeOne").style.backgroundColor = paintColor;
     threeOneColor = paintColor;
;  
    }
}
function paintThreeTwo() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = threeTwoColor;  document.getElementById("hex").innerHTML = threeTwoColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("threeTwo").style.backgroundColor = paintColor;
     threeTwoColor = paintColor;
;  
    }
}
function paintThreeThree() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = threeThreeColor;  document.getElementById("hex").innerHTML = threeThreeColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("threeThree").style.backgroundColor = paintColor;
     threeThreeColor = paintColor;
;  
    }
}
function paintThreeFour() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = threeFourColor;  document.getElementById("hex").innerHTML = threeFourColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("threeFour").style.backgroundColor = paintColor;
     threeFourColor = paintColor;
;  
    }
}
function paintThreeFive() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = threeFiveColor;  document.getElementById("hex").innerHTML = threeFiveColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("threeFive").style.backgroundColor = paintColor;
     threeFiveColor = paintColor;
;  
    }
}
function paintThreeSix() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = threeSixColor;  document.getElementById("hex").innerHTML = threeSixColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("threeSix").style.backgroundColor = paintColor;
     threeSixColor = paintColor;
;  
    }
}
function paintThreeSeven() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = threeSevenColor;  document.getElementById("hex").innerHTML = threeSevenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("threeSeven").style.backgroundColor = paintColor;
     threeSevenColor = paintColor;
;  
    } 
}
function paintThreeEight() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = threeEightColor;  document.getElementById("hex").innerHTML = threeEightColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("threeEight").style.backgroundColor = paintColor;
     threeEightColor = paintColor;
;  
    }
}
function paintThreeNine() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = threeNineColor;  document.getElementById("hex").innerHTML = threeNineColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("threeNine").style.backgroundColor = paintColor;
     threeNineColor = paintColor;
;  
    }
}
function paintThreeTen() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = threeTenColor;  document.getElementById("hex").innerHTML = threeTenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("threeTen").style.backgroundColor = paintColor;
     threeTenColor = paintColor;
;  
    }
}

function paintThree11() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = three11Color;  document.getElementById("hex").innerHTML = three11Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("three11").style.backgroundColor = paintColor;
     three11Color = paintColor;
;  
    }
}
function paintThree12() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = three12Color;  document.getElementById("hex").innerHTML = three12Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("three12").style.backgroundColor = paintColor;
     three12Color = paintColor;
;  
    }
}
function paintThree13() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = three13Color;  document.getElementById("hex").innerHTML = three13Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("three13").style.backgroundColor = paintColor;
     three13Color = paintColor;
;  
    }
}
function paintThree14() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = three14Color;  document.getElementById("hex").innerHTML = three14Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("three14").style.backgroundColor = paintColor;
     three14Color = paintColor;
;  
    }
}
function paintThree15() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = three15Color;  document.getElementById("hex").innerHTML = three15Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("three15").style.backgroundColor = paintColor;
     three15Color = paintColor;
;  
    }
}
function paintThree16() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = three16Color;  document.getElementById("hex").innerHTML = three16Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("three16").style.backgroundColor = paintColor;
     three16Color = paintColor;
;  
    }
}
function paintThree17() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = three17Color;  document.getElementById("hex").innerHTML = three17Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("three17").style.backgroundColor = paintColor;
     three17Color = paintColor;
;  
    }
}
function paintThree18() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = three18Color;  document.getElementById("hex").innerHTML = three18Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("three18").style.backgroundColor = paintColor;
     three18Color = paintColor;
;  
    }
}
function paintThree19() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = three19Color;  document.getElementById("hex").innerHTML = three19Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("three19").style.backgroundColor = paintColor;
     three19Color = paintColor;
;  
    }
}
function paintThree20() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = three20Color;  document.getElementById("hex").innerHTML = three20Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("three20").style.backgroundColor = paintColor;
     three20Color = paintColor;
;  
    }
}

function paintThree21() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = three21Color;  document.getElementById("hex").innerHTML = three21Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("three21").style.backgroundColor = paintColor;
     three21Color = paintColor;
;  
    }
}
function paintThree22() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = three22Color;  document.getElementById("hex").innerHTML = three22Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("three22").style.backgroundColor = paintColor;
     three22Color = paintColor;
;  
    }
}
function paintThree23() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = three23Color;  document.getElementById("hex").innerHTML = three23Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("three23").style.backgroundColor = paintColor;
     three23Color = paintColor;
;  
    }
}
function paintThree24() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = three24Color;  document.getElementById("hex").innerHTML = three24Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("three24").style.backgroundColor = paintColor;
     three24Color = paintColor;
;  
    }
}
function paintThree25() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = three25Color;  document.getElementById("hex").innerHTML = three25Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("three25").style.backgroundColor = paintColor;
     three25Color = paintColor;
;  
    }
}

// Row 4

function paintFourOne() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourOneColor;  document.getElementById("hex").innerHTML = fourOneColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourOne").style.backgroundColor = paintColor;
     fourOneColor = paintColor;
;  
    }
}
function paintFourTwo() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourTwoColor;  document.getElementById("hex").innerHTML = fourTwoColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourTwo").style.backgroundColor = paintColor;
     fourTwoColor = paintColor;
;  
    }
}
function paintFourThree() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourThreeColor;  document.getElementById("hex").innerHTML = fourThreeColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourThree").style.backgroundColor = paintColor;
     fourThreeColor = paintColor;
;  
    }
}
function paintFourFour() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourFourColor;  document.getElementById("hex").innerHTML = fourFourColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourFour").style.backgroundColor = paintColor;
     fourFourColor = paintColor;
;  
    }
}
function paintFourFive() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourFiveColor;  document.getElementById("hex").innerHTML = fourFiveColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourFive").style.backgroundColor = paintColor;
     fourFiveColor = paintColor;
;  
    }
}
function paintFourSix() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourSixColor;  document.getElementById("hex").innerHTML = fourSixColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourSix").style.backgroundColor = paintColor;
     fourSixColor = paintColor;
;  
    }
}
function paintFourSeven() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourSevenColor;  document.getElementById("hex").innerHTML = fourSevenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourSeven").style.backgroundColor = paintColor;
     fourSevenColor = paintColor;
;  
    } 
}
function paintFourEight() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourEightColor;  document.getElementById("hex").innerHTML = fourEightColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourEight").style.backgroundColor = paintColor;
     fourEightColor = paintColor;
;  
    }
}
function paintFourNine() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourNineColor;  document.getElementById("hex").innerHTML = fourNineColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourNine").style.backgroundColor = paintColor;
     fourNineColor = paintColor;
;  
    }
}
function paintFourTen() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourTenColor;  document.getElementById("hex").innerHTML = fourTenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourTen").style.backgroundColor = paintColor;
     fourTenColor = paintColor;
;  
    }
}

function paintFour11() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = four11Color;  document.getElementById("hex").innerHTML = four11Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("four11").style.backgroundColor = paintColor;
     four11Color = paintColor;
;  
    }
}
function paintFour12() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = four12Color;  document.getElementById("hex").innerHTML = four12Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("four12").style.backgroundColor = paintColor;
     four12Color = paintColor;
;  
    }
}
function paintFour13() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = four13Color;  document.getElementById("hex").innerHTML = four13Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("four13").style.backgroundColor = paintColor;
     four13Color = paintColor;
;  
    }
}
function paintFour14() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = four14Color;  document.getElementById("hex").innerHTML = four14Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("four14").style.backgroundColor = paintColor;
     four14Color = paintColor;
;  
    }
}
function paintFour15() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = four15Color;  document.getElementById("hex").innerHTML = four15Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("four15").style.backgroundColor = paintColor;
     four15Color = paintColor;
;  
    }
}
function paintFour16() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = four16Color;  document.getElementById("hex").innerHTML = four16Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("four16").style.backgroundColor = paintColor;
     four16Color = paintColor;
;  
    }
}
function paintFour17() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = four17Color;  document.getElementById("hex").innerHTML = four17Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("four17").style.backgroundColor = paintColor;
     four17Color = paintColor;
;  
    }
}
function paintFour18() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = four18Color;  document.getElementById("hex").innerHTML = four18Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("four18").style.backgroundColor = paintColor;
     four18Color = paintColor;
;  
    }
}
function paintFour19() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = four19Color;  document.getElementById("hex").innerHTML = four19Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("four19").style.backgroundColor = paintColor;
     four19Color = paintColor;
;  
    }
}
function paintFour20() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = four20Color;  document.getElementById("hex").innerHTML = four20Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("four20").style.backgroundColor = paintColor;
     four20Color = paintColor;
;  
    }
}

function paintFour21() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = four21Color;  document.getElementById("hex").innerHTML = four21Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("four21").style.backgroundColor = paintColor;
     four21Color = paintColor;
;  
    }
}
function paintFour22() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = four22Color;  document.getElementById("hex").innerHTML = four22Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("four22").style.backgroundColor = paintColor;
     four22Color = paintColor;
;  
    }
}
function paintFour23() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = four23Color;  document.getElementById("hex").innerHTML = four23Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("four23").style.backgroundColor = paintColor;
     four23Color = paintColor;
;  
    }
}
function paintFour24() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = four24Color;  document.getElementById("hex").innerHTML = four24Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("four24").style.backgroundColor = paintColor;
     four24Color = paintColor;
;  
    }
}
function paintFour25() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = four25Color;  document.getElementById("hex").innerHTML = four25Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("four25").style.backgroundColor = paintColor;
     four25Color = paintColor;
;  
    }
}

// Row 5

function paintFiveOne() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fiveOneColor;  document.getElementById("hex").innerHTML = fiveOneColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fiveOne").style.backgroundColor = paintColor;
     fiveOneColor = paintColor;
;  
    }
}
function paintFiveTwo() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fiveTwoColor;  document.getElementById("hex").innerHTML = fiveTwoColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fiveTwo").style.backgroundColor = paintColor;
     fiveTwoColor = paintColor;
;  
    }
}
function paintFiveThree() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fiveThreeColor;  document.getElementById("hex").innerHTML = fiveThreeColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fiveThree").style.backgroundColor = paintColor;
     fiveThreeColor = paintColor;
;  
    }
}
function paintFiveFour() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fiveFourColor;  document.getElementById("hex").innerHTML = fiveFourColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fiveFour").style.backgroundColor = paintColor;
     fiveFourColor = paintColor;
;  
    }
}
function paintFiveFive() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fiveFiveColor;  document.getElementById("hex").innerHTML = fiveFiveColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fiveFive").style.backgroundColor = paintColor;
     fiveFiveColor = paintColor;
;  
    }
}
function paintFiveSix() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fiveSixColor;  document.getElementById("hex").innerHTML = fiveSixColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fiveSix").style.backgroundColor = paintColor;
     fiveSixColor = paintColor;
;  
    }
}
function paintFiveSeven() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fiveSevenColor;  document.getElementById("hex").innerHTML = fiveSevenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fiveSeven").style.backgroundColor = paintColor;
     fiveSevenColor = paintColor;
;  
    } 
}
function paintFiveEight() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fiveEightColor;  document.getElementById("hex").innerHTML = fiveEightColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fiveEight").style.backgroundColor = paintColor;
     fiveEightColor = paintColor;
;  
    }
}
function paintFiveNine() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fiveNineColor;  document.getElementById("hex").innerHTML = fiveNineColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fiveNine").style.backgroundColor = paintColor;
     fiveNineColor = paintColor;
;  
    }
}
function paintFiveTen() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fiveTenColor;  document.getElementById("hex").innerHTML = fiveTenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fiveTen").style.backgroundColor = paintColor;
     fiveTenColor = paintColor;
;  
    }
}

function paintFive11() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = five11Color;  document.getElementById("hex").innerHTML = five11Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("five11").style.backgroundColor = paintColor;
     five11Color = paintColor;
;  
    }
}
function paintFive12() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = five12Color;  document.getElementById("hex").innerHTML = five12Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("five12").style.backgroundColor = paintColor;
     five12Color = paintColor;
;  
    }
}
function paintFive13() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = five13Color;  document.getElementById("hex").innerHTML = five13Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("five13").style.backgroundColor = paintColor;
     five13Color = paintColor;
;  
    }
}
function paintFive14() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = five14Color;  document.getElementById("hex").innerHTML = five14Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("five14").style.backgroundColor = paintColor;
     five14Color = paintColor;
;  
    }
}
function paintFive15() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = five15Color;  document.getElementById("hex").innerHTML = five15Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("five15").style.backgroundColor = paintColor;
     five15Color = paintColor;
;  
    }
}
function paintFive16() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = five16Color;  document.getElementById("hex").innerHTML = five16Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("five16").style.backgroundColor = paintColor;
     five16Color = paintColor;
;  
    }
}
function paintFive17() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = five17Color;  document.getElementById("hex").innerHTML = five17Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("five17").style.backgroundColor = paintColor;
     five17Color = paintColor;
;  
    }
}
function paintFive18() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = five18Color;  document.getElementById("hex").innerHTML = five18Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("five18").style.backgroundColor = paintColor;
     five18Color = paintColor;
;  
    }
}
function paintFive19() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = five19Color;  document.getElementById("hex").innerHTML = five19Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("five19").style.backgroundColor = paintColor;
     five19Color = paintColor;
;  
    }
}
function paintFive20() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = five20Color;  document.getElementById("hex").innerHTML = five20Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("five20").style.backgroundColor = paintColor;
     five20Color = paintColor;
;  
    }
}

function paintFive21() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = five21Color;  document.getElementById("hex").innerHTML = five21Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("five21").style.backgroundColor = paintColor;
     five21Color = paintColor;
;  
    }
}
function paintFive22() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = five22Color;  document.getElementById("hex").innerHTML = five22Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("five22").style.backgroundColor = paintColor;
     five22Color = paintColor;
;  
    }
}
function paintFive23() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = five23Color;  document.getElementById("hex").innerHTML = five23Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("five23").style.backgroundColor = paintColor;
     five23Color = paintColor;
;  
    }
}
function paintFive24() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = five24Color;  document.getElementById("hex").innerHTML = five24Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("five24").style.backgroundColor = paintColor;
     five24Color = paintColor;
;  
    }
}
function paintFive25() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = five25Color;  document.getElementById("hex").innerHTML = five25Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("five25").style.backgroundColor = paintColor;
     five25Color = paintColor;
;  
    }
}

// Row 6

function paintSixOne() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixOneColor;  document.getElementById("hex").innerHTML = sixOneColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixOne").style.backgroundColor = paintColor;
     sixOneColor = paintColor;
;  
    }
}
function paintSixTwo() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixTwoColor;  document.getElementById("hex").innerHTML = sixTwoColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixTwo").style.backgroundColor = paintColor;
     sixTwoColor = paintColor;
;  
    }
}
function paintSixThree() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixThreeColor;  document.getElementById("hex").innerHTML = sixThreeColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixThree").style.backgroundColor = paintColor;
     sixThreeColor = paintColor;
;  
    }
}
function paintSixFour() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixFourColor;  document.getElementById("hex").innerHTML = sixFourColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixFour").style.backgroundColor = paintColor;
     sixFourColor = paintColor;
;  
    }
}
function paintSixFive() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixFiveColor;  document.getElementById("hex").innerHTML = sixFiveColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixFive").style.backgroundColor = paintColor;
     sixFiveColor = paintColor;
;  
    }
}
function paintSixSix() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixSixColor;  document.getElementById("hex").innerHTML = sixSixColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixSix").style.backgroundColor = paintColor;
     sixSixColor = paintColor;
;  
    }
}
function paintSixSeven() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixSevenColor;  document.getElementById("hex").innerHTML = sixSevenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixSeven").style.backgroundColor = paintColor;
     sixSevenColor = paintColor;
;  
    } 
}
function paintSixEight() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixEightColor;  document.getElementById("hex").innerHTML = sixEightColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixEight").style.backgroundColor = paintColor;
     sixEightColor = paintColor;
;  
    }
}
function paintSixNine() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixNineColor;  document.getElementById("hex").innerHTML = sixNineColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixNine").style.backgroundColor = paintColor;
     sixNineColor = paintColor;
;  
    }
}
function paintSixTen() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixTenColor;  document.getElementById("hex").innerHTML = sixTenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixTen").style.backgroundColor = paintColor;
     sixTenColor = paintColor;
;  
    }
}

function paintSix11() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = six11Color;  document.getElementById("hex").innerHTML = six11Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("six11").style.backgroundColor = paintColor;
     six11Color = paintColor;
;  
    }
}
function paintSix12() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = six12Color;  document.getElementById("hex").innerHTML = six12Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("six12").style.backgroundColor = paintColor;
     six12Color = paintColor;
;  
    }
}
function paintSix13() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = six13Color;  document.getElementById("hex").innerHTML = six13Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("six13").style.backgroundColor = paintColor;
     six13Color = paintColor;
;  
    }
}
function paintSix14() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = six14Color;  document.getElementById("hex").innerHTML = six14Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("six14").style.backgroundColor = paintColor;
     six14Color = paintColor;
;  
    }
}
function paintSix15() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = six15Color;  document.getElementById("hex").innerHTML = six15Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("six15").style.backgroundColor = paintColor;
     six15Color = paintColor;
;  
    }
}
function paintSix16() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = six16Color;  document.getElementById("hex").innerHTML = six16Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("six16").style.backgroundColor = paintColor;
     six16Color = paintColor;
;  
    }
}
function paintSix17() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = six17Color;  document.getElementById("hex").innerHTML = six17Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("six17").style.backgroundColor = paintColor;
     six17Color = paintColor;
;  
    }
}
function paintSix18() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = six18Color;  document.getElementById("hex").innerHTML = six18Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("six18").style.backgroundColor = paintColor;
     six18Color = paintColor;
;  
    }
}
function paintSix19() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = six19Color;  document.getElementById("hex").innerHTML = six19Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("six19").style.backgroundColor = paintColor;
     six19Color = paintColor;
;  
    }
}
function paintSix20() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = six20Color;  document.getElementById("hex").innerHTML = six20Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("six20").style.backgroundColor = paintColor;
     six20Color = paintColor;
;  
    }
}

function paintSix21() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = six21Color;  document.getElementById("hex").innerHTML = six21Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("six21").style.backgroundColor = paintColor;
     six21Color = paintColor;
;  
    }
}
function paintSix22() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = six22Color;  document.getElementById("hex").innerHTML = six22Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("six22").style.backgroundColor = paintColor;
     six22Color = paintColor;
;  
    }
}
function paintSix23() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = six23Color;  document.getElementById("hex").innerHTML = six23Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("six23").style.backgroundColor = paintColor;
     six23Color = paintColor;
;  
    }
}
function paintSix24() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = six24Color;  document.getElementById("hex").innerHTML = six24Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("six24").style.backgroundColor = paintColor;
     six24Color = paintColor;
;  
    }
}
function paintSix25() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = six25Color;  document.getElementById("hex").innerHTML = six25Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("six25").style.backgroundColor = paintColor;
     six25Color = paintColor;
;  
    }
}

// Row 7

function paintSevenOne() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sevenOneColor;  document.getElementById("hex").innerHTML = sevenOneColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sevenOne").style.backgroundColor = paintColor;
     sevenOneColor = paintColor;
;  
    }
}
function paintSevenTwo() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sevenTwoColor;  document.getElementById("hex").innerHTML = sevenTwoColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sevenTwo").style.backgroundColor = paintColor;
     sevenTwoColor = paintColor;
;  
    }
}
function paintSevenThree() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sevenThreeColor;  document.getElementById("hex").innerHTML = sevenThreeColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sevenThree").style.backgroundColor = paintColor;
     sevenThreeColor = paintColor;
;  
    }
}
function paintSevenFour() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sevenFourColor;  document.getElementById("hex").innerHTML = sevenFourColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sevenFour").style.backgroundColor = paintColor;
     sevenFourColor = paintColor;
;  
    }
}
function paintSevenFive() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sevenFiveColor;  document.getElementById("hex").innerHTML = sevenFiveColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sevenFive").style.backgroundColor = paintColor;
     sevenFiveColor = paintColor;
;  
    }
}
function paintSevenSix() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sevenSixColor;  document.getElementById("hex").innerHTML = sevenSixColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sevenSix").style.backgroundColor = paintColor;
     sevenSixColor = paintColor;
;  
    }
}
function paintSevenSeven() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sevenSevenColor;  document.getElementById("hex").innerHTML = sevenSevenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sevenSeven").style.backgroundColor = paintColor;
     sevenSevenColor = paintColor;
;  
    } 
}
function paintSevenEight() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sevenEightColor;  document.getElementById("hex").innerHTML = sevenEightColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sevenEight").style.backgroundColor = paintColor;
     sevenEightColor = paintColor;
;  
    }
}
function paintSevenNine() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sevenNineColor;  document.getElementById("hex").innerHTML = sevenNineColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sevenNine").style.backgroundColor = paintColor;
     sevenNineColor = paintColor;
;  
    }
}
function paintSevenTen() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sevenTenColor;  document.getElementById("hex").innerHTML = sevenTenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sevenTen").style.backgroundColor = paintColor;
     sevenTenColor = paintColor;
;  
    }
}

function paintSeven11() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seven11Color;  document.getElementById("hex").innerHTML = seven11Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seven11").style.backgroundColor = paintColor;
     seven11Color = paintColor;
;  
    }
}
function paintSeven12() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seven12Color;  document.getElementById("hex").innerHTML = seven12Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seven12").style.backgroundColor = paintColor;
     seven12Color = paintColor;
;  
    }
}
function paintSeven13() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seven13Color;  document.getElementById("hex").innerHTML = seven13Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seven13").style.backgroundColor = paintColor;
     seven13Color = paintColor;
;  
    }
}
function paintSeven14() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seven14Color;  document.getElementById("hex").innerHTML = seven14Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seven14").style.backgroundColor = paintColor;
     seven14Color = paintColor;
;  
    }
}
function paintSeven15() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seven15Color;  document.getElementById("hex").innerHTML = seven15Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seven15").style.backgroundColor = paintColor;
     seven15Color = paintColor;
;  
    }
}
function paintSeven16() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seven16Color;  document.getElementById("hex").innerHTML = seven16Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seven16").style.backgroundColor = paintColor;
     seven16Color = paintColor;
;  
    }
}
function paintSeven17() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seven17Color;  document.getElementById("hex").innerHTML = seven17Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seven17").style.backgroundColor = paintColor;
     seven17Color = paintColor;
;  
    }
}
function paintSeven18() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seven18Color;  document.getElementById("hex").innerHTML = seven18Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seven18").style.backgroundColor = paintColor;
     seven18Color = paintColor;
;  
    }
}
function paintSeven19() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seven19Color;  document.getElementById("hex").innerHTML = seven19Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seven19").style.backgroundColor = paintColor;
     seven19Color = paintColor;
;  
    }
}
function paintSeven20() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seven20Color;  document.getElementById("hex").innerHTML = seven20Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seven20").style.backgroundColor = paintColor;
     seven20Color = paintColor;
;  
    }
}

function paintSeven21() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seven21Color;  document.getElementById("hex").innerHTML = seven21Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seven21").style.backgroundColor = paintColor;
     seven21Color = paintColor;
;  
    }
}
function paintSeven22() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seven22Color;  document.getElementById("hex").innerHTML = seven22Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seven22").style.backgroundColor = paintColor;
     seven22Color = paintColor;
;  
    }
}
function paintSeven23() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seven23Color;  document.getElementById("hex").innerHTML = seven23Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seven23").style.backgroundColor = paintColor;
     seven23Color = paintColor;
;  
    }
}
function paintSeven24() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seven24Color;  document.getElementById("hex").innerHTML = seven24Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seven24").style.backgroundColor = paintColor;
     seven24Color = paintColor;
;  
    }
}
function paintSeven25() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seven25Color;  document.getElementById("hex").innerHTML = seven25Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seven25").style.backgroundColor = paintColor;
     seven25Color = paintColor;
;  
    }
}

// Row 8

function paintEightOne() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eightOneColor;  document.getElementById("hex").innerHTML = eightOneColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eightOne").style.backgroundColor = paintColor;
     eightOneColor = paintColor;
;  
    }
}
function paintEightTwo() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eightTwoColor;  document.getElementById("hex").innerHTML = eightTwoColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eightTwo").style.backgroundColor = paintColor;
     eightTwoColor = paintColor;
;  
    }
}
function paintEightThree() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eightThreeColor;  document.getElementById("hex").innerHTML = eightThreeColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eightThree").style.backgroundColor = paintColor;
     eightThreeColor = paintColor;
;  
    }
}
function paintEightFour() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eightFourColor;  document.getElementById("hex").innerHTML = eightFourColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eightFour").style.backgroundColor = paintColor;
     eightFourColor = paintColor;
;  
    }
}
function paintEightFive() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eightFiveColor;  document.getElementById("hex").innerHTML = eightFiveColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eightFive").style.backgroundColor = paintColor;
     eightFiveColor = paintColor;
;  
    }
}
function paintEightSix() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eightSixColor;  document.getElementById("hex").innerHTML = eightSixColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eightSix").style.backgroundColor = paintColor;
     eightSixColor = paintColor;
;  
    }
}
function paintEightSeven() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eightSevenColor;  document.getElementById("hex").innerHTML = eightSevenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eightSeven").style.backgroundColor = paintColor;
     eightSevenColor = paintColor;
;  
    } 
}
function paintEightEight() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eightEightColor;  document.getElementById("hex").innerHTML = eightEightColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eightEight").style.backgroundColor = paintColor;
     eightEightColor = paintColor;
;  
    }
}
function paintEightNine() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eightNineColor;  document.getElementById("hex").innerHTML = eightNineColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eightNine").style.backgroundColor = paintColor;
     eightNineColor = paintColor;
;  
    }
}
function paintEightTen() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eightTenColor;  document.getElementById("hex").innerHTML = eightTenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eightTen").style.backgroundColor = paintColor;
     eightTenColor = paintColor;
;  
    }
}

function paintEight11() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eight11Color;  document.getElementById("hex").innerHTML = eight11Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eight11").style.backgroundColor = paintColor;
     eight11Color = paintColor;
;  
    }
}
function paintEight12() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eight12Color;  document.getElementById("hex").innerHTML = eight12Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eight12").style.backgroundColor = paintColor;
     eight12Color = paintColor;
;  
    }
}
function paintEight13() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eight13Color;  document.getElementById("hex").innerHTML = eight13Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eight13").style.backgroundColor = paintColor;
     eight13Color = paintColor;
;  
    }
}
function paintEight14() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eight14Color;  document.getElementById("hex").innerHTML = eight14Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eight14").style.backgroundColor = paintColor;
     eight14Color = paintColor;
;  
    }
}
function paintEight15() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eight15Color;  document.getElementById("hex").innerHTML = eight15Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eight15").style.backgroundColor = paintColor;
     eight15Color = paintColor;
;  
    }
}
function paintEight16() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eight16Color;  document.getElementById("hex").innerHTML = eight16Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eight16").style.backgroundColor = paintColor;
     eight16Color = paintColor;
;  
    }
}
function paintEight17() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eight17Color;  document.getElementById("hex").innerHTML = eight17Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eight17").style.backgroundColor = paintColor;
     eight17Color = paintColor;
;  
    }
}
function paintEight18() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eight18Color;  document.getElementById("hex").innerHTML = eight18Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eight18").style.backgroundColor = paintColor;
     eight18Color = paintColor;
;  
    }
}
function paintEight19() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eight19Color;  document.getElementById("hex").innerHTML = eight19Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eight19").style.backgroundColor = paintColor;
     eight19Color = paintColor;
;  
    }
}
function paintEight20() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eight20Color;  document.getElementById("hex").innerHTML = eight20Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eight20").style.backgroundColor = paintColor;
     eight20Color = paintColor;
;  
    }
}

function paintEight21() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eight21Color;  document.getElementById("hex").innerHTML = eight21Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eight21").style.backgroundColor = paintColor;
     eight21Color = paintColor;
;  
    }
}
function paintEight22() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eight22Color;  document.getElementById("hex").innerHTML = eight22Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eight22").style.backgroundColor = paintColor;
     eight22Color = paintColor;
;  
    }
}
function paintEight23() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eight23Color;  document.getElementById("hex").innerHTML = eight23Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eight23").style.backgroundColor = paintColor;
     eight23Color = paintColor;
;  
    }
}
function paintEight24() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eight24Color;  document.getElementById("hex").innerHTML = eight24Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eight24").style.backgroundColor = paintColor;
     eight24Color = paintColor;
;  
    }
}
function paintEight25() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eight25Color;  document.getElementById("hex").innerHTML = eight25Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eight25").style.backgroundColor = paintColor;
     eight25Color = paintColor;
;  
    }
}

// Row 9

function paintNineOne() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineOneColor;  document.getElementById("hex").innerHTML = nineOneColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineOne").style.backgroundColor = paintColor;
     nineOneColor = paintColor;
;  
    }
}
function paintNineTwo() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineTwoColor;  document.getElementById("hex").innerHTML = nineTwoColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineTwo").style.backgroundColor = paintColor;
     nineTwoColor = paintColor;
;  
    }
}
function paintNineThree() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineThreeColor;  document.getElementById("hex").innerHTML = nineThreeColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineThree").style.backgroundColor = paintColor;
     nineThreeColor = paintColor;
;  
    }
}
function paintNineFour() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineFourColor;  document.getElementById("hex").innerHTML = nineFourColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineFour").style.backgroundColor = paintColor;
     nineFourColor = paintColor;
;  
    }
}
function paintNineFive() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineFiveColor;  document.getElementById("hex").innerHTML = nineFiveColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineFive").style.backgroundColor = paintColor;
     nineFiveColor = paintColor;
;  
    }
}
function paintNineSix() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineSixColor;  document.getElementById("hex").innerHTML = nineSixColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineSix").style.backgroundColor = paintColor;
     nineSixColor = paintColor;
;  
    }
}
function paintNineSeven() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineSevenColor;  document.getElementById("hex").innerHTML = nineSevenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineSeven").style.backgroundColor = paintColor;
     nineSevenColor = paintColor;
;  
    } 
}
function paintNineEight() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineEightColor;  document.getElementById("hex").innerHTML = nineEightColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineEight").style.backgroundColor = paintColor;
     nineEightColor = paintColor;
;  
    }
}
function paintNineNine() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineNineColor;  document.getElementById("hex").innerHTML = nineNineColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineNine").style.backgroundColor = paintColor;
     nineNineColor = paintColor;
;  
    }
}
function paintNineTen() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineTenColor;  document.getElementById("hex").innerHTML = nineTenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineTen").style.backgroundColor = paintColor;
     nineTenColor = paintColor;
;  
    }
}

function paintNine11() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nine11Color;  document.getElementById("hex").innerHTML = nine11Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nine11").style.backgroundColor = paintColor;
     nine11Color = paintColor;
;  
    }
}
function paintNine12() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nine12Color;  document.getElementById("hex").innerHTML = nine12Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nine12").style.backgroundColor = paintColor;
     nine12Color = paintColor;
;  
    }
}
function paintNine13() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nine13Color;  document.getElementById("hex").innerHTML = nine13Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nine13").style.backgroundColor = paintColor;
     nine13Color = paintColor;
;  
    }
}
function paintNine14() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nine14Color;  document.getElementById("hex").innerHTML = nine14Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nine14").style.backgroundColor = paintColor;
     nine14Color = paintColor;
;  
    }
}
function paintNine15() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nine15Color;  document.getElementById("hex").innerHTML = nine15Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nine15").style.backgroundColor = paintColor;
     nine15Color = paintColor;
;  
    }
}
function paintNine16() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nine16Color;  document.getElementById("hex").innerHTML = nine16Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nine16").style.backgroundColor = paintColor;
     nine16Color = paintColor;
;  
    }
}
function paintNine17() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nine17Color;  document.getElementById("hex").innerHTML = nine17Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nine17").style.backgroundColor = paintColor;
     nine17Color = paintColor;
;  
    }
}
function paintNine18() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nine18Color;  document.getElementById("hex").innerHTML = nine18Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nine18").style.backgroundColor = paintColor;
     nine18Color = paintColor;
;  
    }
}
function paintNine19() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nine19Color;  document.getElementById("hex").innerHTML = nine19Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nine19").style.backgroundColor = paintColor;
     nine19Color = paintColor;
;  
    }
}
function paintNine20() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nine20Color;  document.getElementById("hex").innerHTML = nine20Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nine20").style.backgroundColor = paintColor;
     nine20Color = paintColor;
;  
    }
}

function paintNine21() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nine21Color;  document.getElementById("hex").innerHTML = nine21Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nine21").style.backgroundColor = paintColor;
     nine21Color = paintColor;
;  
    }
}
function paintNine22() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nine22Color;  document.getElementById("hex").innerHTML = nine22Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nine22").style.backgroundColor = paintColor;
     nine22Color = paintColor;
;  
    }
}
function paintNine23() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nine23Color;  document.getElementById("hex").innerHTML = nine23Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nine23").style.backgroundColor = paintColor;
     nine23Color = paintColor;
;  
    }
}
function paintNine24() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nine24Color;  document.getElementById("hex").innerHTML = nine24Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nine24").style.backgroundColor = paintColor;
     nine24Color = paintColor;
;  
    }
}
function paintNine25() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nine25Color;  document.getElementById("hex").innerHTML = nine25Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nine25").style.backgroundColor = paintColor;
     nine25Color = paintColor;
;  
    }
}

// Row 10

function paintTenOne() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = tenOneColor;  document.getElementById("hex").innerHTML = tenOneColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("tenOne").style.backgroundColor = paintColor;
     tenOneColor = paintColor;
;  
    }
}
function paintTenTwo() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = tenTwoColor;  document.getElementById("hex").innerHTML = tenTwoColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("tenTwo").style.backgroundColor = paintColor;
     tenTwoColor = paintColor;
;  
    }
}
function paintTenThree() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = tenThreeColor;  document.getElementById("hex").innerHTML = tenThreeColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("tenThree").style.backgroundColor = paintColor;
     tenThreeColor = paintColor;
;  
    }
}
function paintTenFour() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = tenFourColor;  document.getElementById("hex").innerHTML = tenFourColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("tenFour").style.backgroundColor = paintColor;
     tenFourColor = paintColor;
;  
    }
}
function paintTenFive() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = tenFiveColor;  document.getElementById("hex").innerHTML = tenFiveColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("tenFive").style.backgroundColor = paintColor;
     tenFiveColor = paintColor;
;  
    }
}
function paintTenSix() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = tenSixColor;  document.getElementById("hex").innerHTML = tenSixColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("tenSix").style.backgroundColor = paintColor;
     tenSixColor = paintColor;
;  
    }
}
function paintTenSeven() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = tenSevenColor;  document.getElementById("hex").innerHTML = tenSevenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("tenSeven").style.backgroundColor = paintColor;
     tenSevenColor = paintColor;
;  
    } 
}
function paintTenEight() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = tenEightColor;  document.getElementById("hex").innerHTML = tenEightColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("tenEight").style.backgroundColor = paintColor;
     tenEightColor = paintColor;
;  
    }
}
function paintTenNine() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = tenNineColor;  document.getElementById("hex").innerHTML = tenNineColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("tenNine").style.backgroundColor = paintColor;
     tenNineColor = paintColor;
;  
    }
}
function paintTenTen() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = tenTenColor;  document.getElementById("hex").innerHTML = tenTenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("tenTen").style.backgroundColor = paintColor;
     tenTenColor = paintColor;
;  
    }
}

function paintTen11() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = ten11Color;  document.getElementById("hex").innerHTML = ten11Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("ten11").style.backgroundColor = paintColor;
     ten11Color = paintColor;
;  
    }
}
function paintTen12() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = ten12Color;  document.getElementById("hex").innerHTML = ten12Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("ten12").style.backgroundColor = paintColor;
     ten12Color = paintColor;
;  
    }
}
function paintTen13() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = ten13Color;  document.getElementById("hex").innerHTML = ten13Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("ten13").style.backgroundColor = paintColor;
     ten13Color = paintColor;
;  
    }
}
function paintTen14() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = ten14Color;  document.getElementById("hex").innerHTML = ten14Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("ten14").style.backgroundColor = paintColor;
     ten14Color = paintColor;
;  
    }
}
function paintTen15() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = ten15Color;  document.getElementById("hex").innerHTML = ten15Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("ten15").style.backgroundColor = paintColor;
     ten15Color = paintColor;
;  
    }
}
function paintTen16() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = ten16Color;  document.getElementById("hex").innerHTML = ten16Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("ten16").style.backgroundColor = paintColor;
     ten16Color = paintColor;
;  
    }
}
function paintTen17() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = ten17Color;  document.getElementById("hex").innerHTML = ten17Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("ten17").style.backgroundColor = paintColor;
     ten17Color = paintColor;
;  
    }
}
function paintTen18() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = ten18Color;  document.getElementById("hex").innerHTML = ten18Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("ten18").style.backgroundColor = paintColor;
     ten18Color = paintColor;
;  
    }
}
function paintTen19() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = ten19Color;  document.getElementById("hex").innerHTML = ten19Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("ten19").style.backgroundColor = paintColor;
     ten19Color = paintColor;
;  
    }
}
function paintTen20() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = ten20Color;  document.getElementById("hex").innerHTML = ten20Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("ten20").style.backgroundColor = paintColor;
     ten20Color = paintColor;
;  
    }
}

function paintTen21() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = ten21Color;  document.getElementById("hex").innerHTML = ten21Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("ten21").style.backgroundColor = paintColor;
     ten21Color = paintColor;
;  
    }
}
function paintTen22() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = ten22Color;  document.getElementById("hex").innerHTML = ten22Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("ten22").style.backgroundColor = paintColor;
     ten22Color = paintColor;
;  
    }
}
function paintTen23() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = ten23Color;  document.getElementById("hex").innerHTML = ten23Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("ten23").style.backgroundColor = paintColor;
     ten23Color = paintColor;
;  
    }
}
function paintTen24() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = ten24Color;  document.getElementById("hex").innerHTML = ten24Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("ten24").style.backgroundColor = paintColor;
     ten24Color = paintColor;
;  
    }
}
function paintTen25() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = ten25Color;  document.getElementById("hex").innerHTML = ten25Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("ten25").style.backgroundColor = paintColor;
     ten25Color = paintColor;
;  
    }
}

// Row 11

function paintElevenOne() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = elevenOneColor;  document.getElementById("hex").innerHTML = elevenOneColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("elevenOne").style.backgroundColor = paintColor;
     elevenOneColor = paintColor;
;  
    }
}
function paintElevenTwo() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = elevenTwoColor;  document.getElementById("hex").innerHTML = elevenTwoColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("elevenTwo").style.backgroundColor = paintColor;
     elevenTwoColor = paintColor;
;  
    }
}
function paintElevenThree() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = elevenThreeColor;  document.getElementById("hex").innerHTML = elevenThreeColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("elevenThree").style.backgroundColor = paintColor;
     elevenThreeColor = paintColor;
;  
    }
}
function paintElevenFour() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = elevenFourColor;  document.getElementById("hex").innerHTML = elevenFourColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("elevenFour").style.backgroundColor = paintColor;
     elevenFourColor = paintColor;
;  
    }
}
function paintElevenFive() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = elevenFiveColor;  document.getElementById("hex").innerHTML = elevenFiveColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("elevenFive").style.backgroundColor = paintColor;
     elevenFiveColor = paintColor;
;  
    }
}
function paintElevenSix() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = elevenSixColor;  document.getElementById("hex").innerHTML = elevenSixColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("elevenSix").style.backgroundColor = paintColor;
     elevenSixColor = paintColor;
;  
    }
}
function paintElevenSeven() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = elevenSevenColor;  document.getElementById("hex").innerHTML = elevenSevenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("elevenSeven").style.backgroundColor = paintColor;
     elevenSevenColor = paintColor;
;  
    } 
}
function paintElevenEight() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = elevenEightColor;  document.getElementById("hex").innerHTML = elevenEightColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("elevenEight").style.backgroundColor = paintColor;
     elevenEightColor = paintColor;
;  
    }
}
function paintElevenNine() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = elevenNineColor;  document.getElementById("hex").innerHTML = elevenNineColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("elevenNine").style.backgroundColor = paintColor;
     elevenNineColor = paintColor;
;  
    }
}
function paintElevenTen() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = elevenTenColor;  document.getElementById("hex").innerHTML = elevenTenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("elevenTen").style.backgroundColor = paintColor;
     elevenTenColor = paintColor;
;  
    }
}

function paintEleven11() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eleven11Color;  document.getElementById("hex").innerHTML = eleven11Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eleven11").style.backgroundColor = paintColor;
     eleven11Color = paintColor;
;  
    }
}
function paintEleven12() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eleven12Color;  document.getElementById("hex").innerHTML = eleven12Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eleven12").style.backgroundColor = paintColor;
     eleven12Color = paintColor;
;  
    }
}
function paintEleven13() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eleven13Color;  document.getElementById("hex").innerHTML = eleven13Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eleven13").style.backgroundColor = paintColor;
     eleven13Color = paintColor;
;  
    }
}
function paintEleven14() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eleven14Color;  document.getElementById("hex").innerHTML = eleven14Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eleven14").style.backgroundColor = paintColor;
     eleven14Color = paintColor;
;  
    }
}
function paintEleven15() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eleven15Color;  document.getElementById("hex").innerHTML = eleven15Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eleven15").style.backgroundColor = paintColor;
     eleven15Color = paintColor;
;  
    }
}
function paintEleven16() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eleven16Color;  document.getElementById("hex").innerHTML = eleven16Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eleven16").style.backgroundColor = paintColor;
     eleven16Color = paintColor;
;  
    }
}
function paintEleven17() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eleven17Color;  document.getElementById("hex").innerHTML = eleven17Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eleven17").style.backgroundColor = paintColor;
     eleven17Color = paintColor;
;  
    }
}
function paintEleven18() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eleven18Color;  document.getElementById("hex").innerHTML = eleven18Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eleven18").style.backgroundColor = paintColor;
     eleven18Color = paintColor;
;  
    }
}
function paintEleven19() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eleven19Color;  document.getElementById("hex").innerHTML = eleven19Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eleven19").style.backgroundColor = paintColor;
     eleven19Color = paintColor;
;  
    }
}
function paintEleven20() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eleven20Color;  document.getElementById("hex").innerHTML = eleven20Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eleven20").style.backgroundColor = paintColor;
     eleven20Color = paintColor;
;  
    }
}

function paintEleven21() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eleven21Color;  document.getElementById("hex").innerHTML = eleven21Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eleven21").style.backgroundColor = paintColor;
     eleven21Color = paintColor;
;  
    }
}
function paintEleven22() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eleven22Color;  document.getElementById("hex").innerHTML = eleven22Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eleven22").style.backgroundColor = paintColor;
     eleven22Color = paintColor;
;  
    }
}
function paintEleven23() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eleven23Color;  document.getElementById("hex").innerHTML = eleven23Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eleven23").style.backgroundColor = paintColor;
     eleven23Color = paintColor;
;  
    }
}
function paintEleven24() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eleven24Color;  document.getElementById("hex").innerHTML = eleven24Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eleven24").style.backgroundColor = paintColor;
     eleven24Color = paintColor;
;  
    }
}
function paintEleven25() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eleven25Color;  document.getElementById("hex").innerHTML = eleven25Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eleven25").style.backgroundColor = paintColor;
     eleven25Color = paintColor;
;  
    }
}

// Row 12

function paintTwelveOne() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twelveOneColor;  document.getElementById("hex").innerHTML = twelveOneColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twelveOne").style.backgroundColor = paintColor;
     twelveOneColor = paintColor;
;  
    }
}
function paintTwelveTwo() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twelveTwoColor;  document.getElementById("hex").innerHTML = twelveTwoColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twelveTwo").style.backgroundColor = paintColor;
     twelveTwoColor = paintColor;
;  
    }
}
function paintTwelveThree() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twelveThreeColor;  document.getElementById("hex").innerHTML = twelveThreeColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twelveThree").style.backgroundColor = paintColor;
     twelveThreeColor = paintColor;
;  
    }
}
function paintTwelveFour() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twelveFourColor;  document.getElementById("hex").innerHTML = twelveFourColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twelveFour").style.backgroundColor = paintColor;
     twelveFourColor = paintColor;
;  
    }
}
function paintTwelveFive() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twelveFiveColor;  document.getElementById("hex").innerHTML = twelveFiveColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twelveFive").style.backgroundColor = paintColor;
     twelveFiveColor = paintColor;
;  
    }
}
function paintTwelveSix() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twelveSixColor;  document.getElementById("hex").innerHTML = twelveSixColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twelveSix").style.backgroundColor = paintColor;
     twelveSixColor = paintColor;
;  
    }
}
function paintTwelveSeven() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twelveSevenColor;  document.getElementById("hex").innerHTML = twelveSevenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twelveSeven").style.backgroundColor = paintColor;
     twelveSevenColor = paintColor;
;  
    } 
}
function paintTwelveEight() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twelveEightColor;  document.getElementById("hex").innerHTML = twelveEightColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twelveEight").style.backgroundColor = paintColor;
     twelveEightColor = paintColor;
;  
    }
}
function paintTwelveNine() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twelveNineColor;  document.getElementById("hex").innerHTML = twelveNineColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twelveNine").style.backgroundColor = paintColor;
     twelveNineColor = paintColor;
;  
    }
}
function paintTwelveTen() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twelveTenColor;  document.getElementById("hex").innerHTML = twelveTenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twelveTen").style.backgroundColor = paintColor;
     twelveTenColor = paintColor;
;  
    }
}

function paintTwelve11() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twelve11Color;  document.getElementById("hex").innerHTML = twelve11Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twelve11").style.backgroundColor = paintColor;
     twelve11Color = paintColor;
;  
    }
}
function paintTwelve12() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twelve12Color;  document.getElementById("hex").innerHTML = twelve12Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twelve12").style.backgroundColor = paintColor;
     twelve12Color = paintColor;
;  
    }
}
function paintTwelve13() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twelve13Color;  document.getElementById("hex").innerHTML = twelve13Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twelve13").style.backgroundColor = paintColor;
     twelve13Color = paintColor;
;  
    }
}
function paintTwelve14() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twelve14Color;  document.getElementById("hex").innerHTML = twelve14Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twelve14").style.backgroundColor = paintColor;
     twelve14Color = paintColor;
;  
    }
}
function paintTwelve15() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twelve15Color;  document.getElementById("hex").innerHTML = twelve15Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twelve15").style.backgroundColor = paintColor;
     twelve15Color = paintColor;
;  
    }
}
function paintTwelve16() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twelve16Color;  document.getElementById("hex").innerHTML = twelve16Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twelve16").style.backgroundColor = paintColor;
     twelve16Color = paintColor;
;  
    }
}
function paintTwelve17() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twelve17Color;  document.getElementById("hex").innerHTML = twelve17Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twelve17").style.backgroundColor = paintColor;
     twelve17Color = paintColor;
;  
    }
}
function paintTwelve18() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twelve18Color;  document.getElementById("hex").innerHTML = twelve18Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twelve18").style.backgroundColor = paintColor;
     twelve18Color = paintColor;
;  
    }
}
function paintTwelve19() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twelve19Color;  document.getElementById("hex").innerHTML = twelve19Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twelve19").style.backgroundColor = paintColor;
     twelve19Color = paintColor;
;  
    }
}
function paintTwelve20() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twelve20Color;  document.getElementById("hex").innerHTML = twelve20Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twelve20").style.backgroundColor = paintColor;
     twelve20Color = paintColor;
;  
    }
}

function paintTwelve21() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twelve21Color;  document.getElementById("hex").innerHTML = twelve21Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twelve21").style.backgroundColor = paintColor;
     twelve21Color = paintColor;
;  
    }
}
function paintTwelve22() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twelve22Color;  document.getElementById("hex").innerHTML = twelve22Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twelve22").style.backgroundColor = paintColor;
     twelve22Color = paintColor;
;  
    }
}
function paintTwelve23() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twelve23Color;  document.getElementById("hex").innerHTML = twelve23Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twelve23").style.backgroundColor = paintColor;
     twelve23Color = paintColor;
;  
    }
}
function paintTwelve24() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twelve24Color;  document.getElementById("hex").innerHTML = twelve24Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twelve24").style.backgroundColor = paintColor;
     twelve24Color = paintColor;
;  
    }
}
function paintTwelve25() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twelve25Color;  document.getElementById("hex").innerHTML = twelve25Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twelve25").style.backgroundColor = paintColor;
     twelve25Color = paintColor;
;  
    }
}

// Row 13

function paintThirteenOne() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = thirteenOneColor;  document.getElementById("hex").innerHTML = thirteenOneColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("thirteenOne").style.backgroundColor = paintColor;
     thirteenOneColor = paintColor;
;  
    }
}
function paintThirteenTwo() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = thirteenTwoColor;  document.getElementById("hex").innerHTML = thirteenTwoColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("thirteenTwo").style.backgroundColor = paintColor;
     thirteenTwoColor = paintColor;
;  
    }
}
function paintThirteenThree() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = thirteenThreeColor;  document.getElementById("hex").innerHTML = thirteenThreeColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("thirteenThree").style.backgroundColor = paintColor;
     thirteenThreeColor = paintColor;
;  
    }
}
function paintThirteenFour() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = thirteenFourColor;  document.getElementById("hex").innerHTML = thirteenFourColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("thirteenFour").style.backgroundColor = paintColor;
     thirteenFourColor = paintColor;
;  
    }
}
function paintThirteenFive() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = thirteenFiveColor;  document.getElementById("hex").innerHTML = thirteenFiveColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("thirteenFive").style.backgroundColor = paintColor;
     thirteenFiveColor = paintColor;
;  
    }
}
function paintThirteenSix() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = thirteenSixColor;  document.getElementById("hex").innerHTML = thirteenSixColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("thirteenSix").style.backgroundColor = paintColor;
     thirteenSixColor = paintColor;
;  
    }
}
function paintThirteenSeven() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = thirteenSevenColor;  document.getElementById("hex").innerHTML = thirteenSevenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("thirteenSeven").style.backgroundColor = paintColor;
     thirteenSevenColor = paintColor;
;  
    } 
}
function paintThirteenEight() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = thirteenEightColor;  document.getElementById("hex").innerHTML = thirteenEightColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("thirteenEight").style.backgroundColor = paintColor;
     thirteenEightColor = paintColor;
;  
    }
}
function paintThirteenNine() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = thirteenNineColor;  document.getElementById("hex").innerHTML = thirteenNineColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("thirteenNine").style.backgroundColor = paintColor;
     thirteenNineColor = paintColor;
;  
    }
}
function paintThirteenTen() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = thirteenTenColor;  document.getElementById("hex").innerHTML = thirteenTenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("thirteenTen").style.backgroundColor = paintColor;
     thirteenTenColor = paintColor;
;  
    }
}

function paintThirteen11() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = thirteen11Color;  document.getElementById("hex").innerHTML = thirteen11Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("thirteen11").style.backgroundColor = paintColor;
     thirteen11Color = paintColor;
;  
    }
}
function paintThirteen12() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = thirteen12Color;  document.getElementById("hex").innerHTML = thirteen12Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("thirteen12").style.backgroundColor = paintColor;
     thirteen12Color = paintColor;
;  
    }
}
function paintThirteen13() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = thirteen13Color;  document.getElementById("hex").innerHTML = thirteen13Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("thirteen13").style.backgroundColor = paintColor;
     thirteen13Color = paintColor;
;  
    }
}
function paintThirteen14() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = thirteen14Color;  document.getElementById("hex").innerHTML = thirteen14Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("thirteen14").style.backgroundColor = paintColor;
     thirteen14Color = paintColor;
;  
    }
}
function paintThirteen15() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = thirteen15Color;  document.getElementById("hex").innerHTML = thirteen15Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("thirteen15").style.backgroundColor = paintColor;
     thirteen15Color = paintColor;
;  
    }
}
function paintThirteen16() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = thirteen16Color;  document.getElementById("hex").innerHTML = thirteen16Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("thirteen16").style.backgroundColor = paintColor;
     thirteen16Color = paintColor;
;  
    }
}
function paintThirteen17() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = thirteen17Color;  document.getElementById("hex").innerHTML = thirteen17Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("thirteen17").style.backgroundColor = paintColor;
     thirteen17Color = paintColor;
;  
    }
}
function paintThirteen18() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = thirteen18Color;  document.getElementById("hex").innerHTML = thirteen18Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("thirteen18").style.backgroundColor = paintColor;
     thirteen18Color = paintColor;
;  
    }
}
function paintThirteen19() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = thirteen19Color;  document.getElementById("hex").innerHTML = thirteen19Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("thirteen19").style.backgroundColor = paintColor;
     thirteen19Color = paintColor;
;  
    }
}
function paintThirteen20() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = thirteen20Color;  document.getElementById("hex").innerHTML = thirteen20Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("thirteen20").style.backgroundColor = paintColor;
     thirteen20Color = paintColor;
;  
    }
}

function paintThirteen21() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = thirteen21Color;  document.getElementById("hex").innerHTML = thirteen21Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("thirteen21").style.backgroundColor = paintColor;
     thirteen21Color = paintColor;
;  
    }
}
function paintThirteen22() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = thirteen22Color;  document.getElementById("hex").innerHTML = thirteen22Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("thirteen22").style.backgroundColor = paintColor;
     thirteen22Color = paintColor;
;  
    }
}
function paintThirteen23() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = thirteen23Color;  document.getElementById("hex").innerHTML = thirteen23Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("thirteen23").style.backgroundColor = paintColor;
     thirteen23Color = paintColor;
;  
    }
}
function paintThirteen24() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = thirteen24Color;  document.getElementById("hex").innerHTML = thirteen24Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("thirteen24").style.backgroundColor = paintColor;
     thirteen24Color = paintColor;
;  
    }
}
function paintThirteen25() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = thirteen25Color;  document.getElementById("hex").innerHTML = thirteen25Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("thirteen25").style.backgroundColor = paintColor;
     thirteen25Color = paintColor;
;  
    }
}

// Row 14

function paintFourteenOne() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourteenOneColor;  document.getElementById("hex").innerHTML = fourteenOneColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourteenOne").style.backgroundColor = paintColor;
     fourteenOneColor = paintColor;
;  
    }
}
function paintFourteenTwo() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourteenTwoColor;  document.getElementById("hex").innerHTML = fourteenTwoColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourteenTwo").style.backgroundColor = paintColor;
     fourteenTwoColor = paintColor;
;  
    }
}
function paintFourteenThree() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourteenThreeColor;  document.getElementById("hex").innerHTML = fourteenThreeColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourteenThree").style.backgroundColor = paintColor;
     fourteenThreeColor = paintColor;
;  
    }
}
function paintFourteenFour() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourteenFourColor;  document.getElementById("hex").innerHTML = fourteenFourColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourteenFour").style.backgroundColor = paintColor;
     fourteenFourColor = paintColor;
;  
    }
}
function paintFourteenFive() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourteenFiveColor;  document.getElementById("hex").innerHTML = fourteenFiveColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourteenFive").style.backgroundColor = paintColor;
     fourteenFiveColor = paintColor;
;  
    }
}
function paintFourteenSix() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourteenSixColor;  document.getElementById("hex").innerHTML = fourteenSixColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourteenSix").style.backgroundColor = paintColor;
     fourteenSixColor = paintColor;
;  
    }
}
function paintFourteenSeven() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourteenSevenColor;  document.getElementById("hex").innerHTML = fourteenSevenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourteenSeven").style.backgroundColor = paintColor;
     fourteenSevenColor = paintColor;
;  
    } 
}
function paintFourteenEight() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourteenEightColor;  document.getElementById("hex").innerHTML = fourteenEightColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourteenEight").style.backgroundColor = paintColor;
     fourteenEightColor = paintColor;
;  
    }
}
function paintFourteenNine() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourteenNineColor;  document.getElementById("hex").innerHTML = fourteenNineColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourteenNine").style.backgroundColor = paintColor;
     fourteenNineColor = paintColor;
;  
    }
}
function paintFourteenTen() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourteenTenColor;  document.getElementById("hex").innerHTML = fourteenTenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourteenTen").style.backgroundColor = paintColor;
     fourteenTenColor = paintColor;
;  
    }
}

function paintFourteen11() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourteen11Color;  document.getElementById("hex").innerHTML = fourteen11Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourteen11").style.backgroundColor = paintColor;
     fourteen11Color = paintColor;
;  
    }
}
function paintFourteen12() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourteen12Color;  document.getElementById("hex").innerHTML = fourteen12Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourteen12").style.backgroundColor = paintColor;
     fourteen12Color = paintColor;
;  
    }
}
function paintFourteen13() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourteen13Color;  document.getElementById("hex").innerHTML = fourteen13Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourteen13").style.backgroundColor = paintColor;
     fourteen13Color = paintColor;
;  
    }
}
function paintFourteen14() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourteen14Color;  document.getElementById("hex").innerHTML = fourteen14Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourteen14").style.backgroundColor = paintColor;
     fourteen14Color = paintColor;
;  
    }
}
function paintFourteen15() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourteen15Color;  document.getElementById("hex").innerHTML = fourteen15Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourteen15").style.backgroundColor = paintColor;
     fourteen15Color = paintColor;
;  
    }
}
function paintFourteen16() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourteen16Color;  document.getElementById("hex").innerHTML = fourteen16Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourteen16").style.backgroundColor = paintColor;
     fourteen16Color = paintColor;
;  
    }
}
function paintFourteen17() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourteen17Color;  document.getElementById("hex").innerHTML = fourteen17Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourteen17").style.backgroundColor = paintColor;
     fourteen17Color = paintColor;
;  
    }
}
function paintFourteen18() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourteen18Color;  document.getElementById("hex").innerHTML = fourteen18Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourteen18").style.backgroundColor = paintColor;
     fourteen18Color = paintColor;
;  
    }
}
function paintFourteen19() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourteen19Color;  document.getElementById("hex").innerHTML = fourteen19Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourteen19").style.backgroundColor = paintColor;
     fourteen19Color = paintColor;
;  
    }
}
function paintFourteen20() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourteen20Color;  document.getElementById("hex").innerHTML = fourteen20Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourteen20").style.backgroundColor = paintColor;
     fourteen20Color = paintColor;
;  
    }
}

function paintFourteen21() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourteen21Color;  document.getElementById("hex").innerHTML = fourteen21Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourteen21").style.backgroundColor = paintColor;
     fourteen21Color = paintColor;
;  
    }
}
function paintFourteen22() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourteen22Color;  document.getElementById("hex").innerHTML = fourteen22Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourteen22").style.backgroundColor = paintColor;
     fourteen22Color = paintColor;
;  
    }
}
function paintFourteen23() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourteen23Color;  document.getElementById("hex").innerHTML = fourteen23Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourteen23").style.backgroundColor = paintColor;
     fourteen23Color = paintColor;
;  
    }
}
function paintFourteen24() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourteen24Color;  document.getElementById("hex").innerHTML = fourteen24Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourteen24").style.backgroundColor = paintColor;
     fourteen24Color = paintColor;
;  
    }
}
function paintFourteen25() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fourteen25Color;  document.getElementById("hex").innerHTML = fourteen25Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fourteen25").style.backgroundColor = paintColor;
     fourteen25Color = paintColor;
;  
    }
}

// Row 15

function paintFifteenOne() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fifteenOneColor;  document.getElementById("hex").innerHTML = fifteenOneColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fifteenOne").style.backgroundColor = paintColor;
     fifteenOneColor = paintColor;
;  
    }
}
function paintFifteenTwo() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fifteenTwoColor;  document.getElementById("hex").innerHTML = fifteenTwoColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fifteenTwo").style.backgroundColor = paintColor;
     fifteenTwoColor = paintColor;
;  
    }
}
function paintFifteenThree() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fifteenThreeColor;  document.getElementById("hex").innerHTML = fifteenThreeColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fifteenThree").style.backgroundColor = paintColor;
     fifteenThreeColor = paintColor;
;  
    }
}
function paintFifteenFour() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fifteenFourColor;  document.getElementById("hex").innerHTML = fifteenFourColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fifteenFour").style.backgroundColor = paintColor;
     fifteenFourColor = paintColor;
;  
    }
}
function paintFifteenFive() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fifteenFiveColor;  document.getElementById("hex").innerHTML = fifteenFiveColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fifteenFive").style.backgroundColor = paintColor;
     fifteenFiveColor = paintColor;
;  
    }
}
function paintFifteenSix() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fifteenSixColor;  document.getElementById("hex").innerHTML = fifteenSixColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fifteenSix").style.backgroundColor = paintColor;
     fifteenSixColor = paintColor;
;  
    }
}
function paintFifteenSeven() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fifteenSevenColor;  document.getElementById("hex").innerHTML = fifteenSevenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fifteenSeven").style.backgroundColor = paintColor;
     fifteenSevenColor = paintColor;
;  
    } 
}
function paintFifteenEight() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fifteenEightColor;  document.getElementById("hex").innerHTML = fifteenEightColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fifteenEight").style.backgroundColor = paintColor;
     fifteenEightColor = paintColor;
;  
    }
}
function paintFifteenNine() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fifteenNineColor;  document.getElementById("hex").innerHTML = fifteenNineColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fifteenNine").style.backgroundColor = paintColor;
     fifteenNineColor = paintColor;
;  
    }
}
function paintFifteenTen() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fifteenTenColor;  document.getElementById("hex").innerHTML = fifteenTenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fifteenTen").style.backgroundColor = paintColor;
     fifteenTenColor = paintColor;
;  
    }
}

function paintFifteen11() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fifteen11Color;  document.getElementById("hex").innerHTML = fifteen11Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fifteen11").style.backgroundColor = paintColor;
     fifteen11Color = paintColor;
;  
    }
}
function paintFifteen12() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fifteen12Color;  document.getElementById("hex").innerHTML = fifteen12Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fifteen12").style.backgroundColor = paintColor;
     fifteen12Color = paintColor;
;  
    }
}
function paintFifteen13() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fifteen13Color;  document.getElementById("hex").innerHTML = fifteen13Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fifteen13").style.backgroundColor = paintColor;
     fifteen13Color = paintColor;
;  
    }
}
function paintFifteen14() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fifteen14Color;  document.getElementById("hex").innerHTML = fifteen14Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fifteen14").style.backgroundColor = paintColor;
     fifteen14Color = paintColor;
;  
    }
}
function paintFifteen15() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fifteen15Color;  document.getElementById("hex").innerHTML = fifteen15Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fifteen15").style.backgroundColor = paintColor;
     fifteen15Color = paintColor;
;  
    }
}
function paintFifteen16() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fifteen16Color;  document.getElementById("hex").innerHTML = fifteen16Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fifteen16").style.backgroundColor = paintColor;
     fifteen16Color = paintColor;
;  
    }
}
function paintFifteen17() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fifteen17Color;  document.getElementById("hex").innerHTML = fifteen17Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fifteen17").style.backgroundColor = paintColor;
     fifteen17Color = paintColor;
;  
    }
}
function paintFifteen18() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fifteen18Color;  document.getElementById("hex").innerHTML = fifteen18Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fifteen18").style.backgroundColor = paintColor;
     fifteen18Color = paintColor;
;  
    }
}
function paintFifteen19() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fifteen19Color;  document.getElementById("hex").innerHTML = fifteen19Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fifteen19").style.backgroundColor = paintColor;
     fifteen19Color = paintColor;
;  
    }
}
function paintFifteen20() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fifteen20Color;  document.getElementById("hex").innerHTML = fifteen20Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fifteen20").style.backgroundColor = paintColor;
     fifteen20Color = paintColor;
;  
    }
}

function paintFifteen21() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fifteen21Color;  document.getElementById("hex").innerHTML = fifteen21Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fifteen21").style.backgroundColor = paintColor;
     fifteen21Color = paintColor;
;  
    }
}
function paintFifteen22() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fifteen22Color;  document.getElementById("hex").innerHTML = fifteen22Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fifteen22").style.backgroundColor = paintColor;
     fifteen22Color = paintColor;
;  
    }
}
function paintFifteen23() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fifteen23Color;  document.getElementById("hex").innerHTML = fifteen23Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fifteen23").style.backgroundColor = paintColor;
     fifteen23Color = paintColor;
;  
    }
}
function paintFifteen24() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fifteen24Color;  document.getElementById("hex").innerHTML = fifteen24Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fifteen24").style.backgroundColor = paintColor;
     fifteen24Color = paintColor;
;  
    }
}
function paintFifteen25() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = fifteen25Color;  document.getElementById("hex").innerHTML = fifteen25Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("fifteen25").style.backgroundColor = paintColor;
     fifteen25Color = paintColor;
;  
    }
}

// Row 16

function paintSixteenOne() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixteenOneColor;  document.getElementById("hex").innerHTML = sixteenOneColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixteenOne").style.backgroundColor = paintColor;
     sixteenOneColor = paintColor;
;  
    }
}
function paintSixteenTwo() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixteenTwoColor;  document.getElementById("hex").innerHTML = sixteenTwoColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixteenTwo").style.backgroundColor = paintColor;
     sixteenTwoColor = paintColor;
;  
    }
}
function paintSixteenThree() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixteenThreeColor;  document.getElementById("hex").innerHTML = sixteenThreeColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixteenThree").style.backgroundColor = paintColor;
     sixteenThreeColor = paintColor;
;  
    }
}
function paintSixteenFour() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixteenFourColor;  document.getElementById("hex").innerHTML = sixteenFourColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixteenFour").style.backgroundColor = paintColor;
     sixteenFourColor = paintColor;
;  
    }
}
function paintSixteenFive() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixteenFiveColor;  document.getElementById("hex").innerHTML = sixteenFiveColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixteenFive").style.backgroundColor = paintColor;
     sixteenFiveColor = paintColor;
;  
    }
}
function paintSixteenSix() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixteenSixColor;  document.getElementById("hex").innerHTML = sixteenSixColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixteenSix").style.backgroundColor = paintColor;
     sixteenSixColor = paintColor;
;  
    }
}
function paintSixteenSeven() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixteenSevenColor;  document.getElementById("hex").innerHTML = sixteenSevenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixteenSeven").style.backgroundColor = paintColor;
     sixteenSevenColor = paintColor;
;  
    } 
}
function paintSixteenEight() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixteenEightColor;  document.getElementById("hex").innerHTML = sixteenEightColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixteenEight").style.backgroundColor = paintColor;
     sixteenEightColor = paintColor;
;  
    }
}
function paintSixteenNine() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixteenNineColor;  document.getElementById("hex").innerHTML = sixteenNineColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixteenNine").style.backgroundColor = paintColor;
     sixteenNineColor = paintColor;
;  
    }
}
function paintSixteenTen() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixteenTenColor;  document.getElementById("hex").innerHTML = sixteenTenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixteenTen").style.backgroundColor = paintColor;
     sixteenTenColor = paintColor;
;  
    }
}

function paintSixteen11() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixteen11Color;  document.getElementById("hex").innerHTML = sixteen11Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixteen11").style.backgroundColor = paintColor;
     sixteen11Color = paintColor;
;  
    }
}
function paintSixteen12() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixteen12Color;  document.getElementById("hex").innerHTML = sixteen12Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixteen12").style.backgroundColor = paintColor;
     sixteen12Color = paintColor;
;  
    }
}
function paintSixteen13() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixteen13Color;  document.getElementById("hex").innerHTML = sixteen13Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixteen13").style.backgroundColor = paintColor;
     sixteen13Color = paintColor;
;  
    }
}
function paintSixteen14() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixteen14Color;  document.getElementById("hex").innerHTML = sixteen14Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixteen14").style.backgroundColor = paintColor;
     sixteen14Color = paintColor;
;  
    }
}
function paintSixteen15() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixteen15Color;  document.getElementById("hex").innerHTML = sixteen15Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixteen15").style.backgroundColor = paintColor;
     sixteen15Color = paintColor;
;  
    }
}
function paintSixteen16() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixteen16Color;  document.getElementById("hex").innerHTML = sixteen16Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixteen16").style.backgroundColor = paintColor;
     sixteen16Color = paintColor;
;  
    }
}
function paintSixteen17() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixteen17Color;  document.getElementById("hex").innerHTML = sixteen17Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixteen17").style.backgroundColor = paintColor;
     sixteen17Color = paintColor;
;  
    }
}
function paintSixteen18() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixteen18Color;  document.getElementById("hex").innerHTML = sixteen18Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixteen18").style.backgroundColor = paintColor;
     sixteen18Color = paintColor;
;  
    }
}
function paintSixteen19() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixteen19Color;  document.getElementById("hex").innerHTML = sixteen19Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixteen19").style.backgroundColor = paintColor;
     sixteen19Color = paintColor;
;  
    }
}
function paintSixteen20() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixteen20Color;  document.getElementById("hex").innerHTML = sixteen20Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixteen20").style.backgroundColor = paintColor;
     sixteen20Color = paintColor;
;  
    }
}

function paintSixteen21() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixteen21Color;  document.getElementById("hex").innerHTML = sixteen21Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixteen21").style.backgroundColor = paintColor;
     sixteen21Color = paintColor;
;  
    }
}
function paintSixteen22() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixteen22Color;  document.getElementById("hex").innerHTML = sixteen22Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixteen22").style.backgroundColor = paintColor;
     sixteen22Color = paintColor;
;  
    }
}
function paintSixteen23() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixteen23Color;  document.getElementById("hex").innerHTML = sixteen23Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixteen23").style.backgroundColor = paintColor;
     sixteen23Color = paintColor;
;  
    }
}
function paintSixteen24() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixteen24Color;  document.getElementById("hex").innerHTML = sixteen24Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixteen24").style.backgroundColor = paintColor;
     sixteen24Color = paintColor;
;  
    }
}
function paintSixteen25() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = sixteen25Color;  document.getElementById("hex").innerHTML = sixteen25Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("sixteen25").style.backgroundColor = paintColor;
     sixteen25Color = paintColor;
;  
    }
}

// Row 17

function paintSeventeenOne() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seventeenOneColor;  document.getElementById("hex").innerHTML = seventeenOneColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seventeenOne").style.backgroundColor = paintColor;
     seventeenOneColor = paintColor;
;  
    }
}
function paintSeventeenTwo() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seventeenTwoColor;  document.getElementById("hex").innerHTML = seventeenTwoColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seventeenTwo").style.backgroundColor = paintColor;
     seventeenTwoColor = paintColor;
;  
    }
}
function paintSeventeenThree() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seventeenThreeColor;  document.getElementById("hex").innerHTML = seventeenThreeColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seventeenThree").style.backgroundColor = paintColor;
     seventeenThreeColor = paintColor;
;  
    }
}
function paintSeventeenFour() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seventeenFourColor;  document.getElementById("hex").innerHTML = seventeenFourColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seventeenFour").style.backgroundColor = paintColor;
     seventeenFourColor = paintColor;
;  
    }
}
function paintSeventeenFive() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seventeenFiveColor;  document.getElementById("hex").innerHTML = seventeenFiveColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seventeenFive").style.backgroundColor = paintColor;
     seventeenFiveColor = paintColor;
;  
    }
}
function paintSeventeenSix() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seventeenSixColor;  document.getElementById("hex").innerHTML = seventeenSixColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seventeenSix").style.backgroundColor = paintColor;
     seventeenSixColor = paintColor;
;  
    }
}
function paintSeventeenSeven() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seventeenSevenColor;  document.getElementById("hex").innerHTML = seventeenSevenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seventeenSeven").style.backgroundColor = paintColor;
     seventeenSevenColor = paintColor;
;  
    } 
}
function paintSeventeenEight() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seventeenEightColor;  document.getElementById("hex").innerHTML = seventeenEightColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seventeenEight").style.backgroundColor = paintColor;
     seventeenEightColor = paintColor;
;  
    }
}
function paintSeventeenNine() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seventeenNineColor;  document.getElementById("hex").innerHTML = seventeenNineColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seventeenNine").style.backgroundColor = paintColor;
     seventeenNineColor = paintColor;
;  
    }
}
function paintSeventeenTen() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seventeenTenColor;  document.getElementById("hex").innerHTML = seventeenTenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seventeenTen").style.backgroundColor = paintColor;
     seventeenTenColor = paintColor;
;  
    }
}

function paintSeventeen11() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seventeen11Color;  document.getElementById("hex").innerHTML = seventeen11Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seventeen11").style.backgroundColor = paintColor;
     seventeen11Color = paintColor;
;  
    }
}
function paintSeventeen12() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seventeen12Color;  document.getElementById("hex").innerHTML = seventeen12Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seventeen12").style.backgroundColor = paintColor;
     seventeen12Color = paintColor;
;  
    }
}
function paintSeventeen13() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seventeen13Color;  document.getElementById("hex").innerHTML = seventeen13Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seventeen13").style.backgroundColor = paintColor;
     seventeen13Color = paintColor;
;  
    }
}
function paintSeventeen14() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seventeen14Color;  document.getElementById("hex").innerHTML = seventeen14Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seventeen14").style.backgroundColor = paintColor;
     seventeen14Color = paintColor;
;  
    }
}
function paintSeventeen15() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seventeen15Color;  document.getElementById("hex").innerHTML = seventeen15Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seventeen15").style.backgroundColor = paintColor;
     seventeen15Color = paintColor;
;  
    }
}
function paintSeventeen16() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seventeen16Color;  document.getElementById("hex").innerHTML = seventeen16Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seventeen16").style.backgroundColor = paintColor;
     seventeen16Color = paintColor;
;  
    }
}
function paintSeventeen17() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seventeen17Color;  document.getElementById("hex").innerHTML = seventeen17Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seventeen17").style.backgroundColor = paintColor;
     seventeen17Color = paintColor;
;  
    }
}
function paintSeventeen18() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seventeen18Color;  document.getElementById("hex").innerHTML = seventeen18Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seventeen18").style.backgroundColor = paintColor;
     seventeen18Color = paintColor;
;  
    }
}
function paintSeventeen19() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seventeen19Color;  document.getElementById("hex").innerHTML = seventeen19Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seventeen19").style.backgroundColor = paintColor;
     seventeen19Color = paintColor;
;  
    }
}
function paintSeventeen20() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seventeen20Color;  document.getElementById("hex").innerHTML = seventeen20Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seventeen20").style.backgroundColor = paintColor;
     seventeen20Color = paintColor;
;  
    }
}

function paintSeventeen21() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seventeen21Color;  document.getElementById("hex").innerHTML = seventeen21Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seventeen21").style.backgroundColor = paintColor;
     seventeen21Color = paintColor;
;  
    }
}
function paintSeventeen22() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seventeen22Color;  document.getElementById("hex").innerHTML = seventeen22Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seventeen22").style.backgroundColor = paintColor;
     seventeen22Color = paintColor;
;  
    }
}
function paintSeventeen23() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seventeen23Color;  document.getElementById("hex").innerHTML = seventeen23Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seventeen23").style.backgroundColor = paintColor;
     seventeen23Color = paintColor;
;  
    }
}
function paintSeventeen24() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seventeen24Color;  document.getElementById("hex").innerHTML = seventeen24Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seventeen24").style.backgroundColor = paintColor;
     seventeen24Color = paintColor;
;  
    }
}
function paintSeventeen25() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = seventeen25Color;  document.getElementById("hex").innerHTML = seventeen25Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("seventeen25").style.backgroundColor = paintColor;
     seventeen25Color = paintColor;
;  
    }
}

// Row 18

function paintEighteenOne() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eighteenOneColor;  document.getElementById("hex").innerHTML = eighteenOneColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eighteenOne").style.backgroundColor = paintColor;
     eighteenOneColor = paintColor;
;  
    }
}
function paintEighteenTwo() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eighteenTwoColor;  document.getElementById("hex").innerHTML = eighteenTwoColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eighteenTwo").style.backgroundColor = paintColor;
     eighteenTwoColor = paintColor;
;  
    }
}
function paintEighteenThree() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eighteenThreeColor;  document.getElementById("hex").innerHTML = eighteenThreeColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eighteenThree").style.backgroundColor = paintColor;
     eighteenThreeColor = paintColor;
;  
    }
}
function paintEighteenFour() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eighteenFourColor;  document.getElementById("hex").innerHTML = eighteenFourColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eighteenFour").style.backgroundColor = paintColor;
     eighteenFourColor = paintColor;
;  
    }
}
function paintEighteenFive() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eighteenFiveColor;  document.getElementById("hex").innerHTML = eighteenFiveColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eighteenFive").style.backgroundColor = paintColor;
     eighteenFiveColor = paintColor;
;  
    }
}
function paintEighteenSix() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eighteenSixColor;  document.getElementById("hex").innerHTML = eighteenSixColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eighteenSix").style.backgroundColor = paintColor;
     eighteenSixColor = paintColor;
;  
    }
}
function paintEighteenSeven() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eighteenSevenColor;  document.getElementById("hex").innerHTML = eighteenSevenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eighteenSeven").style.backgroundColor = paintColor;
     eighteenSevenColor = paintColor;
;  
    } 
}
function paintEighteenEight() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eighteenEightColor;  document.getElementById("hex").innerHTML = eighteenEightColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eighteenEight").style.backgroundColor = paintColor;
     eighteenEightColor = paintColor;
;  
    }
}
function paintEighteenNine() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eighteenNineColor;  document.getElementById("hex").innerHTML = eighteenNineColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eighteenNine").style.backgroundColor = paintColor;
     eighteenNineColor = paintColor;
;  
    }
}
function paintEighteenTen() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eighteenTenColor;  document.getElementById("hex").innerHTML = eighteenTenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eighteenTen").style.backgroundColor = paintColor;
     eighteenTenColor = paintColor;
;  
    }
}

function paintEighteen11() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eighteen11Color;  document.getElementById("hex").innerHTML = eighteen11Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eighteen11").style.backgroundColor = paintColor;
     eighteen11Color = paintColor;
;  
    }
}
function paintEighteen12() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eighteen12Color;  document.getElementById("hex").innerHTML = eighteen12Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eighteen12").style.backgroundColor = paintColor;
     eighteen12Color = paintColor;
;  
    }
}
function paintEighteen13() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eighteen13Color;  document.getElementById("hex").innerHTML = eighteen13Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eighteen13").style.backgroundColor = paintColor;
     eighteen13Color = paintColor;
;  
    }
}
function paintEighteen14() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eighteen14Color;  document.getElementById("hex").innerHTML = eighteen14Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eighteen14").style.backgroundColor = paintColor;
     eighteen14Color = paintColor;
;  
    }
}
function paintEighteen15() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eighteen15Color;  document.getElementById("hex").innerHTML = eighteen15Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eighteen15").style.backgroundColor = paintColor;
     eighteen15Color = paintColor;
;  
    }
}
function paintEighteen16() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eighteen16Color;  document.getElementById("hex").innerHTML = eighteen16Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eighteen16").style.backgroundColor = paintColor;
     eighteen16Color = paintColor;
;  
    }
}
function paintEighteen17() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eighteen17Color;  document.getElementById("hex").innerHTML = eighteen17Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eighteen17").style.backgroundColor = paintColor;
     eighteen17Color = paintColor;
;  
    }
}
function paintEighteen18() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eighteen18Color;  document.getElementById("hex").innerHTML = eighteen18Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eighteen18").style.backgroundColor = paintColor;
     eighteen18Color = paintColor;
;  
    }
}
function paintEighteen19() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eighteen19Color;  document.getElementById("hex").innerHTML = eighteen19Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eighteen19").style.backgroundColor = paintColor;
     eighteen19Color = paintColor;
;  
    }
}
function paintEighteen20() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eighteen20Color;  document.getElementById("hex").innerHTML = eighteen20Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eighteen20").style.backgroundColor = paintColor;
     eighteen20Color = paintColor;
;  
    }
}

function paintEighteen21() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eighteen21Color;  document.getElementById("hex").innerHTML = eighteen21Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eighteen21").style.backgroundColor = paintColor;
     eighteen21Color = paintColor;
;  
    }
}
function paintEighteen22() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eighteen22Color;  document.getElementById("hex").innerHTML = eighteen22Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eighteen22").style.backgroundColor = paintColor;
     eighteen22Color = paintColor;
;  
    }
}
function paintEighteen23() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eighteen23Color;  document.getElementById("hex").innerHTML = eighteen23Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eighteen23").style.backgroundColor = paintColor;
     eighteen23Color = paintColor;
;  
    }
}
function paintEighteen24() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eighteen24Color;  document.getElementById("hex").innerHTML = eighteen24Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eighteen24").style.backgroundColor = paintColor;
     eighteen24Color = paintColor;
;  
    }
}
function paintEighteen25() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = eighteen25Color;  document.getElementById("hex").innerHTML = eighteen25Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("eighteen25").style.backgroundColor = paintColor;
     eighteen25Color = paintColor;
;  
    }
}

// Row 19

function paintNineteenOne() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineteenOneColor;  document.getElementById("hex").innerHTML = nineteenOneColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineteenOne").style.backgroundColor = paintColor;
     nineteenOneColor = paintColor;
;  
    }
}
function paintNineteenTwo() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineteenTwoColor;  document.getElementById("hex").innerHTML = nineteenTwoColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineteenTwo").style.backgroundColor = paintColor;
     nineteenTwoColor = paintColor;
;  
    }
}
function paintNineteenThree() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineteenThreeColor;  document.getElementById("hex").innerHTML = nineteenThreeColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineteenThree").style.backgroundColor = paintColor;
     nineteenThreeColor = paintColor;
;  
    }
}
function paintNineteenFour() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineteenFourColor;  document.getElementById("hex").innerHTML = nineteenFourColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineteenFour").style.backgroundColor = paintColor;
     nineteenFourColor = paintColor;
;  
    }
}
function paintNineteenFive() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineteenFiveColor;  document.getElementById("hex").innerHTML = nineteenFiveColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineteenFive").style.backgroundColor = paintColor;
     nineteenFiveColor = paintColor;
;  
    }
}
function paintNineteenSix() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineteenSixColor;  document.getElementById("hex").innerHTML = nineteenSixColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineteenSix").style.backgroundColor = paintColor;
     nineteenSixColor = paintColor;
;  
    }
}
function paintNineteenSeven() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineteenSevenColor;  document.getElementById("hex").innerHTML = nineteenSevenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineteenSeven").style.backgroundColor = paintColor;
     nineteenSevenColor = paintColor;
;  
    } 
}
function paintNineteenEight() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineteenEightColor;  document.getElementById("hex").innerHTML = nineteenEightColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineteenEight").style.backgroundColor = paintColor;
     nineteenEightColor = paintColor;
;  
    }
}
function paintNineteenNine() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineteenNineColor;  document.getElementById("hex").innerHTML = nineteenNineColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineteenNine").style.backgroundColor = paintColor;
     nineteenNineColor = paintColor;
;  
    }
}
function paintNineteenTen() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineteenTenColor;  document.getElementById("hex").innerHTML = nineteenTenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineteenTen").style.backgroundColor = paintColor;
     nineteenTenColor = paintColor;
;  
    }
}

function paintNineteen11() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineteen11Color;  document.getElementById("hex").innerHTML = nineteen11Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineteen11").style.backgroundColor = paintColor;
     nineteen11Color = paintColor;
;  
    }
}
function paintNineteen12() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineteen12Color;  document.getElementById("hex").innerHTML = nineteen12Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineteen12").style.backgroundColor = paintColor;
     nineteen12Color = paintColor;
;  
    }
}
function paintNineteen13() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineteen13Color;  document.getElementById("hex").innerHTML = nineteen13Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineteen13").style.backgroundColor = paintColor;
     nineteen13Color = paintColor;
;  
    }
}
function paintNineteen14() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineteen14Color;  document.getElementById("hex").innerHTML = nineteen14Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineteen14").style.backgroundColor = paintColor;
     nineteen14Color = paintColor;
;  
    }
}
function paintNineteen15() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineteen15Color;  document.getElementById("hex").innerHTML = nineteen15Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineteen15").style.backgroundColor = paintColor;
     nineteen15Color = paintColor;
;  
    }
}
function paintNineteen16() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineteen16Color;  document.getElementById("hex").innerHTML = nineteen16Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineteen16").style.backgroundColor = paintColor;
     nineteen16Color = paintColor;
;  
    }
}
function paintNineteen17() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineteen17Color;  document.getElementById("hex").innerHTML = nineteen17Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineteen17").style.backgroundColor = paintColor;
     nineteen17Color = paintColor;
;  
    }
}
function paintNineteen18() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineteen18Color;  document.getElementById("hex").innerHTML = nineteen18Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineteen18").style.backgroundColor = paintColor;
     nineteen18Color = paintColor;
;  
    }
}
function paintNineteen19() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineteen19Color;  document.getElementById("hex").innerHTML = nineteen19Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineteen19").style.backgroundColor = paintColor;
     nineteen19Color = paintColor;
;  
    }
}
function paintNineteen20() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineteen20Color;  document.getElementById("hex").innerHTML = nineteen20Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineteen20").style.backgroundColor = paintColor;
     nineteen20Color = paintColor;
;  
    }
}

function paintNineteen21() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineteen21Color;  document.getElementById("hex").innerHTML = nineteen21Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineteen21").style.backgroundColor = paintColor;
     nineteen21Color = paintColor;
;  
    }
}
function paintNineteen22() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineteen22Color;  document.getElementById("hex").innerHTML = nineteen22Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineteen22").style.backgroundColor = paintColor;
     nineteen22Color = paintColor;
;  
    }
}
function paintNineteen23() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineteen23Color;  document.getElementById("hex").innerHTML = nineteen23Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineteen23").style.backgroundColor = paintColor;
     nineteen23Color = paintColor;
;  
    }
}
function paintNineteen24() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineteen24Color;  document.getElementById("hex").innerHTML = nineteen24Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineteen24").style.backgroundColor = paintColor;
     nineteen24Color = paintColor;
;  
    }
}
function paintNineteen25() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = nineteen25Color;  document.getElementById("hex").innerHTML = nineteen25Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("nineteen25").style.backgroundColor = paintColor;
     nineteen25Color = paintColor;
;  
    }
}

// Row 20

function paintTwentyOne() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyOneColor;  document.getElementById("hex").innerHTML = twentyOneColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyOne").style.backgroundColor = paintColor;
     twentyOneColor = paintColor;
;  
    }
}
function paintTwentyTwo() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyTwoColor;  document.getElementById("hex").innerHTML = twentyTwoColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyTwo").style.backgroundColor = paintColor;
     twentyTwoColor = paintColor;
;  
    }
}
function paintTwentyThree() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyThreeColor;  document.getElementById("hex").innerHTML = twentyThreeColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyThree").style.backgroundColor = paintColor;
     twentyThreeColor = paintColor;
;  
    }
}
function paintTwentyFour() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFourColor;  document.getElementById("hex").innerHTML = twentyFourColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFour").style.backgroundColor = paintColor;
     twentyFourColor = paintColor;
;  
    }
}
function paintTwentyFive() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFiveColor;  document.getElementById("hex").innerHTML = twentyFiveColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFive").style.backgroundColor = paintColor;
     twentyFiveColor = paintColor;
;  
    }
}
function paintTwentySix() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentySixColor;  document.getElementById("hex").innerHTML = twentySixColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentySix").style.backgroundColor = paintColor;
     twentySixColor = paintColor;
;  
    }
}
function paintTwentySeven() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentySevenColor;  document.getElementById("hex").innerHTML = twentySevenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentySeven").style.backgroundColor = paintColor;
     twentySevenColor = paintColor;
;  
    } 
}
function paintTwentyEight() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyEightColor;  document.getElementById("hex").innerHTML = twentyEightColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyEight").style.backgroundColor = paintColor;
     twentyEightColor = paintColor;
;  
    }
}
function paintTwentyNine() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyNineColor;  document.getElementById("hex").innerHTML = twentyNineColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyNine").style.backgroundColor = paintColor;
     twentyNineColor = paintColor;
;  
    }
}
function paintTwentyTen() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyTenColor;  document.getElementById("hex").innerHTML = twentyTenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyTen").style.backgroundColor = paintColor;
     twentyTenColor = paintColor;
;  
    }
}

function paintTwenty11() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twenty11Color;  document.getElementById("hex").innerHTML = twenty11Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twenty11").style.backgroundColor = paintColor;
     twenty11Color = paintColor;
;  
    }
}
function paintTwenty12() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twenty12Color;  document.getElementById("hex").innerHTML = twenty12Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twenty12").style.backgroundColor = paintColor;
     twenty12Color = paintColor;
;  
    }
}
function paintTwenty13() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twenty13Color;  document.getElementById("hex").innerHTML = twenty13Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twenty13").style.backgroundColor = paintColor;
     twenty13Color = paintColor;
;  
    }
}
function paintTwenty14() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twenty14Color;  document.getElementById("hex").innerHTML = twenty14Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twenty14").style.backgroundColor = paintColor;
     twenty14Color = paintColor;
;  
    }
}
function paintTwenty15() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twenty15Color;  document.getElementById("hex").innerHTML = twenty15Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twenty15").style.backgroundColor = paintColor;
     twenty15Color = paintColor;
;  
    }
}
function paintTwenty16() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twenty16Color;  document.getElementById("hex").innerHTML = twenty16Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twenty16").style.backgroundColor = paintColor;
     twenty16Color = paintColor;
;  
    }
}
function paintTwenty17() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twenty17Color;  document.getElementById("hex").innerHTML = twenty17Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twenty17").style.backgroundColor = paintColor;
     twenty17Color = paintColor;
;  
    }
}
function paintTwenty18() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twenty18Color;  document.getElementById("hex").innerHTML = twenty18Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twenty18").style.backgroundColor = paintColor;
     twenty18Color = paintColor;
;  
    }
}
function paintTwenty19() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twenty19Color;  document.getElementById("hex").innerHTML = twenty19Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twenty19").style.backgroundColor = paintColor;
     twenty19Color = paintColor;
;  
    }
}
function paintTwenty20() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twenty20Color;  document.getElementById("hex").innerHTML = twenty20Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twenty20").style.backgroundColor = paintColor;
     twenty20Color = paintColor;
;  
    }
}

function paintTwenty21() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twenty21Color;  document.getElementById("hex").innerHTML = twenty21Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twenty21").style.backgroundColor = paintColor;
     twenty21Color = paintColor;
;  
    }
}
function paintTwenty22() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twenty22Color;  document.getElementById("hex").innerHTML = twenty22Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twenty22").style.backgroundColor = paintColor;
     twenty22Color = paintColor;
;  
    }
}
function paintTwenty23() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twenty23Color;  document.getElementById("hex").innerHTML = twenty23Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twenty23").style.backgroundColor = paintColor;
     twenty23Color = paintColor;
;  
    }
}
function paintTwenty24() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twenty24Color;  document.getElementById("hex").innerHTML = twenty24Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twenty24").style.backgroundColor = paintColor;
     twenty24Color = paintColor;
;  
    }
}
function paintTwenty25() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twenty25Color;  document.getElementById("hex").innerHTML = twenty25Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twenty25").style.backgroundColor = paintColor;
     twenty25Color = paintColor;
;  
    }
}

// Row 21

function paintTwentyOneOne() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyOneOneColor;  document.getElementById("hex").innerHTML = twentyOneOneColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyOneOne").style.backgroundColor = paintColor;
     twentyOneOneColor = paintColor;
;  
    }
}
function paintTwentyOneTwo() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyOneTwoColor;  document.getElementById("hex").innerHTML = twentyOneTwoColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyOneTwo").style.backgroundColor = paintColor;
     twentyOneTwoColor = paintColor;
;  
    }
}
function paintTwentyOneThree() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyOneThreeColor;  document.getElementById("hex").innerHTML = twentyOneThreeColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyOneThree").style.backgroundColor = paintColor;
     twentyOneThreeColor = paintColor;
;  
    }
}
function paintTwentyOneFour() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyOneFourColor;  document.getElementById("hex").innerHTML = twentyOneFourColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyOneFour").style.backgroundColor = paintColor;
     twentyOneFourColor = paintColor;
;  
    }
}
function paintTwentyOneFive() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyOneFiveColor;  document.getElementById("hex").innerHTML = twentyOneFiveColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyOneFive").style.backgroundColor = paintColor;
     twentyOneFiveColor = paintColor;
;  
    }
}
function paintTwentyOneSix() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyOneSixColor;  document.getElementById("hex").innerHTML = twentyOneSixColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyOneSix").style.backgroundColor = paintColor;
     twentyOneSixColor = paintColor;
;  
    }
}
function paintTwentyOneSeven() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyOneSevenColor;  document.getElementById("hex").innerHTML = twentyOneSevenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyOneSeven").style.backgroundColor = paintColor;
     twentyOneSevenColor = paintColor;
;  
    } 
}
function paintTwentyOneEight() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyOneEightColor;  document.getElementById("hex").innerHTML = twentyOneEightColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyOneEight").style.backgroundColor = paintColor;
     twentyOneEightColor = paintColor;
;  
    }
}
function paintTwentyOneNine() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyOneNineColor;  document.getElementById("hex").innerHTML = twentyOneNineColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyOneNine").style.backgroundColor = paintColor;
     twentyOneNineColor = paintColor;
;  
    }
}
function paintTwentyOneTen() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyOneTenColor;  document.getElementById("hex").innerHTML = twentyOneTenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyOneTen").style.backgroundColor = paintColor;
     twentyOneTenColor = paintColor;
;  
    }
}

function paintTwentyOne11() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyOne11Color;  document.getElementById("hex").innerHTML = twentyOne11Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyOne11").style.backgroundColor = paintColor;
     twentyOne11Color = paintColor;
;  
    }
}
function paintTwentyOne12() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyOne12Color;  document.getElementById("hex").innerHTML = twentyOne12Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyOne12").style.backgroundColor = paintColor;
     twentyOne12Color = paintColor;
;  
    }
}
function paintTwentyOne13() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyOne13Color;  document.getElementById("hex").innerHTML = twentyOne13Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyOne13").style.backgroundColor = paintColor;
     twentyOne13Color = paintColor;
;  
    }
}
function paintTwentyOne14() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyOne14Color;  document.getElementById("hex").innerHTML = twentyOne14Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyOne14").style.backgroundColor = paintColor;
     twentyOne14Color = paintColor;
;  
    }
}
function paintTwentyOne15() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyOne15Color;  document.getElementById("hex").innerHTML = twentyOne15Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyOne15").style.backgroundColor = paintColor;
     twentyOne15Color = paintColor;
;  
    }
}
function paintTwentyOne16() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyOne16Color;  document.getElementById("hex").innerHTML = twentyOne16Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyOne16").style.backgroundColor = paintColor;
     twentyOne16Color = paintColor;
;  
    }
}
function paintTwentyOne17() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyOne17Color;  document.getElementById("hex").innerHTML = twentyOne17Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyOne17").style.backgroundColor = paintColor;
     twentyOne17Color = paintColor;
;  
    }
}
function paintTwentyOne18() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyOne18Color;  document.getElementById("hex").innerHTML = twentyOne18Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyOne18").style.backgroundColor = paintColor;
     twentyOne18Color = paintColor;
;  
    }
}
function paintTwentyOne19() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyOne19Color;  document.getElementById("hex").innerHTML = twentyOne19Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyOne19").style.backgroundColor = paintColor;
     twentyOne19Color = paintColor;
;  
    }
}
function paintTwentyOne20() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyOne20Color;  document.getElementById("hex").innerHTML = twentyOne20Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyOne20").style.backgroundColor = paintColor;
     twentyOne20Color = paintColor;
;  
    }
}

function paintTwentyOne21() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyOne21Color;  document.getElementById("hex").innerHTML = twentyOne21Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyOne21").style.backgroundColor = paintColor;
     twentyOne21Color = paintColor;
;  
    }
}
function paintTwentyOne22() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyOne22Color;  document.getElementById("hex").innerHTML = twentyOne22Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyOne22").style.backgroundColor = paintColor;
     twentyOne22Color = paintColor;
;  
    }
}
function paintTwentyOne23() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyOne23Color;  document.getElementById("hex").innerHTML = twentyOne23Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyOne23").style.backgroundColor = paintColor;
     twentyOne23Color = paintColor;
;  
    }
}
function paintTwentyOne24() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyOne24Color;  document.getElementById("hex").innerHTML = twentyOne24Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyOne24").style.backgroundColor = paintColor;
     twentyOne24Color = paintColor;
;  
    }
}
function paintTwentyOne25() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyOne25Color;  document.getElementById("hex").innerHTML = twentyOne25Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyOne25").style.backgroundColor = paintColor;
     twentyOne25Color = paintColor;
;  
    }
}

// Row 22

function paintTwentyTwoOne() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyTwoOneColor;  document.getElementById("hex").innerHTML = twentyTwoOneColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyTwoOne").style.backgroundColor = paintColor;
     twentyTwoOneColor = paintColor;
;  
    }
}
function paintTwentyTwoTwo() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyTwoTwoColor;  document.getElementById("hex").innerHTML = twentyTwoTwoColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyTwoTwo").style.backgroundColor = paintColor;
     twentyTwoTwoColor = paintColor;
;  
    }
}
function paintTwentyTwoThree() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyTwoThreeColor;  document.getElementById("hex").innerHTML = twentyTwoThreeColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyTwoThree").style.backgroundColor = paintColor;
     twentyTwoThreeColor = paintColor;
;  
    }
}
function paintTwentyTwoFour() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyTwoFourColor;  document.getElementById("hex").innerHTML = twentyTwoFourColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyTwoFour").style.backgroundColor = paintColor;
     twentyTwoFourColor = paintColor;
;  
    }
}
function paintTwentyTwoFive() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyTwoFiveColor;  document.getElementById("hex").innerHTML = twentyTwoFiveColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyTwoFive").style.backgroundColor = paintColor;
     twentyTwoFiveColor = paintColor;
;  
    }
}
function paintTwentyTwoSix() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyTwoSixColor;  document.getElementById("hex").innerHTML = twentyTwoSixColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyTwoSix").style.backgroundColor = paintColor;
     twentyTwoSixColor = paintColor;
;  
    }
}
function paintTwentyTwoSeven() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyTwoSevenColor;  document.getElementById("hex").innerHTML = twentyTwoSevenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyTwoSeven").style.backgroundColor = paintColor;
     twentyTwoSevenColor = paintColor;
;  
    } 
}
function paintTwentyTwoEight() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyTwoEightColor;  document.getElementById("hex").innerHTML = twentyTwoEightColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyTwoEight").style.backgroundColor = paintColor;
     twentyTwoEightColor = paintColor;
;  
    }
}
function paintTwentyTwoNine() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyTwoNineColor;  document.getElementById("hex").innerHTML = twentyTwoNineColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyTwoNine").style.backgroundColor = paintColor;
     twentyTwoNineColor = paintColor;
;  
    }
}
function paintTwentyTwoTen() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyTwoTenColor;  document.getElementById("hex").innerHTML = twentyTwoTenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyTwoTen").style.backgroundColor = paintColor;
     twentyTwoTenColor = paintColor;
;  
    }
}

function paintTwentyTwo11() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyTwo11Color;  document.getElementById("hex").innerHTML = twentyTwo11Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyTwo11").style.backgroundColor = paintColor;
     twentyTwo11Color = paintColor;
;  
    }
}
function paintTwentyTwo12() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyTwo12Color;  document.getElementById("hex").innerHTML = twentyTwo12Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyTwo12").style.backgroundColor = paintColor;
     twentyTwo12Color = paintColor;
;  
    }
}
function paintTwentyTwo13() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyTwo13Color;  document.getElementById("hex").innerHTML = twentyTwo13Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyTwo13").style.backgroundColor = paintColor;
     twentyTwo13Color = paintColor;
;  
    }
}
function paintTwentyTwo14() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyTwo14Color;  document.getElementById("hex").innerHTML = twentyTwo14Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyTwo14").style.backgroundColor = paintColor;
     twentyTwo14Color = paintColor;
;  
    }
}
function paintTwentyTwo15() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyTwo15Color;  document.getElementById("hex").innerHTML = twentyTwo15Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyTwo15").style.backgroundColor = paintColor;
     twentyTwo15Color = paintColor;
;  
    }
}
function paintTwentyTwo16() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyTwo16Color;  document.getElementById("hex").innerHTML = twentyTwo16Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyTwo16").style.backgroundColor = paintColor;
     twentyTwo16Color = paintColor;
;  
    }
}
function paintTwentyTwo17() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyTwo17Color;  document.getElementById("hex").innerHTML = twentyTwo17Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyTwo17").style.backgroundColor = paintColor;
     twentyTwo17Color = paintColor;
;  
    }
}
function paintTwentyTwo18() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyTwo18Color;  document.getElementById("hex").innerHTML = twentyTwo18Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyTwo18").style.backgroundColor = paintColor;
     twentyTwo18Color = paintColor;
;  
    }
}
function paintTwentyTwo19() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyTwo19Color;  document.getElementById("hex").innerHTML = twentyTwo19Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyTwo19").style.backgroundColor = paintColor;
     twentyTwo19Color = paintColor;
;  
    }
}
function paintTwentyTwo20() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyTwo20Color;  document.getElementById("hex").innerHTML = twentyTwo20Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyTwo20").style.backgroundColor = paintColor;
     twentyTwo20Color = paintColor;
;  
    }
}

function paintTwentyTwo21() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyTwo21Color;  document.getElementById("hex").innerHTML = twentyTwo21Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyTwo21").style.backgroundColor = paintColor;
     twentyTwo21Color = paintColor;
;  
    }
}
function paintTwentyTwo22() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyTwo22Color;  document.getElementById("hex").innerHTML = twentyTwo22Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyTwo22").style.backgroundColor = paintColor;
     twentyTwo22Color = paintColor;
;  
    }
}
function paintTwentyTwo23() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyTwo23Color;  document.getElementById("hex").innerHTML = twentyTwo23Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyTwo23").style.backgroundColor = paintColor;
     twentyTwo23Color = paintColor;
;  
    }
}
function paintTwentyTwo24() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyTwo24Color;  document.getElementById("hex").innerHTML = twentyTwo24Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyTwo24").style.backgroundColor = paintColor;
     twentyTwo24Color = paintColor;
;  
    }
}
function paintTwentyTwo25() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyTwo25Color;  document.getElementById("hex").innerHTML = twentyTwo25Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyTwo25").style.backgroundColor = paintColor;
     twentyTwo25Color = paintColor;
;  
    }
}

// Row 23

function paintTwentyThreeOne() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyThreeOneColor;  document.getElementById("hex").innerHTML = twentyThreeOneColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyThreeOne").style.backgroundColor = paintColor;
     twentyThreeOneColor = paintColor;
;  
    }
}
function paintTwentyThreeTwo() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyThreeTwoColor;  document.getElementById("hex").innerHTML = twentyThreeTwoColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyThreeTwo").style.backgroundColor = paintColor;
     twentyThreeTwoColor = paintColor;
;  
    }
}
function paintTwentyThreeThree() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyThreeThreeColor;  document.getElementById("hex").innerHTML = twentyThreeThreeColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyThreeThree").style.backgroundColor = paintColor;
     twentyThreeThreeColor = paintColor;
;  
    }
}
function paintTwentyThreeFour() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyThreeFourColor;  document.getElementById("hex").innerHTML = twentyThreeFourColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyThreeFour").style.backgroundColor = paintColor;
     twentyThreeFourColor = paintColor;
;  
    }
}
function paintTwentyThreeFive() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyThreeFiveColor;  document.getElementById("hex").innerHTML = twentyThreeFiveColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyThreeFive").style.backgroundColor = paintColor;
     twentyThreeFiveColor = paintColor;
;  
    }
}
function paintTwentyThreeSix() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyThreeSixColor;  document.getElementById("hex").innerHTML = twentyThreeSixColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyThreeSix").style.backgroundColor = paintColor;
     twentyThreeSixColor = paintColor;
;  
    }
}
function paintTwentyThreeSeven() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyThreeSevenColor;  document.getElementById("hex").innerHTML = twentyThreeSevenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyThreeSeven").style.backgroundColor = paintColor;
     twentyThreeSevenColor = paintColor;
;  
    } 
}
function paintTwentyThreeEight() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyThreeEightColor;  document.getElementById("hex").innerHTML = twentyThreeEightColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyThreeEight").style.backgroundColor = paintColor;
     twentyThreeEightColor = paintColor;
;  
    }
}
function paintTwentyThreeNine() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyThreeNineColor;  document.getElementById("hex").innerHTML = twentyThreeNineColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyThreeNine").style.backgroundColor = paintColor;
     twentyThreeNineColor = paintColor;
;  
    }
}
function paintTwentyThreeTen() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyThreeTenColor;  document.getElementById("hex").innerHTML = twentyThreeTenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyThreeTen").style.backgroundColor = paintColor;
     twentyThreeTenColor = paintColor;
;  
    }
}

function paintTwentyThree11() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyThree11Color;  document.getElementById("hex").innerHTML = twentyThree11Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyThree11").style.backgroundColor = paintColor;
     twentyThree11Color = paintColor;
;  
    }
}
function paintTwentyThree12() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyThree12Color;  document.getElementById("hex").innerHTML = twentyThree12Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyThree12").style.backgroundColor = paintColor;
     twentyThree12Color = paintColor;
;  
    }
}
function paintTwentyThree13() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyThree13Color;  document.getElementById("hex").innerHTML = twentyThree13Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyThree13").style.backgroundColor = paintColor;
     twentyThree13Color = paintColor;
;  
    }
}
function paintTwentyThree14() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyThree14Color;  document.getElementById("hex").innerHTML = twentyThree14Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyThree14").style.backgroundColor = paintColor;
     twentyThree14Color = paintColor;
;  
    }
}
function paintTwentyThree15() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyThree15Color;  document.getElementById("hex").innerHTML = twentyThree15Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyThree15").style.backgroundColor = paintColor;
     twentyThree15Color = paintColor;
;  
    }
}
function paintTwentyThree16() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyThree16Color;  document.getElementById("hex").innerHTML = twentyThree16Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyThree16").style.backgroundColor = paintColor;
     twentyThree16Color = paintColor;
;  
    }
}
function paintTwentyThree17() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyThree17Color;  document.getElementById("hex").innerHTML = twentyThree17Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyThree17").style.backgroundColor = paintColor;
     twentyThree17Color = paintColor;
;  
    }
}
function paintTwentyThree18() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyThree18Color;  document.getElementById("hex").innerHTML = twentyThree18Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyThree18").style.backgroundColor = paintColor;
     twentyThree18Color = paintColor;
;  
    }
}
function paintTwentyThree19() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyThree19Color;  document.getElementById("hex").innerHTML = twentyThree19Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyThree19").style.backgroundColor = paintColor;
     twentyThree19Color = paintColor;
;  
    }
}
function paintTwentyThree20() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyThree20Color;  document.getElementById("hex").innerHTML = twentyThree20Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyThree20").style.backgroundColor = paintColor;
     twentyThree20Color = paintColor;
;  
    }
}

function paintTwentyThree21() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyThree21Color;  document.getElementById("hex").innerHTML = twentyThree21Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyThree21").style.backgroundColor = paintColor;
     twentyThree21Color = paintColor;
;  
    }
}
function paintTwentyThree22() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyThree22Color;  document.getElementById("hex").innerHTML = twentyThree22Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyThree22").style.backgroundColor = paintColor;
     twentyThree22Color = paintColor;
;  
    }
}
function paintTwentyThree23() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyThree23Color;  document.getElementById("hex").innerHTML = twentyThree23Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyThree23").style.backgroundColor = paintColor;
     twentyThree23Color = paintColor;
;  
    }
}
function paintTwentyThree24() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyThree24Color;  document.getElementById("hex").innerHTML = twentyThree24Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyThree24").style.backgroundColor = paintColor;
     twentyThree24Color = paintColor;
;  
    }
}
function paintTwentyThree25() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyThree25Color;  document.getElementById("hex").innerHTML = twentyThree25Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyThree25").style.backgroundColor = paintColor;
     twentyThree25Color = paintColor;
;  
    }
}

// Row 24

function paintTwentyFourOne() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFourOneColor;  document.getElementById("hex").innerHTML = twentyFourOneColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFourOne").style.backgroundColor = paintColor;
     twentyFourOneColor = paintColor;
;  
    }
}
function paintTwentyFourTwo() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFourTwoColor;  document.getElementById("hex").innerHTML = twentyFourTwoColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFourTwo").style.backgroundColor = paintColor;
     twentyFourTwoColor = paintColor;
;  
    }
}
function paintTwentyFourThree() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFourThreeColor;  document.getElementById("hex").innerHTML = twentyFourThreeColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFourThree").style.backgroundColor = paintColor;
     twentyFourThreeColor = paintColor;
;  
    }
}
function paintTwentyFourFour() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFourFourColor;  document.getElementById("hex").innerHTML = twentyFourFourColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFourFour").style.backgroundColor = paintColor;
     twentyFourFourColor = paintColor;
;  
    }
}
function paintTwentyFourFive() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFourFiveColor;  document.getElementById("hex").innerHTML = twentyFourFiveColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFourFive").style.backgroundColor = paintColor;
     twentyFourFiveColor = paintColor;
;  
    }
}
function paintTwentyFourSix() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFourSixColor;  document.getElementById("hex").innerHTML = twentyFourSixColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFourSix").style.backgroundColor = paintColor;
     twentyFourSixColor = paintColor;
;  
    }
}
function paintTwentyFourSeven() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFourSevenColor;  document.getElementById("hex").innerHTML = twentyFourSevenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFourSeven").style.backgroundColor = paintColor;
     twentyFourSevenColor = paintColor;
;  
    } 
}
function paintTwentyFourEight() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFourEightColor;  document.getElementById("hex").innerHTML = twentyFourEightColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFourEight").style.backgroundColor = paintColor;
     twentyFourEightColor = paintColor;
;  
    }
}
function paintTwentyFourNine() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFourNineColor;  document.getElementById("hex").innerHTML = twentyFourNineColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFourNine").style.backgroundColor = paintColor;
     twentyFourNineColor = paintColor;
;  
    }
}
function paintTwentyFourTen() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFourTenColor;  document.getElementById("hex").innerHTML = twentyFourTenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFourTen").style.backgroundColor = paintColor;
     twentyFourTenColor = paintColor;
;  
    }
}

function paintTwentyFour11() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFour11Color;  document.getElementById("hex").innerHTML = twentyFour11Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFour11").style.backgroundColor = paintColor;
     twentyFour11Color = paintColor;
;  
    }
}
function paintTwentyFour12() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFour12Color;  document.getElementById("hex").innerHTML = twentyFour12Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFour12").style.backgroundColor = paintColor;
     twentyFour12Color = paintColor;
;  
    }
}
function paintTwentyFour13() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFour13Color;  document.getElementById("hex").innerHTML = twentyFour13Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFour13").style.backgroundColor = paintColor;
     twentyFour13Color = paintColor;
;  
    }
}
function paintTwentyFour14() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFour14Color;  document.getElementById("hex").innerHTML = twentyFour14Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFour14").style.backgroundColor = paintColor;
     twentyFour14Color = paintColor;
;  
    }
}
function paintTwentyFour15() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFour15Color;  document.getElementById("hex").innerHTML = twentyFour15Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFour15").style.backgroundColor = paintColor;
     twentyFour15Color = paintColor;
;  
    }
}
function paintTwentyFour16() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFour16Color;  document.getElementById("hex").innerHTML = twentyFour16Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFour16").style.backgroundColor = paintColor;
     twentyFour16Color = paintColor;
;  
    }
}
function paintTwentyFour17() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFour17Color;  document.getElementById("hex").innerHTML = twentyFour17Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFour17").style.backgroundColor = paintColor;
     twentyFour17Color = paintColor;
;  
    }
}
function paintTwentyFour18() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFour18Color;  document.getElementById("hex").innerHTML = twentyFour18Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFour18").style.backgroundColor = paintColor;
     twentyFour18Color = paintColor;
;  
    }
}
function paintTwentyFour19() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFour19Color;  document.getElementById("hex").innerHTML = twentyFour19Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFour19").style.backgroundColor = paintColor;
     twentyFour19Color = paintColor;
;  
    }
}
function paintTwentyFour20() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFour20Color;  document.getElementById("hex").innerHTML = twentyFour20Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFour20").style.backgroundColor = paintColor;
     twentyFour20Color = paintColor;
;  
    }
}

function paintTwentyFour21() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFour21Color;  document.getElementById("hex").innerHTML = twentyFour21Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFour21").style.backgroundColor = paintColor;
     twentyFour21Color = paintColor;
;  
    }
}
function paintTwentyFour22() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFour22Color;  document.getElementById("hex").innerHTML = twentyFour22Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFour22").style.backgroundColor = paintColor;
     twentyFour22Color = paintColor;
;  
    }
}
function paintTwentyFour23() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFour23Color;  document.getElementById("hex").innerHTML = twentyFour23Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFour23").style.backgroundColor = paintColor;
     twentyFour23Color = paintColor;
;  
    }
}
function paintTwentyFour24() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFour24Color;  document.getElementById("hex").innerHTML = twentyFour24Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFour24").style.backgroundColor = paintColor;
     twentyFour24Color = paintColor;
;  
    }
}
function paintTwentyFour25() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFour25Color;  document.getElementById("hex").innerHTML = twentyFour25Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFour25").style.backgroundColor = paintColor;
     twentyFour25Color = paintColor;
;  
    }
}

// Row 25

function paintTwentyFiveOne() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFiveOneColor;  document.getElementById("hex").innerHTML = twentyFiveOneColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFiveOne").style.backgroundColor = paintColor;
     twentyFiveOneColor = paintColor;
;  
    }
}
function paintTwentyFiveTwo() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFiveTwoColor;  document.getElementById("hex").innerHTML = twentyFiveTwoColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFiveTwo").style.backgroundColor = paintColor;
     twentyFiveTwoColor = paintColor;
;  
    }
}
function paintTwentyFiveThree() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFiveThreeColor;  document.getElementById("hex").innerHTML = twentyFiveThreeColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFiveThree").style.backgroundColor = paintColor;
     twentyFiveThreeColor = paintColor;
;  
    }
}
function paintTwentyFiveFour() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFiveFourColor;  document.getElementById("hex").innerHTML = twentyFiveFourColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFiveFour").style.backgroundColor = paintColor;
     twentyFiveFourColor = paintColor;
;  
    }
}
function paintTwentyFiveFive() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFiveFiveColor;  document.getElementById("hex").innerHTML = twentyFiveFiveColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFiveFive").style.backgroundColor = paintColor;
     twentyFiveFiveColor = paintColor;
;  
    }
}
function paintTwentyFiveSix() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFiveSixColor;  document.getElementById("hex").innerHTML = twentyFiveSixColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFiveSix").style.backgroundColor = paintColor;
     twentyFiveSixColor = paintColor;
;  
    }
}
function paintTwentyFiveSeven() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFiveSevenColor;  document.getElementById("hex").innerHTML = twentyFiveSevenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFiveSeven").style.backgroundColor = paintColor;
     twentyFiveSevenColor = paintColor;
;  
    } 
}
function paintTwentyFiveEight() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFiveEightColor;  document.getElementById("hex").innerHTML = twentyFiveEightColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFiveEight").style.backgroundColor = paintColor;
     twentyFiveEightColor = paintColor;
;  
    }
}
function paintTwentyFiveNine() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFiveNineColor;  document.getElementById("hex").innerHTML = twentyFiveNineColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFiveNine").style.backgroundColor = paintColor;
     twentyFiveNineColor = paintColor;
;  
    }
}
function paintTwentyFiveTen() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFiveTenColor;  document.getElementById("hex").innerHTML = twentyFiveTenColor;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFiveTen").style.backgroundColor = paintColor;
     twentyFiveTenColor = paintColor;
;  
    }
}

function paintTwentyFive11() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFive11Color;  document.getElementById("hex").innerHTML = twentyFive11Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFive11").style.backgroundColor = paintColor;
     twentyFive11Color = paintColor;
;  
    }
}
function paintTwentyFive12() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFive12Color;  document.getElementById("hex").innerHTML = twentyFive12Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFive12").style.backgroundColor = paintColor;
     twentyFive12Color = paintColor;
;  
    }
}
function paintTwentyFive13() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFive13Color;  document.getElementById("hex").innerHTML = twentyFive13Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFive13").style.backgroundColor = paintColor;
     twentyFive13Color = paintColor;
;  
    }
}
function paintTwentyFive14() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFive14Color;  document.getElementById("hex").innerHTML = twentyFive14Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFive14").style.backgroundColor = paintColor;
     twentyFive14Color = paintColor;
;  
    }
}
function paintTwentyFive15() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFive15Color;  document.getElementById("hex").innerHTML = twentyFive15Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFive15").style.backgroundColor = paintColor;
     twentyFive15Color = paintColor;
;  
    }
}
function paintTwentyFive16() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFive16Color;  document.getElementById("hex").innerHTML = twentyFive16Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFive16").style.backgroundColor = paintColor;
     twentyFive16Color = paintColor;
;  
    }
}
function paintTwentyFive17() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFive17Color;  document.getElementById("hex").innerHTML = twentyFive17Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFive17").style.backgroundColor = paintColor;
     twentyFive17Color = paintColor;
;  
    }
}
function paintTwentyFive18() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFive18Color;  document.getElementById("hex").innerHTML = twentyFive18Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFive18").style.backgroundColor = paintColor;
     twentyFive18Color = paintColor;
;  
    }
}
function paintTwentyFive19() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFive19Color;  document.getElementById("hex").innerHTML = twentyFive19Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFive19").style.backgroundColor = paintColor;
     twentyFive19Color = paintColor;
;  
    }
}
function paintTwentyFive20() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFive20Color;  document.getElementById("hex").innerHTML = twentyFive20Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFive20").style.backgroundColor = paintColor;
     twentyFive20Color = paintColor;
;  
    }
}

function paintTwentyFive21() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFive21Color;  document.getElementById("hex").innerHTML = twentyFive21Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFive21").style.backgroundColor = paintColor;
     twentyFive21Color = paintColor;
;  
    }
}
function paintTwentyFive22() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFive22Color;  document.getElementById("hex").innerHTML = twentyFive22Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFive22").style.backgroundColor = paintColor;
     twentyFive22Color = paintColor;
;  
    }
}
function paintTwentyFive23() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFive23Color;  document.getElementById("hex").innerHTML = twentyFive23Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFive23").style.backgroundColor = paintColor;
     twentyFive23Color = paintColor;
;  
    }
}
function paintTwentyFive24() {
  if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFive24Color;  document.getElementById("hex").innerHTML = twentyFive24Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFive24").style.backgroundColor = paintColor;
     twentyFive24Color = paintColor;
;  
    }
}
function paintTwentyFive25() {
 if (dropCell > 0) {
   previewCell = document.getElementById("eyeCell");
  previewCell.style.backgroundColor = twentyFive25Color;  document.getElementById("hex").innerHTML = twentyFive25Color;
  }
  else{   document.getElementById("hex").innerHTML = "";
  activeCell = document.getElementById("twentyFive25").style.backgroundColor = paintColor;
     twentyFive25Color = paintColor;
;  
    }
}

$( document ).ready(function() {
   

$('#snap').click(function() {
  $("#kontainer").css('borderStyle', 'hidden');
  // $("td").css('borderStyle', 'hidden');
  html2canvas($('#kontainer'),{
    onrendered: function(canvas) {  
      
      $('#test').attr('href', canvas.toDataURL("image/png"));
      $('#test').attr('download', 'PixelArt.png');
      $('#test')[0].click();
//       use html2canvas to grab the body content after it has been rendered, and use jquery to save the body content as a png.
      $("#kontainer").css('border', '5px solid silver');
      // $("td").css('border', '2px solid whitesmoke');
    }
  });
   });

});