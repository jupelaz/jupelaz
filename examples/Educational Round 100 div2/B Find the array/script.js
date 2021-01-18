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
    .filter((_, i) => i % 2)
    .map((array) => {
      let str = "";
      for (let i = 0; i < array.length; i++) {
        let exp = 1;
        while (array[i] > Math.pow(2, exp)) {
          exp++;
        }
        str += ` ${Math.pow(2, exp - 1)}`;
      }
      return str.trim();
    })
    .join(EOL);
