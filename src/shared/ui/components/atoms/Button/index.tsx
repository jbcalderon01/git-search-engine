import styled from 'styled-components'

type ButtonVariant = 'principal' | 'second'

type TButton = {
    variant?: ButtonVariant
    width?: string
}

export const Button = styled.button<TButton>`
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme, variant = 'principal' }) => (variant === 'principal' ? theme.colors.primary : '#2cb1bc')};
    color: ${({ theme }) => theme.font.light};
    cursor: pointer;
    width: ${({ width }) => width || 'max-content'};
    outline: none;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    transition: 0.2s;
    padding: 5px;
    :hover {
        background-color: ${({ variant = 'principal', theme }) => (variant === 'principal' ? '#2cb1bc' : theme.colors.primary)};
    }
`
