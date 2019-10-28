import React from 'react';
import Chess from 'chess.js'

const LocalBoardContainer = (props) => {

  $(function() {
  var cfg = {
    pieceTheme: 'https://koblenski.github.io/javascript/chessboardjs-0.3.0/img/chesspieces/wikipedia/{piece}.png',
    position: 'start',
    draggable: true,
    dropOffBoard: 'snapback'
  };
  var board = ChessBoard('board5', cfg);
  var game = new Chess();

  var pgn = '1.e4 e5 2.Nf3 Nf6 3.Nc3 d5 4.exd5 Nxd5 5.Bc4 Nf4 6.O-O e4 7.Re1 Kd7 8.Rxe4 Qg5 9.Nxg5 f6 10.Qg4+ Ne6 11.Qxe6+ Kd8 12.Qe8#  1-0';
  game.load_pgn(pgn);
  $('#pgn5').html(pgn);

  var history = game.history();
  game.reset();
  var i = 0;

  $('#nextBtn5').on('click', function() {
    game.move(history[i]);
    board.position(game.fen());
    i += 1;
    if (i > history.length) {
      i = history.length;
    }
  });

  $('#prevBtn5').on('click', function() {
    game.undo();
    board.position(game.fen());
    i -= 1;
    if (i < 0) {
      i = 0;
    }
  });

  $('#startPositionBtn5').on('click', function() {
     game.reset();
     board.start();
     i = 0;
   });

  $('#endPositionBtn5').on('click', function() {
      game.load_pgn(pgn);
      board.position(game.fen());
      i = history.length;
    });
  });
  return(
    <h1>Local Game</h1>
  )
}

export default LocalBoardContainer
