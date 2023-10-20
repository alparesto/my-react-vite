import { useState, Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

class Button extends Component {
  render() {
    return(
      <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">Buy Now!</button>
    )
  }
}

function Buttonku() {
  return(
    <button className="h-10 px-6 font-semibold rounded-md bg-slate-500 text-white" type="submit">Buy Now!</button>
  )
}

const ButtonRed = () => {
  return(
    <button className="h-10 px-6 font-semibold rounded-md bg-red-700 text-white" type="submit">Buy Now!</button>
  )
}

function App() {

  return(
    <div className="flex justify-center min-h-screen items-center">
      <div className="flex gap-x-2">
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Buttonku></Buttonku>
        <ButtonRed></ButtonRed>
      </div>
    </div>
  )
}

export default App