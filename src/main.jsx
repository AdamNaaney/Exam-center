
import { createRoot } from 'react-dom/client'
import "./style.css"
import Sendav  from './components/Sendav'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import {Toaster} from "react-hot-toast"
import Home from './Pages/Home'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 {/* <Sendav/> */}
 {/* <Home/> */}
  <App/>
 <Toaster/>
  </BrowserRouter>
)
