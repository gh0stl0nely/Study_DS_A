package ValidSudoku;
import java.util.HashSet;


public class ValidSudoku {

    public static void main(String[] args) {
        int[][] sudoku = new int[][]{
            {4,1,0,0,7,0,0,0,5},
            {0,8,0,0,0,6,0,9,0},
            {0,0,0,5,0,0,0,0,0},
            {0,0,7,4,0,1,3,0,0},
            {5,3,0,0,0,0,0,1,2},
            {0,0,4,3,0,8,7,0,0},
            {0,0,0,0,0,4,0,0,0},
            {0,9,0,8,0,0,0,7,0},
            {7,0,0,0,6,0,0,2,8},
        };

        System.out.println(isValidSudoku(sudoku));
    }
    
    public static boolean isValidSudoku(int[][] sudoku){
        for(int i = 0; i < 9; i++){
            if(!isValidRow(i, sudoku) || !isValidCol(i, sudoku)){
              return false;
            }
        }
          
        if(!checkSubsquares(sudoku)) return false;
          
        return true;
    }
  
    private static boolean isValidRow(int rowIndex, int[][] sudoku){
      int[] thisRow = sudoku[rowIndex];
      HashSet<Integer> set = new HashSet<Integer>();
      for(int i = 0; i < 9 ; i++){
          if(thisRow[i] == 0) continue;
        
          if(!set.add(thisRow[i])){
            return false;
          }
      }
      
      return true;
  }
  
  private static boolean isValidCol(int colIndex, int[][] sudoku){
      HashSet<Integer> set = new HashSet<Integer>();
      for(int i = 0; i < 9; i++){
        if(sudoku[i][colIndex] == 0) continue;
        
        if(!set.add(sudoku[i][colIndex])){
            return false;
        }
      }
      
      return true;
  }
  
  private static boolean checkSubsquares(int[][] sudoku){
      // This forloop is to land on the correct MIDDLE index
      for(int row = 1; row < 9; row += 3){
        for(int col = 1; col< 9; col += 3){
          if(!isValidSubsquare(row,col,sudoku)){
            return false;
          }
        }
      }
      
      return true;
  }
  
  private static boolean isValidSubsquare(int row,int col,int[][] sudoku){
    HashSet<Integer> set = new HashSet<Integer>();

    for(int i = row - 1; i < row + 2; i++){
      for(int j = col - 1; j < col + 2; j++){
        if(sudoku[i][j] == 0) continue;

        if(!set.add(sudoku[i][j])){
            System.out.println(row);
            System.out.println(col);
            return false;
        }
      }
    }
    
    return true;
  }
}
