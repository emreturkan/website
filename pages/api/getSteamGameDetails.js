import fetch from 'node-fetch'

export default async function handler(req, res) {
	const {appId} = req.query

	const response = await fetch(
		`http://store.steampowered.com/api/appdetails?appids=${appId}`
	)
	const data = await response.json()

	res.status(200).json(data)
}
