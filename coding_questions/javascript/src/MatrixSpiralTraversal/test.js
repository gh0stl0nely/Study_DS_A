const matrixSpiralTraversal = require('./solution');

test("test a standard 3 x 3 matrix", () => {
    const matrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
    const resultArray = [1,2,3,6,9,8,7,4,5];
    expect(matrixSpiralTraversal(matrix)).toEqual(resultArray);
});


test("test 3 x 1 matrix", () => {
    const matrix = [
        [1],
        [2],
        [3],
    ]
    const resultArray = [1,2,3];
    expect(matrixSpiralTraversal(matrix)).toEqual(resultArray);
    // expect(Object.is(matrixSpiralTraversal(matrix), resultArray)).toBe(true);
});


test("test 4 x 4 matrix", () => {
    const matrix = [
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,15,16]
    ]
    const resultArray = [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10];
    expect(matrixSpiralTraversal(matrix)).toEqual(resultArray);
});


test("test 2 x 4 matrix", () => {
    const matrix = [
        [1,2,3,4],
        [5,6,7,8],
    ]
    const resultArray = [1,2,3,4,8,7,6,5];
    expect(matrixSpiralTraversal(matrix)).toEqual(resultArray);
});

test("test 4 x 2 matrix", () => {
    const matrix = [
        [1,2],
        [3,4],
        [4,5],
        [6,7]
    ];
    const resultArray = [1,2,4,5,7,6,4,3];
    expect(matrixSpiralTraversal(matrix)).toEqual(resultArray);
});