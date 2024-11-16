<<<<<<< HEAD
const size = 8; // size of the grid
let chessBoard = ""; // the chess board as a string

for (let i = 0; i < size; i++) // iterate over the first loop and the second loop 
    {
    for (let j = 0; j < size; j++) {
        if ((i + j) % 2 === 0) {
            chessBoard += " "; // if the sum of the row and column is even, add a space
            } else {
                chessBoard += "#"; // if the sum of the row and column is odd, add a hash
                }
        }
       chessBoard += "\n"; // add a newline character after each row
=======
const size = 8;
let chessBoard = "";

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if ((i + j) % 2 === 0) {
            chessBoard += " ";
            } else {
                chessBoard += "#";
                }
        }
       chessBoard += "\n";
>>>>>>> 4db145002220e2fa5ae6c26a4f434bb968ad9983
}
console.log(chessBoard);

