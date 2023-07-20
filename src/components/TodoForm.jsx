import React, { useState } from 'react'

const TodoForm = (props) => {

    const [state, setState] = useState('')
    const [isValid, setIsValid] = useState(true)
    console.log(isValid);

    const TodoFunction = (event) => {
        if (state.trim().length < 4) {
            setIsValid(false)
            setTimeout(() => {
                setIsValid(true)
            }, 100)
        }
        setState(event.target.value)
    }

    const clickHandler = () => {
        const obj = {
            text: state,
            id: Math.random()
        }
        props.onSaveData(obj)
        setState("")
    }

  return (
    <div className='forma'>
        <div htmlFor="">Name:</div>
        <input className={isValid === true ? 'borderNoValid' : 'borderValid'}  value={state} onChange={TodoFunction} type="text" />
        <button onClick={clickHandler}>ADD</button>
        {/* {isValid && <div className='text'>Инпутта 5тен коп тамга болсун!! </div>} */}
    </div>
  )
}

export default TodoForm
