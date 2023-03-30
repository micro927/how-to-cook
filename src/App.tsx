import { useState } from 'react'
import { css } from '@emotion/react'
import WelcomeSection from './components/WelcomeSection'

type sectionDataStatus = {
  welcomeSection: 'active' | 'inactive',
  recipeSection: 'active' | 'inactive'
}

function App() {
  const styles = css({
    fontFamily: 'Noto Sans, sans-serif',
    color: 'white',
    // textShadow: "",
    "::before": {
      content: '""',
      position: "absolute",
      zIndex: -1,
      minHeight: "100vh",
      minWidth: "100vw",
      backgroundImage: `url("https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80")`,
      backgroundPosition: 'center',
      backgroundSize: "cover",
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      filter: `opacity(1) brightness(0.37)`,
    },
    "main": {
      backdropFilter: 'blur(4px)',
    },
    "& .title::after": {
      content: "' ?'",
    }
  })

  const [sectionDataStatus, setSectionDataStatus] = useState<sectionDataStatus>({
    welcomeSection: 'active',
    recipeSection: 'inactive'
  })

  return (
    <>
      <div id='App' css={styles}>
        <main className="flex flex-col items-center min-h-screen justify-center w-100 px-5">
          <header>
            <h1 className='title -translate-y-20 text-5xl sm:text-8xl font-extrabold italic text-center'>How to Cook</h1>
          </header>
          <WelcomeSection dataIndex={0} dataStatus={sectionDataStatus.welcomeSection} isUploaded={false} />
        </main>
      </div>
    </>
  )
}

export default App
