import styled from 'styled-components'

export const UserCardWrapper = styled.div`
    /* height: 80px; */
    padding: 1rem;
    border-radius: 20px;
    gap: 1rem;
    background-color: ${({ theme }) => theme.background.secondary};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: 0.2s;
    :hover {
        transform: scale(1.07);
    }
`
