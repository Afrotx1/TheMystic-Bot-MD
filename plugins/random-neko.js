import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
/*let ne = await (await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')).text()
let nek = ne.split('\n')
let neko = await nek[Math.floor(Math.random() * nek.length)]*/
let res = await fetch(`https://api.anythom.project.theh2so4.xyz/api/sfw/neko`)
let json = await res.json()
let neko = json.result  
if (neko == '') throw 'Error'
conn.sendButton(m.chat, 'Nyaww~ 🐾💗', wm, neko, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]],m)}
handler.command = /^(neko)$/i
handler.tags = ['anime']
handler.help = ['neko']
export default handler
