let merge = function (nums1, m, nums2, n) {
  let merged = nums1.slice(0, m).concat(nums2.slice(0, n));
  for (let i = 0; i < merged.length; i++) {
    for (let k = 0; k < merged.length; k++) {
      if (merged[k] > merged[k + 1]) {
        let temp = merged[k];
        merged[k] = merged[k + 1];
        merged[k + 1] = temp;
      }
    }
  }
  for (let i = 0; i < merged.length; i++) {
    nums1[i] = merged[i];
  }
};