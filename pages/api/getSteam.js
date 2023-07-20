import fetch from 'node-fetch'

export default async function handler(req, res) {
	const response = await fetch(
		'https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=AC3C0E07DBCD5E052E8DE58912F449B4&steamid=76561198369655479&format=json'
	)
	const data = await response.json()

	res.status(200).json(data)
}
