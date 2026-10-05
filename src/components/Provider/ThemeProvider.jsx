import React from 'react'
import useThemeStore from '../Store/theamStore';


function ThemeProvider({ children }) {
    const { theme } = useThemeStore()
    React.useEffect(() => {
        document.documentElement.classList.remove('dark', 'light');
        document.documentElement.classList.add(theme);
    }, [theme]);
    return (
        children

    )
}

export default ThemeProvider