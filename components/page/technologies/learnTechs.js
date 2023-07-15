import React from 'react'
import {motion} from 'framer-motion'
import {Card} from '@/components/ui/card'
import Image from 'next/image'
import {container, items} from '@/utils/animation'
const LearnTechs = ({tech}) => {
	return (
		<>
			<motion.h2
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				transition={{delay: 0.2}}
				className="scroll-m-20 text-gray-100  pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
			>
				Öğrendiğim Teknolojiler
			</motion.h2>
			<div className="content mb-12">
				<motion.ul
					variants={container}
					initial="hidden"
					animate="visible"
					className=" grid grid-cols-2 md:grid-cols-3 gap-4 mt-5"
				>
					{tech?.map(
						(item) =>
							item.learn === true && (
								<motion.li key={item.id} variants={items}>
									<Card className="bg-transparent w-full   px-2 py-2 md:px-5 text-white cursor-pointer border-gray-500 hover:border-gray-100 transition-all">
										<div className="bg-transparent text-white cursor-pointer border-gray-500 hover:border-gray-100 transition-all">
											<div className="flex items-center justify-between">
												<div className="flex items-center">
													<Image
														src={item.img}
														alt={item.name}
														width={40}
														height={40}
													/>
													<div className="ml-2">
														<h3 className="text-lg font-semibold">
															{item.name}
														</h3>
														<p className="text-sm text-gray-400 capitalize">
															{item.header}
														</p>
													</div>
												</div>
											</div>
										</div>
									</Card>
								</motion.li>
							)
					)}
				</motion.ul>
			</div>
		</>
	)
}

export default LearnTechs
