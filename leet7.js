var reverse = function(x) {
    let sonuc = 0 
    while (x) {
        sonuc = sonuc * 10 + x % 10 
        x = x / 10 | 0
    }    
    return Math.abs(sonuc) > 2147483647 ? 0 : sonuc 
};
    