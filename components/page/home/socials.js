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
		<motion.ul
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
					aria-label="email"
					title="email"
				>
					<Link
						href="mailto:emreturkan10@gmail.com"
						target="_blank"
						aria-label="email"
					>
						<EnvelopeSimple size={24} />
					</Link>
				</Button>
			</motion.li>
			<motion.li variants={items}>
				<Button
					variant="outline"
					size="icon"
					className="hover:scale-105 hover:bg-blue-100 hover:border-none transition-all"
					aria-label="github"
					title="Github"
				>
					<Link
						href="https://github.com/emreturkan"
						target="_blank"
						aria-label="github"
					>
						<GithubLogo size={24} />
					</Link>
				</Button>
			</motion.li>
			<motion.li variants={items}>
				<Button
					variant="outline"
					size="icon"
					className="hover:scale-105 hover:bg-blue-100 hover:border-none transition-all"
					aria-label="twitter"
					title="twitter"
				>
					<Link
						href="https://twitter.com/_emreturkan"
						target="_blank"
						aria-label="twitter"
					>
						<TwitterLogo size={24} />
					</Link>
				</Button>
			</motion.li>
			<motion.li variants={items}>
				<Button
					variant="outline"
					size="icon"
					className="hover:scale-105 hover:bg-blue-100  hover:border-none transition-all"
					aria-label="instagram"
					title="instagram"
				>
					<Link
						href="https://instagram.com/_emreturkan"
						target="_blank"
						aria-label="instagram"
					>
						<InstagramLogo size={24} />
					</Link>
				</Button>
			</motion.li>
		</motion.ul>
	)
}

export default Socials
