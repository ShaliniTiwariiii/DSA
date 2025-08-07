// 1456. Maximum Number of Vowels in a Substring of Given Length
// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
function countVal(s, k) {
    let val = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;
    for (let i = 0; i < k; i++) {
        if (val.has(s[i])) {
            count++
        }
    }

    let maxCount = count;
    for (let i = k; i < s.length; i++) {
        if (val.has(s[i - k])) count--;
        if (val.has(s[i])) count++;
        maxCount = Math.max(maxCount, count);
    }
    return maxCount;
}