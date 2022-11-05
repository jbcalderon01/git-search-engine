export interface User {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
    score: number
}

export interface SearchUsers {
    total_count: number
    incomplete_results: boolean
    items: User[]
}

export const searchUserService = async (q: string, perPage?: number, page?: number): Promise<SearchUsers> => {
    const response = await fetch(`https://api.github.com/search/users?q=${q}&perPage=${perPage}&page=${page}`, {
        cache: 'no-cache',
    })
    const data = await response.json()

    if (response.status !== 200) {
        throw new Error(data.message)
    }

    return data
}
