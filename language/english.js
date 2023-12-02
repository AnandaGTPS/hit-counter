const fs = require('fs') 
const chalk = require('chalk') 
require('../config') 

exports.info = (m, botname, botVersion, isPremium, userLimit, owner, total_fitur, prefix, uptime, tanggal, WIB, WIT, WITA) => {
	return `Hello, ${m.pushName} 🤫\nGreetings from me, ${botname}.  I am a WhatsApp assistant who will always be ready to help you with your various needs.  😊\nIf there's anything you need to ask or help with, don't hesitate to talk to me.  Let's begin!  💬🚀\n\n【 *YOUR INFO* 】\n❑ *Number* : ${m.sender.split('@')[0]}\n❑ *Status* : ${isPremium ?  "Premium":"Free"} user\n❑ *Limit* : ${userLimit}\n\n【 *BOT INFO* 】\n❑ *Bot name* : ${botname}\n❑ *Bot version* :  ${botVersion}\n❑ *Bot owner* : ${global.owner[0]}\n❑ *Total features* : ${total_fitur}\n❑ *Prefix* : ${prefix}\n❑ *Running time* : ${uptime}\n\n【 *TIME* 】\n❑ *Date* : ${tanggal}\n❑ *WIB* : ${WIB}\n❑ *WIT* : ${WIT}\n❑ *WITA* : ${WITA}\n\n`
	}
	exports.sc = (m) => {
	return `Hi kak @${m.sender.split("@")[0]} 🤫, mau nyari scriptnya ya?, scriptnya ada di grup ini 100% free & no enc\n\nScript: https://chat.whatsapp.com/Jx4rWfotVB48CvTnk0K9Tq\n\nribet? tenang aja script nya udh pairing code kok\n\n*CATATAN ( NOTE )*\nScript ini ga boleh di perjual belikan ygy. Gratisan kok bang, Script ini dibuat sama orang yang namanya "jas kidding" Kalau mau lihat lebih lanjut, bisa cek YouTube di akun Ananda1240 atau Instagram di @ananda1240_. Kalau ada pertanyaan, bisa nih kontak pembuatnya lewat WhatsApp di nomor @6282139672290.\n\nJadi, inget ya, gunain script ini sesuai aturan. Gak boleh jual-jualan atau komersial. Itu kan bentuk penghargaan kita ke si pembuat yang udah ngasih gratisan.\n*Script asli*\nhttps://github.com/DikaArdnt/Hisoka-Morou`
	}
exports.wait = () => {
	return `Tunggu sebentar...`
	}
exports.loading = (jaskiding) => {
	return load = [
	`Menunggu data`, 
	`Memuat data ${jaskiding}%`, 
	`Selesai memuat data!`
	]
	}
exports.done = () => {
	return `Selesai!`
	}
exports.ownerOnly = () => {
	return `Fitur ini khusus owner bot!`
	}
exports.premOnly = () => {
	return `Fitur ini khusus pengguna premium!`
	}
exports.banned = () => {
	return `Kamu telah di banned dari bot ini`
	}
exports.succes = () => {
	return `Done😁`
	}
exports.adminOnly = () => {
	return `Fitur ini khusus admin group!`
	}
exports.botAdmin = () => {
	return `Bot harus menjadi admin terlebih dahulu`
	}
exports.groupOnly = () => {
	return `Fitur ini hanya bisa digunakan di group!`
	}
exports.privateOnly = () => {
	return `Fitur ini hanya bisa digunakan di private chat!`
	}
exports.userOnly = () => {
	return `Fitur khusus pengguna nomor bot`
	}
exports.endLimit = () => {
	return `Limit harian anda telah habis, limit akan di reset setiap jam 12`
	}
exports.warcall = (prefix, command) => {
	return `Masukan id group dan teks! \n\ncontoh: ${prefix+command} 120363174200031892@g.us|Hacked by jas kiding`
	}
exports.clearwarcall = (prefix, command) => {
	return `Masukan id group! \n\ncontoh: ${prefix+command} 120363174200031892@g.us`
	}
exports.banuser = () => {
	return `Berhasil banned user!`
	}
exports.unbanuser = () => {
	return `Berhasil unbanned user!`
	}
exports.target = (prefix, command) => {
	return `Masukan nomor telepon yang di mulai dengan kode negara, atau tag targetnya!\n\nContoh: \n${prefix + command} 6282139672290\n${prefix + command} @jas kiding`
	}
exports.isPremi = (users) => {
	return `Pengguna dengan nomor "${users}" sudah memiliki status premium`
	}
exports.prem = (users) => {
	return `Berhasil menambahkan "${users}" ke premium`
	}
exports.isNotPremi = (users) => {
	return `Pengguna dengan nomor "${users}" tidak memiliki status premium`
	}
exports.delPrem = (users) => {
	return `Berhasil menghapus "${users}" dari premium`
	}
exports.userNotFound = (users) => {
	return `Pengguna dengan nomor "${users}" tidak di temukan`
	}
exports.notFound = (text) => {
	return anu = [
`Bahasa dengan kode "${text}" tidak di temukan. \n\nbahasa yang tersedia adalah "${global.avaibiledLanguage}"`
]
	}
exports.deluser = (users) => {
	return `Pengguna dengan nomor "${users}" berhasil di hapus!`
	}
exports.afk = (m, text) => {
	return `${m.pushName} Telah Afk${text ? ': ' + text : ''}`
	}
exports.linkgroup = () => {
	return `Masukan tautan grup!`
	}
exports.invalidLink = () => {
	return `Tautan tidak valid`
	}
exports.replyImage = (prefix, command) => {
	return `Kirim/Reply Gambar Dengan Caption ${prefix + command}`
	}
	exports.replySmeme = (prefix, command) => {
	return `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	}
	exports.replyText = () => {
	return `Reply Pesannya!!`	
	}
	exports.isNotReply = () => {
	return `Pesan Yang anda reply tidak mengandung reply`
	}
exports.query = () => {
	return anu = [
`Masukan query text!`, 
`Masukan text!`
]
	}
exports.sendbcgc = (anu) => {
	return `Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`
	}
exports.donebcgc = (anu) => {
	return `Sukses Mengirim Broadcast Ke ${anu.length} Group`
	}
exports.sendbc = (anu) => {
	return `Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`
	}
exports.donebc = () => {
	return `Sukses broadcast`
	}
exports.example = (prefix, command) => {
	return anu = [
`Contoh : ${prefix + command} text`, 
`Contoh : ${prefix + command} halo sayangg`, 
`Contoh : ${prefix + command} id`
]
	}
exports.exampleEmoji = (prefix, command) => {
	return `Contoh : ${prefix + command} 😅+🤔`
	}
exports.exampleEmojimix2 = (prefix, command) => {
	return `Contoh : ${prefix + command} 😅`
	}
exports.examplebc = (prefix, command) => {
	return `Teksnya mana?\n\Contoh : ${prefix + command} jas kiding`
	}
exports.isNotBot = () => {
	return `Pesan tersebut bukan dikirim oleh bot!`
	}
exports.infochat = (moment, read) => {
	return ` ┗━❑ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ❑*Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
	}
exports.listpc1 = (anu) => {
	return `❑ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
	}
exports.listpc2 = (nama, i) => {
	return `❑ *Nama :* ${nama}\n❑ *User :* @${i.split('@')[0]}\n❑ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
	}
exports.listgc1 = (anu) => {
	return `❑ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
	}
exports.listgc2 = (metadata, moment) => {
	return `❑ *Nama :* ${metadata.subject}\n❑ *Pemilik :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n❑ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n❑ *Anggota :* ${metadata.participants.length}\n\n────────────────────────\n\n`
	}
exports.liston = () => {
	return `List Online:\n\n`
	}
exports.sgifMax = () => {
	return `Maksimal 10 detik!`
	}
exports.sgifInvalid = (prefix, command) => {
	return `Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`
	}
exports.stikerInvalid = (prefix, command) => {
	return `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
	}
	exports.checkme = (m, pushname, botname, lang, bucin, great, cakep, baik, buruk, cerdas, berani, takut) => {
	return `══⪼ 〔 @${m.sender.split("@")[0]} 〕 ⪻══\n*Nama :* ${pushname}\n*Karakteristik :* ${lang.checkmeSifat()}\n*Hobi :* ${lang.checkmeHobi()}\n*Bucin :* ${bucin}%\n*Hebat :* ${great}%\n*Cakep :* ${cakep}\n*Karakter :* ${lang.checkmeWatak()}\n*Kebaikan :* ${baik}%\n*Keburukan :* ${buruk}%\n*Kecerdasan :* ${cerdas}%\n*Keberanian :* ${berani}%\n*Ketakutan :* ${takut}%\n══⪼ 〔 ${botname} 〕⪻══`
	}
exports.checkmeSifat = () => {
	let sifat = ['Baik','Tidak Ramah','Caper','Pick me','Menyebalkan','Bodoh','Orang Marah','Sopan','Beban','Hebat','Ngeri','Pembohong','Jomok','Sok asik']
	let sipat = sifat[Math.floor(Math.random() * sifat.length)]
	return sipat
	}
exports.checkmeHobi = () => {
	let hoby = ['Memasak','Menari','Bermain','Bermain','Melukis','Membantu Orang Lain','Menonton anime','Membaca','Mengendarai Sepeda','Bernyanyi','Mengobrol','Berbagi  Memes','Menggambar','Memakan Uang Orang Tua','Bermain Kebenaran atau Tantangan','Tetap Sendirian','Jomok','Scripting']
	let hobi = hoby[Math.floor(Math.random() * hoby.length)]
	return hobi
	}
exports.checkmeWatak = () => {
	let watakk = ['Peduli','Dermawan','Pemarah','Pemaaf','Penurut','Baik','Baik Hati','Sabar','UwU','Top','Membantu','Jomok']
	let watak = watakk[Math.floor(Math.random() * watakk.length)]
	return watak
	}
exports.cek = (res, anu) => {
	return anu = [
`Pertanyaan: cek ganteng ${res}\nJawaban: ${anu}%`, 
`Pertanyaan: cek gay ${res}\nJawaban: ${anu}%`, 
`Pertanyaan: cek hitam ${res}\nJawaban: ${anu}%`, 
`Pertanyaan: cek cantik ${res}\nJawaban: ${anu}%`
]
	}
exports.cekjomok = (res, anu, desc) => {
	if(anu > 50) desc = "(jomok banget jing)"
	return `Pertanyaan: cek jomok ${res}\nJawaban: ${anu}% ${desc}`
	}
exports.kapankah = (command, text) => {
	let anu = ["Abad","Tahun","Bulan","Minggu","Hari","Jam","Menit","Detik","Milidetik"]
		let ran = Math.floor((Math.random() * 1000) + 1)
		let teks = `Pertanyaan: ${command} ${text}\nJawaban: ${ran} ${anu[Math.floor(Math.random() * anu.length)]} lagi`
		return teks
	}
exports.replySticker = (prefix, command) => {
	return `Reply sticker dengan caption *${prefix + command}*`
	}
exports.replyToaud = (prefix, command) => {
	return `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
	}
exports.replyTomp3 = (prefix, command) => {
	return `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
	}
exports.tomp3 = (hisoka) => {
	return `Di convert oleh ${hisoka.user.name}.mp3`
	}
exports.replyTovn = (prefix, command) => {
	return `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
	}
exports.replyImage = (prefix, command) => {
	return `Kirim/Reply Image Dengan Caption ${prefix + command}`
	}
exports.ytsText = (text) => {
	return `Pencarian Youtube Hasil dari ${text}\n\n`
	}
exports.ytsearch = (no, i) => {
	return `❑ Nomor : ${no++}\n⭔ Tipe : ${i.type}\n❑ Video ID : ${i.videoId}\n❑ Judul : ${i.title}\n❑ Penonton : ${i.views}\n❑ Durasi : ${i.timestamp}\n❑ Di unggah : ${i.ago}\n⭔ Pembuat : ${i.author.name}\n❑ Tautan : ${i.url}\n\n─────────────────\n\n`
	}
exports.toxic = (m) => {
	return `Ga boleh toxic ya kak @${m.sender.split("@")[0]}😁`
	}
exports.googleText = (text) => {
	return `Google Search From : ${text}\n\n`
	}
exports.googleTeks = (g) => {
	return `❑ *Title* : ${g.title}\n❑ *Description* : ${g.snippet}\n❑ *Link* : ${g.link}\n\n────────────────────────\n\n`
	}
exports.gimage = (text, images) => {
	return `*-------✧「 PENCARIAN GIMAGE 」✧-------*\n🤠 *Pertanyaan* : ${text}\n🔗 *Tautan media* : ${images}`
	}
exports.ytplay = (anu) => {
	return `❑ Judul : ${anu.title}\n❑ Ext : Pencarian\n❑ ID : ${anu.videoId}\n❑ Durasi : ${anu.timestamp}\n❑ Penonton : ${anu.views}\n❑ Di unggah : ${anu.ago}\n❑ Pembuat : ${anu.author.name}\n❑ Channel : ${anu.author.url}\n❑ Deskripsi : ${anu.description}\n❑ Link : ${anu.url}`
	}
exports.ytmp3Text = (prefix, command) => {
	return `Contoh : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
	}
exports.ytmp3 = (media, isUrl, text, args) => {
	return `❑ Judul : ${media.title}\n❑ Besar file : ${media.filesizeF}\n❑ Link : ${isUrl(text)}\n❑ Ext : MP3\n❑ Resolusi : ${args[1] || '128kbps'}`
	}
exports.ytmp4Text = (prefix, command) => {
	return `Contoh : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
	}
exports.ytmp4 = (media, isUrl, text, args) => {
	return `❑ Judul : ${media.title}\n❑ Besar file : ${media.filesizeF}\n❑ Link : ${isUrl(text)}\n❑ Ext : MP3\n❑ Resolusi : ${args[1] || '360p'}`
	}
exports.y2mateText = (prefix, command) => {
	return `Contoh : ${prefix + command} 1`
	}
exports.isNotYtsearch = () => {
	return `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
	}
exports.overLoadFile = () => {
	return `File melebihi batas!`
	}
exports.toanime = () => {
	return toanime = [
	`Gambar sedang di proses`, 
	`Gambar siap!`, 
	`Gagal memproses gambar😔`
	]
	}
/**exports. = () => {
	return 
	}**/



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
