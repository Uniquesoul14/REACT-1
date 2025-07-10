import axios from "axios";
import { use, useEffect, useState } from "react";
import "./App.css";

 function App() {
  const [serverData, setserverData] = useState([]);
  const [loading, setloading] = useState(false);
  const [error,seterror]=useState("")
  const [page,setpage]=useState(1)

  const getDataFromServer = async () => {
    setloading(true);
    try {
      const postData = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?-limit=10&_page=${page}`
      );
      setloading(false);
      setserverData(postData.data);
    } catch (error) {
        seterror("NetworkError")
      setloading(false);
    }
  };

  useEffect(() => {
    getDataFromServer();
  }, [page]);

  return loading ? (
    <h1>Loading...</h1>
  ):error?<h1>{error}</h1>:(
    <div>
    <h1>Posts Below</h1>
    <button disabled={page==1} onClick={()=>setpage(page-1)}>Prev</button>
      <span>{page}</span>
    <button disabled={page==serverData.length} onClick={()=>setpage(page+1)}>Next</button>
      {serverData.map((el, i) => (
        <div  className="App">
          <h1>{el.id}</h1>
          <h2>{el.title}</h2>
          <p>{el.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App