// fonksiyonda kullanılan uzunluk, ilk len elemanlarını yazdırır.
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let len = nums.length
    for (let i = 0; i < len; i++) {
      if (nums[i] === val) {
        nums[i--] = nums[--len]
      }
    }
    return len
  };