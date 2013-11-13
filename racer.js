var player1count = 1
var player2count = 1



function winning() {
  if (player1count > player2count) {
    $('#player1_strip td').css('border', 'solid green')
    $('#player2_strip td').css('border', 'solid red')
  }
  if (player1count < player2count) {
    $('#player1_strip td').css('border', 'solid red')
    $('#player2_strip td').css('border', 'solid green')
  }
  if (player1count === player2count) {
    $('#player1_strip td').css('border', 'solid black')
    $('#player2_strip td').css('border', 'solid black')
  }
}

function winner() {
    if ($('#player1_strip').children().length === player1count) {
      console.log('Player1 won!')
      $(document).unbind('keyup')
    }
    if ($('#player2_strip').children().length === player2count) {
      console.log('Player2 won!')
      $(document).unbind('keyup')
    }
}

function advance_player_position(player){
  if (player === 'player1') {
    $('#player1_strip .active').removeClass('active').next().addClass('active')
    player1count += 1

  }
  else {
    $('#player2_strip .active').removeClass('active').next().addClass('active')
    player2count += 1
  }
}

function movePlayers(e) {
  if (String.fromCharCode(e.keyCode) === 'A') {
    advance_player_position('player1')
  }
  if (String.fromCharCode(e.keyCode) === 'M') {
    advance_player_position('player2')
  }
  winner()
  winning()
}

$(document).ready(function() {
  $(document).on('keyup', movePlayers)
});
