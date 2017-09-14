var classifyTriangle = function(side1, side2, side3) {
  if (checkIsTriangle(side1, side2, side3)) {
    if(checkIsEquilateral(side1, side2, side3)) {
      return "equilateral";
    } else if (checkIsIsosceles(side1, side2, side3)) {
      return "isosceles";
    } else {
      return "scalene";
    }
  } else {
    return "non";
  }
};



var checkIsTriangle = function(side1, side2, side3) {
  if (side1 === 0 || side2 === 0 || side3 === 0) {
    return false;
  }
  if (side1 + side2 < side3) {
    return false;
  }
  else if (side2 + side3 < side1) {
    return false;
  }
  else if (side1 + side3 < side2) {
    return false;
  } else {
    return true;
  }
};

var checkIsEquilateral = function(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    return true;
  } else {
    return false;
  }
};

var checkIsIsosceles = function(side1, side2, side3) {
  if (side1 === side2 && side2 !== side3) {
    return true;
  }
  else if (side1 === side3 && side2 !== side3) {
    return true;
  }
  else if (side2 === side3 && side1 !== side3) {
    return true;
  } else {
    return false;
  }
};


$(document).ready(function() {
  $("#triangle-data").submit(function(event) {
    event.preventDefault();

    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());

    alert("Your triangle is a " + classifyTriangle(side1, side2, side3) + " triangle.");

  });
});
