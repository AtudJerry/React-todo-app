import react, { useEffect, useRef, useState } from "react"
import styles from './styles.css'

function Form (props) {
    const [input,setInput] = useState('')
    const ref = useRef()
    useEffect( () =>{
        ref.current.focus()
    })

    const changeHandler = (e) => {
        setInput(e.target.value)
        console.log(input)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        props.onSubmit({
            id : Math.floor(Math.random()*10000),
            text : input
        })
        setInput('')
    }
   
    // const submitHandler = () => {
    //     set
    // }
    return(
        <form onSubmit={submitHandler}>
            <input value = {input} placeholder="type in a todo o not more than 7 words" ref = {ref} onChange={changeHandler}></input>
            <button type = "submit" >Add todo</button>

        </form>
    )
}
export  default Form