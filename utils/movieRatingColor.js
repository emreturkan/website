export const MovieRatingColor = (vote_average) => {
	if (vote_average >= 8) return 'bg-green-500'
	if (vote_average >= 6) return 'bg-yellow-500'
	return 'bg-red-500'
}
