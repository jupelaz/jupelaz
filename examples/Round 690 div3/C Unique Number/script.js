const { EOL } = require("os");
let i = "";
process.stdin.on("data", (c) => (i += c));
process.stdin.on("end", () => {
  console.log(processInput(i.split(EOL)));
});

const processInput = (lines) =>
  lines
    .slice(1)
    .map(Number)
    .map((number) => {
      let result = "";
      for (let i = 9; i > 0; i--) {
        if (number - i >= 0) {
          number -= i;
          result = "" + i + result;
        }
      }
      if (number === 0) {
        return result;
      } else {
        return "-1";
      }
    })
    .join(EOL);
