import styled from 'styled-components'

import { TypographyProps } from './types'

export const Typography = styled.span<TypographyProps>`
    margin: ${({ margin }) => margin};
    padding: ${({ padding }) => padding};
    font-size: ${({ fz }) => fz || '16px'};
    font-weight: ${({ fw }) => fw};
    color: ${({ theme, color = 'primary' }) => theme.font[color]};
`
