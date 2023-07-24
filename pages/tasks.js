import React from 'react';

const Tasks = ({ data }) => {
  return (
    <ul>
    <li>its a list</li>
		{ data.map(({ title, id }) => <li key={id}>{ title }</li>)}
    </ul>
  );
};

export async function getServerSideProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
  
    return {
      props: {
        data,
      },
    };
  }
  
export default Tasks;