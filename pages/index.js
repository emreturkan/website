import React from 'react'
import {Button} from '@/components/ui/button'
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
} from '@/components/ui/menubar'
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'

import {
	EnvelopeSimple,
	GithubLogo,
	InstagramLogo,
	List,
	Moon,
	TwitterLogo,
} from '@phosphor-icons/react'
import Link from 'next/link'
const IndexPage = () => {
	return (
		<>
			<header className="w-full container mt-8 flex justify-between md:justify-around items-center">
				<div className="flex items-center  space-x-2">
					<Avatar className="w-16 h-16">
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<div className="flex flex-col">
						<h1 className="text-2xl font-bold text-white">Emre Turkan</h1>
						<p className="text-xs text-gray-200">Frontend Developer</p>
					</div>
				</div>
				<div className=" flex justify-end  space-x-2 md:mr-0 ">
					<Menubar>
						<MenubarMenu>
							<MenubarTrigger className="cursor-pointer p-[6px] ">
								<List size={24} />
							</MenubarTrigger>
							<MenubarContent>
								<MenubarItem className="cursor-pointer">
									<Link href="/">Ana Sayfa</Link>
								</MenubarItem>
								<MenubarSeparator />
								<MenubarItem className="cursor-pointer">
									<Link href="/fotograflar">Fotoğraflar</Link>
								</MenubarItem>
								<MenubarSeparator />
								<MenubarItem className="cursor-pointer">
									<Link href="/yer_imleri">Yer İmleri</Link>
								</MenubarItem>
								<MenubarSeparator />
								<MenubarItem className="cursor-pointer">
									<Link href="/teknolojiler">Teknolojiler</Link>
								</MenubarItem>
							</MenubarContent>
						</MenubarMenu>
					</Menubar>
					<Button variant="outline" className="p-[8px] ">
						<Moon size={24} />
					</Button>
				</div>
			</header>
			<section className="max-w-xl mx-auto p-5 md:p-0">
				<div className="  flex flex-col items-center justify-center mt-8 space-y-3">
					<h1 className="text-3xl font-bold text-gray-200">
						Merhaba, Ben Emre👋{' '}
					</h1>
					<p className="text-md text-gray-200">
						Şu anda İstanbul'da yaşayan Monachus firmasında çalışan bir Frontend
						Developer'ım
					</p>
					<p className=" text-gray-200 ">
						Fotoğraf çekmeyi, kaykay sürmeyi ve doğa yürüyüşlerini çok
						seviyorum. Akıllıca tasarlanmış ürünler kullanmaktan keyif alıyorum.
						Son zamanlarda ahşap ürünler yapımına ilgim var 🪑
						<br />
						<br />
						Youtube kanalımda tasarım, frontend ve tecrübelerimi paylaştığım
						içerikler üretiyorum.
					</p>
				</div>
				<div className="flex space-x-5 mt-4">
					<Button
						variant="outline"
						size="icon"
						className="hover:scale-105 hover:bg-amber-100 hover:border-none transition-all "
					>
						<Link href="/iletisim" target="_blank">
							<EnvelopeSimple size={24} />
						</Link>
					</Button>
					<Button
						variant="outline"
						size="icon"
						className="hover:scale-105 hover:bg-amber-100 hover:border-none transition-all"
					>
						<Link href="https://github.com/emreturkan" target="_blank">
							<GithubLogo size={24} />
						</Link>
					</Button>
					<Button
						variant="outline"
						size="icon"
						className="hover:scale-105 hover:bg-amber-100 hover:border-none transition-all"
					>
						<Link href="https://twitter.com/_emreturkan" target="_blank">
							<TwitterLogo size={24} />
						</Link>
					</Button>
					<Button
						variant="outline"
						size="icon"
						className="hover:scale-105 hover:bg-amber-100 hover:border-none transition-all"
					>
						<Link href="https://instagram.com/_emreturkan" target="_blank">
							<InstagramLogo size={24} />
						</Link>
					</Button>
				</div>
			</section>
		</>
	)
}

export default IndexPage
