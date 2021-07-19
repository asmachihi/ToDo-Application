import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import {add_task,all,done,undone} from '../ReduxJs/Actions/action'

export default function AddTask() {
    const [input,setInput]=useState("")
    const dispatch=useDispatch()
   
    return(
        <div>
            <p>Mon application ToDo</p>
            <input type="texte" placeholder="Entrer votre tache....." onChange={(e)=>setInput(e.target.value)}/>
            <Button variant="dark" onClick={()=>dispatch(add_task({id:Math.random(),description:input,isDone:false}))}>Ajoutez</Button><br/><br/>
          
        </div>
    )
    
}