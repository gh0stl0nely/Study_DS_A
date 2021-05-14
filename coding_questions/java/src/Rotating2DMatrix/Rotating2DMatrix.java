package Rotating2DMatrix;


/**
 * Given a 2D matrix (n x n), rotates the matrix 
 * 
 * @params matrix
 * @return void
 */
public class Rotating2DMatrix {
    public static void main(String[] args) {
        int[][] matrix = new int[][] { 
            { 1, 2, 3, 4 }, 
            { 5, 6, 7, 8 }, 
            { 9, 10, 11, 12}, 
            { 13 ,14 ,15 ,16}
        };
        rotate(matrix);
        for(int i = 0; i < matrix.length; i++){
            for(int j = 0; j < matrix[0].length;j++){
                System.out.print(matrix[i][j] + " ");
            }
        }
        // Prints 
        // 13 9 5 1 14 10 6 2 15 11 7 3 16 12 8 4 
        // [
        // [13,  9, 5, 1],
        // [14, 10, 6, 2],
        // [15, 11, 7, 3],
        // [16, 12, 8, 4]
        // ]
    }

    public static int[][] rotate(int[][] matrix) {
        // 1) Starting from the second row (matrix[1]), 
        // For each row, switch the diagonal elements
        // When the left column index and right column index overlaps or passes each other, 
        // Ends loops
        
        // 1b) Starting from the second far left column 
        // For each column, switch the diagonal elements
        // When the left column index and right column index overlaps or passes each other, e
        // Ends loops

        // 2) For each row, perform a reversal
        swapRowAndColIndex(matrix);
        reverseRows(matrix);
        return matrix;
    }

    private static void swapRowAndColIndex(int[][] matrix) {
        // Go along row first
        for (int i = 1; i < matrix.length; i++) {
            int currentCol = i;
            int currentRow = i;
            int leftCol = 0;
            int topRow = 0;
            while (currentCol > leftCol && currentRow > topRow) {
                int temp = matrix[currentRow][leftCol];
                matrix[currentRow][leftCol] = matrix[topRow][currentCol];
                matrix[topRow][currentCol] = temp;
                leftCol++;
                topRow++;
                currentCol--;
                currentRow--;
            }
        }

        // Go along col
        for (int j = 1; j < matrix[0].length; j++) {
            int currentCol = j;
            int currentRow = j;

            int bottomRow = matrix.length - 1;
            int rightCol = matrix[0].length - 1;

            while (currentCol < rightCol && currentRow < bottomRow) {
                int temp = matrix[bottomRow][currentCol];
                matrix[bottomRow][currentCol] = matrix[currentRow][rightCol];
                matrix[currentRow][rightCol] = temp;
                bottomRow--;
                rightCol--;
                currentCol++;
                currentRow++;
            }
        }
    }

    private static void reverseRows(int[][] matrix) {
        for (int row = 0; row < matrix.length; row++) {
            int temp;
            int rowLength = matrix[row].length;
            for (int i = 0; i < rowLength - 1 - i; i++) {
                temp = matrix[row][i];
                matrix[row][i] = matrix[row][rowLength - 1 - i];
                matrix[row][rowLength - 1 - i] = temp;
            }
        }
    }
}
