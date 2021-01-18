let i = "";
const { EOL } = require("os");
process.stdin.on("data", (c) => (i += c));
process.stdin.on("end", () => {
  const lines = i.split(EOL);
  console.log(processInput(lines));
});

const processInput = (lines) =>
  lines
    .slice(1)
    .filter((_, i) => i % 2 === 1)
    .map((problem) => {
      const numbers = problem.split(" ").map(Number);
      const result = [];
      for (
        let i = 0, j = numbers.length - 1;
        i <= numbers.length / 2, j >= numbers.length / 2;
        i++, j--
      ) {
        result.push(numbers[i]);
        result.push(numbers[j]);
      }
      if (numbers.length % 2) {
        result.push(numbers[Math.floor(numbers.length / 2)]);
      }
      return result;
    })
    .map((part) => part.join(" "))
    .join(EOL);
