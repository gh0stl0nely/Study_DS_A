const {isPowerOfTwo} = require("./solution");

test('test for wrong false big case', () => {
    expect(isPowerOfTwo(18999)).toBe(false);
});

test('test for 0', () => {
    expect(isPowerOfTwo(0)).toBe(false);
});

test('test for 1', () => {
    expect(isPowerOfTwo(1)).toBe(true);
});

test('test for false case', () => {
    expect(isPowerOfTwo(9)).toBe(false);
});

test('test for large number', () => {
    expect(isPowerOfTwo(1024)).toBe(true);
});

test('test if negative number', () => {
    expect(isPowerOfTwo(-2)).toBe(false);
});
