const fs = require('fs')
const chalk = require('chalk')

const toxic = ["anjing", "anjng", "anjink", "anjnk", "anjenk", "anjeng", "ajg", "anjg", "anj", "ajg", "memek", "mmk", "memk", "mmek", "kontol", "kontl", "kntol", "kntl", "jembut", "jembud", "jembot", "jembod", "tolol", "asu", "asw", "bajingan", "bajngan", "goblok", "bego", "nigga", "niga", "fuck", "shit", "fucker", "fck", "pussy", "dick", "yatimlu", "yatim lu", "yatim", "piatu", "piatulu", "yatim piatulu", "yatim piatu","sex"]

function checkForToxicWords(command, text) {
	const pesan = command + text
  const pattern = new RegExp(`(${toxic.join('|')})`, 'i');

  if (pattern.test(pesan)) {
    return true;
  } else {
    return false;
  }
}

module.exports = checkForToxicWords;

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
