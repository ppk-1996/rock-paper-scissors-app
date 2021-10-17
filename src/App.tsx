import { useState } from 'react'
import './App.css'
import paper from './assets/icon-paper.svg'
import rock from './assets/icon-rock.svg'
import scissors from './assets/icon-scissors.svg'
import Choice from './components/Desktop/Choice'
import Header from './components/Desktop/Header'
import Result from './components/Desktop/Result'
import Rules from './components/Desktop/Rules'
import ChoiceMobile from './components/Mobile/ChoiceMobile'
import HeaderMobile from './components/Mobile/HeaderMobile'
import ResultMobile from './components/Mobile/ResultMobile'
import RulesMobile from './components/Mobile/RulesMobile'
import { PAPER_COLOR, ROCK_COLOR, SCISSORS_COLOR } from './utils/global'
const App = () => {
  const [gameStarted, setGameStarted] = useState(false)
  const [score, setScore] = useState(0)
  const [gameResult, setGameResult] = useState('')
  const [userChoice, setUserChoice] = useState({ img: '', color: '' })
  const [houseChoice, setHouseChoice] = useState({ img: '', color: '' })
  const [loading, setLoading] = useState(true)

  //Function to start the game when the user click their choice
  const startGame = (choice: number) => {
    //Start the Game
    setGameStarted(true)

    //User Pick
    if (choice == 0) {
      setUserChoice({ img: paper, color: PAPER_COLOR })
    } else if (choice == 1) {
      setUserChoice({
        img: scissors,
        color: SCISSORS_COLOR,
      })
    } else {
      setUserChoice({ img: rock, color: ROCK_COLOR })
    }

    //House Random Pick
    const random = Math.floor(Math.random() * 3)
    if (random == 0) {
      setHouseChoice({ img: paper, color: PAPER_COLOR })
    } else if (random == 1) {
      setHouseChoice({
        img: scissors,
        color: SCISSORS_COLOR,
      })
    } else {
      setHouseChoice({ img: rock, color: ROCK_COLOR })
    }

    //Fake Loading
    const timeout = setTimeout(() => {
      //Game Result
      if (choice == random) {
        setGameResult("IT'S A TIE")
        setScore(score + 0.5)
      } else if (
        (choice == 0 && random == 2) ||
        (choice == 1 && random == 0) ||
        (choice == 2 && random == 1)
      ) {
        setGameResult('YOU WIN')
        setScore(score + 1)
      } else {
        setGameResult('HOUSE WIN')
        if (score >= 1) {
          setScore(score - 1)
        }
      }

      setLoading(false)
    }, 1000)
    return timeout
  }

  //Function to restart the game but carry the score
  const endGame = () => {
    setGameStarted(false)
    setGameResult('')
    setLoading(true)
  }

  return (
    <main className="text-gray-200 p-8 h-screen flex flex-col items-center justify-between">
      <HeaderMobile score={score} />
      <Header score={score} />
      {gameStarted ? (
        <>
          <ResultMobile
            gameResult={gameResult}
            userChoice={userChoice}
            loading={loading}
            houseChoice={houseChoice}
            endGame={endGame}
          />
          <Result
            gameResult={gameResult}
            userChoice={userChoice}
            loading={loading}
            houseChoice={houseChoice}
            endGame={endGame}
          />
        </>
      ) : (
        <>
          <ChoiceMobile startGame={startGame} />
          <Choice startGame={startGame} />
        </>
      )}

      <Rules />
      <RulesMobile />
    </main>
  )
}

export default App
