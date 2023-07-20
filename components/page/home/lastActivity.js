import React, {useEffect, useState} from 'react'
import {Card} from '@/components/ui/card'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'

import Image from 'next/image'
const LastActivity = () => {
	const [lastGame, setLastGame] = useState(null)
	const [lastMovie, setLastMovie] = useState(null)
	const getSteam = () => {
		fetch(
			'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=AC3C0E07DBCD5E052E8DE58912F449B4&steamid=76561198369655479&format=json'
		)
			.then((res) => res.json())
			.then((data) => {
				const filteredData = data.response.games.filter(
					(game) => game.playtime_2weeks > 1
				)

				let mostRecentGame = filteredData[0]

				for (let i = 1; i < filteredData.length; i++) {
					if (
						filteredData[i].rtime_last_played > mostRecentGame.rtime_last_played
					) {
						mostRecentGame = filteredData[i]
					}
				}

				fetch(
					`http://store.steampowered.com/api/appdetails?appids=${mostRecentGame.appid}`
				)
					.then((res) => res.json())
					.then((game) => setLastGame(game))
			})
	}

	const getMovie = () => {
		fetch(
			'https://api.themoviedb.org/3/account/9850288/rated/movies?api_key=9d107d4813dc3bd9f2afaa908e7fd901&language=tr-TR&session_id=b12ccc4125d883d5069b30b5c06cf1a9660fa12c&sort_by=created_at.desc'
		)
			.then((res) => res.json())
			.then((data) => setLastMovie(data.results[0]))
	}

	useEffect(() => {
		getSteam()
		getMovie()
	}, [])

	const gameData = Object.values(lastGame || {})[0]?.data
	console.log(gameData)
	console.log(lastMovie)

	return (
		<section className="max-w-xl mx-auto px-8 py-2 mt-12 md:px-0 md:py-0 md:mt-20 mb-10 ">
			<h2 className="mt-10 text-gray-200 scroll-m-20 border-b border-gray-600 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
				Son Aktivitelerim
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-5">
				<Card className="bg-transparent  mt-5 text-white cursor-pointer border-gray-500 hover:border-gray-100 transition-all">
					<div className="flex items-center space-x-6 p-2 ">
						<Image
							className="rounded-md w-32 md:w-[100px] h-20 "
							objectFit="cover"
							src={gameData?.capsule_image}
							alt={gameData?.name}
							width={200}
							height={200}
						/>
						<div className="grid grid-cols-1 h-[85px] content-between">
							<h2 className="font-bold text-lg">{gameData?.name}</h2>
							<div className="flex items-center  space-x-1">
								<span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
									Aksiyon
								</span>
								<span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
									Macera
								</span>
							</div>
						</div>
					</div>
				</Card>
				<Card className="bg-transparent  relative  mt-5 text-white cursor-pointer border-gray-500 hover:border-gray-100 transition-all">
					<div className="absolute -top-3 -right-2">
						<TooltipProvider className="!absolute">
							<Tooltip>
								<TooltipTrigger>
									<span className="bg-gray-200  text-gray-800 text-sm font-medium mr-2 px-2 py-0.5 rounded ">
										{lastMovie?.rating}
									</span>
								</TooltipTrigger>
								<TooltipContent className="">Benim Puanım</TooltipContent>
							</Tooltip>
						</TooltipProvider>

						<TooltipProvider className="!absolute">
							<Tooltip>
								<TooltipTrigger>
									<span className="bg-gray-200  text-gray-800 text-sm font-medium mr-2 px-2 py-0.5 rounded ">
										{Math.round(lastMovie?.vote_average)}
									</span>
								</TooltipTrigger>
								<TooltipContent className="">TMDB Puanı</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>
					<div className="flex items-center space-x-6 p-2 ">
						<Image
							className="rounded-md w-32 md:w-[100px] h-20 "
							objectFit="cover"
							src={`https://image.tmdb.org/t/p/w500${lastMovie?.poster_path}`}
							alt={lastMovie?.original_title}
							width={200}
							height={200}
						/>
						<div className="grid grid-cols-1 h-[85px] content-between">
							<h2 className="font-bold text-lg">{lastMovie?.original_title}</h2>
							<div className="flex items-center  space-x-1">
								<span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
									Aksiyon
								</span>
								<span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
									Macera
								</span>
							</div>
						</div>
					</div>
				</Card>
			</div>
		</section>
	)
}

export default LastActivity
