import styled from 'styled-components'

export const InputSearchWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const Input = styled.input`
    width: 100%;
    padding: 8px;
    outline: none;
    font-size: 16px;
    border: none;
    border-radius: 6px;
    font-family: Roboto;
    background-color: ${({ theme }) => theme.background.primary};
    color: ${({ theme }) => theme.font.light};
`
export const ButtonSearch = styled.button`
    width: 40px;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.font.light};
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 6px;
    transition: 0.2s;
    :hover {
        background-color: #6a72bc;
    }
`
