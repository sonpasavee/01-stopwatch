import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0)
  const [running , setRunning] = useState(false)

  useEffect(()=>{
    let interval
    if(running) {
      interval = setInterval(()=> {
        setTime((prevTime) => prevTime + 10)
      },10)
    }else if(!running) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  },[running])
  return (
    <>
      <div className='bg-neutral-900 px-30 py-25 rounded-xl shadow-xl max-w-md flex flex-col items-center justify-center py-8'>
        <h2 className='text-red-400 text-2xl font-semibold pb-2'>01-Stopwatch</h2>
          <div className='text-xl font-semibold py-4'>
            <span>{("0" + Math.floor(time/6000) % 60)}:</span>
            <span>{("0" + Math.floor(time/1000) % 60)}:</span>
            <span>{("0" + ((time/10) % 100)).slice(-2)}:</span>
          </div>
          <div className='flex flex-row gap-2'>
            {running ? (<button onClick={()=>{setRunning(false)}}>Stop</button>) : (<button onClick={()=>{setRunning(true)}}>Start</button>)}
            <button onClick={()=>{setTime(0)}}>Clear</button>
          </div>
        </div>
    </>
  )
}

export default App
