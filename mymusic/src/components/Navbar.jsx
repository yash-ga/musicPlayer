import { useState,useEffect } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
export const Navbar = () => {
    const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    setIsLoading(true);
    setError(false);
    axios.get(`http://localhost:3009/Album?q=${query}`)
    .then((res) => {
    //   setUsers(res.data)
      console.log(res.data);
    })
    .catch((err) => {
      setError(true);
    });
  },[])
  const handleSearch = () => {
    setIsLoading(true);
    setError(false);
    axios.get(`http://localhost:3009/Album?q=${query}`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(()=>{
          setIsLoading(false)

      })
  };

  return (
      <div>
    <div className="navbar">
      <h2>Apka Music</h2>
      {/* <input type="text" placeholder="search your songs" /> */}
      <div className="search">
            <input type="text" placeholder="Search for Great Artist" value={query}
          onChange={(e) => setQuery(e.target.value)}/>
            <button onClick={handleSearch}>Search</button>
        </div>
        

      <h1>
        <Link to="/">Home</Link>
      </h1>
      <h1>
        <Link to="/login">Login</Link>
      </h1>
      <h1>
        <Link to="/music">MyMusic</Link>
      </h1>
     
    </div>
    
  <div className="search">
      {users.map((item)=>{
          return(
              <div key={item.id}>{item.MusicAlbumName}</div>
          )
      })}
  </div>
  </div>
    )};
