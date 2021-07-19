import React,{useState} from "react"
import { useSelector } from "react-redux"
import Task from '../components/Task'
import {Button} from 'react-bootstrap'

export default function ListTask() {
   const todos=useSelector(state=>state.todos)
   const [filtre,setFiltre]=useState(false)
   const [done,setDone]=useState(false)
    return(
        <div>
            <Button variant="dark" onClick={()=>setFiltre(false)}>Toutes des déscriptions</Button>
            <Button variant="dark" onClick={()=>{setFiltre(true);setDone(true)}} >Déscriptions DONE</Button>
            <Button variant="dark" onClick={()=>{setFiltre(true);setDone(false)}}>Déscriptions UNDONE</Button><br/>
         <ul>
          { !filtre ?
            todos.map(el=>
             <li><Task todo={el}/></li>) : done ? todos.filter(el=> el.isDone===true).map(el=>
                <li><Task todo={el}/></li>) : todos.filter(el=> el.isDone===false).map(el=>
                <li><Task todo={el}/></li>)
          }
         </ul>
        </div>
    )    
}