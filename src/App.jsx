import {Route ,Routes} from "react-router-dom"
import Dashboard from "./Pages/Dashboard"
import Result from "./Pages/Results" 
import Addresult from "./Pages/Addresults"
import Update from "./components/UpdateResult"
import LogOut from "./Pages/LogOut"
import Home from "./Pages/Home"
function App(){
    return <Routes>
    <Route path="/Dashboard" element={<Dashboard/>} />
    <Route path="/Result" element={<Result/>}/>
    <Route path="/Addresult" element={<Addresult/>}/>
    <Route path="/Update/:id" element={<Update/>}/>
    <Route path="/login" element={<LogOut/>}/>
    <Route path="/" element={<Home/>}/>

    
    </Routes>
}
export default App
