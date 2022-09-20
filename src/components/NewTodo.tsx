import React from 'react'
import './NewTodo.css'

interface NewTodoProps{
    getNewTodo:(todoText:string)=>void
}

const NewTodo:React.FC<NewTodoProps>=function(props){

    const textRef=React.useRef<HTMLInputElement>(null)

    const onSubmitHandler=(e:React.FormEvent)=>{
        e.preventDefault()
        const enteredText=textRef.current!.value
        props.getNewTodo(enteredText)
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <div className='form-control'>
                <label htmlFor="todo">Task</label>
                <input type="text" id='todo' placeholder='Todo' ref={textRef} />
            </div>
            <button type='submit'>ADD</button>
        </form>
    )
}


export default NewTodo