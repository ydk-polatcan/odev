const MAX = 50000000;

const MAX_SQRT_2 = Math.pow(MAX, 1 / 2);
const MAX_SQRT_3 = Math.pow(MAX, 1 / 3);
const MAX_SQRT_4 = Math.pow(MAX, 1 / 4);

const primaries = [2];
let n = 3;

while (primaries[primaries.length - 1] < MAX_SQRT_2) {
    let i = 0;

    while (i < primaries.length && (n % primaries[i])) {
        i++;
    }

    if (i === primaries.length) {
        primaries.push(n);
    }

    n += 2;
}

const f = (a, b, c) => a ** 2 + b ** 3 + c ** 4;
let sum;

const sols = [];

for (let i = 0; primaries[i] < MAX_SQRT_2; i++) {
    for (let j = 0; primaries[j] < MAX_SQRT_3; j++) {
        for (let k = 0; primaries[k] < MAX_SQRT_4; k++) {
            if ((sum = f(primaries[i], primaries[j], primaries[k])) < MAX) {
                sols.push(sum);
            }
        }
    }
}

console.log([...new Set(sols)].length);