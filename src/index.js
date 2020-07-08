import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"

import CustomThemeProvider from "./ThemeContext"

ReactDOM.render(
  <React.StrictMode>
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
