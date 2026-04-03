import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstSrepsApp } from './FirstSteps'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
<FirstSrepsApp />
  </StrictMode>,
)
