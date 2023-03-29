import { useState } from 'react'
import UploadButton from './components/UploadButton'

function App() {

  return (
    <div className="
    flex 
    flex-col
    w-100
    min-h-screen
    items-center
    ">
      <h1 className='text-6xl font-extrabold'>How to Cook</h1>
      <div>
        <UploadButton />
      </div>
    </div>
  )
}

export default App
