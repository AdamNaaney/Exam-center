import { NavLink } from "react-router-dom"

function Sendav(){
   const logout = () =>{
    localStorage.clear()
   }

    return <div className=""> 
        <div className="bg-blue-800 fixed top-0  text-white h-screen w-[20%] ">
    <h1 className="text-3xl pl-10 pt-10 border-b-4">Exam Center</h1>
    <ul className="mt-10 flex flex-col gap-10 ml-10 text-2xl">
  
    <NavLink to="/Dashboard" >  <li> <i class="fa-brands fa-microsoft  "></i> Dashboard </li></NavLink>
         <NavLink to="/Result" >  <li> <i class="fa-solid fa-square-poll-vertical"></i> Results  </li> </NavLink> 
         <NavLink to="/Addresult" >   <li> <i class="fa-solid fa-plus"></i> Add results</li></NavLink> 
         <NavLink to="/Login" >   <li onClick={logout}> <i class="fa-solid fa-right-from-bracket"></i> LogOut</li></NavLink> 
            
        </ul>
    </div>
    </div>
}

  



export default Sendav