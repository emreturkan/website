import React from 'react'
import {
	EnvelopeSimple,
	GithubLogo,
	InstagramLogo,
	TwitterLogo,
} from '@phosphor-icons/react'
import Link from 'next/link'
import {motion} from 'framer-motion'
import {container, items} from '@/utils/animation'
import {Button} from '@/components/ui/button'
const Socials = () => {
	return (
		<motion.div
			variants={container}
			initial="hidden"
			animate="visible"
			className="flex space-x-4 mt-4"
		>
			<motion.li variants={items}>
				<Button
					variant="outline"
					size="icon"
					className="hover:scale-105 hover:bg-blue-100 hover:border-none transition-all "
				>
					<Link href="mailto:emreturkan10@gmail.com" target="_blank">
						<EnvelopeSimple size={24} />
					</Link>
				</Button>
			</motion.li>
			<motion.li variants={items}>
				<Button
					variant="outline"
					size="icon"
					className="hover:scale-105 hover:bg-blue-100 hover:border-none transition-all"
				>
					<Link href="https://github.com/emreturkan" target="_blank">
						<GithubLogo size={24} />
					</Link>
				</Button>
			</motion.li>
			<motion.li variants={items}>
				<Button
					variant="outline"
					size="icon"
					className="hover:scale-105 hover:bg-blue-100 hover:border-none transition-all"
				>
					<Link href="https://twitter.com/_emreturkan" target="_blank">
						<TwitterLogo size={24} />
					</Link>
				</Button>
			</motion.li>
			<motion.li variants={items}>
				<Button
					variant="outline"
					size="icon"
					className="hover:scale-105 hover:bg-blue-100  hover:border-none transition-all"
				>
					<Link href="https://instagram.com/_emreturkan" target="_blank">
						<InstagramLogo size={24} />
					</Link>
				</Button>
			</motion.li>
		</motion.div>
	)
}

export default Socials
