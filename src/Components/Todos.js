import react, {useState} from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import Form  from './Form'
function Todos ({list,index,deleteHandler,updatedTodo}) {
    const [edit,setEdit] = useState({
        id : null,
        text : ''
    })
    const submitUpdate = (val) => {
        updatedTodo(edit.id,val)
        setEdit({ id : null,
            text : ''})
        
    }



    if (edit.id) {
        return <Form onSubmit = {submitUpdate}/>
        
    }

    return(list.map( (todo) => 
    <div > 
            <div key = {index} className='allTodos'>{todo.text} 
            <RiCloseCircleLine onClick={ () => deleteHandler(todo.id)} className='close'/>
            <TiEdit   onClick={ () => setEdit({id : todo.id, text : todo.text})}/>
            </div>
            </div>

        )
    
    )
  

    
}
export default Todos




// :&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 