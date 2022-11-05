import { createContext, useContext } from 'react'
import { DefaultTheme } from 'styled-components'

export type ThemeTypes = 'dark'
interface IThemeContext {
    theme: DefaultTheme
    currentTheme: ThemeTypes
    handleTheme: (value: ThemeTypes) => void
}

export const ThemeContext = createContext<IThemeContext>({} as unknown as IThemeContext)

export const useTheme = () => useContext(ThemeContext)
