import styled from 'styled-components'

export const LayoutWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 70px 1fr;
    color: ${({ theme }) => theme.font.light};
    background-color: ${({ theme }) => theme.background.primary};
    overflow: auto;
`
export const Header = styled.header`
    background-color: ${({ theme }) => theme.background.secondary};
    > div {
        align-items: center;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        padding: 0 0.2rem;
        max-width: 1440px;
    }
`

export const SiteTitle = styled.div`
    @media (max-width: 398px) {
        display: none;
    }
`
