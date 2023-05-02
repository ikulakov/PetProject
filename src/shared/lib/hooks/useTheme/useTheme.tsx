import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY } from '../../../const/localstorage'
import { Theme } from '../../../const/theme'
import { ThemeContext } from '../../context/ThemeContext'

interface UseThemeResult {
    theme: Theme
    toggleTheme: () => void
}

export function useTheme (): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = (): void => {
        let newTheme: Theme

        switch (theme) {
            case Theme.BLUE:
                newTheme = Theme.DARK
                break
            case Theme.DARK:
                newTheme = Theme.LIGHT
                break
            case Theme.LIGHT:
                newTheme = Theme.BLUE
                break
            default:
                newTheme = Theme.LIGHT
        }
        setTheme?.(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }
    return {
        theme: theme ?? Theme.LIGHT,
        toggleTheme
    }
}
