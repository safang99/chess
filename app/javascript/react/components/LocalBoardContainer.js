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
  var board = ChessBoard('board', cfg);
  var game = new Chess();
  });
  return(
    <h1>Local Game</h1>
  )
}

export default LocalBoardContainer
