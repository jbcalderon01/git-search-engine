import { EyeOutlined } from '@ant-design/icons'
import React, { FC } from 'react'

import { Box, Typography } from '../../atoms'

import { RepositoryCardWrapper } from './styles'
import { TRepositoryCardProps } from './types'

export const RepositoryCard: FC<TRepositoryCardProps> = ({ description, lenguaje, license, subtitle, title, watchers, href }) => {
    return (
        <RepositoryCardWrapper>
            <Box>
                <a href={href} rel="noreferrer" target="_blank">
                    <Typography color="primary" fz="18px">
                        {title}
                    </Typography>
                </a>
                <Typography color="secondary" fz="16px">
                    {subtitle}
                </Typography>
                <Typography color="secondary" fz="14px">
                    {description}
                </Typography>
            </Box>
            <Box flexDirection="row" gap="1rem" margin="2rem 0 0 0">
                <Typography color="secondary" fz="14px">
                    {lenguaje}
                </Typography>
                <Typography color="secondary" fz="14px">
                    <EyeOutlined /> &nbsp;
                    {watchers}
                </Typography>
                <Typography color="secondary" fz="14px">
                    {license}
                </Typography>
            </Box>
        </RepositoryCardWrapper>
    )
}
