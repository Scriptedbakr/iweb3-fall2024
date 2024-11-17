const size = 8;
let chessBoard = "";

// iterating over the rows and columns
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        // if the sum of the row index and column index is even, print a space
        if ((i + j) % 2 === 0) {
            chessBoard += " ";
        } else {
            chessBoard += "#";
        }
    }
    chessBoard += "\n"; // Add a new line after each row
}

console.log(chessBoard);  
