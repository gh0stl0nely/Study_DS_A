/**
 * Given a 2D matrix (n x n), rotates the matrix 
 * 
 * @params matrix
 * @return void
 */

module.exports = class MatrixRotation {
    static rotate(matrix){
        this.swapDiagonalElements(matrix);
        this.reverseRows(matrix);
        return matrix;
    }

    static swapDiagonalElements(matrix){
        for(let i = 1; i < matrix.length; i++){
            let currentRow = i;
            let currentCol = i;
            let topRow = 0;
            let leftCol = 0;
            while(currentCol > leftCol){
                const temp = matrix[currentRow][leftCol];
                matrix[currentRow][leftCol] = matrix[topRow][currentCol];
                matrix[topRow][currentCol] = temp;
                currentRow--;
                currentCol--;
                topRow++;
                leftCol++;
            }
        }

        for(let j = 1; j < matrix[0].length; j++){
            let currentCol = j;
            let currentRow = j;
            let bottomRow = matrix.length - 1;
            let rightCol = matrix[0].length - 1;
            while(currentCol < rightCol){
                const temp = matrix[bottomRow][currentCol];
                matrix[bottomRow][currentCol] = matrix[currentRow][rightCol];
                matrix[currentRow][rightCol] = temp;
                currentCol++;
                currentRow++;
                bottomRow--;
                rightCol--;
            }
        }
    }

    static reverseRows(matrix){
        for(let row = 0; row < matrix.length; row++){
            let left = 0;
            let right = matrix[0].length - 1;
            while(left < right){
                const temp = matrix[row][left];
                matrix[row][left] = matrix[row][right];
                matrix[row][right] = temp;
                left++;
                right--;
            }
        }
    }
}