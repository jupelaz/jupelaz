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
    .map((line) => line.split(" ").map((n) => +n))
    .map((nums) => {
      const mapOfScores = new Map();
      for (let i = nums.length - 1; i >= 0; i--) {
        let j = i + nums[i];
        while (j < nums.length) {
          if (mapOfScores.has(j)) {
            j += mapOfScores.get(j);
            break;
          }
          j += nums[j];
        }
        mapOfScores.set(i, j - i);
      }
      return Math.max(...mapOfScores.values());
    })
    .join(EOL);
};
