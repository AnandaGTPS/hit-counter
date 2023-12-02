/**
   * Create By Raiden.
   * Contact Me on wa.me/62859180658541
   * Follow https://github.com/NoviBotz
*/

/**
	* Recode by jas kiding
	* Contact Me on wa.me/6282139672290
	* Edit premium di command 'addprem' & 'delprem'
**/

const fs = require('fs')
const chalk = require('chalk')

global.autorespon = false //auto respon private chat
global.autobio = false ///auto set bio
global.welcome = false //detect join
global.goodbye = false //detect leave
global.promote = false //detect promote & demote
global.log= false //bot log
global.prem = false //matikan jika ingin membuat semua fitur menjadi free
global.revlimit = true //nyalakan jika ingin menyalakan fitur limit
global.autosw = true //auto read sw
global.levelup = true //level up feature
global.levelupMess = true //level up message
global.levelupMessMode = 'all' //avaibiled group, private, all
global.levelupPoint = 100 //pikirin nanti cara setting perkalian levelup nya
global.maxLevel = 125 //level up max level
global.levelupTo = 'all' /** avaibiled
* cmd
this is for bot command only
* all
this is for all message in bot
**/
global.public = false //bot publik / private
global.dont_disturb = true

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
