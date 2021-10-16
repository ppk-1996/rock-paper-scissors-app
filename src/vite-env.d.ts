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
  size: number
  img: string
  color: string
}
