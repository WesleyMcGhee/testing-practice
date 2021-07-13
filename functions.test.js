const { returnTwo, greeting, add, multilpy, subtract, divide } = require('./functions');

test('Should return 2', () => {
    expect(returnTwo()).toBe(2);
}) 
test('Should return Hello, {name}', () => {
    expect(greeting('Wesley')).toBe('Hello, Wesley');
})
test('Should reuturn sum on {num1} and {num2}', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(2, 3)).toBe(5);
})
test('Should reuturn product on {num1} and {num2}', () => {
    expect(multilpy(1, 2)).toBe(2);
    expect(multilpy(2, 3)).toBe(6);
})
test('Should reuturn dividend on {num1} and {num2}', () => {
    expect(divide(2, 1)).toBe(2);
    expect(divide(9, 3)).toBe(3);
})
test('Should reuturn difference on {num1} and {num2}', () => {
    expect(subtract(3, 2)).toBe(1);
    expect(subtract(6, 3)).toBe(3);
})