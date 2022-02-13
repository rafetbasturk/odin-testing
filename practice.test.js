test("Capitalize", () => {
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  expect(capitalize("rafet")).toBe("Rafet");
});

test("Reverse String", () => {
  function reverse(str) {
    return str.split("").reverse().join("")
  }
  expect(reverse("rafet")).toBe("tefar");
});

test("Calculator", () => {
  function calculator(x, y) {
    const add = x + y
    const substract = x - y
    const multiply = x * y
    const divide = x / y
    return [add, substract, multiply, divide]
  }
  expect(calculator(2, 1)).toEqual([3, 1, 2, 2]);
});

test("Caesar Cipher", () => {
  function caesarCipher(str, shift) {
    let re = /[A-Za-z]/;
    let result = "";

    for (let i = 0; i < str.length; i++) {
      if (re.test(str.charAt(i))) {
        let val = str.charCodeAt(i)
        if (val >= 65 && val <= 90) {
          result += String.fromCharCode(((val - 65 + shift) % 26) + 65);
        }
        if (val >= 97 && val <= 122) {
          result += String.fromCharCode(((val - 97 + shift) % 26) + 97);
        }
      }
      else {
        result += str.charAt(i);
      }
    }
    return result
  }
  expect(caesarCipher("Esma-Rafet", 7)).toBe("Lzth-Yhmla")
  expect(caesarCipher("Begüm Zeynep", 0)).toBe("Begüm Zeynep")
  expect(caesarCipher("Basturk", 1)).toBe("Cbtuvsl")
});

test("Analyze Array", () => {
  function analyzeArray(arr) {
    const total = arr.reduce((total, cur) => total + cur)

    return {
      average: total / arr.length,
      min: Math.min(...arr),
      max: Math.max(...arr),
      length: arr.length
    };
  }
  expect(analyzeArray([1, 2, 3, 4, 5])).toStrictEqual({ average: 3, min: 1, max: 5, length: 5 })
  expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual({ average: 5.5, min: 1, max: 10, length: 10 })

});