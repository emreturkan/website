import React from 'react'

import Welcome from './welcome'
import BookmarksPage from '@/pages/bookmarks'
const Home = () => {
	return (
		<>
			<Welcome />
			<BookmarksPage size={false} text={false} />
		</>
	)
}

export default Home
