exports = module.exports;

exports.tdma = function tdma(a, b, c, d) {
    let x = [];
    let q, i;
    let n = b.length - 1;
    for (i = 1; i <= n; i++) {
        q = a[i] / b[i - 1];
        b[i] = b[i] - c[i - 1] * q;
        d[i] = d[i] - d[i - 1] * q;
    }
    q = d[n] / b[n];
    x[n] = q;
    for (i = n - 1; i >= 0; i--) {
        q = (d[i] - c[i] * q) / b[i];
        x[i] = q;
    }
    return x;
};

exports.coefficientMatrixToDigonals = function coefficientMatrixToDigonals(coefficientMatrix) {
    let a = [];
    let b = [];
    let c = [];
    let n = coefficientMatrix.length - 1;
    a[0] = 0;
    c[n] = 0;
    for(let i=0; i <= n; i++) {
        if(i!==0) a[i]=coefficientMatrix[i][i-1];
        b[i]=coefficientMatrix[i][i];
        if(i!==n) c[i]=coefficientMatrix[i][i+1];
    }
    return {
        a: a,
        b: b,
        c: c
    };
};

exports.solver = function solver(coefficientMatrix, rigthHandSideVector) {
    const result = this.coefficientMatrixToDigonals(coefficientMatrix);
    return this.tdma(result.a, result.b, result.c, rigthHandSideVector);
}