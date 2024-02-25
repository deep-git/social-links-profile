import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-offblack min-h-screen flex justify-center items-center font-inter">
      <main className="bg-dark_grey w-[315px] rounded-xl p-10 flex flex-col justify-center items-center sm:w-[375px]">
        <div className="rounded-full w-20 h-20 overflow-hidden">
          <img src="avatar-jessica.jpeg" alt="Profile avatar image"/>
        </div>
        <h1 className="text-2xl text-neutral_white mt-5 font-bold">Jessica Randall</h1>
        <p className="text-sm text-primary_green mt-1 font-bold">London, United Kingdom</p>
        <p className="text-sm text-neutral_white text-center mt-5">"Front-end developer and avid reader."</p>

        <section className="mt-6 w-full flex flex-col">
          <button>Github</button>
          <button>Frontend Mentor</button>
          <button>LinkedIn</button>
          <button>Twitter</button>
          <button>Instagram</button>
        </section>
      </main>
    </div>
  )
}

export default App
