import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';
import Show from './Show';
function App() {
  const [data,setData]=useState([]);
  const [display,setDisplay]=useState(false);
  const [task,setTask]=useState('');
  //Read Operation
  useEffect(()=>{
    Axios.get('https://merntodo1450.herokuapp.com/read').then((response)=>{
    console.log(response.data)
    setData(response.data);
  })
  },[])
  
  //Write Operation:
  const AddtoList=()=>{
  Axios.post('https://merntodo1450.herokuapp.com/write',{task:task})
  }


  return (
    <div className="App">
      <h1>MERN TODO</h1>
      <input style={{height:50,width:500}} type='text' placeholder='Type the Task to be added in the list...'
      onChange={(e)=>setTask(e.target.value)}/>
      <button onClick={()=>AddtoList()}>Add</button>
      <br/><hr/>
      <div className='tasks'>
        <button onClick={()=>setDisplay(!display)}>Show/Hide Tasks</button>
       { display?<><h2>Tasks:</h2>
          <Show data={data}/></>:""}
      </div>
    </div>
  );
}

export default App;
