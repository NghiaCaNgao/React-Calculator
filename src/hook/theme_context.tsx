import { useState, createContext, ReactNode } from "react";

const ThemeContext = createContext({ theme: "light", setTheme: (theme: string) => { } });

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState("dark");
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }