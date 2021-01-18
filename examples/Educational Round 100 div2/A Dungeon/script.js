const { EOL } = require("os");
let i = "";

process.stdin.on("data", (c) => (i += c));
process.stdin.on("end", () => {
  console.log(solve(i.split(EOL)));
});

const solve = (lines) =>
  lines
    .slice(1)
    .filter((x) => x)
    .map((line) => line.split(" "))
    // .filter((_, i) => i % 2)
    .map((monstersHP) => {
      let sum = monstersHP.reduce((acc, mHP) => acc + +mHP, 0);
      return sum % 9 === 0 && Math.min(...monstersHP) >= Math.floor(sum / 9)
        ? "YES"
        : "NO";
    })
    .join(EOL);
