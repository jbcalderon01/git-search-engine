import { EyeOutlined } from '@ant-design/icons'
import React, { FC } from 'react'

import { AvatarCircle, Box, Button, Typography } from '../../atoms'

import { UserCardWrapper } from './styles'
import { TUserCardProps } from './types'

export const UserCard: FC<TUserCardProps> = ({ name, srcImage, onClickViewProfile }) => {
    return (
        <UserCardWrapper title="view profile" onClick={onClickViewProfile}>
            <AvatarCircle alt={`user-${name}`} height="90px" src={srcImage} width="90px" />
            <Box>
                <Typography color="light">{name}</Typography>
            </Box>
            <Box>
                <Button>
                    <EyeOutlined style={{ fontSize: 20 }} />
                    <Typography color="light" fz="14px">
                        View Profile
                    </Typography>
                </Button>
            </Box>
        </UserCardWrapper>
    )
}
