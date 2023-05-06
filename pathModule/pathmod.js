const path = require("path");

console.log(
  path.dirname("W:Code/nodejsTut/ThapaTech/nodeIntro/pathModule/pathmod.js")
);
console.log(
  path.extname("W:Code/nodejsTut/ThapaTech/nodeIntro/pathModule/pathmod.js")
);
console.log(
  path.basename("W:Code/nodejsTut/ThapaTech/nodeIntro/pathModule/pathmod.js")
);

const parse = path.parse(
  "W:Code/nodejsTut/ThapaTech/nodeIntro/pathModule/pathmod.js"
);
console.log(parse);
console.log(parse.root);
