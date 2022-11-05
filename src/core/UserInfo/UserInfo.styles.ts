import styled from 'styled-components'

export const UserInfoWrapper = styled.div`
    max-width: 1440px;
    height: 100%;
    margin: 0 auto;
    padding: 2rem 0.5rem;
    display: grid;
    grid-template-columns: 270px 1fr;
    gap: 1rem;
    @media (max-width: 670px) {
        grid-template-columns: 1fr;
    }
`
export const BoxBasicInfo = styled.div`
    border-radius: 10px;
    background-color: ${({ theme }) => theme.background.secondary};
    position: sticky;
    top: 1rem;
    height: max-content;
    padding: 1rem;
    @media (max-width: 670px) {
        position: static;
    }
`

export const OrganizationList = styled.div`
    display: grid;
    justify-content: space-between;
    margin-top: 1rem;
    grid-row-gap: 0.5rem;
    grid-template-columns: repeat(auto-fit, 48px);
`
export const RepositoryList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
