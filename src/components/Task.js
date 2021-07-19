import React,{useState} from 'react'
import './component.css'
import { Button,Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { delete_task, Done_task,Edit_task } from '../ReduxJs/Actions/action'

export default function Task({todo}) {
    const dispatch = useDispatch()
    const [input,setInput]=useState(todo.description)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        
        <div className="task">
             <p style={{ textDecoration: todo.isDone ? "line-through" : null }}>{todo.description}</p>
             <Button variant="dark" onClick={()=>dispatch(Done_task(todo.id))}>Done</Button>
             <Button variant="dark" onClick={handleShow}>Modifiez</Button>
               <> <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                  className="modal">
                  <Modal.Header closeButton>
                    <Modal.Title>Modifiez votre description</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                     Entrez votre Description:<input type="text" onChange={(e)=>setInput(e.target.value)} value={input}/>
                  </Modal.Body>
                  <Modal.Footer>
                  <Button variant="dark" onClick={()=>{dispatch(Edit_task(todo.id,input));handleClose()}}>Modifier</Button>
                  <Button variant="dark" onClick={handleClose}>Fermer</Button>
                  </Modal.Footer>
                </Modal></>
             <Button variant="dark" onClick={()=>dispatch(delete_task(todo.id))}>Supprimer</Button>
          
        </div>
        
             
    
    )
}
