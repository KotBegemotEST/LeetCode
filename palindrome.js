// This code finds the longest palindromic substring in a given string.
//O(n^3)

//     let longestPalindrome = function(s) {

//     let  isPalingrome = function(s) {
//         let isPalingrome=true
//         for (let i =0;i<s.length; i++) {
//             if (s[i] !== s[s.length-i-1]) {
//                 isPalingrome = false;
//                 break;
//             }
//         }
//         return isPalingrome

//     };


//         let longest = "";
//         for (let i = 0; i<s.length;i++)
//         {
//             for(let j = i+1; j<=s.length;j++){
//                 let substring = s.slice(i, j);
//                 if (isPalingrome(substring)) {
//     if (substring.length > longest.length) {
//         longest = substring;
//     }
//                 }
//                 }
//             }
 
//     return longest
// }



//O(n^2)
// This is a more efficient solution using Expand From Centers.
var longestPalindrome = function (s) {
    function expand(i, j) {
        let left = i;
        let right = j;

        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
            console.log(left, right, "if");
        }
        
        let res = s.slice(left + 1, right, 'res');
        return res 
    }

    let ans = "";

    for (let i = 0; i < s.length; i++) {
        let odd = expand(i, i);
        console.log(odd, 'odd');
        if (odd.length > ans.length) {
            ans = odd;
        }

        let even = expand(i, i + 1);
        console.log(even, 'even');
        if (even.length > ans.length) {
            ans = even;
        }
    }

    return ans;
};
console.log(longestPalindrome("abbanaaaabaaaan"))