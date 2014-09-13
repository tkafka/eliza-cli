var ElizaBot = require('elizabot');
var ask = require('./utils/ask');

var eliza = new ElizaBot();
var elizaQuestion = eliza.getInitial();

console.log("(Note: type 'quit' to, well, quit :))");
console.log();

function askEliza() {
	if (eliza.quit) {
		console.log('Nice talking to you, bye!');
		process.exit();
		return;
	}
	else {
		ask(elizaQuestion, function (err, answer) {
			elizaQuestion = eliza.transform(answer);
			process.nextTick(function() {
				askEliza();
			});
		});
	}
}

askEliza();

