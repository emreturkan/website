import React from 'react'
import {Card} from '@/components/ui/card'
import Image from 'next/image'
import {Badge} from '@/components/ui/badge'
import {motion} from 'framer-motion'
import {container, items} from '@/utils/animation'
const Techs = ({tech, techName}) => {
	return (
		<div className="content mb-12">
			<div className="content">
				<motion.h3
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					transition={{delay: 0.2}}
					className="scroll-m-20 text-2xl font-semibold uppercase tracking-tight text-gray-100  mt-4"
				>
					{techName}
					<hr className="w-28" />
				</motion.h3>
				<motion.ul
					variants={container}
					initial="hidden"
					animate="visible"
					className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5"
				>
					{tech?.map(
						(item) =>
							item.header === techName &&
							item.learn === false && (
								<motion.li key={item.id} variants={items}>
									<Card className="bg-transparent w-full relative  px-2 py-2 md:px-5 text-white cursor-pointer border-gray-500 hover:border-gray-100 transition-all">
										<Badge
											variant="primary "
											className="absolute capitalize bg-blue-100 border-none -top-2 -right-2 text-blue-700"
										>
											{item.level}
										</Badge>
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
		</div>
	)
}

export default Techs
