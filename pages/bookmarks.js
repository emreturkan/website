import React, {useEffect} from 'react'
import {useRaindropStore} from '@/store/store'
import Bookmarks from '@/components/page/bookmarks'
const BookmarksPage = ({size, text}) => {
	const {bookmarks, fetch} = useRaindropStore((state) => state)

	useEffect(() => {
		fetch()
	}, [fetch])

	if (size === false && text === false) {
		return <Bookmarks bookmarks={bookmarks} size={size} text={size} />
	}

	return <Bookmarks bookmarks={bookmarks} size={true} text={true} />
}

export default BookmarksPage
