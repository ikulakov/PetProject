import { type ReactNode, useEffect, useMemo, useState } from 'react'
import { useJsonSettings } from '@/entities/User'
import { Theme } from '@/shared/const/theme'
import { ThemeContext } from '@/shared/lib/context/ThemeContext'

interface ThemeProviderProps {
    initialTheme?: Theme
    children: ReactNode
}

const ThemeProvider = (props: ThemeProviderProps) => {
    const { children, initialTheme } = props
    const { theme: defaultTheme } = useJsonSettings()

    const [theme, setTheme] = useState<Theme>(
        initialTheme ?? defaultTheme ?? Theme.LIGHT,
    )

    useEffect(() => {
        if (defaultTheme) {
            setTheme(defaultTheme)
        }
    }, [defaultTheme])

    useEffect(() => {
        document.body.classList.add(theme)

        return () => {
            document.body.classList.remove(theme)
        }
    }, [theme])

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    )

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
