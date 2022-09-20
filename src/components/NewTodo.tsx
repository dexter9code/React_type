import React from 'react'

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
            <label htmlFor="todo">Text</label>
            <input type="text" id='todo' placeholder='Todo' ref={textRef} />
            <button type='submit'>ADD</button>
        </form>
    )
}


export default NewTodo