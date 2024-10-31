let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function ask(text) {
  return new Promise(resolve => {
    rl.question(text, input => {
      resolve(input);
      rl.close();
    });
  });
}

module.exports = ask;
