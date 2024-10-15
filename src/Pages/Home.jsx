import React, { useState } from 'react';
 import Header from '../components/Header';
import axios from 'axios';
import toast from 'react-hot-toast';


const Home = () => {
    const [ID, setID] = useState("");
    const [result, setResult] = useState(null);  
    const [loading, setLoading] = useState (false)


    const getResult = (e) => {
        e.preventDefault();
        setLoading(true)
     

        axios.post("http://localhost:1000/display/single", {
            ID: ID
        }).then((response) => {
            setResult(response.data);
            setLoading(false)
          
            
        }).catch((error) => {
            console.log(error);
            setResult(null);  
            setLoading(false)
        });
    };

    return ( <div >
          <Header/>
        
            
            {/* <h1 className="text-2xl text-font mt-2 mb-6 ml-4 font-medium">This is the Home page</h1> */}

            <div className="flex justify-center items-center mb-6">
              
            </div>

            <div className="text-center px-4 sm:px-0">
                <form className="mb-8">
                    <input 
                        value={ID} 
                        onChange={(event) => setID(event.target.value)} 
                        type="text" 
                        placeholder="Enter roll number" 
                        className="w-full  md:w-[500px] border-2 border-black rounded h-[55px] p-2"
                    />
                    <button onClick={getResult} className="bg-blue-500 px-4 ml-2 py-4 text-white rounded ">
                        Search
                    </button>
                </form>
            </div>

            <div  className="mx-5 sm:mx-[50px] md:mx-[100px] lg:mx-[300px] mt-10">
                {result ? (
                    result.ID ? (
                       <div>
                            <h1 >ID: {result.ID}</h1>
                            <h1>Name: {result.name}</h1>
                            {/* <h1 className=' font-medium mt-2 text-center'>The Average: {Math.round((result.math + result.english + result.somali + result.biology + result.islamic + result.physics + result.chemistry) / 7)}%</h1> */}



               <div className="mt-4 mx-5">
                   <table  className="w-full border-collapse">
            <tbody>
                                        
              <tr>
               <th>SUBJECTS</th>
               <th> MARKS</th>
                <th>SUBJECTS</th>
               <th> MARKS</th>
               
             </tr>

             <tr>
                                      
                <th className="border-2 border-gray-500 p-2 md:p-4">Math</th>
                <td className="border-2 border-gray-500 p-2 md:p-4">{result.math}</td>
                <th className="border-2 border-gray-500 p-2 md:p-4">English</th>
                <td className="border-2 border-gray-500 p-2 md:p-4">{result.english}</td>
                </tr>
                <tr>
                <th className="border-2 border-gray-500 p-2 md:p-4">Somali</th>
                <td className="border-2 border-gray-500 p-2 md:p-4">{result.somali}</td>
                <th className="border-2 border-gray-500 p-2 md:p-4">Biology</th>
                <td className="border-2 border-gray-500 p-2 md:p-4">{result.biology}</td>
                </tr>
                <tr>
                 <th className="border-2 border-gray-500 p-2 md:p-4">Islamic</th>
                 <td className="border-2 border-gray-500 p-2 md:p-4">{result.islamic}</td>
                 <th className="border-2 border-gray-500 p-2 md:p-4">Physics</th>
                 <td className="border-2 border-gray-500 p-2 md:p-4">{result.physics}</td>
                 <th className="border-2 border-gray-500 p-2 md:p-4">Chemistry</th>
                 <td className="border-2 border-gray-500 p-2 md:p-4">{result.chemistry}</td>
             </tr>
                 <h1 className=' font-medium mt-2 text-center'>The Average: {Math.round((result.math + result.english + result.somali + result.biology + result.islamic + result.physics + result.chemistry) / 7)}%</h1>
            </tbody>
         </table>
             </div>
             </div>
                    ): (
                   <p>  data not found ID</p>
                   
                    )
              
                 ) : (
                    <p>Please enter an ID to search for results.</p>
                )}   
            </div>
        </div>
       
    );
};

export default Home

