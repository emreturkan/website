import fetch from 'node-fetch'

export default async function handler(req, res) {
	const response = await fetch(
		`https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=${process.env.NEXT_PUBLIC_STEAM_API}&steamid=${process.env.NEXT_PUBLIC_STEAM_ID}&format=json`
	)
	const data = await response.json()

	res.status(200).json(data)
}
