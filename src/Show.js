import React, { useState } from 'react'
import './App.css'
import Axios from 'axios'

function Show({data}) {
  const [update,setUpdate]=useState('');
  const [design,setDesign]=useState('none');
  const [clicked,setClicked]=useState(true);
//DELETE Operation:
const deletefn=(id)=>{
Axios.delete(`https://merntodo1450.herokuapp.com/delete/${id}`)
}

//UPDATE Operation:
const updatefn=(id)=>{
Axios.put('https://merntodo1450.herokuapp.com/update',{task:update,id:id});
}


  return (
    <div>{data.map((item)=>{
        return(<ol>
        <h4 style={{textDecoration:design}} className='task'>{(item.task)}</h4><button onClick={()=>deletefn(item._id)}>DELETE</button>
        <input type='text' placeholder='Input the change...' onChange={(e)=>setUpdate(e.target.value)}/><button onClick={()=>updatefn(item._id)}>UPDATE</button>
        </ol>)
    })}</div>
  )
}

export default Show