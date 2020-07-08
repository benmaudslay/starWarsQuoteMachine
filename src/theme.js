import theme from "styled-theming"
import "./App.css"

export const textColor = theme("mode", {
  light: "blue",
  dark: "red",
})

export const buttonBackgroundColor = theme("mode", {
  light: "grey",
  dark: "grey",
})
