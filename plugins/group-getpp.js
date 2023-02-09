let handler = async(m) => {
	let who, pp
	if (m.isGroup) who = m.quoted ? m.quoted.sender : m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
	else who = m.quoted ? m.quoted.sender : m.chat
	try {
		try { pp = await conn.profilePictureUrl(who, 'image') }
		catch { pp = './src/avatar_contact.png' }
		await conn.sendFile(m.chat, pp, '', `pp from @${who.split`@`[0]}`, m, false, { mentions: [who] })
	} catch (e) {
		console.log(e)
		m.reply(`Gagal mengambil pp user.`)
	}
}

handler.menugroup = ['getprofile @tag']
handler.tagsgroup = ['group']
handler.command = /^(get(pp|profile)(user)?)$/i

export default handler