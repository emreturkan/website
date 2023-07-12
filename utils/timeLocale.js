export const TimeLocale = (time) => {
	const date = new Date(time)
	if (!isNaN(date)) {
		return date.toLocaleString('tr-TR', {
			day: 'numeric',
			month: 'long',
			year: 'numeric',
		})
	} else {
		throw new Error(`Invalid time format: ${time}`)
	}
}
