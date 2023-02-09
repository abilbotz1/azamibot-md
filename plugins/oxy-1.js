import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Example use *${usedPrefix + command} BunnyWalker*`
	try {
		let fimg = await fetch(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${apilol}&text=${encodeURIComponent(text)}`)
		if (!fimg.ok) throw new e()
		let fimgb = Buffer.from(await fimg.arrayBuffer())
		await conn.sendFile(m.chat, fimgb, '', `_Photo Oxy : ${command}_`, m)
	} catch (e) {
		m.reply(`Terjadi kesalahan, coba lagi nanti.`)
	}
}

handler.menuoxy = ['shadow','cup','cup1','romance','smoke','burnpaper','lovemessage','undergrass','love','coffe','woodheart','woodenboard','summer3d','wolfmetal','nature3d','underwater','golderrose','summernature','fallleaves','flamming','harrypotter','carvedwood'].map(v => v + ' <text>')
handler.tagsoxy = ['search']
handler.command = /^(shadow|cup|cup1|romance|smoke|burnpaper|lovemessage|undergrass|love|coffe|woodheart|woodenboard|summer3d|wolfmetal|nature3d|underwater|golderrose|summernature|fallleaves|flamming|harrypotter|carvedwood)$/i

handler.premium = true
handler.limit = true

export default handler