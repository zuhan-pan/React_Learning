import { useState } from 'react';

import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winningCombinations';
import GameOver from './components/GameOver';

const INITIAL_GAMEBOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const INITIAL_PLAYERS = {
  X: 'Player 1',
  O: 'Player 2',
};

function deriveActivePlayer(game) {
  let curActivePlayer = 'X';
  if (game[0]?.player === 'X') {
    curActivePlayer = 'O';
  }
  return curActivePlayer;
}

function deriveWinner(gameBoard, players) {
  let winner = undefined;
  WINNING_COMBINATIONS.forEach(combination => {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  });
  return winner;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAMEBOARD.map(array => [...array])];
  for (const turn of gameTurns) {
    gameTurns;
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(INITIAL_PLAYERS);

  let activePlayer = deriveActivePlayer(gameTurns);
  let gameBoard = deriveGameBoard(gameTurns);
  let winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      const curActivePlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: curActivePlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlerPlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => {
      return { ...prevPlayers, [symbol]: newName };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={INITIAL_PLAYERS.X}
            symbol="X"
            isActive={activePlayer === 'X'}
            onChangeName={handlerPlayerNameChange}
          />
          <Player
            initialName={INITIAL_PLAYERS.O}
            symbol="O"
            isActive={activePlayer === 'O'}
            onChangeName={handlerPlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
