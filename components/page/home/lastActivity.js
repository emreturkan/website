import React, {useEffect, useState} from 'react'
import {Card} from '@/components/ui/card'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'

import Image from 'next/image'
import {MovieRatingColor} from '@/utils/movieRatingColor'
const LastActivity = () => {
	const [lastGame, setLastGame] = useState(null)
	const [lastMovie, setLastMovie] = useState(null)
	const [movieGenre, setMovieGenre] = useState(null)
	const getSteam = () => {
		fetch('/api/getSteam')
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

				fetch(`/api/getSteamGameDetails?appId=${mostRecentGame.appid}`)
					.then((res) => res.json())
					.then((game) => setLastGame(game))
			})
	}

	const getMovie = () => {
		fetch(
			`https://api.themoviedb.org/3/account/9850288/rated/movies?api_key=${process.env.NEXT_PUBLIC_TMDB_API}&language=tr-TR&session_id=${process.env.NEXT_PUBLIC_TMDB_SESSION_ID}&sort_by=created_at.desc`
		)
			.then((res) => res.json())
			.then((data) => setLastMovie(data.results[0]))
	}

	const getMovieCategory = async () => {
		const res = await fetch(
			`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_TMDB_API}&language=tr-TR`
		)
		const data = await res.json()

		if (lastMovie) {
			let genres = []
			for (let index = 0; index < lastMovie.genre_ids.length; index++) {
				const filteredGenre = data.genres.filter(
					(genre) => genre.id === lastMovie.genre_ids[index]
				)
				if (filteredGenre[0]) {
					genres.push(filteredGenre[0].name)
				}
			}

			setMovieGenre(genres.splice(0, 2))
		}
	}

	useEffect(() => {
		getMovieCategory()
	}, [lastMovie])
	useEffect(() => {
		getSteam()
		getMovie()
	}, [])

	const gameData = Object.values(lastGame || {})[0]?.data

	return (
		<section className="max-w-xl mx-auto px-8 py-2 mt-12 md:px-0 md:py-0 md:mt-20 mb-10 ">
			<h2 className="mt-10 text-gray-200 scroll-m-20 border-b border-gray-600 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
				Son Aktivitelerim
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-5">
				<div>
					<h2 className='mt-6 text-gray-200 scroll-m-20 border-b border-gray-600 pb-2 text-xl font-extralight tracking-tight transition-colors first:mt-0"'>
						Oyun
					</h2>
					<Card className="bg-transparent  mt-5 text-white cursor-pointer border-gray-500 hover:border-gray-100 transition-all">
						<div className="flex items-center space-x-6 p-2 ">
							<Image
								className="rounded-md w-32 md:w-[100px] h-20 "
								objectFit="cover"
								src={gameData?.capsule_image}
								alt={gameData?.name || 'Game'}
								width={200}
								height={200}
							/>
							<div className="grid grid-cols-1 h-[85px] content-between">
								<h2 className="font-bold text-lg">{gameData?.name}</h2>
								<div className="flex items-center  space-x-1">
									<span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
										{gameData?.genres[0]?.description}
									</span>
									<span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
										{gameData?.genres[1]?.description.slice(0, 8)}
									</span>
								</div>
							</div>
						</div>
					</Card>
				</div>
				<div>
					<h2 className='flex items-center justify-between mt-6 text-gray-200 scroll-m-20 border-b border-gray-600 pb-2 text-xl font-extralight tracking-tight transition-colors first:mt-0"'>
						<p>Film</p>
						<div className="flex items-center space-x-3">
							<div className="flex items-center space-x-2">
								<p className="text-xs font-semibold">İyi!</p>
								<div className="w-4 h-4 bg-green-500 rounded-sm"></div>
							</div>
							<div className="flex items-center space-x-2">
								<p className="text-xs font-semibold">Eh!</p>
								<div className="w-4 h-4 bg-yellow-500 rounded-sm"></div>
							</div>
							<div className="flex items-center space-x-2">
								<p className="text-xs font-semibold">Kötü!</p>
								<div className="w-4 h-4 bg-red-500 rounded-sm"></div>
							</div>
						</div>
					</h2>
					<Card className="bg-transparent  relative  mt-5 text-white cursor-pointer border-gray-500 hover:border-gray-100 transition-all">
						<div className="absolute -top-3 -right-2">
							<TooltipProvider className="!absolute">
								<Tooltip>
									<TooltipTrigger>
										<span
											className={`${MovieRatingColor(
												lastMovie?.rating
											)}  text-gray-800 text-sm font-medium mr-2 px-2 py-0.5 rounded`}
										>
											{lastMovie?.rating}
										</span>
									</TooltipTrigger>
									<TooltipContent className="">Benim Puanım</TooltipContent>
								</Tooltip>
							</TooltipProvider>

							<TooltipProvider className="!absolute">
								<Tooltip>
									<TooltipTrigger>
										<span
											className={`${MovieRatingColor(
												lastMovie?.vote_average
											)}  text-gray-800 text-sm font-medium mr-2 px-2 py-0.5 rounded`}
										>
											{Math.round(lastMovie?.vote_average)}
										</span>
									</TooltipTrigger>
									<TooltipContent className="">TMDB Puanı</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						</div>
						<div className="flex items-center space-x-6 p-2 ">
							<Image
								className="rounded-md w-32 md:w-[80px] h-20 "
								objectFit="cover"
								src={`https://image.tmdb.org/t/p/w500${lastMovie?.poster_path}`}
								alt={lastMovie?.original_title || lastMovie?.title}
								width={200}
								height={200}
							/>
							<div className="grid grid-cols-1 h-[85px] content-between">
								<h2 className="font-bold text-lg">
									{lastMovie?.original_title}
								</h2>
								<div className="flex items-center  space-x-1">
									{movieGenre?.map((genre) => (
										<span
											key={genre}
											className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
										>
											{genre}
										</span>
									))}
								</div>
							</div>
						</div>
					</Card>
				</div>
			</div>
		</section>
	)
}

export default LastActivity
