import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoRender from "./TodoRender";

const Todo = () => {
  const array = [];
  const [state, setState] = useState(array);
  console.log(state);

  const saveData = (obj) => {
    setState((prev) => [...prev, obj]);
  };

  const saveID = (id) => {
    const filteredItems = state.filter((el) => el.id !== id)
    setState(filteredItems)
  }

  return (
    <div>
      <TodoForm onSaveData={saveData} />
      {state.map((el) => (
        <TodoRender onSaveID={saveID} key={el.id} text={el.text} id= {el.id} coll={el.state}/>
        // <Li></Li>
      ))}
    </div>
  );
};

export default Todo;
