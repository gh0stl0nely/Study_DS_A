package MatrixSpiralTraversal;

/**
 * Given a m x n 2D array (matrix), where m is the number of row and n is the
 * number of column Traverse the array in a spiraling manner (left to right, top
 * down, right to left, bottom up) At each cell, print the value to the console
 * 
 * @params matrix
 * @void
 */
public class MatrixSpiralTraversal {
    public static void main(String[] args) {
        // 3 x 3
        System.out.println("First matrix");
        int[][] matrix = new int[][] { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } }; // 1 2 3 6 9 8 7 4 5 
        matrixSpiralTraversal(matrix);

        System.out.println(" ");
        System.out.println("Second matrix");

        // 3 x 1
        int[][] matrix2 = new int[][] { { 3 }, { 4 }, { 9 } }; // 3 4 9
        matrixSpiralTraversal(matrix2);

        System.out.println(" ");
        System.out.println("Third matrix");

        // 2 x 4
        int[][] matrix3 = new int[][] { { 1, 2, 3, 4 }, { 5, 6, 7, 8 } }; // 1 2 3 4 8 7 6 5
        matrixSpiralTraversal(matrix3);
    }

    public static void matrixSpiralTraversal(int[][] matrix) {
        int topRow = 0;
        int bottomRow = matrix.length - 1;
        int leftCol = 0;
        int rightCol = matrix[0].length - 1;

        while (topRow <= bottomRow && leftCol <= rightCol) {
            for (int col = leftCol; col <= rightCol; col++) {
                System.out.print(matrix[topRow][col] + " ");
            }
            topRow++;

            if(topRow > bottomRow) return;

            for (int row = topRow; row <= bottomRow; row++) {
                System.out.print(matrix[row][rightCol] + " ");
            }
            rightCol--;

            if(rightCol < leftCol) return;

            for (int col = rightCol; col >= leftCol; col--) {
                System.out.print(matrix[bottomRow][col] + " ");
            }
            bottomRow--;

            if(topRow > bottomRow) return;

            for (int row = bottomRow; row >= topRow; row--) {
                System.out.print(matrix[row][leftCol] + " ");
            }
            leftCol++;
        }
    }

}