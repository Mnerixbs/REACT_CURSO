import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstSrepsApp } from './FirstSteps'
import { Myname } from './MyAwesomeApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstSrepsApp />
{/* 
<Myname></Myname> */}

  </StrictMode>,
)
