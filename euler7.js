// Asal Sayıları sıraladığımızda 2, 3, 5, 7, 11, ve 13. Yani 6 asal sayının 13 olduğunu biliyoruz. 
// Bize 10001. Asal sayıyı soruyor.

(function euler7() {
    var asallar = [2];
    var i = 3; 
    var j = 2; 
    var enBüyükAsal = 10001;
    
    // Asal sayılar aranan sayıdan az iken;
    while (asallar.length < enBüyükAsal) {
        // i j ile bölünürken kalan var.
        //hala asal sayı olabileceğini belirtir. 
        while (i % j !== 0) {
            j++; 
            // i === j noktasına ulaştıysak, 
            // bu demektir ki asal sayıdır. 
            if (j === i) {
                asallar.push(i); 
                break;
            }
        }

        // aksi taktirde , i yi arttırıp j yi sıfırlarız;
        i++;
        j = 2;
    }
    console.log(asallar[enBüyükAsal - 1]); 
    return asallar[enBüyükAsal - 1];
}());
    