import Head from 'next/head'

export const Metadata = ({title, desc, content}) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={content} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={desc} />
		</Head>
	)
}
