const fs = require('fs')
const chalk = require('chalk')

global.stickmenu = {
      "key": {
        "remoteJid": "0@s.whatsapp.net",
        "fromMe": false,
        "id": "A5BA1B6B16131E8BC8ABF98AF075A65F"
      },
      "message": {
        "stickerMessage": {
          "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m239/up-oil-image-0584045e-8c63-4323-a053-cad925827792?ccb=9-4&oh=01_AdSJAV_gFOQsGFPtxlNoY0BFn5W4O1lsJCMhkrQzle-fuA&oe=658A6A67&_nc_sid=000000&mms3=true",
          "fileSha256": "gu8OQF7h3Y9t3X69bexx3Bo6JEc0AYhyqFSqJ+Im88I=",
          "fileEncSha256": "42e9KkfCW2DvFzSoluTWbttNSM8B0gsqGHmIHYjUQDc=",
          "mediaKey": "8awlCVdDlWHlrWSm+69jNUaAzZX3GrAbnZ/93oNd9ag=",
          "mimetype": "image/webp",
          "height": 64,
          "width": 64,
          "directPath": "/o1/v/t62.7118-24/f1/m239/up-oil-image-0584045e-8c63-4323-a053-cad925827792?ccb=9-4&oh=01_AdQkyq09nw_PE033bDnp-l7ePz3Iq3bd_EDf_9K2TIypLg&oe=658A3227&_nc_sid=000000",
          "fileLength": "14040",
          "mediaKeyTimestamp": "1700974324",
          "isAnimated": false,
          "stickerSentTs": "1700975160707",
          "isAvatar": true
        }
      }
    }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
