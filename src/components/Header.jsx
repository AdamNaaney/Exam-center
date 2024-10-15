import { Link } from "react-router-dom"
function Header(){
    return <div className="bg-blue-500 p-2 flex  justify-center gap-[470px] ">
         <h1 className="text-white font-bold  ">Exam Center</h1>
         <ul className="text-white font-bold  ">
            <li>AboutUs</li>
            
         </ul>
       <Link  to="/login">  <button className="bg-yellow-500 rounded p-2">Admin Area</button></Link>
    </div>
}
export default Header