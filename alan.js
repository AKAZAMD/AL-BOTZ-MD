/*
aLan md not famoos
*/
require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
const fs = require("fs");
const util = require("util");
const { youtubedl, youtubedlv2, youtubeSearch } = require('scraper')
const chalk = require("chalk");
const moment = require("moment-timezone");
const spinnies = require('spinnies');
const figlet = require('figlet');
const ffmpeg = require('fluent-ffmpeg')
const OpenAI = require("openai");
const axios = require('axios')
const owner = JSON.parse(fs.readFileSync('./owner.json'))
const premium = JSON.parse(fs.readFileSync('./premium.json'))
const daftar = JSON.parse(fs.readFileSync("./register.json"))
const { uptotelegra } = require('./lib/upload')
const ytdl = require("ytdl-core")
const fetch = require('node-fetch')
const thumb = fs.readFileSync('./thumb.jpg')
const { clockString, parseMention, formatp, tanggal, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, format, reSize, generateProfilePicture, getRandom } = require('./lib/myfunc')
module.exports = conn = async (conn, m, chatUpdate, store) => {	
  try {
    const { type, quotedMsg, mentioned, now, fromMe } = m
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectzareply.selectedRowId : (m.mtype == 'templateButtonzareplyMessage') ? m.message.templateButtonzareplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectzareply.selectedRowId || m.text) : ''
        const budy = (typeof m.text == 'string' ? m.text : '')
var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/";
//=================================================//
            const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonzareplyMessage') && m.message.templateButtonzareplyMessage.selectedId ? m.message.templateButtonzareplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectzareply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectzareply.selectedRowId : ''
        const pes = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: ''
        const messagesC = pes.slice(0).trim()
    const isCmd2 = body.startsWith(prefix);
    const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const botNumber = await conn.decodeJid(conn.user.id);
    const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
     const isPrem =  [botNumber, ...premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
     const isReg =  [botNumber, ...daftar].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    const itsMe = m.sender == botNumber ? true : false;
    let text = (q = args.join(" "));
    const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isAudio = (type == 'audioMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
    // Group
    const groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat).catch((e) => {}) : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";
  const participants = m.isGroup ? await groupMetadata.participants : ''
  const arg = budy.trim().substring(budy.indexOf(" ") + 1);
    const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);
const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    	const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByzareply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
        const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
        const usernya = mentionByzareply ? mentionByzareply : mentionByTag[0]
        const Input = mentionByTag[0] ? mentionByTag[0] : mentionByzareply ? mentionByzareply : q ? numberQuery : false
    	const isEval = body.startsWith('=>')
    	const zareply = m.reply;
    const from = m.chat;
    const sender = m.sender;
    const mek = chatUpdate.messages[0];
    const color = (text, color) => {
      return !color ? chalk.green(text) : chalk.keyword(color)(text);
    };
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const FormData = require("form-data");
const Jimp = require("jimp");

async function processing(urlPath, method) {
  return new Promise(async (resolve, reject) => {
    const Methods = ["enhance"];
    method = Methods.includes(method) ? method : Methods[0];
    let buffer;
    const Form = new FormData();
    const scheme =
      "https" +
      "://" +
      "inferenceengine" +
      ".vyro" +
      ".ai/" +
      method;

    Form.append("model_version", 1, {
      "Content-Transfer-Encoding": "binary",
      contentType: "multipart/form-data; charset=uttf-8",
    });

    Form.append("image", Buffer.from(urlPath), {
      filename: "enhance_image_body.jpg",
      contentType: "image/jpeg",
    });

    Form.submit(
      {
        url: scheme,
        host: "inferenceengine" + ".vyro" + ".ai",
        path: "/" + method,
        protocol: "https:",
        headers: {
          "User-Agent": "okhttp/4.9.3",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip",
        },
      },
      function (err, res) {
        if (err) reject();
        const data = [];
        res
          .on("data", function (chunk, resp) {
            data.push(chunk);
          })
          .on("end", () => {
            resolve(Buffer.concat(data));
          });
        res.on("error", (e) => {
          reject();
        });
      }
    );
  });
}
let list = []
for (let i of owner) {
list.push({
	    	displayName: await conn.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await conn.getName(i)}\nFN:${await conn.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:AKAZAMD\nitem2.X-ABLabel:YouTube\nitem3.URL:https://github.com/AKAZAMD\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}

        const totalFitur = () =>{
            var mytext = fs.readFileSync("alan.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }	
const reply = (teks) => {
return conn.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `Al BOTZ MD`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": thumb,"thumbnail": thumb,"sourceUrl": `https://wa.me/6283843362676`}}}, { quoted:m})}
    // Push Message To Console
    let argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;

    if (isCmd2 && !m.isGroup) { console.log(chalk.black(chalk.bgWhite("[ Pesan ]")), color(argsLog, "turquoise"), chalk.magenta("From"), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`)); } else if (isCmd2 && m.isGroup) { console.log( chalk.black(chalk.bgWhite("[ Pesan ]")), color(argsLog, "turquoise"), chalk.magenta("From"), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`), chalk.blueBright("IN"), chalk.green(groupName) ); }
if (global.autoTyping) {
if (command) {
conn.sendPresenceUpdate('composing', from)
}
}
        //TIME
        const xtime = moment.tz('Asia/Jakarta').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Lolkata').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Lolkata').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var zatime = `selamat malam🌌`
 }
 if(time2 < "19:00:00"){
var zatime = `sore kak😁 `
 }
 if(time2 < "18:00:00"){
var zatime = `Sore kak 🌃`
 }
 if(time2 < "15:00:00"){
var zatime = `siang kak`
 }
 if(time2 < "11:00:00"){
var zatime = `pagi`
 }
 if(time2 < "05:00:00"){
var zatime = `anjir masih pagi cuy`
 } 
 function pickRandom(arr) {
  if (!arr || arr.length === 0) {
    return null; // Return null for empty or undefined array
  }

  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `akazamd`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

    if (isCmd2) {
      switch (command) {
case "help":
case "menu":
case "?":{
	if (!isReg) return zareply('kamu belum terdaftar di database tolong mendaftar terlebih dahulu ketik \n .daftar')
  ;
  const img2 = await pickRandom(global.ALmdjpg)
  let caption = `
  ╭──────•›「 *MENU* 」
  │  Halo ${pushname}! Welcome To Menu AlMd
  │ • *.menu*
  │ • *.allmenu*
  │ • *.downloader*
  │ • *.aimenu*
  │
  │──────•›「 *INFO BOTZ* 」
  │ Name: ${global.namebot}
  │ Fitur: ${totalFitur()}
  │ Lib: ${global.lib}
  │ Author: ${global.author}
  │ Date: ${time}
  ╰──────•›「 *MADE WITH AL* 」
  `;

  conn.sendMessage(m.chat, {
    image: await (await fetch(img2)).buffer(),
    mimetype: 'image/png',
    caption: caption.trim(),
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 1,
        title: 'Menu By Akaza',
        body: `yoi`,
        thumbnail: await (await fetch(img2)).buffer(),
        sourceId: 'https://api.alandikasaputra.repl.co',
        sourceUrl: global.psaweria
      }
    }
  }, { quoted: m });
  }
  break;
  case "downloader": {
  	let captionbre = `
  ╭──────•›「 *DOWNLOAD MENU* 」
  │ • *.play*
  │ • *.mediafire*
  │ • *.ytmp3*
  │ • *.ytmp4*
  │ • *.gdrive*
  │ • *.gitclone
  │ • *.tt*
  ╰──────•›「 *MADE WITH AL* 」
`
reply(captionbre.trim())
  	}
  break;
  case "aimenu": {
  	let captionbre = `
  ╭──────•›「 *AI MENU* 」
  │ • *.ai*
  │ • *.al*
  │ • *.img*
  │ • *.hd*
  ╰──────•›「 *MADE WITH AL* 」
`
reply(captionbre.trim())
  	}
  break;

case 'hapus': 
            case 'delete': 
            case 'del': 
            case 'd': {
            	if (!isPrem) return zareply(global.info.prem)
                if (!m.quoted) return false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return zareply('Pesan tersebut bukan dikirim oleh bot!')
                conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break;
case "allmenu":{
	if (!isReg) return zareply(global.info.reg)
  ;
  const img2 = await pickRandom(global.ALmdjpg)
  const imgnya = await pickRandom(global.ALmdjpg)
  let caption = `
  ╭──────•›「 *ALL MENU* 」
  │Halo ${pushname}! 
  │──────•›「 *AI MENU* 」
  │ • *.ai*
  │ • *.al*
  │ • *.hd*
  │ • *.img*
  │──────•›「 *DOWNLOAD MENU* 」
  │ • *.play*
  │ • *.ytmp4/.ytmp3*
  │ • *.tiktok/.igdl*
  │ • *.gdrive*
  │ • *.gitclone*
  │──────•›「 *OWNER MENU* 」
  │ • *.addowner/.delowner*
  │ • *.addprem/.delprem*
  │ • *.join/.leave*
  │ ──────•›「 *MAKER MENU* 」
  │ • *.attp/.ttp*
  │ • *.s/.sticker*
  │ ──────•›「 *NET MENU* 」
  │ • *.axios get/post*
  │ ──────•›「 *OTHER MENU* 」
  │ • *.hidetag/.totag*
  │ • *.ping*
  │ • *.tagall*
  │ • *.owner*
  │ • *.totalfitur*
  │ • *.daftar/.unreg*
  │ • *.listprem*
  │ • *.sc*
  ╰──────•›「 *MADE WITH AL* 」
  `;

  conn.sendMessage(m.chat, {
    image: await (await fetch(imgnya)).buffer(),
    mimetype: 'image/png',
    caption: caption.trim(),
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 1,
        title: 'Menu By Akaza',
        body: `yoi`,
        thumbnail: await (await fetch(img2)).buffer(),
        renderLargerThumbnail: true,
        mediaUrl: img2,
        sourceId: 'wa.me/6283843362676',
        sourceUrl: global.psaweria
      }
    }
  }, { quoted: m });
  }
  break;
case 'git': case 'gitclone': {
                if (!args[0]) return reply(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/AKAZAMD//tes`)
                if (!isUrl(args[0]) && !args[0].includes('github.com')) return newReply(`Link invalid!!`)
                let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
                let [user, repo] = args[0].match(regex1) || []
                repo = repo.replace(/.git$/, '')
                let url = `https://api.github.com/repos/${user}/${repo}/zipball`
                let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
                conn.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
            }       
            break
case "ytmp3": {
	if (!args[0]) return reply('input your youtube link');
  let hasil = await youtubedl(args[0])
  let caption = `*-Downloader Youtube Dl-*
  *|Judul: ${hasil.title}*
  *|Id: ${hasil.id}*`
 await conn.sendMessage(m.chat, {
    audio: { url: hasil.audio['128kpbs'].download() },
    mimetype: 'audio/mp3',
    contextInfo: {
        externalAdReply: {
            title: 'akaza',
            body: caption.trim(),
            thumbnailUrl: hasil.thumbnail,
            sourceUrl: args[0],
            mediaType: 1,
            showAdAttribution: true,
            renderLargerThumbnail: true
        }
    }
}, { quoted: m })
}
break;
case 'hidetag': {
	if (!isPrem) return reply(global.info.prem)
                if (!m.isGroup) return reply('kushus grub')
                conn.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            }
            break
            case 'totag': {
            	if (!isPrem) return reply(global.info.prem)
               if (!m.isGroup) return m.reply('kushus group')
               if (!m.quoted) return `Reply pesan dengan caption ${prefix + command}`
               conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
case "ping": {
	if (!isReg) return reply(global.info.reg)
	const os = require ('os')
	const speed = require('performance-now')
            const used = process.memoryUsage()
            let timestamp = speed()
            let latensi = speed() - timestamp
            let neww = performance.now()
            let oldd = performance.now()
            let respon = `Kecepatan Respon ${latensi.toFixed(4)} _Second_ 

_Info Server_
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
`.trim()
reply(respon.trim())
        }
        break
        
case "ytmp4":{
	if (!args[0]) throw 'Urlnya Mana Bang? contoh .ytmp4 linknya';
  m.reply('Tunggu sebentar...');
  let v = args[0];
  const data = await youtubedl(v);
    let caption = `Ytmp4 by Allmd\n${data.title}\n${data.duration}`;
  const videoUrl = await data.video['360p'].download(); 
  
  conn.sendMessage(m.chat, {
                        video: {
                            url: videoUrl
                        },
                        caption: `noh`,
                        fileLength: "999",
                        viewOnce: false
                    }, {
                        quoted: m
                    })
}
break;
        case 'totalfitur':
        case 'fitur': 
            reply(`Total Fitur Allmd Adalah ${totalFitur()}`)
        break
case "mediafire":
case "mdfr":{
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk/file`
 const { mediafiredl } = require('scraper')
   let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
*💌 Name:* ${filename}
*📊 Size:* ${filesizeH}
*🗂️ Extension:* ${ext}
*📨 Uploaded:* ${aploud}
`.trim()
    m.reply(caption)
    await conn.sendFile(m.chat, url, filename, 'ni bang file nya', m, null, { mimetype: ext, asDocument: true })
    }
    break;
case "play": {
	if (!isReg) return reply(global.info.reg)
  try {
    if (!text) return zareply(`Gunakan contoh ${command} Dj dalinda`);


    const search = await youtubeSearch(text);

    if (!search || !search.video || !search.video[0]) {
      throw 'Video Tidak Ditemukan, Coba Judul Lain';
    }

    const vid = search.video[0];
    const { authorName, title, thumbnail, duration, viewH, publishedTime, url, description, size } = vid;

    const caption = `
╭─────〔 A K A Z A  P L A Y 〕─────╮
⭐ Judul: ${title}
🕒 Durasi: ${duration}
👁️ Views: ${viewH}
📅 Upload: ${publishedTime}
🔗 Link: ${url}
📝 Deskripsi: ${description}
📏 Ukuran: ${size}
🔗 URL Video: ${url}
🎤 Nama Author: ${authorName}
╰─────────────────────╯
`;


    ;
conn.sendImage(m.chat, thumbnail, caption, m)

    const yt = await youtubedl(url).catch(async (_) => await youtubedlv2(url));
    const audioLink = await yt.audio['128kbps'].download();
    const doc = {
      audio: {
        url: audioLink,
      },
      mimetype: 'audio/mp4',
      fileName: `${title}.mp4`,
    };

    // Kirim audio ke pengguna
    return conn.sendMessage(m.chat, doc, { quoted: m });
  } catch (error) {
    console.error(error);
    reply('Terjadi kesalahan. Silakan coba lagi nanti...,', error)
  }
}
break;

        case "ai": case "openai": case "chatgpt": case "ask":
        if (!isReg) return reply(global.info.reg)
 if (!isPrem) return zareply(global.info.prem)
 
 try {
if (global.openai === '') return zareply("Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file config.js\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys");
if (!text) return zareply(`Chat dengan AI.\n\nContoh:\n${command} Apa itu coding`)
const openai = new OpenAI({
        apiKey: global.openai, 
    });
const response = await await openai.completions.create({
model: "davinci-002",
prompt: text,
temperature: 0, 
max_tokens: 2048, // Jumlah maksimum token yang dihasilkan dalam penyelesaian. Sebagian besar model memiliki panjang konteks 2048 token (kecuali untuk model terbaru, yang mendukung 4096).
top_p: 1, // alternatif untuk pengambilan sampel dengan suhu, disebut pengambilan sampel nukleus
frequency_penalty: 0.3, // Angka antara -2.0 dan 2.0. Nilai positif menghukum token baru berdasarkan frekuensi yang ada dalam teks sejauh ini, mengurangi kemungkinan model untuk mengulang baris yang sama kata demi kata.
presence_penalty: 0 // Angka antara -2.0 dan 2.0. Nilai positif menghukum token baru berdasarkan apakah mereka muncul dalam teks sejauh ini, meningkatkan kemungkinan model untuk membicarakan topik baru.
});
zareply(`${response.choices[0].text}`);
} catch (error) {
if (error.response) {
console.log(error.response.status);
console.log(error.response.data);
console.log(`${error.response.status}\n\n${error.response.data}`);
} else {
console.log(error);
zareply("Maaf, sepertinya ada yang error :"+ error.message);
}
}
break
case "attp":
  if (!text) return zareply(`Example: .attp akaza`);
  ini_buffer = await getBuffer(`https://api.erdwpe.com/api/maker/attp?text=${text}`);
  conn.sendMessage(from, { sticker: ini_buffer }, { quoted: m });
  break;
case "ttp":
  if (!text) return zareply(`Example: .ttp akaza`);
  ini_buffer = await getBuffer(`https://api.erdwpe.com/api/maker/ttp?text=${text}`);
  conn.sendMessage(from, { sticker: ini_buffer }, { quoted: m });
  break;

//=========================================//========//========//
case "img":
case "ai-img":
case "image":
case "images":
case "dall-e":
case "dalle":
  if (!isPrem) return zareply(global.info.prem);
  try {
    if (global.openai === '') return zareply("Apikey limit exceeded");
    if (!args[0]) return zareply(`Generate image from AI.\n\nExample:\n${prefix + command} man riding horse|high`);

    const openai = new OpenAI({
      apiKey: global.openai,
    });

    const [prompt, options] = args[0].split('|');
    const size =
      options === 'high'
        ? '1024x1024'
        : options === 'medium'
        ? '512x512'
        : options === 'Low'
        ? '256x256'
        : '512x512';

    const wait = 'Please wait...';

    await m.reply(wait);
    const response = await openai.images.generate({
      prompt: prompt,
      n: 1,
      size: size,
    });

    conn.sendImage(m.chat, response['data'][0]['url'], args[0], m);
  } catch (error) {
    console.error(error);
    zareply(error.message || 'An error occurred.');
  }
  break;

case 'addowner':
if (!isCreator) return zareply('kushus owner')
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 628888888`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await conn.onWhatsApp(bnnd)
if (ceknye.length == 0) return reply(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('.//owner.json', JSON.stringify(owner))
reply(`Number ${bnnd} Has Become An Owner!!!`)

break
case 'owner': 
const repf = await conn.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Contact`, 
contacts: list }, mentions: [sender] }, { quoted: m })
conn.sendMessage(from, { text : `Hi @${sender.split("@")[0]}, Here is my handsome owner😇`, mentions: [sender]}, { quoted: repf })

break
case 'delowner':
if (!isCreator) return zareply('kushus owner')
if (!args[0]) return zareply(`Use ${prefix+command} nomor\nExample ${prefix+command} 62+++++`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./owner.json', JSON.stringify(owner))
zareply(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)

break
       case 'gdrive': {
		if (!args[0]) return zareply(`Enter the Google Drive link`)
	
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await zareply(`
≡ *Google Drive DL*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
	conn.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
	zareply('Error: Check link or try another link') 
  }
}
break
case "al": {
  try {
    if (!text) return m.reply('Harap berikan pertanyaan yang jelas.');

    if (!isPrem) {
      return zareply('Khusus untuk pelanggan premium.');
    }

    const now = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateInfo = now.toLocaleDateString('id-ID', dateOptions);

    const name = conn.getName(m.sender);
    const developerNumber = '6283843362676@s.whatsapp.net';

    const openai = new OpenAI({
      apiKey: global.openai,
    });

    const userMessage = `info: kamu mengetahui bahwa waktu saat ini adalah ${dateInfo}
info: kamu mengetahui bahwa setiap hari Minggu adalah hari libur untuk pelajar
info: kamu tahu kalo tag dan nama aku adalah = @${m.sender.split('@')[0]}
info: nomor orang yang sedang bertanya kepadamu adalah ${m.sender}
info: Kamu Tahu jika Nomor ${developerNumber} sama dengan Orang yang sedang bertanya berarti dia tuan mu
info: kamu adalah AlMD yang dibuat oleh Alan
info: kamu harus sangat rama ke orang, jika ada yang menghina kamu maka kamu bilang tidak boleh gitu bang
info: jika seseorang menyuruh untuk mengucapkan selamat atau apapun ke orang lain maka ucapkan lah
pertanyaan: ${text}`;

    const userMessages = [
      { role: 'user', content: userMessage },
      { role: 'system', content: 'aku adalag bot whatsapp yang di buat oleh alan' },
    ];

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: userMessages,
    });


    const quotedMessage = response.choices[0].message.content;

    conn.sendMessage(m.chat, {
      text: quotedMessage,
      contextInfo: {
        mentionedJid: participants.map(a => a.id),
        externalAdReply: {
          title: 'Akazamd',
          body: 'Chat OpenAI by akazamd',
          thumbnailUrl: pickRandom(global.ALmdjpg),
          sourceUrl: sgc,
          mediaType: 1,
          showAdAttribution: false,
          renderLargerThumbnail: true,
        },
      },
    }, { quoted: m });

  } catch (error) {
    m.reply('Terjadi kesalahan. cek apikey kamu', error);
  }
}
break;


case "axios": {
  if (!text || !args[0]) return m.reply('Masukkan method get/post dan link webnya. Contoh:\n .axios get|https://api.example.com');
  
  const [method, url] = args[0].split('|');
  
  if (!method || !url) return m.reply('Format yang dimasukkan tidak valid. Pastikan menggunakan format: method|url');

  try {
    const response = await axios[method.toLowerCase()](url);
    fs.writeFileSync('./data.txt', response.data);
    conn.sendMessage(m.chat, { document: fs.readFileSync('./data.txt'), fileName: "data.txt", mimetype: "text/plain" }, { quoted: m });
    reply(response.data)
  } catch (error) {
    console.error(error);
    m.reply('Terjadi kesalahan saat menjalankan permintaan Axios.');
  }
}
break;
case "igdl":
case "ig": {
	if (!args[0]) return zareply('masukan link ig nya bang');
	const { igdl } = require('./lib/igdl');
	let hasil = await igdl(args[0])
	let result = hasil.media;
	await reply(`info: ${hasil}`)
//	await conn.sendMessage(m.chat, { video: { url: result }, caption: 'ni bang' }, { quoted: m })
}
	break
        case 'shutdown': {
             if (!isCreator) return newReply(mess.owner)
			 zareply(`tidakk gw mau di matiinn😭\n\n\n\n\n\n\n\nbodo amat`)
             await sleep(3000)
             process.exit()
             }
        break
        case 'join': {
                if (!isCreator) return zareply('owner only')
                if (!text) return zareply('Masukkan Link Group!')
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return zareply('Link Invalid!')
                zareply("wet")
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await conn.groupAcceptInvite(result).then((res) => zareply(jsonformat(res))).catch((err) => zareply(jsonformat(err)))
        }
        break
        case 'leave': {
                if (!isCreator) return zareply('kushus owner')
                await conn.groupLeave(m.chat).then((res) => zareply(jsonformat(res))).catch((err) => zareply(jsonformat(err)))
        }
        break
   case 'tagall': {
   	
if (!m.isGroup) return zareply('kusus grup doang ')
if (!isPrem) return zareply('*khusus Premium*') 
me = m.sender
let teks = `TAGALL
 
 😶 *ORANG NYA:*  @${me.split('@')[0]}
  *Message : ${q ? q : 'no message'}*\n\n`
for (let mem of participants) {
teks += `🗿 @${mem.id.split('@')[0]}\n`
}
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':

 conngans = await fetch(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await conn.sendMessage(from, { audio: conngans, mimetype: 'audio/mp4', ptt: false, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6283843362676',
title: `Akazamd`,
sourceUrl: `https://wa.me/6283843362676`, 
thumbnail: thumb
}
}})
break
case 'bcimg': case 'bcimg': {
if (!isCreator) return zareply(global.info.own)

if (!text || !quoted) throw `please input text and reply image\n\nExample : ${prefix + command} pe`
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
zareply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 0.5} detik`)
let fotonibos = conn.downloadMediaMessage(quoted)
for (let i of anu) {
await sleep(500)
conn.sendImage(i, fotonibos, text, m)
    }
zareply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'bc': case 'bcgc': {
if (!isCreator) return zareply(global.info.own)

if (!text) throw `please input text\n\nExample : ${prefix + command} pe`
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
zareply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 0.5} detik`)
for (let i of anu) {
await sleep(100)
conn.sendMessage(m.chat, { text: text }, { quoted: m })
    }
zareply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case "tiktok":
case "tt":
case "ttdl": {
	    if (!args[0]) return reply('Uhm... URL-nya mana?')

    try {
        await reply('Tunggu sebentar kak, video sedang di download');

        const tiktokData = await tryServer1(args[0]);

        if (!tiktokData) {
            zareply('Gagal mendownload video!');
        }

        const videoURL = tiktokData.video.noWatermark;

        const videoURLWatermark = tiktokData.video.watermark;

        let ppTiktok = '';
        if (tiktokData.author && tiktokData.author.avatar) {
            ppTiktok = tiktokData.author.avatar;
        }

        const infonya_gan = `Judul: ${tiktokData.title}\nUpload: ${tiktokData.created_at}\n\nSTATUS:\n=====================\nLike = ${tiktokData.stats.likeCount}\nKomen = ${tiktokData.stats.commentCount}\nShare = ${tiktokData.stats.shareCount}\nViews = ${tiktokData.stats.playCount}\nSimpan = ${tiktokData.stats.saveCount}\n=====================\n\nUploader: ${tiktokData.author.name || 'Tidak ada informasi penulis'}\n(${tiktokData.author.unique_id} - https://www.tiktok.com/@${tiktokData.author.unique_id})\nBio: ${tiktokData.author.signature}\nLagu: ${tiktokData.music.play_url}\nResolusi: ${tiktokData.video.ratio}\nFoto Profile: ${ppTiktok}`;

        if (videoURL || videoURLWatermark) {
            await conn.sendMessage(m.chat, { video: { url: videoURL }, caption: `Ini kak videonya\n\n${infonya_gan}`}, {quoted:m});
            setTimeout(async () => {
                await conn.sendMessage(m.chat, { video: { url: videoURLWatermark }, caption: `Watermark Video Version Info:\n ${infonya_gan}` }, { quoted: m })
                await conn.sendMessage(m.chat, { audio: { url: tiktokData.music.play_url }, caption: " ni musik nya" }, { quoted: m })
            }, 5000);
        } else {
            reply('Tidak ada tautan video yang tersedia.');
        }
    } catch (error1) {
        reply(`error: ${error1}`)
    }
    async function tryServer1(url) {
    let tiklydownAPI = `https://api.tiklydown.eu.org/api/download?url=${url}`;
    let response = await axios.get(tiklydownAPI);
    return response.data;
}

}
break
case 's': case 'sticker': case 'stiker': {
if (!quoted) return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else {
reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break
case "hd": {
conn.hdr = conn.hdr ? conn.hdr : {}
  if (m.sender in conn.hdr)
    m.reply("Masih Ada Proses Yang Belum Selesai Kak, Silahkan Tunggu Sampai Selesai Yah >//<")
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || q.mediaType || ""
  if (!mime)
    throw `Fotonya Mana Kak?`
  if (!/image\/(jpe?g|png)/.test(mime))
    throw `Mime ${mime} tidak support`
  else conn.hdr[m.sender] = true;
  m.reply("Proses Kak...")
  let img = await conn.downloadMediaMessage(q)
  let error
  try {
    const This = await processing(img, "enhance")
    const Thus = await processing(This, "enhance")
    conn.sendImage(m.chat, Thus, " sudah jadi ni", m);
  } catch (er) {
    error = true
  } finally {
    if (error) {
      m.reply("Proses Gagal :(")
    }
    delete conn.hdr[m.sender]
  }
}
break;
case 'daftar':
let maudaftar = m.sender
daftar.push(maudaftar)
fs.writeFileSync('./register.json', JSON.stringify(daftar))
zareply(`Hali ${conn.getName(maudaftar)} selamat anda telah terdaftar😁`)
break
case 'unreg':
let mauunreg = m.sender
upi = owner.indexOf(mauunreg)
daftar.splice(upi, 1)
fs.writeFileSync('./register.json', JSON.stringify(daftar))
zareply(`Hali ${conn.getName(mauunreg)} selamat anda telah terunreg`)
break
//=================================================//
case 'addprem':
if (!isCreator) return zareply(global.info.prem)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 6283++++`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await conn.onWhatsApp(prrkek)
if (ceknya.length == 0) return zareply(`Enter a valid and registered number on WhatsApp!!!`)
premium.push(prrkek)
fs.writeFileSync('./premium.json', JSON.stringify(premium))
zareply(`The Number ${prrkek} Has Been Premium!`)
break
case 'delprem':
if (!isCreator) return reply(global.info.prem)
if (!args[0]) return zareply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
yaki = text.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(yaki)
premium.splice(unp, 1)
fs.writeFileSync('./premium.json', JSON.stringify(premium))
zareply(`Nomor ${yaki} Telah Di Hapus Dari Premium!!!`)
break
case 'listprem':
 teksooo = '*List Premium*\n\n'
for (let i of premium) {
teksooo += `- ${i}\n`
}
teksooo += `\n*Total : ${premium.length}*`
conn.sendMessage(from, { text: teksooo.trim() }, 'extendedTextMessage', { quoted:m, contextInfo: { "mentionedJid": premium } })
break

case "🗿": case "🗿🗿": case "🗿🗿🗿": case "🗿🗿🗿🗿":
let ini = "🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿";
zareply(ini);
break;
          case "sc": case "script": case "scbot":
           zareply("sc ini ga free ya beli wa.me/6283843362676");
          break
default: {

        if ([">", "eval", "=>"].some(a => m.command.toLowerCase().startsWith(a))) {

          if (!isCreator) return m.reply(global.info.own)

          let evalCmd = ""

          try {

            evalCmd = /await/i.test(m.res) ? eval("(async() => { " + m.res + " })()") : eval(m.res)

          } catch (e) {

            evalCmd = e

          }

          new Promise(async (resolve, reject) => {

            try {

              return resolve(evalCmd);

            } catch (err) {

              return reject(err)

            }

          })

            ?.then((res) => m.reply(util.format(res)))

            ?.catch((err) => m.reply(util.format(err)))

        }



        // exec

        if (["$", "exec"].some(a => m.command.toLowerCase().startsWith(a))) {

          if (!isCreator) return m.reply(global.info.own)

          try {

            exec(m.res, async (err, stdout) => {

              if (err) return m.reply(util.format(err))

              if (stdout) return m.reply(util.format(stdout))

            })

          } catch (e) {

            await m.reply(util.format(e))

          }

          if (isCmd2 && budy.toLowerCase() != undefined) {

            if (m.chat.endsWith("broadcast")) return;

            if (m.isBaileys) return;

            if (!budy.toLowerCase()) return;

            if (argsLog || (isCmd2 && !m.isGroup)) {

              // conn.sendReadReceipt(m.chat, m.sender, [m.key.id])

              zareply(`${prefix}${command} tidak tersedia`);

            } else if (argsLog || (isCmd2 && m.isGroup)) {

              // conn.sendReadReceipt(m.chat, m.sender, [m.key.id])

              zareply(`${prefix}${command} tidak tersedia`);

            }

          }

        }

      }

    }

  }

}





let file = require.resolve(__filename);

fs.watchFile(file, () => {

  fs.unwatchFile(file);

  console.log(chalk.magenta(`Update ${__filename}`));

  delete require.cache[file];

  require(file);

});