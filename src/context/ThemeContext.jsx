import { createContext, useState } from "react";

export const ThemeContext = createContext('light')

export const ThemeProvider = ({children}) =>{
    const [theme,setTheme] = useState('dark')

    const toggleTheme = ()=>{
        setTheme(prev=>prev == 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}