import React, {useEffect} from 'react'

import {useSupabaseStore} from '@/store/store'
import {motion} from 'framer-motion'
import Techs from '@/components/page/technologies/techs'
import LearnTechs from '@/components/page/technologies/learnTechs'
const TechnologiesPage = () => {
	const {tech, fetch} = useSupabaseStore((state) => state)

	useEffect(() => {
		fetch()
	}, [fetch])

	return (
		<section>
			<div className="max-w-xl mx-auto px-8 py-2 mt-8 md:px-0 md:py-0 md:mt-20">
				<LearnTechs tech={tech} />
				<motion.h2
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					transition={{delay: 0.1}}
					className="scroll-m-20 text-gray-100  pb-2 text-2xl md:text-3xl font-semibold tracking-tight transition-colors first:mt-0"
				>
					Kullandığım Teknolojiler
				</motion.h2>

				<Techs tech={tech} techName="languages" />
				<Techs tech={tech} techName="frontend" />
				<Techs tech={tech} techName="ui" />
				<Techs tech={tech} techName="service" />
				<Techs tech={tech} techName="store" />
				<Techs tech={tech} techName="utils" />
			</div>
		</section>
	)
}

export default TechnologiesPage
