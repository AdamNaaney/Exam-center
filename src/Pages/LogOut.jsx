import { useState } from "react"
import { json, Link } from "react-router-dom"
import axios from "axios"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
 function LogOut(){
    const [username ,setUsername] = useState ("")
    const [password , setPassword] = useState ("")
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        axios.post("http://localhost:1000/admin/login", {
            "username":username,
            "password":password
        }).then((response)=>{
            if(response.data.error){
                 toast.success("Incorrect username or password")
        }
             else if(response.data.empty){
                toast.success("Fadlan soo gali username or password")
             }
        else{
            toast.success("Login successfully")
            localStorage.setItem("Admin", JSON.stringify(response.data))
            navigate("/Dashboard")
        }
        }).catch((error)=>{
            console.log(error)
        })
        } 











        return <div>
        <div className=" w-full"> 
     


   <div className='bg-gray-500 h-screen  pt-20 text-center '>
    <div className=''>
      <form className='bg-yellow-600 w-[400px] h-[400px] m-auto pt-20 text-2xl  border-b-8  border-red-600 '>
        <label className='text-2xl text-white' >Username:</label> <br />
        <input  value={username}  onChange={(event) => setUsername(event.target.value)} className='py-2  p-4 border-b-green-400 border-4' type="text" name="username" /> <br />
        <label className='text-2xl text-white' >Password:</label> <br />
        <input value={password} onChange={(event) => setPassword(event.target.value)} className='py-2 p-4 border-b-green-400 border-4'  type="password" name="password" /> 
     <div>
       <button onClick={handleLogin} className='px-4  pb-2 mt-4 rounded text-white bg-blue-600'>Login</button>  
     </div>
      </form>
    </div>
  
     </div>

        </div>
        </div>
        
 }
 export default LogOut