import { useState } from 'react';
import './App.css';
import { useFetch } from './useFetch';

const fetcher = async (url) => fetch(url).then(response => response.json())

function App() {
  const [id, setId] = useState(1);
  const { data, error, loading } = useFetch(`https://jsonplaceholder.typicode.com/todos/${id}`, fetcher);

  if(loading) {
    return "Loading..."
  }

  if(error) {
    return "Error"
  }

  return (
    <>
      <div>
        <pre style={{ fontSize: '16px' }}>{data && JSON.stringify(data)}</pre>
        <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'center', gap: '16px' }}>
          <button onClick={() => setId((prev) => (prev - 1))}>
            Get Prev Todo
          </button>
          <button onClick={() => setId((prev) => (prev + 1))}>
            Get Next Todo
          </button>
        </div>
      </div>
    </>
  )
}

export default App
