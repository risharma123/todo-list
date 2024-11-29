import axios from 'axios';
import React from 'react'
import { baseURL } from "../utils/Constant";
import { AiFillEdit } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

function ToDo({id,text,setUpdateUI,setPopupContent,setShowPopup}) {

    const handleDelete=()=>{
        axios
        .delete(`${baseURL}/delete/${id}`)
        .then((res)=>{setUpdateUI(prev=>!prev)   
        }).catch((err)=>{
         console.log(err);
        })
    }
    const  handleEdit=()=>{
      
        setPopupContent({ text, id });
        setShowPopup(true);
      };
    

    


  return (
    <div className='flex flex-row bg-black text-white m-2 justify-between items-center pl-4 rounded h-10 w-80'>
        <div>{text}</div>
        <div className='flex flex-row justify-center items-center pr-3'>
        <AiFillEdit className='mr-4' onClick={handleEdit}/>
        <RxCross1 onClick={handleDelete} />
        </div>
        
    </div>
  )
}

export default ToDo