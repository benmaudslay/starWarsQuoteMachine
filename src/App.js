import React, { useState, useEffect } from "react"
import styled, { withTheme } from "styled-components"
import FadeIn from "react-fade-in"
import RingLoader from "react-spinners/RingLoader"

import "./App.css"

import { useThemeContext } from "./ThemeContext"
import { buttonBackgroundColor, textColor } from "./theme"

import data from "./data.json"

const App = (props) => {
  const themeToggle = useThemeContext()

  const [loading, setLoading] = useState(false)
  const [character, setCharacter] = useState({})
  const [quote, setQuote] = useState("")

  useEffect(() => {
    setTimeout(() => setLoading(true), 3000)
    randomQuote()
  }, [props.theme.mode])

  const randomQuote = () => {
    selectForce(data.starWarsQuotes, props.theme.mode)
  }

  const selectForce = async (array, force) => {
    let filterForce = array.filter((item) => item.force.toLowerCase() === force)
    let characterSelect = randomItem(filterForce)
    setCharacter(characterSelect)
    selectQuote(characterSelect.quotes)
  }

  const randomItem = (array) => {
    return array[Math.floor(Math.random() * array.length)]
  }

  const selectQuote = (array) => {
    let newQuote = randomItem(array)
    if (newQuote === quote) {
      newQuote = randomItem(array)
    }
    setQuote(newQuote)
  }

  return (
    <Wrapper>
      {!loading ? (
        <LoadingWrapper>
          <FadeIn>
            <RingLoader size={80} color={"#FFE81F"} />
          </FadeIn>
        </LoadingWrapper>
      ) : (
        <LoadedWrapper>
          <Title>star wars quote machine</Title>
          <Quote>
            <p className="quote">{quote.toLowerCase()}</p>
            <p>{character.name.toLowerCase()}</p>
          </Quote>
          <div>
            <Button onClick={() => themeToggle.toggle()}>
              change the force
            </Button>
            <Button onClick={() => randomQuote()}>new quote!</Button>
          </div>
        </LoadedWrapper>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: black;
  background-image: url(https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-25.jpg);
  color: #ffe81f;

  display: flex;
  justify-content: center;
`

const LoadedWrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const LoadingWrapper = styled(LoadedWrapper)`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  padding-top: 150px;
`

const Title = styled.h1`
  font-family: starwarsAlt;
  font-size: 3em;
`

const Quote = styled.div`
  font-family: starwarsMain;
  font-size: 1.8em;
  padding: 0 30px;
  box-shadow: ${textColor} 0px 0px 20px 2px;

  .quote {
    font-size: 1.5em;
  }
`

const Button = styled.button`
  background-color: ${buttonBackgroundColor};
  color: #ffe81f;
  border: none;
  border-radius: 0.3em;
  box-shadow: none;
  cursor: pointer;
  font-size: 1.3em;
  padding: 0.5em 1em;
  margin: 1em;
  margin-top: 3em;

  font-family: starwarsMain;
`

export default withTheme(App)
