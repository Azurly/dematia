import { useEffect, useState } from 'react'
import { motion } from "motion/react"
import { Bot, Settings, TriangleAlert, User } from 'lucide-react';

// Color for corresponding : #af33f2

function App() {
  const [logged, setLogged] = useState(true);
  
  useEffect(() => {
    const auth = async () => {
      try {
        const response = await fetch("",{});
        if (!response.ok) return null;
        setLogged(true);
      }catch(error){
        return error;
      }
    }
  auth();
}, []);
  return (
    <>
      <main className='container min-w-[250px] h-auto bg-gray-800 p-3 text-white text-center font-semibold'>
        <nav className='flex justify-between'>
          <button>
            <User/>
          </button>
          <a className='flex items-center gap-1' href='http://dematia.vercel.app' target='_blank'>
            <Bot className='text-[#af33f2]'/>
            <p>DematIA</p>
          </a>
          <button>
            <Settings/>
          </button>
        </nav>
      {logged ?
      ( <>
          <div className='flex justify-center items-center'>
            <TriangleAlert width={50} height={'auto'}/>
            <p className='text-xl p-4'>Please Sign In</p>
          </div>
          <button className='bg-[#af33f2] p-3 rounded-md'>Sign In</button>
        </>
      ) : (
        <section>
          <div className='p-5 flex justify-center items-center'>
          <motion.img
            animate={{scale: 1.2}}
            transition={{
              repeat: Infinity, 
              repeatType: "reverse",
            }}
            src='/icon.svg'
            width={150}
            height={'auto'}
            />
          </div>
            <p>Welcome, User !</p>
        </section>
      )}
      </main>
    </>
  )
}

export default App
