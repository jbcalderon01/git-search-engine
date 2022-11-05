import { message } from 'antd'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { useService } from '../../shared/hooks'

import { getUserService, User } from './UserInfo.services'

export const useUserInfo = () => {
    // Hooks
    const router = useRouter()
    const username = router.query.slug as string
    // State
    const { fn: getUser, loading: isLoading } = useService(getUserService)
    const [dataUser, setDataUser] = useState<User>()

    useEffect(() => {
        if (username) {
            getUser(username)
                .then(res => setDataUser(res))
                .catch(err => message.error(err.message))
        }
    }, [username])

    return { dataUser, isLoading }
}
