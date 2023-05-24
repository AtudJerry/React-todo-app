import react, { useState } from 'react'
import Form from './Form'
import Todos from './Todos'


function List ({id, text,index}) {
    const [list,setList] = useState([])
  

    const addToList = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)){
            return 
        }
        setList([...list,{id : todo.id, text : todo.text}])
        console.log(list)
    }

    const deleteHandler = (id) => {
        const FilteredList = list.filter((todo) => todo.id !== id)
        setList(FilteredList)

    }
    const updatedTodo = (id,value) => {
        if (!value.text || /^\s*$/.test(value.text)){
            return 
        }
        
        setList(prev => prev.map( item => item.id ===id? value : item))
    }
    
   



   
    
    return(
        <div>
        <Form onSubmit = {addToList} text = {text} id = {id}/>
        <Todos list = {list}  id = {id} index = {index} deleteHandler={deleteHandler} updatedTodo={updatedTodo}/>
        </div>
        )
    
}
export default List