function isPrime(num) {
    if(num < 2 || Math.floor(num) !== num) {
        return false;
    } else {
        for(int = 2; int <= Math.floor(num / 2); int++) {
            if(num % int === 0) {
                return false;
            }
        }
        return true;
    }
}

function primeCountOfQuadratic(a, b) {
    let result = 0;
    for(n = 0; ; n++) {
        let expression = (n ** 2) + (a * n) + b;
        if(isPrime(expression)) {
            result++;
        } else {
            return result;
        }
    }
}
let result = {
    largestPrimeCount: 0,
    a: null,
    b: null,
}
for(let a = -999; a < 1000; a++) {
    for(b = -1000; b <= 1000; b++) {
        let primeCount = primeCountOfQuadratic(a, b);
        if(primeCount > result.largestPrimeCount) {
            result.largestPrimeCount = primeCount;
            result.a = a;
            result.b = b;
        }       
    }
}
console.log(result.a * result.b);