import { useState } from 'react'
import { css } from '@emotion/react'
import { AppContextProvider, useAppContext } from './components/AppContextProvider'
import WelcomeSection from './components/WelcomeSection'
import InformationSection from './components/InformationSection'

const styles = css({
  fontFamily: 'Noto Sans, sans-serif',
  // color: 'white',
  // textShadow: "",
  "::before": {
    content: '""',
    position: "fixed",
    zIndex: -1,
    minHeight: "100%",
    minWidth: "100%",
    backgroundImage: `url("https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80")`,
    backgroundPosition: 'center',
    backgroundSize: "cover",
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    filter: `opacity(1) brightness(0.6)`,
  },
  "main": {
    backdropFilter: 'blur(4px)',
  },
  "& .title::after": {
    content: "' ?'",
  }
})

function App() {
  return (
    <AppContextProvider>
      <div id='App' css={styles}>
        <main className="flex flex-col items-center min-h-screen w-full px-5">
          <header>
            <h1 className='title mt-12 text-7xl md:text-8xl text-white font-extrabold italic text-center'>How to Cook</h1>
          </header>
          <div className='mt-8 w-full min-h-[70vh] mb-4'>
            <InformationSection />
            <WelcomeSection />
          </div>
          <div className='mb-8'>
            <p className='text-sm text-center text-gray-200 italic'>Developed by micro927 (<a href='https://github.com/micro927/how-to-cook'>Github</a>)</p>
          </div>
        </main>
      </div>
    </AppContextProvider>
  )
}

export default App
