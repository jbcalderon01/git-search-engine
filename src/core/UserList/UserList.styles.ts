import styled from 'styled-components'

export const HomeWrapper = styled.div`
    height: 100%;
    max-width: 1440px;
    padding: 1rem 0.5rem;
    margin: 0 auto;
`
export const List = styled.div`
    display: grid;
    width: 100%;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 270px);
    gap: 1rem;
    grid-auto-rows: max-content;
`
