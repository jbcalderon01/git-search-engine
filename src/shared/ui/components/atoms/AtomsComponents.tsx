import styled, { CSSProperties } from 'styled-components'

type TBox = {
    justifyContent?: CSSProperties['justifyContent']
    flexDirection?: CSSProperties['flexDirection']
    alignItems?: CSSProperties['alignItems']
    bgColor?: string
    padding?: string
    margin?: string
    gap?: string
    width?: string
    height?: string
    position?: CSSProperties['position']
}
export const Box = styled.div<TBox>`
    display: flex;
    justify-content: ${({ justifyContent }) => justifyContent};
    flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
    align-items: ${({ alignItems }) => alignItems};
    margin: ${({ margin }) => margin};
    padding: ${({ padding }) => padding};
    position: ${({ position }) => position};
    width: ${({ width }) => width};
    gap: ${({ gap }) => gap};
    height: ${({ height }) => height};
`
