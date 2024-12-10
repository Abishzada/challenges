function maxWordRepetition(a, b) {
    let maxRepetition = 0;
    let i = 0;
  
    while (i <= a.length - b.length) {
      let currentRepetition = 0;
  
      // Check if the current substring matches the word 'b'
      while (a.substring(i, i + b.length) === b) {
        currentRepetition++;
        i += b.length; // Move to the next potential occurrence
      }
  
      // Update maxRepetition if the current repetition is higher
      if (currentRepetition > maxRepetition) {
        maxRepetition = currentRepetition;
      }
  
      i++; // Move to the next character in 'a'
    }
  
    return maxRepetition;
  }
  
  // Example usage:
  const a = 'popokkpo';
  const b = 'po';
  const result = maxWordRepetition(a, b);
  console.log(result); // Output: 3
  