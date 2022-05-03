
import{ADD,DELETE,EDIT,CHECKED}from "../action/ActionTypes"


export const add=(tdoo)=>{

return {
    type: ADD, 
    payload:tdoo }

}   

export const deletee=(id)=>{

    return {
        type:DELETE ,
        payload:id
    }
    
}

    export const edit=(todos,id)=>{

        return {
            type:EDIT,
            payload:{todos,id} 
        }
        
    }
        export const checked=(id)=>{

            return {
                type:CHECKED ,payload:id}
            
            }
