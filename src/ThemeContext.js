import React, { useContext, useState, createContext } from "react"
import { ThemeProvider } from "styled-components"

const ThemeToggleContext = createContext({
  toggle: () => {},
})

export const useThemeContext = () => useContext(ThemeToggleContext)

const CustomThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useState({
    mode: "dark",
  })

  const toggle = () => {
    const mode = themeState.mode === "light" ? "dark" : "light"
    setThemeState({ mode: mode })
  }

  return (
    <ThemeToggleContext.Provider value={{ toggle: toggle }}>
      <ThemeProvider
        theme={{
          mode: themeState.mode,
        }}
      >
        <div>{children}</div>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  )
}

export default CustomThemeProvider
