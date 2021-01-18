const { EOL } = require("os");
let i = "";
process.stdin.on("data", (c) => (i += c));
process.stdin.on("end", () => {
  console.log(processInput(i.split(EOL).filter((line) => line)));
});

const processInput = (lines) => {
  return lines
    .slice(1)
    .filter((_, i) => i % 2)
    .map((line) => line.split(" "))
    .map((nums) => {
      const balance = nums
        .sort((a, b) => b - a)
        .reduce((acc, num) => Math.abs(acc - num));
      return balance === 0 ? "YES" : "NO";
    })
    .join(EOL);
};
