const validator = require('../validator')

test('A square matrix', () => {
    const matrix = [[1, 4, 1], [0, 6, 4], [0, 0, 1]];
    expect(validator.confirmSquareMatrix(matrix)).toBe(true);
});

test('A not square matrix', () => {
    const matrix = [[1, 0, 0], [2, 8, 0], [4, 9, 7, 9]];
    expect(validator.confirmSquareMatrix(matrix)).toBe(false);
});

test('The top of the matrix has only zeros', () => {
    const matrix = [[1, 0, 0], [2, 8, 0], [4, 9, 7]];
    expect(validator.UpperValidate(matrix)).toBe(true);
});

test('The bottom of the matrix has only zeros', () => {
    const matrix = [[1, 4, 1], [0, 6, 4], [0, 0, 1]];
    expect(validator.LowerValidate(matrix)).toBe(true);
});

test('Diagonal of the matrix is ​​correct', () => {
    const matrix = [[1, 4, 1], [0, 1, 4], [0, 0, 1]];
    expect(validator.diagonalValidate(matrix)).toBe(true);
}); 