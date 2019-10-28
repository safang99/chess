import React from 'react'

export const App = (props) => {

  $(function() {
    var board2 = Chessboard('board2', {
    draggable: true,
    pieceTheme: 'https://koblenski.github.io/javascript/chessboardjs-0.3.0/img/chesspieces/wikipedia/{piece}.png',
    dropOffBoard: 'trash',
    sparePieces: true,
    position: 'start'
  })
debugger
  $('#startBtn').on('click', board2.start)
  $('#clearBtn').on('click', board2.clear)
})
  return (<h1>Make It So React</h1>)
}

export default App
