import React, { useState } from 'react'

function App() {


  const [count,setCount] = useState("0")

  function counter(valuew){
    const temp = valuew.split('')
    const counti = temp.length
    setCount(counti)
  }

  return (
    <div class="w-full h-screen bg-zinc-800 text-white flex flex-col col-span-1 justify-center items-center">
      <div class="text-black flex flex-col justify-center items-center bg-white w-fit h-96 rounded-md hover:bg-slate-200 transition-all ">
        SimpleCounter
        <div class="text-black text-center my-3 font-semibold text-xl">
          {count}
        </div>
        
        <div class="mx-4">
          <input class="border-2 w-96 text-black" onChange={e => counter(e.target.value)}></input>
        </div>
      </div>
    </div>
  )
}

export default App