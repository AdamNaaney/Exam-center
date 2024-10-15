import axios from "axios"
import toast from "react-hot-toast"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Sendav from "../components/Sendav"
import { useNavigate } from "react-router-dom"


function Result(){
    const admin = localStorage.getItem("Admin")
    const navigate = useNavigate()
    useEffect(()=>{
      if (!admin){
        navigate("/login")
      }
    })

  const  [results,setResults]= useState([])
//   function api soo bandhigaayo 

const handleGetData = () => {
axios.get("http://localhost:1000/results").then((response)=>{
setResults(response.data)
}).catch((error)=>{
    console.log(error)
})
}

useEffect(() => {
    handleGetData()
})
  const deleteResult =(id) =>{
    axios.delete(`http://localhost:1000/result/delete/${id}`).then(()=>{
        toast.success('Result Deleted successfully!');
    }).catch((error) => console.log(error))
  }
    
    return <div>
        <Sendav />
    
     <div className="  ml-[21%]">
       
       
        <h1 className="font-bold bg-yellow-400 text-center " >This is result</h1>
       <div>
        <table className="w-full text-center gap-10 ">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Math</th>
                <th>English</th>
                <th>Somali</th>
                <th>Biology</th>
                <th>Islamic</th>
                <th>Physics</th>
                <th>Chemsitry</th>
                <th>Action</th>
                <th>Action</th>
                
            </tr>
           {
            results.map((data)=>{
                return <tr>
                    <td className="border-2 p-1">{data.ID}</td>
                    <td className="border-2 p-1">{data.name}</td>
                    <td className="border-2 p-1">{data.math}</td>
                    <td className="border-2 p-1">{data.english}</td>
                    <td className="border-2 p-1">{data.somali}</td>
                    <td className="border-2 p-1">{data.biology}</td>
                    <td className="border-2 p-1">{data.islamic}</td>
                    <td className="border-2 p-1">{data.physics}</td>
                    <td className="border-2 p-1">{data.chemistry}</td>
                    <td className="border-2 p-1"><button  onClick={()=> deleteResult(data._id)}   className="bg-red-400 text-white p-1 rounded">Delete</button></td>
                    <td className="border-2 p-1">  <Link to={`/Update/${data._id}`}> <button  className="bg-red-400 text-white p-1 rounded ">Update</button></Link></td>
                    
                </tr>
            })
           }
        </table>
       </div>
    </div>
    </div>
}
export default Result