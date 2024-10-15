import axios from "axios"
import { useEffect, useState } from "react"
import Sendav from "../components/Sendav"
import { useNavigate } from "react-router-dom"


function Dashboard(){
    const admin = localStorage.getItem("Admin")
    const navigate = useNavigate()
    useEffect(()=>{
      if (!admin){
        navigate("/login")
      }
    })



  const [total, setTotal] = useState({})
  const [passedOrFailed, setPassedOrFailed] = useState({})
  const getTotalStudents = () => {
    axios.get("http://localhost:1000/student/total").then((response)=>{
        setTotal(response.data)
    }).catch((error)=>{
        console.log(error)
    })
  }

  useEffect(()=>{
    getTotalStudents()
  })


  const failedorPassedStudents=()=>{
  axios.get("http://localhost:1000/student/pass/falied").then((response)=>{
    setPassedOrFailed(response.data)
}).catch((error)=>{
    console.log(error)
})
}

useEffect(()=>{
 failedorPassedStudents()
})
 
   
 
    
   
   
   
   
   
   
   return <div>
     <Sendav/>
   <div className=" ml-[21%]">
        <div className="flex gap-3 mt-5">
            <div className="bg-yellow-400 h-[200px] rounded text-blue-500 text-center font-bold  w-[300px]">
                <p className="pt-11">{total.getTotal}</p>
                <h1 className="">Total student</h1>
            
            </div>
            <div className="bg-red-400 h-[200px] rounded  text-blue-500 font-bold text-center w-[300px]">
            
            <p className="pt-11">{passedOrFailed.ardaydaFailed}</p>
            <h1>Total Failed</h1>
            </div>
            <div className="bg-green-400 h-[200px] rounded text-blue-500  font-bold text-center w-[300px] mr-3">
            <p className="pt-11">{passedOrFailed.ardaydaPassed} </p>
            <h1>Total passed</h1>
            </div>
        </div>
     
    </div>
    </div>
}
export default Dashboard