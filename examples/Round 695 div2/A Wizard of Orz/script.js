const { EOL } = require("os");
let i = "";
process.stdin.on("data", (c) => (i += c));
process.stdin.on("end", () => {
  console.log(
    processLines(
      i
        .split(EOL)
        .filter((line) => line)
        .slice(1)
    )
  ); //Sent to processLines input text, split by lines, removed the first one
});

const processLines = (lines) =>
  lines
    .map((n) => {
      const firstSequence = "989012345";
      const subsequent = "6789012345";
      if (n < firstSequence.length) {
        return firstSequence.slice(0, n);
      } else {
        const repeatTimes = Math.ceil(
          (n - firstSequence.length) / subsequent.length
        );
        return (firstSequence + subsequent.repeat(repeatTimes)).slice(0, n);
      }
    })
    .join(EOL);
