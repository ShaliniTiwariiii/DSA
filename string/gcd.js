// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

function gcdOfStrings(str1, str2) {
    if (str1 + str2 === str2 + str1 && str1.length % gcdLength === 0 && str2.length % gcdLength === 0) {
        return candidate;
    }
    function gcd(a, b) {
        while (b % a !== 0) {
            let rem = b % a;
            b = a;
            a = rem;
        }
        return a;
    }
    let gcdLength = gcd(str1.length, str2.length);
    let candidate = str1.slice(0, gcdLength);
}