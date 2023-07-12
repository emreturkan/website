import React from 'react'
import {motion} from 'framer-motion'
import {usePhotoStore} from '@/store/store'
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {items} from '@/utils/animation'
const PhotosStatistics = () => {
	const photoStatistics = usePhotoStore((state) => state.photoStatistics)
	return (
		<motion.div
			variants={items}
			className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-12 space-y-4 md:space-y-0"
		>
			<Card className="w-72 md:w-60 text-left bg-transparent h-24 flex items-center ">
				<CardHeader>
					<CardTitle className="text-lg font-extralight text-gray-100 opacity-80 ">
						Unsplash Downloads
					</CardTitle>
					<CardDescription className=" text-4xl text-white font-bold">
						{photoStatistics?.downloads?.total}
					</CardDescription>
				</CardHeader>
			</Card>
			<Card className="w-72 md:w-60 text-left bg-transparent h-24 flex items-center ">
				<CardHeader>
					<CardTitle className="text-lg font-extralight text-gray-100 opacity-80 ">
						Unsplash Views
					</CardTitle>
					<CardDescription className=" text-4xl text-white font-bold">
						{photoStatistics?.views?.total}
					</CardDescription>
				</CardHeader>
			</Card>
		</motion.div>
	)
}

export default PhotosStatistics
