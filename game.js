function randomNumber() {
  var num1 = Math.floor(Math.random() * 6 + 1);
  var num2 = Math.floor(Math.random() * 6 + 1);
  return [num1, num2];
}

function rollClicked() {
  $(".role").addClass("pressed");
  setTimeout(function() {
    $(".role").removeClass("pressed");
  }, 100);
  var numbers = randomNumber();
  if (numbers[0] > numbers[1]) {
    $('.title').text($(".player1").text() + " wins");
  } else if (numbers[0] < numbers[1]) {
    $('.title').text($(".player2").text() + " wins");
  } else {
    $('.title').text("Draw");
  }

  $('.first').attr("src", "images/dice" + numbers[0] + ".png");
  $('.second').attr("src", "images/dice" + numbers[1] + ".png");
}

function promptBox1() {
  $(".firstname").addClass("pressed");
  setTimeout(function() {
    $(".firstname").removeClass("pressed");
  }, 100);
  setTimeout(function() {
    var name = prompt("Change Player 1 Name","Player 1");
    $(".player1").html(name);
  }, 200);
}


function promptBox2() {
  $(".secondname").addClass("pressed");
  setTimeout(function() {
    $(".secondname").removeClass("pressed");
  }, 100);
  setTimeout(function() {
    var name = prompt("Change Player 2 Name","Player 2");
    $(".player2").html(name);
  }, 200);

}
