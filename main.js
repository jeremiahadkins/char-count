const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What is the input text? ', (answer) => {
  // TODO: Log the answer in a database
  if (answer.length <= 1) {
    console.log(`"${answer}" has ${answer.length} character`);
  } else {
    console.log(`"${answer}" has ${answer.length} characters`);
  }

  rl.close();
});
