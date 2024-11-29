import { useState ,useEffect} from "react"
import axios from "axios";
import { baseURL } from "./utils/Constant";
import ToDo from "./component/ToDo";
import Popup from "./component/Popup";


function App() {
  const [todos,setTodos]=useState([]);
  const [input,setInput]=useState('');
  const [updateUI,setUpdateUI]=useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});

  useEffect(() => {
    axios
      .get(`${baseURL}`)
      .then((res) => setTodos(res.data.todos))
      .catch((err) => console.log(err));
  }, [updateUI]);


const saveToDo=()=>{
axios
.post(`${baseURL}/save`,{text:input})
.then((res)=>{setUpdateUI(prev=>!prev);
  setInput('')
})
}
  return (
    <div className="flex flex-col mt-3 pl-96 ">
    <h1 className="ml-24 mb-10 text-lg text-cyan-950 font-bold">TODO LIST</h1>
    <div>
    <input type="text" placeholder="enter your todo " className="border-b-2 outline-none cursor-none w-80" value={input} onChange={(e)=>setInput(e.target.value)}/>
    <button onClick={saveToDo} >ADD</button>
    </div>
  
  <div >
    { todos.map((el)=><ToDo id={el._id} 
    key={el._id}
     text={el.text} 
    setUpdateUI={setUpdateUI}
     setShowPopup={setShowPopup}
     setPopupContent={setPopupContent}/>)}
  </div>
  {showPopup && (
        <Popup
          setShowPopup={setShowPopup}
          popupContent={popupContent}
          setUpdateUI={setUpdateUI}
        />
      )}
    </div>
  )
}

export default App
