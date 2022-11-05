import { UserOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import React, { FC } from 'react'

import { AvatarCircle, Box, RepositoryCard, Typography } from '../../shared/ui'

import { useUserInfo } from './UserInfo.states'
import { BoxBasicInfo, OrganizationList, RepositoryList, UserInfoWrapper } from './UserInfo.styles'

export const UserInfoContainer: FC = () => {
    const { dataUser, isLoading } = useUserInfo()

    if (isLoading) {
        return (
            <Box margin="2rem 0 0 0">
                <Spin />
            </Box>
        )
    }

    return (
        <UserInfoWrapper>
            <BoxBasicInfo>
                <Box>
                    <Box alignItems="center" margin="1rem 0">
                        <AvatarCircle
                            alt={dataUser?.login || 'avatar'}
                            height="200px"
                            src={dataUser?.avatar_url || ''}
                            width="200px"
                        />
                    </Box>
                    <Typography color="light" fz="22px">
                        {dataUser?.name}
                    </Typography>
                    <Typography color="secondary" fz="16px">
                        {dataUser?.login}
                    </Typography>
                    <Box alignItems="center" flexDirection="row" gap="10px" margin="2rem 0 0 0">
                        <UserOutlined />
                        <Typography color="light" fz="14px">
                            {dataUser?.followers}
                        </Typography>
                        <Typography color="secondary" fz="14px">
                            Followers
                        </Typography>
                        <Typography color="light" fz="14px">
                            ·
                        </Typography>
                        <Typography color="light" fz="14px">
                            {dataUser?.following}
                        </Typography>
                        <Typography color="secondary" fz="14px">
                            Following
                        </Typography>
                    </Box>
                </Box>
                <Box margin="2rem 0 0 0">
                    <Typography color="light" fz="22px">
                        Organizations
                    </Typography>
                    {!dataUser?.organizations.length && <Typography color="secondary">Have no organizations</Typography>}
                    <OrganizationList>
                        {dataUser?.organizations.map(organization => (
                            <AvatarCircle
                                key={`organization-${organization.id}`}
                                alt={organization.login}
                                height="48px"
                                src={organization.avatar_url}
                                width="48px"
                            />
                        ))}
                    </OrganizationList>
                </Box>
            </BoxBasicInfo>
            <Box>
                <Typography color="light" fz="24px">
                    Repositories
                </Typography>
                <RepositoryList>
                    {dataUser?.repositories.map(repository => (
                        <RepositoryCard
                            key={`repository-${repository.id}`}
                            description={repository.description}
                            href={repository.clone_url}
                            lenguaje={repository.language}
                            license={repository.license?.name}
                            subtitle={repository.full_name}
                            title={repository.name}
                            watchers={repository.watchers_count}
                        />
                    ))}
                </RepositoryList>
            </Box>
        </UserInfoWrapper>
    )
}
