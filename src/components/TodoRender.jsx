import React from 'react'
import { styled } from 'styled-components';

const TodoRender = (props) => {
    console.log(props.onSaveID);

    const deleteFunc = (id) => {
        props.onSaveID(id)
    }

  return (
    <div>
        <Text textt={props.text}>{props.text}</Text>
        <button onClick={() => deleteFunc(props.id)}>delete</button>
    </div>
  )
}

export default TodoRender

const Text = styled.h1`
  color: ${props => props.textt}
`