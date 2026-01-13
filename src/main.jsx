import { StrictMode } from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="527023026393-icvski56d62q5al9kfv3h17bk6j4sdrn.apps.googleusercontent.com">
      <App/>
    </GoogleOAuthProvider>
  </StrictMode>,
)
