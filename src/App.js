import {  useState } from "react";
import useAxios from 'axios-hooks';

function App() {
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState('');

  const [{ data, loading, error }, refetch] = useAxios(`http://localhost:3001/api/search?tags=${tags}`);

  return (
    <div>
      <h1>Hello crewfire!</h1>
      <input type="search" value={search} onChange={e => setSearch(e.target.value)} />
      <button onClick={() => {
        setTags(search);
        refetch();
      }}>Search</button>
      <hr />
      {
        loading ? 'loading...' : 'done'
      }
      <hr />
      {
      error
      ? 'error'
      : data?.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.tags}</p>
          <img src={item.media.m} alt={item.title}/>
        </div>
        )
      ) || []
    }
    </div>
  );
}

export default App;
