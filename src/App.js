import './App.css'
import { Routes, Route } from 'react-router-dom'
import FindBots from './findBots'

function App() {
  return (
    <div className="App tc pa3 ">
      <Routes>
        <Route path="/" element={<FindBots />} />
      </Routes>
    </div>
  )
}

export default App
