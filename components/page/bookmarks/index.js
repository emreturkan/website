import React from 'react'

import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {Calendar} from '@phosphor-icons/react'

import Image from 'next/image'
import {TimeLocale} from '@/utils/timeLocale'
import Link from 'next/link'
import {ScrollArea} from '@/components/ui/scroll-area'
import {motion} from 'framer-motion'
import {container, items} from '@/utils/animation'
const Bookmarks = ({bookmarks, size, text}) => {
	bookmarks?.sort((a, b) => new Date(b.created) - new Date(a.created))

	const slicedBookmarks = size ? bookmarks : bookmarks?.slice(0, 3)

	return (
		<motion.section
			variants={container}
			initial="hidden"
			animate="visible"
			className="max-w-xl mx-auto px-8 py-2 mt-8 md:px-0 md:py-0 md:mt-20 mb-10"
		>
			{text && (
				<p className="text-lg md:text-2xl  leading-12 text-gray-300 tracking-wide ">
					İnternet üzerinde gezenirken dikkatımı çeken, daha sonra tekrar bakmak
					istediğim ve ilham aldığım şeyleri burada topluyorum. 📝
				</p>
			)}

			<h2 className="mt-10 text-gray-200 scroll-m-20 border-b border-gray-600 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
				Yer İmleri
			</h2>
			<ScrollArea
				className={`${
					!size ? 'h-[600px]' : 'w-full mt-5 rounded-md  p-4 h-[1000px]'
				}`}
			>
				{slicedBookmarks?.map((bookmark) => {
					const bookmarkLocalTime = TimeLocale(bookmark.created)
					return (
						<Link href={bookmark.link} target="_blank" key={bookmark._id}>
							<motion.li variants={items}>
								<Card className="bg-transparent  mt-5 text-white cursor-pointer border-gray-500 hover:border-gray-100 transition-all">
									<CardHeader>
										<div className="flex items-center space-x-5 mb-2">
											<Image
												className="rounded-md w-32 h-20"
												src={bookmark.cover}
												alt={bookmark.title}
												width={150}
												height={150}
											/>
											<CardTitle className="text-sm md:text-xl">
												{bookmark.title}
											</CardTitle>
										</div>
										<CardDescription className="flex items-center space-x-2">
											<Calendar size={20} /> <time>{bookmarkLocalTime}</time>
										</CardDescription>
									</CardHeader>
								</Card>
							</motion.li>
						</Link>
					)
				})}
			</ScrollArea>
		</motion.section>
	)
}

export default Bookmarks
