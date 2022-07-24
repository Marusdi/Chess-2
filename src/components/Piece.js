import React, { useState } from "react";
import Draggable from "react-draggable";

export default function Piece(props) {
  const name = props.name;
  const position = props.positions[name];

  function getCentre(position) {
    /* return the center position of the square given the corner */
    return {
      x: position.x + 75,
      y: position.y + 75,
    };
  }

  function getCorner(position) {
    /* return the corner of the piece given the center */
    return {
      x: position.x - 50,
      y: position.y - 50,
    };
  }

  const trackPos = (data) => {
    /* tracks the position of the pieces */
    props.setPosition((prevPos) => {
      return {
        ...prevPos,
        [name]: { x: data.x, y: data.y },
      };
    });
  };

  const handleDrop = (data) => {
    /* when a piece get dropped sets its position to the center of the closest square */
    props.setPosition((prevPos) => {
      return {
        ...prevPos,
        [name]: getCorner(getClosestSquare(getCentre(position)).pos),
      };
    });
  };

  function getDistance(a, b) {
    /* returns the distance beetwen given a,b */
    return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
  }

  function getClosestSquare(position) {
    /* give a position return the closest square center */
    for (let i = 1; i <= 64; i++) {
      if (getDistance(position, props.squares[i]) <= 106) {
        return {
          square: i,
          pos: props.squares[i],
        };
      }
    }
  }

  const Style = {
    background: `url(${props.piece.icon})`,
    backgroundSize: "125px",
    backgroundPosition: "center",
    webkitFilter: props.piece.color=="black" ?  "invert(100%)" : "invert(0)"
  };





  return (
    <Draggable
      position={position}
      onDrag={(e, data) => trackPos(data)}
      onStop={handleDrop}
    >
      <div className="box" style={Style}>
        <div>
          {/* dysplay coordinates */}
          {/* x: {position.x.toFixed(0)}, y: {position.y.toFixed(0)} */}
        </div>
      </div>
    </Draggable>
  );
}
