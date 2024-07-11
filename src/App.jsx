import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Movies from './components/movies/Movies'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Movies/>
    </>
  )
}

export default App