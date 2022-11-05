import Image from 'next/image'
import React, { FC } from 'react'
import { message, Space } from 'antd'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { Box, InputSearch, Typography } from '../../shared/ui'

import { Header, LayoutWrapper, SiteTitle } from './Layout.styles'
import { TLayoutProps } from './Layout.types'

export const Layout: FC<TLayoutProps> = ({ children }) => {
    // States
    const router = useRouter()

    const handleSearch = (value: string) => {
        if (!value) {
            message.error('Username is required')
        }
        router.push(`/?q=${value}`)
    }

    return (
        <LayoutWrapper>
            <Header>
                <div>
                    <Space size={10}>
                        <Link href="/">
                            <Box alignItems="center" flexDirection="row">
                                <Image alt="icon" height={50} src="/icons/github-icon.svg" width={40} />
                                <SiteTitle>
                                    <Typography color="light">Github Search</Typography>
                                </SiteTitle>
                            </Box>
                        </Link>
                    </Space>
                    <div>
                        <InputSearch placeholder="Search Users" onSearch={handleSearch} />
                    </div>
                </div>
            </Header>
            <div>{children}</div>
        </LayoutWrapper>
    )
}
