const fs = require('fs')

const config = {
    owner: "638", // Ganti Number Kalian agar bisa mengakses bot
    botNumber: "628", // Ganti Number Kalian agar bisa mengakses bot
    setPair: "DAPZYYYY",
    thumbUrl: "https://files.catbox.moe/tlbp3k.jpg",
    session: "sessions",
    status: {
        public: true, // Ubah Ke false Jika Ingin mode self
        terminal: true, // Jangan di Ubah ke false, kalo gk mau pake qr code
        reactsw: false, // Bebas Ubah, true Auto sw otomatis
    },
    message: {
        owner: "｢ ACCESS DENIED ｣",
        group: "Ketiknya Didalam Group Yang Mau Di Bug Bego.",
        admin: "｢ ACCESS DENIED ｣",
        private: "this is specifically for private chat"
    },
    settings: {
        title: "ᐧ̤𝐃𝐚𝐩𝐳𝐲𝐌𝐨𝐝𝐬",
        packname: '🩸 --ᐧ̤𝐃𝐚𝐩𝐳𝐲 - 𝐕𝟏𝟑',
        description: "This Script By DapzyMods",
        author: 'https://telegram.com/kenzxx4Note',
        footer: "ジャス - DapzyOfc`"
    },
    newsletter: {
        name: "- Dapzy4Note",
        id: "120363404314172064@newsletter"
    },
    socialMedia: {
        YouTube: "https://youtube.com/@ColllBangetttWkwkkwk",
        GitHub: "https://github.com/kiuur",
        Telegram: "https://t.me/kenzxx4Note",
        ChannelWA: "https://whatsapp.com/channel/0029VbBFQNb17En3MAIHaU3R"
    }
}

module.exports = config;

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
