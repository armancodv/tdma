# TDMA (Tridiagonal matrix algorithm)
In numerical linear algebra, the tridiagonal matrix algorithm, also known as the Thomas algorithm (named after Llewellyn Thomas), is a simplified form of Gaussian elimination that can be used to solve tridiagonal systems of equations. A tridiagonal system for n unknowns may be written as

![Equations](docs/1.svg)

where ![Equations](docs/2.svg) and ![Equations](docs/3.svg).

![Equations](docs/4.svg)

## Install
```
npm install tdma
```

## Sample Code
Using coefficientMatrix
```js
const tdma = require('tdma');

const coefficientMatrix = [
    [2, 3, 0, 0],
    [6, 3, 9, 0],
    [0, 2, 5, 2],
    [0, 0, 4, 3]
];
const rigthHandSideVector = [21, 69, 34, 22];

const answer = tdma.solver(coefficientMatrix, rigthHandSideVector);
console.log(answer);
```

Using Diagonals
```js
const tdma = require('tdma');

const a = [0, 6, 2, 4];
const b = [2, 3, 5, 3];
const c = [3, 9, 2, 0];
const d = [21, 69, 34, 22];

const answer = tdma.tdma(a, b, c, d);
console.log(answer);
```


## Method
The forward sweep consists of modifying the coefficients as follows, denoting the new coefficients with primes:

![Equations](docs/5.svg)

and

![Equations](docs/6.svg)

The solution is then obtained by back substitution:

![Equations](docs/7.svg)

![Equations](docs/8.svg)

The method above preserves the original coefficient vectors. If this is not required, then a much simpler form of the algorithm is

![Equations](docs/9.svg)

followed by the back substitution

![Equations](docs/10.svg)

![Equations](docs/11.svg)

Reference: https://en.wikipedia.org/wiki/Tridiagonal_matrix_algorithm