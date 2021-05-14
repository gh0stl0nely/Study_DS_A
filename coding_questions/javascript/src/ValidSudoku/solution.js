/**
 * Given a 9x9 2D array which represents a sudoku board 
 * Return true if the sudoku board is valud
 * Otherwise, return false
 * To be valid, the sudoku board must meet these conditions
 * 1) Each row must not contain repeating values
 * 2) Each column must not contain repeating values
 * 3) A cell with value 0 is considered empty
 * 4) Each subgrid must not contain repeating values
 * 
 * @params sudoku
 * @returns boolean
 */
module.exports = class ValidSudoku {
    static isValidSudoku(sudoku){
        for(let i = 0; i < 9; i++){
            if(!this.isValidCol(i,sudoku) || !this.isValidRow(i,sudoku)) return false;
        }

        if(!this.isValidSubsquares(sudoku)) return false;
          
        return true;
    }

    static isValidRow(rowIndex, sudoku){
        let row = sudoku[rowIndex];
        let set = new Set();
        for(let i = 0; i < 9; i++){
            if(row[i] == 0) continue;
  
            if(set.has(row[i])){
                return false;
            }
            set.add(row[i])
        }

        return true;
    }

    static isValidCol(columnIndex, sudoku){
        let set = new Set();
        for(let i = 0; i < 9; i++){
            if(sudoku[i][columnIndex] == 0) continue;

            if(set.has(sudoku[i][columnIndex])){
                return false;
            }

            set.add(sudoku[i][columnIndex]);

        }

        return true;
    }

    static isValidSubsquares(sudoku){
        for(let row = 1; row < 9; row+= 3){
            for(let col = 1; col < 9; col+= 3){
                if(!this.isValidSubSquare(row,col,sudoku)) return false;
            }
        }
        return true;
    }

    static isValidSubSquare(row,col,sudoku){
        let set = new Set();
        for(let i = row - 1; i < row + 2; i++){
            for(let j = col - 1; j < col + 2; j++){
                if(sudoku[i][j] == 0) continue;

                if(set.has(sudoku[i][j])) return false;

                set.add(sudoku[i][j]);
            }
        }
        return true;
    }
}