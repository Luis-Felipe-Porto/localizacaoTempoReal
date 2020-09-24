import React ,{useState,useEffect} from 'react';
 import socketIOClient from 'socket.io-client';

 const ENDPOINT = "http://127.0.0.1:3333";

 function App(){
    const [response,setResponse] = useState({})

    useEffect(()=>{
        const socket = socketIOClient(ENDPOINT);
        socket.on('locationEvent', data => {
          setResponse(data);
        });
      
    },[])
    
    console.log(response);
    return response;
 }

 export default App;