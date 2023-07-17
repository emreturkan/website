import Layout from '@/components/layout/layout'
import {Metadata} from '@/lib/metadata'
import '@/styles/globals.css'

export default function App({Component, pageProps}) {
	return (
		<>
			<Metadata
				title="Emre Turkan Web Sitesi"
				content=" Emre Turkan Kişisel Web Sitesi"
				desc="Emre Turkan Kişisel Web Sitesi"
			/>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}
