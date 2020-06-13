function factorize(NUMBER) {    
    var factors = 0 
    var check = 1 
    while (check <= Math.sqrt(NUMBER)) {
    if (NUMBER % check == 0) {
            var factors = factors + 2
                }
    var check = check + 1   
            }
    return factors
}

var ans = 0 
var n = 4 
while (n < 100000000) { 
    if (Math.cbrt(n) % 1 > 0) { 
        if (factorize(n) == 4) {
            var ans = ans + 1
        }
    }
    var n = n + 1
}

document.writeln(ans)
