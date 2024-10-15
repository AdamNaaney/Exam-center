import { Form } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import toast  from "react-hot-toast"
import Sendav from "../components/Sendav"

import { useEffect } from "react"
function Addresult(){
    const admin = localStorage.getItem("Admin")
    const navigate = useNavigate()
    useEffect(()=>{
      if (!admin){
        navigate("/login")
      }
    })

    const  [ID,setID]= useState("")
    const  [name,setName]= useState("")
    const  [math,setMath]= useState("")
    const  [english,setEnglish]= useState("")
    const  [somali,setSomali]= useState("")
    const  [biology,setBiology]= useState("")
    const  [islamic,setISlamic]= useState("")
    const  [physics,setPhysics]= useState("")
    const  [chemistry,setChemistry]= useState("")

    // function xogta kasoo qaadaya  formka asoo isticmaalaya API

    const handleRegistrationResult= (e) =>{
        e.preventDefault()
        axios.post("http://localhost:1000/create",{
            "ID": ID,
            "name": name,
            "math": math,
            "somali": somali,
            "english": english,
            "biology": biology,
            "islamic": islamic,
            "physics": physics,
            "chemistry": chemistry,
        }).then(()=>{
            toast.success('Result added successfully!');
            navigate("/Result")
        }).catch((error)=>{
            console.log(error)
        })
    }


    return <div>
        <Sendav />
     <div className=" w-full  gap-5 ">
      
        
        
        <div className="bg-blue-300 ml-[290px] rounded w-[600px] h-[440px] mt-4">
       < h1 className="text-white text-3xl text-center pt-[10px] font-bold">ADDRESULT</h1> 
        <h1 className="text-white text-3xl text-center  pt-[15px] font-bold">Examination</h1>
       <form className="flex">

        <div>
     
      <input value={ID} onChange={(event) => setID(event.target.value)} className="w-[200px] h-[30px] focus:outline-none hover:border-2 border-black ml-5 m-3 p-4  rounded"  type="text"   placeholder="Enter your ID"/>
      <input  value={name} onChange={(event) =>setName(event.target.value)} className="w-[200px] h-[30px] focus:outline-none hover:border-2 border-black ml-5 m-3 p-4 rounded"  type="text"   placeholder="Enter your name"/>
      <input value={math} onChange={(event) =>setMath(event.target.value)} className="w-[200px] h-[30px] focus:outline-none hover:border-2 border-black ml-5 m-3 p-4 rounded"  type="text"   placeholder="Enter your Subject"/>
      <input value={english} onChange={(event) =>setEnglish(event.target.value)} className="w-[200px] h-[30px] focus:outline-none hover:border-2 border-black ml-5 m-3 p-4  rounded"  type="text"   placeholder="Enter your Subject"/>
      <input value={somali} onChange={(event) =>setSomali(event.target.value)} className="w-[200px] h-[30px] focus:outline-none hover:border-2 border-black ml-5 m-3 p-4  rounded"  type="text"   placeholder="Enter your Subject"/>
      </div>

      <div>
      <input value={biology} onChange={(event) =>setBiology(event.target.value)} className="w-[200px] h-[30px] focus:outline-none hover:border-2 border-black ml-5 m-3 p-4  rounded"  type="text"   placeholder="Enter your Subject"/>
      <input value={islamic} onChange={(event) =>setISlamic(event.target.value)} className="w-[200px] h-[30px] focus:outline-none hover:border-2 border-black ml-5 m-3 p-4  rounded"  type="text"   placeholder="Enter your Subject"/>
      <input  value={physics} onChange={(event) =>setPhysics(event.target.value)}className="w-[200px] h-[30px] focus:outline-none hover:border-2 border-black ml-5 m-3 p-4  rounded"  type="text"   placeholder="Enter your Subject"/>
      <input value={chemistry} onChange={(event) =>setChemistry(event.target.value)} className="w-[200px] h-[30px] focus:outline-none hover:border-2 border-black ml-5 m-3 p-4  rounded"  type="text"   placeholder="Enter your Subject"/>
      </div>
      
      


 



       </form>
       
      <button  onClick={handleRegistrationResult} className="bg-white text-yellow-300 text-4xl py-1 px-[100px] ml-[100px] rounded-[8px] focus:text-black">Save</button>
       </div>




    </div>
    </div>
}
export default Addresult