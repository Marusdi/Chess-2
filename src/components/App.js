import React, { useState } from "react";
import Data from "./Data";
import Piece from "./Piece";
export default function App() {
  /* initialize new coordinates of all the squares */
  const [squares, setSquares] = React.useState(Data.positions);

  /* 
  React.useEffect(() => {
    let a = 0;
    let x = 75;
    let y = 75;
    let squaresTemp = {};
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        a += 1;
        squaresTemp = {
          ...squaresTemp,
          [a]: { x: x, y: y },
        };
        x += 150;
      }
      x = 75;
      y += 150;
    }
    setSquares(squaresTemp);
    
  }, []);
 */

  /* set up all the piecis with starting positions */

  const piecesList = Object.keys(Data.piecies);
  const piecesData = Data.piecies;

  const [positions, setPosition] = useState({
    [piecesList[0]]: piecesData[piecesList[0]].startPosition,
    [piecesList[1]]: piecesData[piecesList[1]].startPosition,
    [piecesList[2]]: piecesData[piecesList[2]].startPosition,
    [piecesList[3]]: piecesData[piecesList[3]].startPosition,
    [piecesList[4]]: piecesData[piecesList[4]].startPosition,
    [piecesList[5]]: piecesData[piecesList[5]].startPosition,
    [piecesList[6]]: piecesData[piecesList[6]].startPosition,
    [piecesList[7]]: piecesData[piecesList[7]].startPosition,
    [piecesList[8]]: piecesData[piecesList[8]].startPosition,
    [piecesList[9]]: piecesData[piecesList[9]].startPosition,
    [piecesList[10]]: piecesData[piecesList[10]].startPosition,
    [piecesList[11]]: piecesData[piecesList[11]].startPosition,
    [piecesList[12]]: piecesData[piecesList[12]].startPosition,
    [piecesList[13]]: piecesData[piecesList[13]].startPosition,
    [piecesList[14]]: piecesData[piecesList[14]].startPosition,
    [piecesList[15]]: piecesData[piecesList[15]].startPosition,
    [piecesList[16]]: piecesData[piecesList[16]].startPosition,
    [piecesList[17]]: piecesData[piecesList[17]].startPosition,
    [piecesList[18]]: piecesData[piecesList[18]].startPosition,
    [piecesList[19]]: piecesData[piecesList[19]].startPosition,
    [piecesList[20]]: piecesData[piecesList[20]].startPosition,
    [piecesList[21]]: piecesData[piecesList[21]].startPosition,
    [piecesList[22]]: piecesData[piecesList[22]].startPosition,
    [piecesList[23]]: piecesData[piecesList[23]].startPosition,
    [piecesList[24]]: piecesData[piecesList[24]].startPosition,
    [piecesList[25]]: piecesData[piecesList[25]].startPosition,
    [piecesList[26]]: piecesData[piecesList[26]].startPosition,
    [piecesList[27]]: piecesData[piecesList[27]].startPosition,
    [piecesList[28]]: piecesData[piecesList[28]].startPosition,
    [piecesList[29]]: piecesData[piecesList[29]].startPosition,
    [piecesList[30]]: piecesData[piecesList[30]].startPosition,
    [piecesList[31]]: piecesData[piecesList[31]].startPosition,

  });

  const pieces = piecesList.map((item) => (
    <Piece
      squares={squares}
      positions={positions}
      setPosition={setPosition}
      name={item}
      piece={piecesData[item]}
    />
  ));

  return (

      <div className="container">
          <div className="jail-left"> </div>
          <div className="board">
            <div>{pieces}</div>
          </div>
          <div className="jail-right"> </div>
      </div>


  );
}
