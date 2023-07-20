import React from 'react'

import Welcome from './welcome'
import BookmarksPage from '@/pages/bookmarks'
import LastActivity from './lastActivity'
const Home = () => {
	return (
		<>
			<Welcome />
			<LastActivity />
			<BookmarksPage size={false} text={false} />
		</>
	)
}

export default Home
