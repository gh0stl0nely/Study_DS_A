const { addStringPrimitive } = require("./solution");

test('add two numbers in hundreth place', () => {
    expect(addStringPrimitive("192", "390")).toBe("582");
});

test('add two numbers with no carry', () => {
    expect(addStringPrimitive("2000", "2")).toBe("2002");
});

test('add two numbers with extra carry', () => {
    expect(addStringPrimitive("999", "9")).toBe("1008");
});

test("add two numbers with different lengths with carry", () => {
    expect(addStringPrimitive("20", "1937")).toBe("1957");
});

test('add two invalid strings with trailing zeroes', () => {
    expect(addStringPrimitive("03", "2")).toBe("Invalid String");
});
