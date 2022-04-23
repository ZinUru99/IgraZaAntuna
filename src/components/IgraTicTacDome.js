// Importing the CSS for the board
import "./IgraTicTacDome.css";
  
// Importing the useState hook, useEffect hook and useRef hook
import { useState, useEffect, useRef } from "react";
  
const Board = ({username }) => {
     // Creating a reset state, which indicates whether 
    // the game should be reset or not
    const [reset, setReset] = useState(false);
  
    // Creating a winner state, which indicates
    // the current winner
    const [winner, setWinner] = useState('');

    // Creating a turn state, which indicates the current turn
    const [turn, setTurn] = useState(0);
  
    // Creating a data state, which contains the 
    // current picture of the board
    const [data, setData] = useState(['', '', '', '', '', 
        '', '', '', ''])
  
    // Creating a reference for the board
    const boardRef = useRef(null);
  
    // Function to draw on the board
    const draw = (event, index) => {
        // Draws only if the position is not taken 
        // and winner is not decided yet
        if (data[index - 1] === '' && winner==="" && turn===0) {
  
            // Draws X if it's player 1's turn else draws O
           // const current = turn === 0 ? "X" : "O"
  
            // Updating the data state
            data[index - 1] = "X";
  
            //Drawing on the board
            event.target.innerText = "X";
  
            // Switching the turn
            setTurn(turn === 0 ? 1 : 0)

        }
    }


    // UseEffect hook used to reset the board whenever 
    // a winner is decided
    useEffect(() => {
  
        // Clearing the data state
        setData(['', '', '', '', '', '', '', '', '']);
  
        // Getting all the children(cells) of the board
        const cells = boardRef.current.children
  
        // Clearing out the board
        for (let i = 0; i < 9; i++) {
            cells[i].innerText = '';
        }
  
        // Resetting the turn to player 0
        setTurn(0);
  
        // Resetting the winner
        setWinner('');
        setReset(false);
    }, [reset, setReset, setWinner])
  
  
    // useEffect hook used to check for a winner
    useEffect(() => {
  
        // Checks for the win condition in rows
        const checkRow = () => {
            let ans = false;
            for (let i = 0; i < 9; i += 3) {
                ans |= (data[i] === data[i + 1] && 
                data[i] === data[i + 2] && 
                data[i] !== '')
            }
            return ans;
        }
  
        // Checks for the win condition in cols
        const checkCol = () => {
            let ans = false;
            for (let i = 0; i < 3; i++) {
                ans |= (data[i] === data[i + 3] && 
                data[i] === data[i + 6] && 
                data[i] !== '')
            }
            return ans;
        }
  
        // Checks for the win condition in diagonals
        const checkDiagonal = () => {
            return ((data[0] === data[4] && 
            data[0] === data[8] && data[0] !== '') || 
            (data[2] === data[4] && data[2] === data[6] && 
            data[2] !== ''));
        }
  
        // Checks if at all a win condition is present
        const checkWin = () => {
            return (checkRow() || checkCol() || checkDiagonal());
        }
  
        // Checks for a tie
        const checkTie = () => {
            let count = 0;
            data.forEach((cell) => {
                if (cell !== '') {
                    count++;
                }
            })
            return count === 9;
        }
  
        // Setting the winner in case of a win
        if (checkWin()) {
            setWinner(turn === 0 ? "Player 2 Wins!" : 
            "Player 1 Wins!");
        } else if (checkTie()) {
  
            // Setting the winner to tie in case of a tie
            setWinner("It's a Tie!");
        }

              
      if(!checkWin() && data.filter(word => word.length == 1).length<9 && turn===1){

        let randIndex=Math.floor(Math.random() * 10);
        let inputTile=document.getElementsByClassName("input");
        
      // const current = turn === 0 ? "X" : "O"
        while(data[randIndex - 1] !== ''){
          randIndex = Math.floor(Math.random() * 10)
        }
        if(data[randIndex - 1] === ''){
          data[randIndex-1] = "O";
        }
        const cPUMove = inputTile[randIndex-1];

        cPUMove.innerText = "O";

        setTurn(turn === 0 ? 1 : 0)
    }
  
    })
    const resetBoard = () => {
      setReset(true);
  }
  
    return (
      <div className="main">
            {/* Shrinks the popup when there is no winner */}
            <div className="content-UI text-center">
            {/* Display the current winner */}
            <div className='winner-text'>{winner}</div> <br />
            {/* Button used to reset the board */}
            <button onClick={() => resetBoard()}>
                          Reset Board
                      </button>
          </div>
        
          <div className="content-board d-flex justify-content-center flex-wrap">
            <div ref={boardRef} className="board">
                <div className="input input-1" 
                    onClick={(e) => draw(e, 1)}></div>
                <div className="input input-2" 
                    onClick={(e) => draw(e, 2)}></div>
                <div className="input input-3" 
                    onClick={(e) => draw(e, 3)}></div>
                <div className="input input-4" 
                    onClick={(e) => draw(e, 4)}></div>
                <div className="input input-5" 
                    onClick={(e) => draw(e, 5)}></div>
                <div className="input input-6" 
                    onClick={(e) => draw(e, 6)}></div>
                <div className="input input-7" 
                    onClick={(e) => draw(e, 7)}></div>
                <div className="input input-8" 
                    onClick={(e) => draw(e, 8)}></div>
                <div className="input input-9" 
                    onClick={(e) => draw(e, 9)}></div>

            
            </div>
            <div className="info content-info">
              <div className="player">{username}: X</div>
              <div className="player">CPU: O</div>
          </div>
          </div>

          
          
      </div>
    )
}
  
export default Board;