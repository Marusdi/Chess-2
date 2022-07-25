export default {
  positions: {
    1: { x: 75, y: 75 },
    2: { x: 225, y: 75 },
    3: { x: 375, y: 75 },
    4: { x: 525, y: 75 },
    5: { x: 675, y: 75 },
    6: { x: 825, y: 75 },
    7: { x: 975, y: 75 },
    8: { x: 1125, y: 75 },
    9: { x: 75, y: 225 },
    10: { x: 225, y: 225 },
    11: { x: 375, y: 225 },
    12: { x: 525, y: 225 },
    13: { x: 675, y: 225 },
    14: { x: 825, y: 225 },
    15: { x: 975, y: 225 },
    16: { x: 1125, y: 225 },
    17: { x: 75, y: 375 },
    18: { x: 225, y: 375 },
    19: { x: 375, y: 375 },
    20: { x: 525, y: 375 },
    21: { x: 675, y: 375 },
    22: { x: 825, y: 375 },
    23: { x: 975, y: 375 },
    24: { x: 1125, y: 375 },
    25: { x: 75, y: 525 },
    26: { x: 225, y: 525 },
    27: { x: 375, y: 525 },
    28: { x: 525, y: 525 },
    29: { x: 675, y: 525 },
    30: { x: 825, y: 525 },
    31: { x: 975, y: 525 },
    32: { x: 1125, y: 525 },
    33: { x: 75, y: 675 },
    34: { x: 225, y: 675 },
    35: { x: 375, y: 675 },
    36: { x: 525, y: 675 },
    37: { x: 675, y: 675 },
    38: { x: 825, y: 675 },
    39: { x: 975, y: 675 },
    40: { x: 1125, y: 675 },
    41: { x: 75, y: 825 },
    42: { x: 225, y: 825 },
    43: { x: 375, y: 825 },
    44: { x: 525, y: 825 },
    45: { x: 675, y: 825 },
    46: { x: 825, y: 825 },
    47: { x: 975, y: 825 },
    48: { x: 1125, y: 825 },
    49: { x: 75, y: 975 },
    50: { x: 225, y: 975 },
    51: { x: 375, y: 975 },
    52: { x: 525, y: 975 },
    53: { x: 675, y: 975 },
    54: { x: 825, y: 975 },
    55: { x: 975, y: 975 },
    56: { x: 1125, y: 975 },
    57: { x: 75, y: 1125 },
    58: { x: 225, y: 1125 },
    59: { x: 375, y: 1125 },
    60: { x: 525, y: 1125 },
    61: { x: 675, y: 1125 },
    62: { x: 825, y: 1125 },
    63: { x: 975, y: 1125 },
    64: { x: 1125, y: 1125 },
  },
  piecies: {
    pawn_a2: {
      icon: "https://i.ibb.co/w7jRYwn/fish-White.png",
      startPosition: { x: 25, y: 175 },
      color: "white",
      getMoves: function(squareNum){
        let moves=[]
        moves.push(squareNum+8)
        return moves
      },
    },
    pawn_b2: {
      icon: "https://i.ibb.co/w7jRYwn/fish-White.png",
      startPosition: { x: 175, y: 175 },
      color: "white",
      getMoves: function(squareNum){
        let moves=[]
        moves.push(squareNum+8)
        return moves
      },
    },
    pawn_c1: {
      icon: "https://i.ibb.co/w7jRYwn/fish-White.png",
      startPosition: { x: 325, y: 25 },
      color: "white",
      getMoves: function(squareNum){
        let moves=[]
        moves.push(squareNum+8)
        return moves
      },
    },
    pawn_d2: {
      icon: "https://i.ibb.co/w7jRYwn/fish-White.png",
      startPosition: { x: 475, y: 175 },
      color: "white",
      getMoves: function(squareNum){
        let moves=[]
        moves.push(squareNum+8)
        return moves
      },
    },
    pawn_e2: {
      icon: "https://i.ibb.co/w7jRYwn/fish-White.png",
      startPosition: { x: 625, y: 175 },
      color: "white",
      getMoves: function(squareNum){
        let moves=[]
        moves.push(squareNum+8)
        return moves
      },
    },
    pawn_f1: {
      icon: "https://i.ibb.co/w7jRYwn/fish-White.png",
      startPosition: { x: 775, y: 25 },
      color: "white",
      getMoves: function(squareNum){
        let moves=[]
        moves.push(squareNum+8)
        return moves
      },
    },
    pawn_g2: {
      icon: "https://i.ibb.co/w7jRYwn/fish-White.png",
      startPosition: { x: 925, y: 175 },
      color: "white",
      getMoves: function(squareNum){
        let moves=[]
        moves.push(squareNum+8)
        return moves
      },
    },
    pawn_h2: {
      icon: "https://i.ibb.co/w7jRYwn/fish-White.png",
      startPosition: { x: 1075, y: 175 },
      color: "white",
      getMoves: function(squareNum){
        let moves=[]
        moves.push(squareNum+8)
        return moves
      },
    },
    pawn_a7: {
      icon: "https://i.ibb.co/w7jRYwn/fish-White.png",
      startPosition: { x: 25, y: 925 },
      color: "black",
      getMoves: function(squareNum){
        let moves=[]
        moves.push(squareNum-8)
        return moves
      },
    },
    pawn_b7: {
      icon: "https://i.ibb.co/w7jRYwn/fish-White.png",
      startPosition: { x: 175, y: 925 },
      color: "black",
      getMoves: function(squareNum){
        let moves=[]
        moves.push(squareNum-8)
        return moves
      },
    },
    pawn_c8: {
      icon: "https://i.ibb.co/w7jRYwn/fish-White.png",
      startPosition: { x: 325, y: 1075 },
      color: "black",
      getMoves: function(squareNum){
        let moves=[]
        moves.push(squareNum-8)
        return moves
      },
    },
    pawn_d7: {
      icon: "https://i.ibb.co/w7jRYwn/fish-White.png",
      startPosition: { x: 475, y: 925 },
      color: "black",
      getMoves: function(squareNum){
        let moves=[]
        moves.push(squareNum-8)
        return moves
      },
    },
    pawn_e7: {
      icon: "https://i.ibb.co/w7jRYwn/fish-White.png",
      startPosition: { x: 625, y: 925 },
      color: "black",
      getMoves: function(squareNum){
        let moves=[]
        moves.push(squareNum-8)
        return moves
      },
    },
    pawn_f8: {
      icon: "https://i.ibb.co/w7jRYwn/fish-White.png",
      startPosition: { x: 775, y: 1075 },
      color: "black",
      getMoves: function(squareNum){
        let moves=[]
        moves.push(squareNum-8)
        return moves
      },
    },
    pawn_g7: {
      icon: "https://i.ibb.co/w7jRYwn/fish-White.png",
      startPosition: { x: 925, y: 925 },
      color: "black",
      getMoves: function(squareNum){
        let moves=[]
        moves.push(squareNum-8)
        return moves
      },
    },
    pawn_h7: {
      icon: "https://i.ibb.co/w7jRYwn/fish-White.png",
      startPosition: { x: 1075, y: 925 },
      color: "black",
      getMoves: function(squareNum){
        let moves=[]
        moves.push(squareNum-8)
        return moves
      },
    },
    rook_a1: {
      icon: "https://i.ibb.co/vD9J04d/craw-White.png",
      startPosition: { x: 25, y: 25 },
      color: "white",
    },
    monkey_b1: {
      icon: "https://i.ibb.co/FKtDsv6/monkey-White.png",
      startPosition: { x: 175, y: 25 },
      color: "white",
    },
    elephant_c2: {
      icon: "https://i.ibb.co/Lzj5qN4/elephant-White.png",
      startPosition: { x: 325, y: 175 },
      color: "white",
    },
    queen_d1: {
      icon:"https://i.ibb.co/F7H58SZ/queen-White.png",
      startPosition: { x: 475, y: 25 },
      color: "white",
    },
    king_e1: {
      icon: "https://i.ibb.co/Fb21vTm/king-White.png",
      startPosition: { x: 625, y: 25 },
      color: "white",
      banana:true,
    },
    elephant_f2: {
      icon: "https://i.ibb.co/Lzj5qN4/elephant-White.png",
      startPosition: { x: 775, y: 175 },
      color: "white",
    },
    monkey_g1: {
      icon: "https://i.ibb.co/FKtDsv6/monkey-White.png",
      startPosition: { x: 925, y: 25 },
      color: "white",
    },
    rook_h1: {
      icon: "https://i.ibb.co/vD9J04d/craw-White.png",
      startPosition: { x: 1075, y: 25 },
      color: "white",
    },
    rook_a8: {
      icon: "https://i.ibb.co/vD9J04d/craw-White.png",
      startPosition: { x: 25, y: 1075 },
      color: "black",
    },
    monkey_b8: {
      icon: "https://i.ibb.co/FKtDsv6/monkey-White.png",
      startPosition: { x: 175, y: 1075 },
      color: "black",
    },
    elephant_c7: {
      icon: "https://i.ibb.co/Lzj5qN4/elephant-White.png",
      startPosition: { x: 325, y: 925 },
      color: "black",
    },
    queen_d8: {
      icon: "https://i.ibb.co/F7H58SZ/queen-White.png",
      startPosition: { x: 475, y: 1075 },
      color: "black",
    },
    king_e8: {
      icon: "https://i.ibb.co/Fb21vTm/king-White.png",
      startPosition: { x: 625, y: 1075 },
      color: "black",
      banana:true,
    },
    elephant_f7: {
      icon: "https://i.ibb.co/Lzj5qN4/elephant-White.png",
      startPosition: { x: 775, y: 925 },
      color: "black",
    },
    monkey_g8: {
      icon: "https://i.ibb.co/FKtDsv6/monkey-White.png",
      startPosition: { x: 925, y: 1075 },
      color: "black",
    },
    rook_h8: {
      icon: "https://i.ibb.co/vD9J04d/craw-White.png",
      startPosition: { x: 1075, y: 1075 },
      color: "black",
    },
  },
};
