// src/contexts/ThemeContext.jsx
import { createContext, useState } from "react";

// Cria um contexto
export const ThemeContext = createContext();

// Cria o "provider" para fornecer as informações
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light')
    }

    const value = { theme, toggleTheme }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}