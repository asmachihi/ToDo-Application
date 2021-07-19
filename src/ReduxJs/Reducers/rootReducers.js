
import {ADD_TASK, DELETE_TASK, DONE_TASK,EDIT_TASK} from '../Constants/TypesReducers'

const initialInit ={
   todos:[
       {
           id:0,
           description:"Cours Web",
           isDone:false
       },
        {
            id:1,
            description:"Cours HTML",
            isDone:false
        },
        {
            id:2,
            description:"Cours CSS",
            isDone:false
        },
        {
            id:3,
            description:"Cours DOM",
            isDone:false
        },
        {
            id:4,
            description:"Cours React",
            isDone:false
        },
        {
            id:5,
            description:"Cours Redux",
            isDone:false
        },
        {
            id:6,
            description:"Cours API",
            isDone:false
        }
   ]
}


function rootReducers(state=initialInit,action){
    switch(action.type){
     case DELETE_TASK:
         return {...state,todos:state.todos.filter(el=> el.id !== action.payload)}
     case ADD_TASK:
         return {...state,todos:[...state.todos,action.payload]}  
     case EDIT_TASK:
        return{...state,todos:state.todos.map(el=> el.id === action.payload.id ? {...el, description:action.payload.text}: el)}
     case DONE_TASK:
        return {...state,todos:state.todos.map(el=> el.id === action.payload ? { ...el, isDone: !el.isDone } : el)}
    default:
        return state    
    }
   
}





export default rootReducers