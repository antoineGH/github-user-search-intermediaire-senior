export const fetchUser = async (username: string, nextPage: number, perPage: number) => {
	try {
		const response = await fetch(
			`https://api.github.com/search/users?q=${username}&page=${nextPage}&per_page=${perPage}`
		)
		return response.json()
	} catch (e: any) {
		throw new Error(e.message)
	}
}
