import { useEffect, useState } from 'react';

function Todos(props) {
  const [todos, setTodos] = useState(props.todos);
  
  useEffect(() => {
      (async() => {
        const response = await fetch(
            'http://localhost:6005/todos'
          );
          const todos = await response.json();
          console.log(todos);
            setTodos(todos);
    })()
  }, []);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text} - ${todo.completed}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    'http://localhost:6005/todos'
  );
  const data = await response.json();
  console.log('from server')

  return { props: { todos: data } };
}

export default Todos;