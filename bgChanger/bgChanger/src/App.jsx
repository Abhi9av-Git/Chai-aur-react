import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor]=useState("olive")

  return (
    <div className="w-full h-screen duration-200 transition-colors" style={{backgroundColor: color}}>
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl mx-auto w-fit">
          <button onClick={()=>setColor("red")} className="bg-red-600 text-white rounded-2xl mr-4">Red</button>
          <button onClick={()=>setColor("green")} className="bg-green-600 text-white rounded-2xl mr-4">Green</button>
          <button onClick={()=>setColor("blue")} className="bg-blue-600 text-white rounded-2xl mr-4">Blue</button>
          <button onClick={()=>setColor("gray")} className="bg-gray-600 text-white rounded-2xl mr-4">Gray</button>
          <button onClick={()=>setColor("yellow")} className="bg-yellow-600 text-white rounded-2xl mr-4">Yellow</button>
          <button onClick={()=>setColor("pink")} className="bg-pink-600 text-white rounded-2xl mr-4">Pink</button>
          <button onClick={()=>setColor("purple")} className="bg-purple-600 text-white rounded-2xl mr-4">Purple</button>
          <button onClick={()=>setColor("white")} className="bg-white text-black rounded-2xl mr-4">White</button>
          <button onClick={()=>setColor("black")} className="bg-black text-white rounded-2xl mr-4">Black</button>
        </div>
    </div>
  )
}

export default App

