var strStr = function (haystack, needle) {
  //
  for (let i = 0; i < haystack.length - 1; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }
  return -1;
};

// var strStr = function (haystack, needle) {
//     return haystack.indexOf(needle)
// };


//////// Boyner Moore Algorithm ////////
// var strStr = function (haystack, needle) {
//     const m = needle.length;
//     const n = haystack.length;

//     if (m === 0) return 0;

//     const badChar = {};

//     for (let i = 0; i < m; i++) {
//         badChar[needle[i]] = i;
//     }

//     let s = 0; // shift 
//     while (s <= n - m) {
//         let j = m - 1; // Start comparing from end 

//         while (j >= 0 && needle[j] === haystack[s + j]) {
//             j--;
//         }

//         // If j becomes -1
//         if (j < 0) {
//             return s; // Return starting 
//         } else {
//             // Calculate shift 
//             const badCharShift = badChar[haystack[s + j]] !== undefined ? badChar[haystack[s + j]] : -1;
//             s += Math.max(1, j - badCharShift);
//         }
//     }
//     return -1;
// };