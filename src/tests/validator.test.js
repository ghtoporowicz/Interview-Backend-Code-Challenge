const validator = require('../authentitcation/validator')

test('A not square matrix', () => {
    const matrix = [[1, 0, 0], [2, 8, 0], [4, 9, 7, 9]];
    expect(validator.triangularMatrixValidate(matrix)).toBe(false);
});

test('Confirms that it is a triangular matrix (UPPER)', () => {
    const matrix = [[1, 4, 1], [0, 6, 4], [0, 0, 1]];
    expect(validator.triangularMatrixValidate(matrix)).toBe(true);
});

test('Confirms that it is a triangular matrix (LOWER)', () => {
    const matrix = [[1, 0, 0], [2, 8, 0], [4, 9, 7]];
    expect(validator.triangularMatrixValidate(matrix)).toBe(true);
});

test('Confirms that it is a triangular matrix (diagonal incorrect)', () => {
    const matrix = [[1, 0, 0], [2, 0, 0], [4, 1, 7]];
    expect(validator.triangularMatrixValidate(matrix)).toBe(false);
});
 
test('Confirms that it is a triangular matrix (lower incorrect)', () => {
    const matrix = [[1, 0, 0], [2, 8, 0], [4, 0, 7]];
    expect(validator.triangularMatrixValidate(matrix)).toBe(false);
});

test('Confirms that it is a triangular matrix (upper incorrect)', () => {
    const matrix = [[1, 0, 1], [0, 6, 4], [0, 0, 1]];
    expect(validator.triangularMatrixValidate(matrix)).toBe(false);
});