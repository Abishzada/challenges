function maxPathBetweenIdenticalChars(s) {
    let maxPath = -1;
    const charIndexMap = {};

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char in charIndexMap) {
            const path = i - charIndexMap[char] - 1;
            maxPath = Math.max(maxPath, path);
        } else {
            charIndexMap[char] = i;
        }
    }

    return maxPath;
}

// Example usage:
const s = "abcadeaj";
const result = maxPathBetweenIdenticalChars(s);
console.log(result); // Output: 5