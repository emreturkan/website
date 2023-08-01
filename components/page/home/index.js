import React, {Suspense} from 'react'

import Welcome from './welcome'
import BookmarksPage from '@/pages/bookmarks'
import LastActivity from './lastActivity'
import Loading from '@/components/ui/skeleton'
const Home = () => {
	return (
		<>
			<Welcome />
			<Suspense fallback={<Loading />}>
				<LastActivity />
			</Suspense>
			<BookmarksPage size={false} text={false} />
		</>
	)
}

export default Home
