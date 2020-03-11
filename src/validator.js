const confirmSquareMatrix = matrix => {
    return !matrix.find(row => row.length !== matrix.length);
}

const UpperValidate = matrix => {
    const sizeRow = matrix.length
    for(let i = 0 ; i < sizeRow ; i++) {
        for(let j = 0 ; j < sizeRow ; j++) {
            if(i < j && matrix[i][j] != 0) {
                return false;
            }
        }
    }
    return true;
}

const LowerValidate = matrix => {
    const sizeRow = matrix.length
    for(let i = 0 ; i < sizeRow ; i++) {
        for(let j = 0 ; j < sizeRow ; j++) {
            if(i > j && matrix[i][j] != 0) {
                return false;
            }
        }
    }
    return true;
}

const diagonalValidate = matrix => {
    const sizeRow = matrix.length
    for(let i = 0 ; i < sizeRow ; i++) {
        for(let j = 0 ; j < sizeRow ; j++) {
            if(i == j && matrix[i][j] == 0) {
                return false;
            }
        }
    }
    return true;
}

module.exports = {
    confirmSquareMatrix,
    UpperValidate,
    LowerValidate,
    diagonalValidate
}

