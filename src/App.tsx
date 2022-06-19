import { Key, useEffect, useState } from 'react'
import * as Panelbear from "@panelbear/panelbear-js";

import './App.css'
import cross from './cross.svg'


function App() {
  const [isHeads, setIsHeads] = useState(true)
  const [tossedAttemptKey, setTossedAttemptKey] = useState<Key>("")
  const [headsCount, setHeadsCount] = useState<number>(0)
  const [totalCount, setTotalCount] = useState<number>(0)
  const [isFlipping, setIsFlipping] = useState<boolean>(false)

  let updateCountsTimeout: any = null
  const handleFlip = () => {
    if (isFlipping) {
      Panelbear.track("coin_flip_declined");
      return
    }

    Panelbear.track("coin_flip");

    const randomNumber = Math.random()
    const _isHeads = randomNumber >= 0.5
    setIsHeads(_isHeads)
    setTossedAttemptKey(new Date().toISOString())
    setIsFlipping(true)

    updateCountsTimeout = setTimeout(() => {
      setTotalCount(count => count + 1)
      setHeadsCount(count => _isHeads ? count + 1 : count)
      setIsFlipping(false)
  }, 3000)
  }

  useEffect(() => {
    Panelbear.trackPageview();

    return () => {
      clearTimeout(updateCountsTimeout)
    }
  }, [])

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
      <div className='counter'>
        <span className='heads side-a'>{headsCount}</span>
        <span className='slash'>/</span>
        <span className='total'>{totalCount}</span>
      </div>
    </div>
  )
}

export default App
