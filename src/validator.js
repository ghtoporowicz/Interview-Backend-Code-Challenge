const confirmSquareMatrix = matrix => {
    return !matrix.find(row => row.length !== matrix.length);
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

const isLowerMatrix = (upper, lower) => {
    if(!upper.find(value => value != 0) && !lower.includes(0)) {
        console.log('[INFO] This matrix can be Lower');
        return true;
    }
    return false;

}

const isUpperMatrix = (upper, lower) => {
    if(!lower.find(value => value != 0) && !upper.includes(0)) {
        console.log('[INFO] This matrix can be Upper');
        return true;
    }
    return false;
}

const triangularMatrixValidate = matrix => {
    if(!confirmSquareMatrix(matrix)) {
        console.log('[ERROR] Is not a square Matrix');
        return false;
    }

    if(!diagonalValidate(matrix)) {
        console.log('[ERROR] Diagonal contains zeros');
        return false;
    }

    let upper = [];
    let lower = [];

    for(let i = 0 ; i < matrix.length ; i++) {
        for(let j = 0 ; j < matrix.length ; j++) {
            if(i < j) {
                upper.push(matrix[i][j]);
            }

            if(i > j) {
                lower.push(matrix[i][j]);
            }
        }
    }

    return isLowerMatrix(upper, lower) || isUpperMatrix(upper, lower);
}

module.exports = {
    triangularMatrixValidate
}

