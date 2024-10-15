import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom" 
import toast from "react-hot-toast"


function Update(){
    
    const navigate = useNavigate()
    
  
    const params = useParams()
    const  [ID,setID]= useState("")
    const  [name,setName]= useState("")
    const  [math,setMath]= useState("")
    const  [english,setEnglish]= useState("")
    const  [somali,setSomali]= useState("")
    const  [biology,setBiology]= useState("")
    const  [islamic,setISlamic]= useState("")
    const  [physics,setPhysics]= useState("")
    const  [chemistry,setChemistry]= useState("")
      
    // API soo bandhogaayo hal result
    const getSingleResult =()=>{
        axios.get(`http://localhost:1000/Result/single/${params.id}`).then((response)=>{
            setID(response.data.ID)
            setName(response.data.name)
            setMath(response.data.math)
            setEnglish(response.data.english)
            setSomali(response.data.somali)
            setBiology(response.data.biology)
            setISlamic(response.data.islamic)
            setPhysics(response.data.physics)
            setChemistry(response.data.chemistry)
        }).catch((error)=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        getSingleResult()
    },[])

    // API oo xogta update garaynaayo
     
    const handUpdateData= (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:1000/exam/update/${params.id}`,{
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
            
            toast.success('Result Updated successfully!');
            navigate("/Result")
        }).catch((error)=>{
            console.log(error)
        })
    }
  


    return  <div className=" w-[20%] ml-[6%] gap-5 ">
      
        
        
    <div className="bg-blue-300 rounded w-[600px] h-[450px] ml-[240px] mt-4">
   < h1 className="text-white text-3xl text-center pt-[10px] font-bold">Update page</h1> 
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
   
  <button onClick={handUpdateData}  className="bg-white text-yellow-300 text-4xl py-1 px-[100px] ml-[100px] rounded-[8px] focus:text-black">Update</button>
   </div>




</div>

}

export default Update