let i = "";
const { EOL } = require("os");

process.stdin.on("data", (c) => (i += c));
process.stdin.on("end", () => {
  console.log(solve(i.split(EOL)));
});

const solve = (lines) =>
  lines
    .slice(1)
    .map((line) => line.split(" "))
    .filter((_, i) => i % 2)
    .map((allGrannies) => {
      let changedGrannies = false;
      let sortedGrannies = allGrannies.sort((a, b) => a - b);
      let acceptedGrannies = 1;
      do {
        changedGrannies = false;
        for (let i = sortedGrannies.length - 1; i >= 0; i--) {
          if (sortedGrannies[i] <= acceptedGrannies + i) {
            acceptedGrannies += i + 1;
            sortedGrannies = sortedGrannies.slice(i + 1);
            changedGrannies = true;
            break;
          }
        }
      } while (changedGrannies && sortedGrannies.length > 0);
      return acceptedGrannies;
    })
    .join(EOL);
