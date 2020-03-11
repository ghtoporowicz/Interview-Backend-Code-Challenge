const validator = require('../validator')

test('validate a square matrix', () => {
    const matrix = [[1, 4, 1], [0, 6, 4], [0, 0, 1]];
    expect(validator.confirmSquareMatrix(matrix)).toBe(true);
});

test('validate a not square matrix', () => {
    const matrix = [[1, 0, 0], [2, 8, 0], [4, 9, 7, 9]];
    expect(validator.confirmSquareMatrix(matrix)).toBe(false);
});