import styled from 'styled-components'

type TAvatarCircleWrapper = {
    width: string
    height: string
}
export const AvatarCircleWrapper = styled.div<TAvatarCircleWrapper>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    border-radius: 100%;
    overflow: hidden;
    position: relative;
`
