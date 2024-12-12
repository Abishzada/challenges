// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if (stack.length) {
      const last = stack[stack.length - 1];
      if (isPair(last, cur)) {
        stack.pop();
        continue;
      }
    }
    stack.push(cur);
  }

  return stack.length === 0;
};

var isPair = function (last, cur) {
  return (
    (last === "(" && cur === ")") ||
    (last === "{" && cur === "}") ||
    (last === "[" && cur === "]")
  );
};
