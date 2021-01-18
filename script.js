const { EOL } = require("os");
let i = "";
process.stdin.on("data", (c) => (i += c));
process.stdin.on("end", () => {
  console.log(main(i.split(EOL).filter((a) => a)));
});

const initialize1 = (lines) => {
  //To use when you have a first line defining the number of cases,
  // and each case has a first line defining the number of lines with parameters,
  // and you dont need either of them
  const [numCases, ...cases] = lines;
  return Array(+numCases)
    .fill()
    .map(() => cases.splice(0, +cases[0] + 1).slice(1));
};
const initialize2 = (lines) =>
  // To use when you have a first line defining the number of cases,
  // and each case has a first line defining the number of parameters in the next line,
  // and you dont need either of them
  lines
    .slice(1)
    .filter((_, i) => i % 2 === 1)
    .map((problem) => problem.split(" ").map(Number));

const main = (lines) => {
  // ...
  return lines;
};
