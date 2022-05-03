import React ,{useState} from 'react'
import { edit } from"../redux/action/Action"
import{Modal,Form,Button} from "react-bootstrap"
import { useDispatch } from 'react-redux'

const EditTodo = ({todo}) => {
    const [newDescription, setNewDescription] = useState("")
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch=useDispatch()
    const handleClick=()=>{
        dispatch (edit(newDescription,todo.id))
    }
 
  
  return (
    <div>
        <button onClick={handleShow} className='mx-4' >✐</button>
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            defaultValue={todo.description} 
            onChange={e=>setNewDescription(e.target.value)}

           
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        
    </div>
  )
}

export default EditTodo