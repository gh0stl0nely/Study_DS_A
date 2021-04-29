const isPalindrome =  require("./solution.js");

test('test for negative number', () => {
    expect(isPalindrome(-5)).toBe(false);
});

test('test for regular true case', () => {
    expect(isPalindrome(123321)).toBe(true);
});

test('test for repeating digit', () => {
    expect(isPalindrome(48484848)).toBe(false);
});

test('test if returns true', () => {
    expect(isPalindrome(1)).toBe(true);
});