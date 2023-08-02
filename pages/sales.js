import { useEffect, useState } from 'react';
import useSWR from 'swr';

function Sales(props) {
  const [todos, setSales] = useState(props.todos);

  const { data, error } = useSWR(
    'http://localhost:6005/todos',
    (url) => fetch(url).then(res => {
        console.log('from client');
        return res.json();
    })
  );

  useEffect(() => {
    if (data) {
       setSales(data);
    }
  }, [data]);

  if (error) {
    return <p>Failed to load.</p>;
  }

  if (!data && !todos) {
    return <p>Loading...</p>;
  }

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

export default Sales;