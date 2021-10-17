/// <reference types="vite/client" />
type themeFunctions = {
  theme: number
  setTheme: (theme: number) => void
  toggleTheme: () => void
}
type screenProps = {
  result: string
}
type keypadProps = {
  displayText: (text: string) => void
  deleteUserText: () => void
  computeString: () => void
  resetText: () => void
}
type ringProps = {
  size: string
  img: string
  color: string
}
type resultProps = {
  gameResult: string
  userChoice: { img: string; color: string }
  loading: boolean
  houseChoice: { img: string; color: string }
  endGame: () => void
}
