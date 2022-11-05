import { Spin } from 'antd'
import React, { FC } from 'react'

import { Box, Button, Typography, UserCard } from '../../shared/ui'

import { useUserList } from './UserList.states'
import { HomeWrapper, List } from './UserList.styles'

export const UserListContainer: FC = () => {
    const { dataUsers, isLoading, isCalled, more, handleClickUser, handleClickLoadMore } = useUserList()

    return (
        <HomeWrapper>
            {dataUsers?.items?.length && (
                <Typography as="h3" color="light" fz="26px" padding="1rem 0">
                    Have been found: {dataUsers?.total_count || 0} Results
                </Typography>
            )}
            <List>
                {dataUsers?.items?.map(item => (
                    <UserCard
                        key={`item-${item.id}`}
                        name={item.login}
                        srcImage={item.avatar_url}
                        onClickViewProfile={() => handleClickUser(item.login)}
                    />
                ))}
            </List>
            {!dataUsers?.items?.length && !isLoading && (
                <Box alignItems="center" margin="5rem 0 0 0">
                    <Typography color="light" fz="36px" style={{ textAlign: 'center' }}>
                        {isCalled ? 'No results found' : 'Write a username to search for you'}
                    </Typography>
                </Box>
            )}

            {more && !isLoading && (
                <Box alignItems="center" margin="2rem 0 ">
                    <Button variant="second" width="100px" onClick={handleClickLoadMore}>
                        More
                    </Button>
                </Box>
            )}
            {isLoading && (
                <Box alignItems="center" margin="2rem 0">
                    <Spin />
                </Box>
            )}
        </HomeWrapper>
    )
}
