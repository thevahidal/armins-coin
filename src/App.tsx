import { Key, useState } from 'react'
import './App.css'
import cross from './cross.svg'

function App() {
  const [isHeads, setIsHeads] = useState(true)
  const [tossedAttemptKey, setTossedAttemptKey] = useState<Key>("")


  const handleFlip = () => {
    const randomNumber = Math.random()
    const _isHeads = randomNumber >= 0.5
    setIsHeads(_isHeads)
    setTossedAttemptKey(new Date().toISOString())
  }


  return (
    <div className="App">
      <div>
        <h2>Armin's Coin</h2>
        <p>May the Coin decide the best for us</p>
      </div>
      <div
        key={tossedAttemptKey}
        id="coin"
        className={`${isHeads ? "heads" : "tails"} ${tossedAttemptKey === "" ? "not-started" : ""}`}
        onClick={handleFlip}
      >
        <div className={`coin-circle side-a`}></div>
        <div className={`coin-circle side-b`}></div>
      </div>
      <div className='legend'>
        <div className='legend-side'>
          <div className="legend-circle side-a"></div>
          <div className='legend-title'>Heads</div>
        </div>
        <div className='legend-side'>
          <div className="legend-circle side-b"></div>
          <div className='legend-title'>Tails</div>
        </div>
      </div>
    </div>
  )
}

export default App
