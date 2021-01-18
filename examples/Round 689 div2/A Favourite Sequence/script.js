const { EOL } = require("os");
let i = "";

process.stdin.on("data", (c) => (i += c));
process.stdin.on("end", () => {
  console.log(solve(i.split(EOL)));
});

function solve(lines) {
  const letters = "abc";
  return lines
    .slice(1)
    .map((line) => line.split(" "))
    .map(([n]) => letters.repeat(n / 3) + letters.slice(0, n % 3))
    .join(EOL);
}
