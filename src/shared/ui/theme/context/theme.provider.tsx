import React, { FC, ReactNode, useState } from 'react'
import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components'

import { ThemeContext, ThemeTypes } from './theme.context'
import { THEME } from './theme'

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
    // States
    const [currentTheme, setCurrentTheme] = useState<ThemeTypes>('dark')

    const handleTheme = (value: ThemeTypes) => {
        setCurrentTheme(value)
    }

    return (
        <ThemeContext.Provider value={{ currentTheme, theme: THEME[currentTheme], handleTheme }}>
            <StyledComponentThemeProvider theme={THEME[currentTheme]}>{children}</StyledComponentThemeProvider>
        </ThemeContext.Provider>
    )
}
