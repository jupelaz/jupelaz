let i = "";
const { EOL } = require("os");
process.stdin.on("data", (c) => (i += c));
process.stdin.on("end", () => {
  console.log(processInput(i.split(EOL)));
});

const processInput = (lines) =>
  lines
    .slice(1)
    .filter((_, i) => i % 2 === 1)
    .map((problem) => {
      return (
        problem.startsWith("2020") ||
        problem.endsWith("2020") ||
        (problem.startsWith("2") && problem.endsWith("020")) ||
        (problem.startsWith("20") && problem.endsWith("20")) ||
        (problem.startsWith("202") && problem.endsWith("0"))
      );
    })
    .map((part) => (part ? "YES" : "NO"))
    .join(EOL);
