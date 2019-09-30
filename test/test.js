const tdma = require('../index');

const coefficientMatrix = [
    [2, 3, 0, 0],
    [6, 3, 9, 0],
    [0, 2, 5, 2],
    [0, 0, 4, 3]
];
const rigthHandSideVector = [21, 69, 34, 22];

const answer = tdma.solver(coefficientMatrix, rigthHandSideVector);
console.log(answer);