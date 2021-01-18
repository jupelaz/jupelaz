let i = "";
const { EOL } = require("os");
process.stdin.on("data", (c) => (i += c));
process.stdin.on("end", () => {
  console.log(processInput(i.split(EOL).filter((line) => line)));
});

const getNOf2Factors = (number) => {
  let nOf2Factors = 0;
  while (number % 2 === 0) {
    nOf2Factors++;
    number /= 2;
  }
  return nOf2Factors;
};

const processInput = (lines) => {
  return lines
    .slice(1)
    .map((line) => line.split(" "))
    .map(([w, h, n]) => {
      return Math.pow(2, getNOf2Factors(w) + getNOf2Factors(h)) >= n
        ? "YES"
        : "NO";
    })
    .join(EOL);
};
