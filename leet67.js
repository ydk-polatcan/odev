var addBinary = function(a, b) {
    const lena = a.length
    const lenb = b.length
    const lenmin = Math.min(lena, lenb)
    let result = ''
    let carry = 0
    for (var i = 0; i < lenmin || carry === 1; i++) {
      const x = (a.charCodeAt(lena - i - 1) - 48) || 0
      const y = (b.charCodeAt(lenb - i - 1) - 48) || 0
      result = (x ^ y ^ carry) + result
      carry = (x & y) | (x & carry) | (y & carry)
    }
    return result = a.substring(0, lena - i) + b.substring(0, lenb - i) + result
  };
