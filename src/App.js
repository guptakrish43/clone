import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("")
  const [results,setResults]=useState([])
  const fetchImages=()=>{
    fetch(`https://api.unsplash.com/search/photos/?client_id=StrB-3wxAScJDER1K0yxOhd8TNW3NzKxX9N8_v6TQ6M&query=${value}&orientation=squarish`)
    .then(res=>res.json())
    .then(data=>{
      // console.log(data)
      setResults(data.results)
    })

  }
  return (
    <div className="App">
      <div className="mydiv">
        <span>Search</span>
        <input 
        style={{width:"60%"}}
        type="text"
         value={value} 
         onChange={(e) => setValue(e.target.value)} />
        <button onClick={()=>fetchImages()}>Send</button>
      </div>
      <div className="gallary">
        {
          results.map((item)=>{
            return <img  className="item" key={item.id} src={item.urls.regular}/>         
          })
        }

      </div>
    </div>
  );
}
// StrB-3wxAScJDER1K0yxOhd8TNW3NzKxX9N8_v6TQ6M

export default App;
