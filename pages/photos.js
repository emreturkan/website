import React, {useEffect} from 'react'
import {usePhotoStore} from '@/store/store'
import {motion} from 'framer-motion'
import {photoContainer} from '@/utils/animation'

import PhotosStatistics from '@/components/page/photos/photosStatistics'
import Photos from '@/components/page/photos'
const PhotosPage = () => {
	const {fetch, fetchPhotos} = usePhotoStore((state) => state)
	useEffect(() => {
		fetch()
		fetchPhotos()
	}, [fetch, fetchPhotos])
	return (
		<motion.section
			variants={photoContainer}
			initial="hidden"
			animate="visible"
			className="max-w-6xl mx-auto px-8 py-2 mt-8 md:px-0 md:py-0 md:mt-20 mb-10"
		>
			<p className="text-lg max-w-xl mx-auto mb-10 md:text-2xl  leading-12 text-gray-300 tracking-wide ">
				Gezerken dikkatimi çeken yerleri ve alanları çekmeyi seviyorum. Unsplash
				gibi platformlarda paylaşdığım fotoğrafların kullanılması hoşuma
				gidiyor. Şu an eskisi kadar fotoğraf çekmesemde tekrardan çekmeye
				başlayacağım. 📷
			</p>

			<PhotosStatistics />
			<Photos />
		</motion.section>
	)
}

export default PhotosPage
