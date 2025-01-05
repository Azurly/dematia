import { Bot, Settings, User } from 'lucide-react';
import SignIn from '../components/SignIn';
import Prompt from '../components/Prompt';

// Color for corresponding : #af33f2

function App() {
  const condition = false;

  return (
    <>
      <main className='container min-w-[250px] h-auto bg-gray-800 p-3 text-white text-center font-semibold'>
        <nav className='flex justify-between'>
          <button>
            <User />
          </button>
          <a className='flex items-center gap-1' href='http://dematia.vercel.app' target='_blank'>
            <Bot className='text-[#af33f2]' />
            <p>DematIA</p>
          </a>
          <button>
            <Settings />
          </button>
        </nav>
        {condition ? (
          <SignIn />
        ) : (
          <Prompt />
        )
        }
      </main>
    </>
  )
}

export default App
