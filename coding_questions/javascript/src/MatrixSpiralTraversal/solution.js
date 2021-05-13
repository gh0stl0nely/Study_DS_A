/**
 * Given a m x n 2D array (matrix), where m is the number of row and n is the
 * number of column Traverse the array in a spiraling manner (left to right, top
 * down, right to left, bottom up) At each cell, print the value to a result array
 * Finally, returns the result array
 * 
 * @params matrix
 * @return array
 */

module.exports = function matrixSpiralTraversal(matrix){
    let topRow = 0;
    let bottomRow = matrix.length - 1;
    let leftCol = 0;
    let rightCol = matrix[0].length - 1;
    const result = []

    while(topRow <= bottomRow && leftCol <= rightCol){
        for(let col = leftCol; col <= rightCol; col++){
            result.push(matrix[topRow][col]);
        }
        topRow++;

        if(topRow > bottomRow) return result;

        for(let row = topRow; row <= bottomRow; row++){
            result.push(matrix[row][rightCol]);
        }
        rightCol--;

        if(leftCol > rightCol) return result;

        for(let col = rightCol; col >= leftCol; col--){
            result.push(matrix[bottomRow][col]);
        }
        bottomRow--;

        for(let row = bottomRow; row >= topRow; row--){
            result.push(matrix[row][leftCol]);
        }
        leftCol++;
    }

    return result;
}