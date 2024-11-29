import axios from "axios";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { baseURL } from "../utils/Constant";

const Popup = ({ setShowPopup, popupContent, setUpdateUI }) => {
  const [input, setInput] = useState(popupContent.text);

  const updateToDo = () => {
    axios
      .put(`${baseURL}/update/${popupContent.id}`, { text: input })
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setShowPopup(false);
      });
  };

  return (
      <div className="flex flex-col  bg-black text-white p-4 rounded h-32 w-80" >
       
        <div className="flex justify-between mb-3">
        <h1 className="font-semibold text-sm">Update ToDo</h1>
        <RxCross1 onClick={() => setShowPopup(false)} />
        </div>
       
        <div >
          <input className="text-black font-semibold pl-3 w-60 rounded mb-3"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Update ToDo..."
          /><br></br>
          <spam className="bg-white text-black rounded p-1 m-2 hover:font-semibold"> <button onClick={updateToDo}>Update</button></spam>
         
        </div>
      </div>
  
  );
};

export default Popup;