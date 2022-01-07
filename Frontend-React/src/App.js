import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";


export default function App() {
  return (
    <div>
      <div>
    <Header/>
    </div>
    <br></br>
    <br></br>
    <div>
    <Mycontainer/>
    </div>
    </div>
  );
}

function Mycontainer()
{
const [message, setMessage]= useState("");

const [list, setList] = useState([]);

const handleMessage = (e) =>{
    setMessage(e.target.value);
}
const sendMsg = async () => {
     if(message == "")
       {
           alert("No message to send. please type");
       }

  const url="http://localhost:4000/send";
  const user= {
    message : message
  };

  await axios.post(url,user);
  const newList=[...list, user];
  setList(newList);

  setMessage("");
}

const getMsg = async () =>{
    const url = "http://localhost:4000/view";
    const result = await axios.get(url);
    const list = result.data;
    const newList = [...list];
    setList(newList);
  }
 useEffect(() => getMsg(), []);


   return(
     <div className="container-fluid">
       <div className="mt-4">
       <input
       className="m-1 w-75 fs-1"
       type="text" 
       placeholder="Lets chat here..." 
       value={message}
       onChange={handleMessage}
       >
       </input>
        <input 
        className="btn-success btn-btn-outline-success fs-2 btn-lg m-1 "
        type="button"
        value="Send"
        onClick={sendMsg}
        ></input>
        
       </div>

       {list.map((item, index) =>(
         <div key={index}
         className="alert-success p-1 fs-5"
         >
           <div className="d-flex p-1 fs-5 m-1 border border-success">
           {item.message}
           </div>
           <div className="d-flex justify-content-end p-1 fs-5 m-1 border border-success">
           {item.message}
           </div>
        </div>
       )
        )}
     </div>
   );
};


function Header()
{
return(
  <div className="container-fluid">
    <div className="bg-success mt-1 mb-1 d-flex fixed-top">
    <div className="text-light m-1 fs-2">
      MyChatApp
    </div>
    <div className="text-light mt-2 p-2">
      210940320120
      Snehal Sawant
      Kharghar
    </div>
    </div>
   </div>
);
};