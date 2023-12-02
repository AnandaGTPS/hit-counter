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

global.textdonasi = `Dana: 6282139672290\n\nOwner: wa.me/6282139672290\n©Slemek-bot`
global.language = "id" /**default bahasa tersedia:
 * id => indonesia
 * en => english
 **/
 global.avaibiledLanguage = "id, en"

// Other
global.botname = "Slemek-bot" //nama bot
global.owner = ['6282139672290','6285649134084'] //ownernya
global.packname = 'Slemek' //stiker packname
global.author = 'WhatsApp Bot' //stiker author
global.sessionName = 'session' //gausah di apa2in
global.gmail = 'memeradef@gmail.com' //email lu
global.linkgc = 'https://chat.whatsapp.com/Jx4rWfotVB48CvTnk0K9Tq' //link grup wangsaf lu
global.urlmenu = 'https://telegra.ph/file/d204721fd024374a6cf42.jpg' //gambar menu 1
global.urlmenu2 = 'https://telegra.ph/file/4fcd3b3674f6e3d1325b9.jpg' //gambar menu 2
global.xlsx = './media/fake.xlsx' //gausah di apa2in
global.donasi = './media/donasi.jpg' //image donasi
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.limitawal = {
    premium: Infinity,
    free: 100
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
