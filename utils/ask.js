var readline = require('readline');


module.exports = function ask(question, callback) {
	var rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	rl.write(question);
	rl.write('\n');
	rl.question('> ', function (answer) {
		rl.write('\n');
		rl.close();

		callback(null, answer);
	});
};