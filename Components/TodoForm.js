import React, {useState,useEffect,useRef} from 'react'

function TodoForm(props) {

 const [input, setInput] = useState('');

 const inputRef = useRef('');

 useEffect(() =>{

   inputRef.current.focus();
 });

 const handleSubmit = e => {

    e.preventDefault();

    //console.log(props);

    props.onSubmit({

       id : Math.floor(Math.random() *10000),
       text : input

    });

   //console.log(props);
setInput('');

 }


  return (
   
    <form className='todo-form' onSubmit={(e)=>handleSubmit(e)}>
        
        <input type='text' placeholder='Add a todo' 
        value = {input} 
        name = 'text' 
        className='todo-input'
        onChange={(e)=>setInput(e.target.value)}
        ref = {inputRef}
        />
 
        <button className='todo-button'>Add todo</button>

    </form>


  )
}

export default TodoForm;