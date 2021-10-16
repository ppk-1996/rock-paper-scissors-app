import Ring from './components/Ring'
import scissors from './assets/icon-scissors.svg'
import paper from './assets/icon-paper.svg'
import rock from './assets/icon-rock.svg'
import triangle from './assets/bg-triangle.svg'
import logo from './assets/logo.svg'
import {
  BG_COLOR,
  PAPER_COLOR,
  ROCK_COLOR,
  SCISSORS_COLOR,
} from './utils/global'
import { useState } from 'react'
import Loading from './components/Loading'
import './App.css'
import Rules from './components/Rules'
import RulesMobile from './components/RulesMobile'
const App = () => {
  const [gameStarted, setGameStarted] = useState(false)
  const [score, setScore] = useState(0)
  const [gameResult, setGameResult] = useState('')
  const [userChoice, setUserChoice] = useState({
    img: scissors,
    color: SCISSORS_COLOR,
  })
  const [houseChoice, setHouseChoice] = useState({
    img: scissors,
    color: SCISSORS_COLOR,
  })
  const [loading, setLoading] = useState(true)
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
  const endGame = () => {
    setGameStarted(false)
    setGameResult('')
    setLoading(true)
  }
  const FirstPage = (
    <>
      <div className="md:hidden">
        <div className="grid grid-cols-4 place-items-center w-max relative">
          <img src={triangle} className="absolute bottom-0" />

          <div
            className={`col-span-2 mx-7 relative cursor-pointer rounded-full`}
            onClick={() => startGame(0)}
          >
            <Ring size={160} img={paper} color={PAPER_COLOR} />
          </div>
          <div
            className={`col-span-2 relative cursor-pointer`}
            onClick={() => startGame(1)}
          >
            <Ring size={160} img={scissors} color={SCISSORS_COLOR} />
          </div>
          <div
            className={`col-span-4 relative cursor-pointer mt-7`}
            onClick={() => startGame(2)}
          >
            <Ring size={160} img={rock} color={ROCK_COLOR} />
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="grid grid-cols-4 place-items-center w-max relative ">
          <img src={triangle} className="absolute bottom-40" />

          <div
            className={`col-span-2 mx-7 relative  cursor-pointer rounded-full`}
            onClick={() => startGame(0)}
          >
            <Ring size={260} img={paper} color={PAPER_COLOR} />
          </div>
          <div
            className={`col-span-2 relative  cursor-pointer`}
            onClick={() => startGame(1)}
          >
            <Ring size={260} img={scissors} color={SCISSORS_COLOR} />
          </div>
          <div
            className={`col-span-4 relative  cursor-pointer mt-7`}
            onClick={() => startGame(2)}
          >
            <Ring size={260} img={rock} color={ROCK_COLOR} />
          </div>
        </div>
      </div>
    </>
  )
  const SecondPage = (
    <>
      <div className="w-full flex flex-col justify-evenly h-full md:hidden">
        <div className="flex w-full justify-between">
          <div className="grid place-items-center">
            <div
              className={`${
                gameResult == 'YOU WIN' && 'winner-shadow'
              } rounded-full`}
            >
              <Ring size={160} img={userChoice.img} color={userChoice.color} />
            </div>
            <p className="tracking-widest mt-7">YOU PICKED</p>
          </div>
          <div className="grid place-items-center">
            {loading ? (
              <Loading size={160} />
            ) : (
              <div
                className={`${
                  gameResult == 'HOUSE WIN' && 'winner-shadow'
                } rounded-full`}
              >
                <Ring
                  size={160}
                  img={houseChoice.img}
                  color={houseChoice.color}
                />
              </div>
            )}

            <p className="tracking-widest mt-7">THE HOUSE PICKED</p>
          </div>
        </div>
        {loading ? (
          <div style={{ height: 130 }}></div>
        ) : (
          <div className="grid place-items-center" style={{ height: 130 }}>
            <h2 style={{ fontSize: '4rem' }}>{gameResult}</h2>

            <button
              onClick={endGame}
              type="button"
              className="rounded-lg bg-gray-200 text-skin-dark py-3 px-16 tracking-widest text-lg"
            >
              PLAY AGAIN
            </button>
          </div>
        )}
      </div>
      <div
        className="hidden w-full md:visible md:flex md:flex-col md:justify-evenly h-full"
        style={{ maxWidth: '60em' }}
      >
        <div className="flex w-full justify-between">
          <div id="ring1" className="grid place-items-center">
            <div
              className={`${
                gameResult == 'YOU WIN' && 'winner-shadow-lg'
              } rounded-full`}
            >
              <Ring size={260} img={userChoice.img} color={userChoice.color} />
            </div>
            <p className="tracking-widest mt-7">YOU PICKED</p>
          </div>
          {loading ? (
            <div style={{ height: 130 }}></div>
          ) : (
            <div className="grid place-items-center" style={{ height: 130 }}>
              <h2 style={{ fontSize: '4rem' }}>{gameResult}</h2>

              <button
                onClick={endGame}
                type="button"
                className="rounded-lg bg-gray-200 text-skin-dark py-3 px-16 tracking-widest text-lg"
              >
                PLAY AGAIN
              </button>
            </div>
          )}
          <div id="ring2" className="grid place-items-center">
            {loading ? (
              <Loading size={260} />
            ) : (
              <div
                className={`${
                  gameResult == 'HOUSE WIN' && 'winner-shadow-lg'
                } rounded-full`}
              >
                <Ring
                  size={260}
                  img={houseChoice.img}
                  color={houseChoice.color}
                />
              </div>
            )}

            <p className="tracking-widest mt-7">THE HOUSE PICKED</p>
          </div>
        </div>
      </div>
    </>
  )
  const Header = (
    <>
      <div
        style={{ maxWidth: '40em' }}
        className="w-full px-6 py-4 border-4 border-gray-500 rounded-lg flex justify-between items-center md:hidden"
      >
        <img src={logo} alt="logo" height="100px" width="100px" />
        <div className="font-bold bg-gray-200 flex flex-col items-center px-6 py-2 rounded-lg leading-tight">
          <span className="text-skin-score text-xs tracking-widest">SCORE</span>
          <span className="text-skin-dark" style={{ fontSize: 42 }}>
            {score}
          </span>
        </div>
      </div>
      <div
        style={{ maxWidth: '40em' }}
        className="w-full px-6 py-4 border-4 border-gray-500 rounded-lg md:flex md:visible justify-between items-center hidden"
      >
        <img src={logo} alt="logo" height="150px" width="150px" />
        <div className="font-bold bg-gray-200 flex flex-col items-center rounded-lg leading-tight px-6 py-2">
          <span className="text-skin-score text-xl tracking-widest">SCORE</span>
          <span className="text-skin-dark" style={{ fontSize: 62 }}>
            {score}
          </span>
        </div>
      </div>
    </>
  )

  return (
    <main
      style={{ backgroundImage: BG_COLOR }}
      className="text-gray-200 p-8 h-screen flex flex-col items-center justify-between"
    >
      {Header}
      {gameStarted ? SecondPage : FirstPage}
      <div className="hidden md:block">
        <Rules />
      </div>
      <div className="block md:hidden">
        <RulesMobile />
      </div>
    </main>
  )
}

export default App
