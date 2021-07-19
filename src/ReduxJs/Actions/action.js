import {ADD_TASK, ALL, DELETE_TASK, DONE, DONE_TASK, EDIT_TASK,UNDONE} from '../Constants/TypesReducers'

export const delete_task=(Id)=>{
    return{
    type:DELETE_TASK,
    payload:Id
    }
}

export const add_task=(task)=>{
    return{
        type:ADD_TASK,
        payload:task
    }
}

export const Done_task=(id)=>{
    return{
        type:DONE_TASK,
        payload:id
    }
}

export const Edit_task=(id,text)=>{
    return {
        type: EDIT_TASK,
        payload:{
            id,
            text
        }
    }
}

