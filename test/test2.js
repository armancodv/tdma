const tdma = require('../index');

const a = [0, 6, 2, 4];
const b = [2, 3, 5, 3];
const c = [3, 9, 2, 0];
const d = [21, 69, 34, 22];

const answer = tdma.tdma(a, b, c, d);
console.log(answer);