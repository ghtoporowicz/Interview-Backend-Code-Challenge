const confirmSquareMatrix = (matrix) => {
    return !matrix.find(row => row.length !== matrix.length);
}

module.exports = {
    confirmSquareMatrix
}

