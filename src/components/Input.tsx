import React from "react";

type addTodoProps = {
  todoText: string;
  onTextChanged: (todoText: string) => void;
  onSubmit: () => void;
};

export default function Input(props: addTodoProps) {
  return (
    <>
      <input
        type='text'
        placeholder='Enter new todo'
        value={props.todoText}
        onChange={(e) => props.onTextChanged(e.target.value)}
      />
      <button onClick={props.onSubmit}>add</button>
    </>
  );
}
