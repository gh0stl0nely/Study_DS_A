const ValidSudoku = require('./solution');

test("Valid Sudoku" , () => {
    const sudoku = [
        [4,1,0,0,7,0,0,0,5],
        [0,8,0,0,0,6,0,9,0],
        [0,0,0,5,0,0,0,0,0],
        [0,0,7,4,0,1,3,0,0],
        [5,3,0,0,0,0,0,1,2],
        [0,0,4,3,0,8,7,0,0],
        [0,0,0,0,0,4,0,0,0],
        [0,9,0,8,0,0,0,7,0],
        [7,0,0,0,6,0,0,2,8],
    ];

    expect(ValidSudoku.isValidSudoku(sudoku)).toBe(true);
});

test("Invalid Sudoku - repeating row elements" , () => {
    const sudoku = [
        [4,1,0,4,7,0,0,0,5],
        [0,8,0,0,0,6,0,9,0],
        [0,0,0,5,0,0,0,0,0],
        [0,0,7,4,0,1,3,0,0],
        [5,3,0,0,0,0,0,1,2],
        [0,0,4,3,0,8,7,0,0],
        [0,0,0,0,0,4,0,0,0],
        [0,9,0,8,0,0,0,7,0],
        [7,0,0,0,6,0,0,2,8],
    ];

    expect(ValidSudoku.isValidSudoku(sudoku)).toBe(false);
});

test("Invalid Sudoku - repeating column elements" , () => {
    const sudoku = [
        [4,1,0,0,7,0,0,0,5],
        [0,8,0,0,0,6,0,9,0],
        [0,0,0,5,0,0,0,0,0],
        [0,0,7,4,0,1,3,0,0],
        [5,3,0,0,0,0,0,1,2],
        [0,0,4,3,0,8,7,0,0],
        [7,0,0,0,0,4,0,0,0],
        [0,9,0,8,0,0,0,7,0],
        [7,0,0,0,6,0,0,2,8],
    ];

    expect(ValidSudoku.isValidSudoku(sudoku)).toBe(false);
});

test("Invalid Sudoku - repeating subgrid elements" , () => {
    const sudoku = [
        [4,1,0,0,7,0,0,0,5],
        [0,8,0,0,0,6,0,9,0],
        [0,0,8,5,0,0,0,0,0],
        [0,0,7,4,0,1,3,0,0],
        [5,3,0,0,1,0,0,1,2],
        [0,0,4,3,0,8,7,0,0],
        [0,0,0,4,0,4,7,0,0],
        [0,9,0,8,0,0,0,7,0],
        [7,0,0,0,6,0,0,2,8],
    ];

    expect(ValidSudoku.isValidSudoku(sudoku)).toBe(false);
});