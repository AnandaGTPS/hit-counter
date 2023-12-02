const fs = require('fs') 
const chalk = require('chalk') 
require('../config') 

exports.info = (m, botname, botVersion, isPremium, userLimit, owner, total_fitur, prefix, uptime, tanggal, WIB, WIT, WITA) => {
	return `Halo, ${m.pushName} 🤫\nSalam kenal dari saya, ${botname}. Saya adalah asisten WhatsApp yang akan selalu siap membantu Anda dengan berbagai keperluan Anda. 😊\nJika ada sesuatu yang perlu Anda tanyakan atau bantuannya, jangan ragu untuk berbicara dengan saya. Ayo, kita mulai! 💬🚀\n\n【 *INFO KAMU* 】\n❑ *Nomor* : ${m.sender.split('@')[0]}\n❑ *Status* : ${isPremium ? "Premium":"Free"} user\n❑ *Limit* : ${userLimit}\n\n【 *INFO BOT* 】\n❑ *Nama bot* : ${botname}\n❑ *Versi bot* : ${botVersion}\n❑ *Pemilik bot* : ${global.owner[0]}\n❑ *Total fitur* : ${total_fitur}\n❑ *Prefix* : ${prefix}\n❑ *Waktu proses* : ${uptime}\n\n【 *TIME* 】\n❑ *Tanggal* : ${tanggal}\n❑ *WIB* : ${WIB}\n❑ *WIT* : ${WIT}\n❑ *WITA* : ${WITA}\n\n`
	}
	exports.sc = (m) => {
	return `Hai kak @${m.sender.split("@")[0]} 🤫, mau nyari scriptnya ya?, scriptnya ada di grup ini 100% free & no enc\n\nScript: https://chat.whatsapp.com/Jx4rWfotVB48CvTnk0K9Tq\n\nribet? tenang aja script nya udh pairing code kok\n\n*CATATAN ( NOTE )*\nScript ini ga boleh di perjual belikan ygy. Gratisan kok bang, Script ini dibuat sama orang yang namanya "jas kidding" Kalau mau lihat lebih lanjut, bisa cek YouTube di akun Ananda1240 atau Instagram di @ananda1240_. Kalau ada pertanyaan, bisa nih kontak pembuatnya lewat WhatsApp di nomor @6282139672290.\n\nJadi, inget ya, gunain script ini sesuai aturan. Gak boleh jual-jualan atau komersial. Itu kan bentuk penghargaan kita ke si pembuat yang udah ngasih gratisan.\n*Script asli*\nhttps://github.com/DikaArdnt/Hisoka-Morou`
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
exports.link = () => {
	return anu = [
`Masukan tautan grup!`, 
`Masukan url rest api!`, 
`Tautan tidak valid`, 
`Masukan tautan/url web`, 
`Masukan tautan/url video tiktok`
]
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
exports.replyCode = () => {
	return `Reply kode nya!`
}
	exports.isNotReply = () => {
	return `Pesan Yang anda reply tidak mengandung reply`
	}
exports.query = () => {
	return anu = [
`Masukan query teks!`, 
`Masukan teks`, 
`Masukan query judul!`, 
`Masukan nama!`
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
exports.bc = (text) => {
	return `「 Broadcast Bot 」\n\n${text}`
	}
exports.example = (prefix, command) => {
	return anu = [
`Contoh : ${prefix + command} text`, 
`Contoh : ${prefix + command} halo sayangg`, 
`Contoh : ${prefix + command} id`, 
`Contoh : ${prefix + command} packname|author`, 
`Contoh : ${prefix + command} teks1|teks2`, 
`Contoh : ${prefix + command} 6282139672290`, 
`Contoh : ${prefix + command} Nasrul, 7, 6, 2004, Adit, 16, 11, 2004`, 
`Contoh : ${prefix + command} jas kiding`,
`Contoh : ${prefix + command} Nasrul, 7, 6, 2004`, 
`Contoh : ${prefix + command} Nasrul|Adit`, 
`Contoh : ${prefix + command} 7, 6, 2004`, 
`Contoh : ${prefix + command} Nasrul, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`, 
`Masukan ip adress server! \n\nContoh: ${prefix + command} ip:port\n*${prefix + command} play.venitymc.com*\n*${prefix + command} play.vernitymc.com:19132*`, 
`Contoh : ${prefix + command} Nasrul, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`, 
`Contoh : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`, 
`Contoh : ${prefix + command} 7 6 2004`, 
`Contoh : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.html`, 
`Contoh : ${prefix+command} nasi goreng`,
`Contoh : ${prefix+command} Sufway surfer mod`, 
`Contoh : ${prefix + command} const slemek = require('@whiskeysockets/baileys')`
]
	}
exports.exampleEmoji = (prefix, command) => {
	return `Contoh : ${prefix + command} 😅+🤔`
	}
exports.exampleEmojimix2 = (prefix, command) => {
	return `Contoh : ${prefix + command} 😅`
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
exports.reply = () => {
	return `Reply pesannya!`
	}
exports.totag = (prefix, command) => {
	return `Reply pesan dengan caption ${prefix + command}`
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
exports.cek = (res, command) => {
	let anu = Math.floor((Math.random() * 100) + 1)
	result = {
ganteng: `Pertanyaan: cek ganteng ${res}\nJawaban: ${anu}%`, 
gay: `Pertanyaan: cek gay ${res}\nJawaban: ${anu}%`, 
hitam: `Pertanyaan: cek hitam ${res}\nJawaban: ${anu}%`, 
cantik: `Pertanyaan: cek cantik ${res}\nJawaban: ${anu}%`, 
jomok: `Pertanyaan: cek jomok ${res}\nJawaban: ${anu}%`, 
tolol: `Pertanyaan: cek tolol ${res}\nJawaban: ${anu}%`, 
bego: `Pertanyaan: cek bego ${res}\nJawaban: ${anu}%`, 
pintar: `Pertanyaan: cek pintar ${res}\nJawaban: ${anu}%`, 
bodoh: `Pertanyaan: cek bodoh ${res}\nJawaban: ${anu}%`, 
males: `Pertanyaan: cek males ${res}\nJawaban: ${anu}%`, 
takut: `Pertanyaan: cek takut ${res}\nJawaban: ${anu}%`, 
berani: `Pertanyaan: cek berani ${res}\nJawaban: ${anu}%`, 
baik: `Pertanyaan: cek baik ${res}\nJawaban: ${anu}%`, 
jahat: `Pertanyaan: cek jahat ${res}\nJawaban: ${anu}%`, 
asik: `Pertanyaan: cek asik ${res}\nJawaban: ${anu}%`, 
ngeselin: `Pertanyaan: cek ngeselin ${res}\nJawaban: ${anu}%`, 
gila: `Pertanyaan: cek gila ${res}\nJawaban: ${anu}%`, 
hoki: `Pertanyaan: cek hoki ${res}\nJawaban: ${anu}%`, 
lesbi: `Pertanyaan: cek lesbi ${res}\nJawaban: ${anu}%`,
kuat: `Pertanyaan: cek kuat ${res}\nJawaban: ${anu}%`, 
setia: `Pertanyaan: cek setia ${res}\nJawaban: ${anu}%`, 
alay: `Pertanyaan: cek alay ${res}\nJawaban: ${anu}%`, 
waras: `Pertanyaan: cek waras ${res}\nJawaban: ${anu}%`, 
iri: `Pertanyaan: cek iri ${res}\nJawaban: ${anu}%`, 
goblok: `Pertanyaan: cek goblok ${res}\nJawaban: ${anu}%`, 
jelek: `Pertanyaan: cek jelek ${res}\nJawaban: ${anu}%`, 
babi: `Pertanyaan: cek babi ${res}\nJawaban: ${anu}%`, 
beban: `Pertanyaan: cek beban ${res}\nJawaban: ${anu}%`, 
anjing: `Pertanyaan: cek anjing ${res}\nJawaban: ${anu}%`, 
nolep: `Pertanyaan: cek nolep ${res}\nJawaban: ${anu}%`, 
haran: `Pertanyaan: cek haran ${res}\nJawaban: ${anu}%`, 
fakboy: `Pertanyaan: cek fakboy ${res}\nJawaban: ${anu}%`, 
fakgirl: `Pertanyaan: cek fakgirl ${res}\nJawaban: ${anu}%`, 
sange: `Pertanyaan: cek sange ${res}\nJawaban: ${anu}%`, 
alim: `Pertanyaan: cek alim ${res}\nJawaban: ${anu}%`, 
keren: `Pertanyaan: cek keren ${res}\nJawaban: ${anu}%`, 
wibu: `Pertanyaan: cek wibu ${res}\nJawaban: ${anu}%`, 
baper: `Pertanyaan: cek baper ${res}\nJawaban: ${anu}%`, 
kul: `Pertanyaan: cek kul ${res}\nJawaban: ${anu}%`,
cool: `Pertanyaan: cek cool ${res}\nJawaban: ${anu}%`
}
return eval(`result.${command.replace("cek", "").trim()}`) 
	}
exports.cekjomok = (res, desc) => {
	let anu = Math.floor((Math.random() * 100) + 1)
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
exports.tomp4 = () => {
	return `Konversi weph ke video`
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
exports.exif = () => {
	return `Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`
	}
exports.ppcp = () => {
	return anu = [
`Couple cowo`, 
`Couple cewe`
]
	}
exports.coffe = () => {
	return `☕ Kopi acak`
	}
exports.wallp = (result) => {
	return `❑ Judul : ${result.title}\n❑ Kategori : ${result.type}\n❑ Detail : ${result.source}\n❑ Url Media : ${result.image[2] || result.image[1] || result.image[0]}`
	}
exports.wikimedia = (result) => {
	return `❑ Judul : ${result.title}\n❑ Sumber : ${result.source}\n❑ Url Media : ${result.image}`
	}
exports.katakata = (anu) => {
	return anu = [
`*Author*: ${anu.hasil.author}\n*Quotes*: "${anu.hasil.quotes}"`
]
	}
exports.primbon = (anu) => {
	return anu = [
`❑ *Nomor HP :* ${anu.message.nomer_hp}\n❑ *Angka Shuzi :* ${anu.message.angka_shuzi}\n❑ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n❑ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, 
`⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`,
`❑ *Nama Anda :* ${anu.message.nama_anda.nama}\n❑ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n❑ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n❑ *Hasil :* ${anu.message.result}\n❑ *Catatan :* ${anu.message.catatan}`, 
`❑ *Nama Anda :* ${anu.message.nama_anda.nama}\n❑ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n❑ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n❑ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n❑ *Hasil :* ${anu.message.result}\n❑ *Catatan :* ${anu.message.catatan}`, 
`❑ *Nama Suami :* ${anu.message.suami.nama}\n❑ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n❑ *Nama Istri :* ${anu.message.istri.nama}\n❑ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n❑ *Hasil :* ${anu.message.result}\n❑ *Catatan :* ${anu.message.catatan}`, 
`❑ *Nama Anda :* ${anu.message.nama_anda.nama}\n❑ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n❑ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n❑ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\ni❑ *Sisi Positif :* ${anu.message.sisi_positif}\n❑ *Sisi Negatif :* ${anu.message.sisi_negatif}\n❑ *Catatan :* ${anu.message.catatan}`, 
`❑ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, 
`❑ *Nama :* ${anu.message.nama}\n❑ *Lahir :* ${anu.message.tgl_lahir}\n❑ *Life Path :* ${anu.message.life_path}\n❑ *Destiny :* ${anu.message.destiny}\n❑ *Destiny Desire :* ${anu.message.destiny_desire}\n❑ *Personality :* ${anu.message.personality}\n❑ *Persentase :* ${anu.message.persentase_kecocokan}`, 
`❑ *Nama Anda :* ${anu.message.nama_anda}\n❑ *Nama Pasangan :* ${anu.message.nama_pasangan}\n❑ *Sisi Positif :* ${anu.message.sisi_positif}\n❑ *Sisi Negatif :* ${anu.message.sisi_negatif}`, 
`❑ *Tanggal Pernikahan :* ${anu.message.tanggal}\n❑ *karakteristik :* ${anu.message.karakteristik}`, 
`❑ *Lahir :* ${anu.message.hari_lahir}\n❑ *Usaha :* ${anu.message.usaha}`, 
`❑ *Lahir :* ${anu.message.hari_lahir}\n❑ *Rezeki :* ${anu.message.rejeki}\n❑ *Catatan :* ${anu.message.catatan}`, 
`⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, 
`❑ *Analisa :* ${anu.message.analisa}\n❑ *Angka Akar :* ${anu.message.angka_akar}\n❑ *Sifat :* ${anu.message.sifat}\n❑ *Elemen :* ${anu.message.elemen}\n❑ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, 
`❑ *Analisa :* ${anu.message.analisa}\n❑ *Sektor :* ${anu.message.sektor}\n❑ *Elemen :* ${anu.message.elemen}\n❑ *Catatan :* ${anu.message.catatan}`, 
`⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, 
`❑ *Nama :* ${anu.message.nama}\n❑ *Lahir :* ${anu.message.tahun_lahir}\n❑ *Gender :* ${anu.message.jenis_kelamin}\n❑ *Angka Kua :* ${anu.message.angka_kua}\n❑ *Kelompok :* ${anu.message.kelompok}\n❑ *Karakter :* ${anu.message.karakter}\n❑ *Sektor Baik :* ${anu.message.sektor_baik}\n❑ *Sektor Buruk :* ${anu.message.sektor_buruk}`
]
	}
exports.primbon2 = (anu) => {
	return anu = [
`❑ *Lahir :* ${anu.message.tgl_lahir}\n❑ *Kala Tinantang :* ${anu.message.kala_tinantang}\n❑ *Info :* ${anu.message.info}\n❑ *Catatan :* ${anu.message.catatan}`, 
`❑ *Lahir :* ${anu.message.tgl_lahir}\n❑ *Hasil :* ${anu.message.result}\n❑ *Info :* ${anu.message.info}\n❑ *Catatan :* ${anu.message.catatan}`, 
`❑ *Hari Lahir :* ${anu.message.hari_lahir}\n❑ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n❑ *Hari Naas :* ${anu.message.hari_naas}\n❑ *Info :* ${anu.message.catatan}\n❑ *Catatan :* ${anu.message.info}`, 
`❑ *Hari Lahir :* ${anu.message.hari_lahir}\n❑ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n❑ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, 
`❑ *Hari Lahir :* ${anu.message.hari_lahir}\n❑ *tanggal Lahir :* ${anu.message.tgl_lahir}\n❑ *Arah Rezeki :* ${anu.message.arah_rejeki}\n❑ *Catatan :* ${anu.message.catatan}`, 
`❑ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, 
`❑ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, 
`❑ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, 
`❑ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, 
`❑ *Tanggal :* ${anu.message.tgl_memancing}\n❑ *Hasil :* ${anu.message.result}\n❑ *Catatan :* ${anu.message.catatan}`, 
`⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`
]
	}
exports.jadibot = (codes) => {
	return anu = [
`Kode pairing kamu adalah: ${codes}`, 
`Petunjuk menggunakan pairing code:\nKeluar dari chat ini ==> klik titik tiga yang ada di pojok kanan atas ==> klik perangkat tertaut ==> klik tautkan perangkat ==> klik "taut menggunakan nomor telepon saja" ==> masukan kode pairing`
]
	}
exports.stopjadibot = () => {
	return anu = [
`Anda belum menjadi bagian dari bot ini`, 
`Logged out...`, 
`Sukses menghapus anda dari bagian bot ini`
]
	}
exports.wangy = (wangy, wangi) => {
	return `${wangy} ${wangy} ${wangy} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${wangy} wangyy aku mau nyiumin aroma wangynya ${wangy} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${wangy} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${wangy} AAAAA LUCCUUUUUUUUUUUUUUU............ ${wangy} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${wangy} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${wangy} gw ... ${wangy} di laptop ngeliatin gw, ${wangy} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${wangi} aku gak mau merelakan ${wangy} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${wangy} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
	}
exports.spam = () => {
	return anu = [
`Masukan nomor, pesan dan jumlah ${prefix + command} nomor|pesan|jumlah\n\n${prefix + command}${global.owner[0]}|slemek|10`, 
`Jumlah tidak boleh lebih dari 100!`
]
	}
exports.totalfitur = (total_fitur) => {
	return `Total fitur bot ini adalah *${total_fitur}*`
	}
exports.servermc = (anu) => {
	return `❑ Server IP: ${anu.host}:${anu.port}\n❑ Motd: ${anu.motd.clean}\n\n❑ Server Address: ${anu.ip_address}\n❑ Online: ${anu.players.online}/${anu.players.max}\n❑ Version: ${anu.version.name}`
	}
exports.switch = (command) => {
	return anu = [
`${command} telah di nyalakan`, 
`${command} sudah di nyalakan sebelumnya`, 
`${command} telah di matikan`, 
`${command} telah di matikan sebelumnya`, 
`${command} mati`
]
	}
exports.zodiak = (anu) => {
	return anu = [
	`⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, 
	`⭔ *Hasil :* ${anu.message}`
]
	}
exports.tiktok = (anu) => {
	return anu = [
`❑ Nama Pengguna: ${anu.hasil.username}\n❑ Suka: ${anu.hasil.like}\n❑ Komen: ${anu.hasil.comment}\n❑ Bagikan: ${anu.hasil.share}\n\n❑ Dekripsi: ${anu.hasil.deskripsi}`
]
	}
exports.search = () => {
	return anu = [
`*Pencarian Happy Mod*`, 
`*Pencarian Resep*`, 
`*Style teks*`
]
	}	
exports.searchres = (i) => {
	return anu = [
`❑ Judul: ${i.judul}\n`, 
`❑ Rating: ${i.rating}\n`, 
`❑ Link: ${i.link}\n\n────────────────────\n\n`, `Resep Dibawah\n❑ Judul: ${i.judul_nya}\n❑ Waktu : ${i.waktu_nya}\n❑ Hasil : ${i.hasil_nya}\n❑ Tingkat Kesulitan : ${i.tingkat_kesulitan}\n❑ Bahan :\n${i.bahan_nya}`, 
`❑ Url: ${i.link}\n`, 
`❑ Thumbnail Url: ${i.thumb}`,
`❑ Label: ${i.label}\n`, 
`❑ Date: ${i.date}\n`, 
`❑ Judul: ${i.title}\n\n`, 
]
	}
exports.stalk = (aj) => {
	return anu = [
`Github Stalker\n\n❑ Username : ${aj.username}\n❑ Nickname : ${aj.nickname}\n❑ Bio : ${aj.bio}\n❑ Id : ${aj.id}\n❑ Nodeid : ${aj.nodeId}\n❑ Url Profile : ${aj.profile_pic}\n❑ Url Github : ${aj.url}\n❑ Type : ${aj.type}\n❑ Admin : ${aj.admin}\n❑ Company : ${aj.company}\n❑ Blog : ${aj.blog}\n❑ Location : ${aj.location}\n❑ Email : ${aj.email}\n❑ Public Repo : ${aj.public_repo}\n❑ Public Gists : ${aj.public_gists}\n❑ Followers : ${aj.followers}\n❑ Following : ${aj.following}\n❑ Created At : ${aj.ceated_at}\n❑ Updated At : ${aj.updated_at}`, 
`*Instagram Stalker*\n❑ Full name : ${aj.fullname}\n❑ Username : ${aj.username}\n❑ Post : ${aj.post}\n❑ Followers : ${aj.followers}\n❑ Following : ${aj.following}\n❑ Bio : ${aj.bio}`
]
	}
exports.kisahnabi = (anu) => {
	return `❑ Nama: ${anu.name}\n❑ Umur: ${anu.usia}\n❑ Tahun kelahiran: ${anu.thn_kelahiran}\n\n${anu.description}`
	}
exports.tagall = (q) => {
	return `══✪〘 *👥 Tag All* 〙✪══\n \n ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
	}
exports.group = () => {
	return anu = [
`Sukses Menutup Group`, 
`Sukses Membuka Group`, 
`Silahkan Dipilih, I Hope Your Happy!`, 
`Sukses Membuka Edit Info Group`, 
`Sukses Menutup Edit Info Group`
]
	}
exports.editbot = (text) => {
	return anu = [
`Sukses mengubah nama bot menjadi "${text}"`, 
`Sukses mengubah bio bot menjadi "${text}"`
]
	}
exports.news = (anu) => {
	return anu = [
`❑ Wilayah: ${anu.result.wilayah}\n\n❑ Potensi: ${anu.result.potensi}\n\n❑ Tanggal: ${anu.result.tanggal}\n❑ Jam: ${anu.result.jam}\n❑ Magnitude: ${anu.result.magnitude}\n❑ Kedalaman: ${anu.result.kedalaman}\n❑ Lintang: ${anu.result.lintang}\n❑ Bujur: ${anu.result.bujur}`, 

]
	}
exports.newstitle = () => {
	return anu = [
`Info Gempa`, 
`Berita CNN`, 
`Berita Antara`,
`Berita CNB Indonesia`
]
	}



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
