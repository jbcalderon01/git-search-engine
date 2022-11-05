import Image from 'next/image'
import React, { FC } from 'react'

import { AvatarCircleWrapper } from './styles'
import { TAvatarCircleProps } from './types'

export const AvatarCircle: FC<TAvatarCircleProps> = ({ height, width, src, alt }) => {
    return (
        <AvatarCircleWrapper height={height} width={width}>
            <Image fill alt={alt} src={src} />
        </AvatarCircleWrapper>
    )
}
