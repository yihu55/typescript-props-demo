type TodoProps = {
  todos: string[];
};
export default function TodoList(props: TodoProps) {
  return (
    <ul>
      {props.todos.map((todo) => {
        return <li>{todo}</li>;
      })}
    </ul>
  );
}
