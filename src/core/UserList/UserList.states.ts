import { message } from 'antd'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { useService } from '../../shared/hooks'

import { SearchUsers, searchUserService } from './UserList.services'

const perPage = 20

export const useUserList = () => {
    // Hooks
    const router = useRouter()
    const q = router.query.q as string

    // API Services
    const { fn: searchUsers, loading: isLoading, called: isCalled } = useService(searchUserService)

    // States
    const [dataUsers, setDataUsers] = useState<SearchUsers>()
    const [currentPage, setCurrentPage] = useState(1)
    const [more, setMore] = useState(false)

    const handleClickUser = (username: string) => {
        router.push(`/${username}`)
    }

    const handleClickLoadMore = () => {
        const nextPage = currentPage + 1

        setCurrentPage(nextPage)
        if (dataUsers) {
            searchUsers(q, perPage, nextPage)
                .then(res => {
                    const users = [...(dataUsers.items || []), ...(res.items || [])]

                    setMore(users.length !== res.total_count)
                    setDataUsers({ ...dataUsers, items: users })
                })
                .catch(err => {
                    message.error(err?.message)
                })
        }
    }

    useEffect(() => {
        if (q) {
            searchUsers(q, perPage, 1)
                .then(res => {
                    setDataUsers(res)
                    setMore(res.total_count > perPage)
                })
                .catch(err => {
                    message.error(err?.message)
                })
        }
    }, [q])

    return { dataUsers, isLoading, more, isCalled, handleClickUser, handleClickLoadMore }
}
