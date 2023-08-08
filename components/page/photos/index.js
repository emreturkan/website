import React from 'react'
import {motion} from 'framer-motion'
import {Card} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import {items} from '@/utils/animation'
import {usePhotoStore} from '@/store/store'

const Photos = () => {
	const {photos} = usePhotoStore((state) => state)
	return (
		<div className=" columns-1 gap-x-8 p-8 md:columns-2 lg:columns-3 space-x-4 rounded-md mt-12 ">
			{photos?.map((photo) => (
				<motion.li variants={items} key={photo.id}>
					<Link href={photo.links.html} target="_blank">
						<Card className="mb-5 p-0 bg-transparent border-none cursor-pointer">
							<Image
								className="rounded-md shadow-md shadow-black"
								src={photo.urls.small}
								alt={photo?.description || 'Unsplash Emre Turkan Photo'}
								width={600}
								loading="lazy"
								height={300}
							/>
						</Card>
					</Link>
				</motion.li>
			))}
		</div>
	)
}

export default Photos
