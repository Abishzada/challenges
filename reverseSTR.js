let str = 'acb-cd=mmmmmm'

letters = []
symbols = []
str.split('').map(i => i == '-' || i == '=' ? symbols.unshift(i) : letters.push(i))

let newStr = ''
for (i of str) {
    if (i == '-' || i == '=') {
        newStr += symbols.pop()
    } else {

        newStr += letters.pop()
    }
}

console.log(newStr);