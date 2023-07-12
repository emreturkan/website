import React from 'react'
import {Button} from '@/components/ui/button'
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarTrigger,
} from '@/components/ui/menubar'
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import {List, Moon} from '@phosphor-icons/react'
import Link from 'next/link'

const Header = () => {
	return (
		<header className="w-full container mt-8 flex justify-between md:justify-around items-center">
			<Link href="/" className="flex items-center  space-x-2">
				<Avatar className="w-12 h-12 md:w-16 md:h-16">
					<AvatarImage src="https://i1.sndcdn.com/artworks-000578134589-jnit8m-t500x500.jpg" />
					<AvatarFallback>ET</AvatarFallback>
				</Avatar>
				<div className="flex flex-col">
					<h1 className="text-xl md:text-2xl font-bold text-white">
						Emre Turkan
					</h1>
					<p className="text-[10px] md:text-xs text-gray-200">
						Frontend Developer
					</p>
				</div>
			</Link>
			<div className=" flex justify-end  space-x-2 md:mr-0 ">
				<Menubar>
					<MenubarMenu>
						<MenubarTrigger className="cursor-pointer p-[6px] ">
							<List size={24} />
						</MenubarTrigger>
						<MenubarContent>
							<Link href="/">
								<MenubarItem className="cursor-pointer">Ana Sayfa</MenubarItem>
							</Link>
							<MenubarSeparator />
							<Link href="/photos">
								<MenubarItem className="cursor-pointer">
									Fotoğraflar
								</MenubarItem>
							</Link>
							<MenubarSeparator />
							<Link href="/bookmarks">
								<MenubarItem className="cursor-pointer">Yer İmleri</MenubarItem>
							</Link>
							<MenubarSeparator />
							<Link href="/technologies">
								<MenubarItem className="cursor-pointer">
									Teknolojiler
								</MenubarItem>
							</Link>
						</MenubarContent>
					</MenubarMenu>
				</Menubar>
				<Button variant="outline" className="p-[8px] ">
					<Moon size={24} />
				</Button>
			</div>
		</header>
	)
}

export default Header
