const fs = require("fs");
const chalk = require("chalk")
global.owner = ['6283843362676']
global.ALmdjpg = [
    'https://i.ibb.co/TgSLJxr/e5d98b50efd91b142977a.jpg',
    'https://telegra.ph/file/5db2f0315bcd4c3ab665a.jpg',
    'https://telegra.ph/file/dd14e4d2a3428e12fed9e.jpg',
    'https://telegra.ph/file/58c9c00997f02581d4985.jpg',
    'https://telegra.ph/file/0fba7b34da419a8bb8641.jpg',
    'https://telegra.ph/file/9475f8bc15bba57619854.jpg',
    'https://telegra.ph/file/3d0ab88fdfe1b479f956c.jpg',
    'https://telegra.ph/file/91353b2e74e98ac5295ef.jpg',
    'https://telegra.ph/file/1a34e5b57d41fa94946c1.jpg',
    'https://telegra.ph/file/021e2c345a85c8d65d286.jpg',
    'https://telegra.ph/file/c9e1ca86920bd6a47e0e9.jpg',
    'https://telegra.ph/file/f03249cea7c2933634765.jpg',
    'https://telegra.ph/file/7ace723061593dceeaaaa.jpg',
    'https://telegra.ph/file/a5179f53c894696c012e4.jpg',
    'https://telegra.ph/file/20e56a270477950e6395a.jpg',
    'https://telegra.ph/file/275b2e42f1a39d51d94d8.jpg',
    'https://telegra.ph/file/3074faccea40fd53f658c.jpg',
    'https://telegra.ph/file/29cae013f55fdbc7f7123.jpg',
    'https://telegra.ph/file/6877f86f35d68bd8c10a4.jpg'
]
global.info = {
  reg: 'Maaf anda belum terdaftar di database mohon daftar terlebih dahulu \n ketik .daftar untuk mendaftar',
  prem: 'Maaf fitur ini khusus untuk pengguna premium\nbeli premium di https://wa.me/6283843362676',
  own: 'Maaf fitur ini khusus untuk Owner \n beli Owner di https://wa.me/6283843362676'
};

global.openai = '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'  //api key bisa didapatkan dari https://platform.openai.com/api-keys
wagc = 'https://chat.whatsapp.com/LcHcJf4VwTcCDn0OandM6w'
sgc = 'https://chat.whatsapp.com/LcHcJf4VwTcCDn0OandM6w'
global.botname = 'ALMD'
global.author = 'Alan Dika Saputra'
global.packname = "By AL Botz MD"
global.wm = "AL STORE"
global.psaweria = 'https://saweria.co/Akazamd'
global.autoTyping = true 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
