import { useEffect, useState } from "react";
import { Artist } from "./Artist.card";

export const Home = () => {
  const [arr, setarr] = useState([]);
  // const [songs,setsongs]=useState([])
  const getdata = async () => {
    var res = await fetch("http://localhost:3001/Album");
    var data = await res.json();
    console.log(data[0].song.length);
    setarr(data);
    // setsongs(data)
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>
      <h1>Get Music For Free By Your Fav Singers</h1>

      {arr.map((e, ind) => {
        return (
          <div className="home">
            <main>

            <div className="artist" key={ind}>
               
              <Artist 
              
                name={e.artist}
                l={e.song.length}
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Amazon_Music_logo.svg/300px-Amazon_Music_logo.svg.png"
                />
            <div className="song">
              {e.song.map((s, i) => {
                return <div key={i}>{s.title}</div>;
              })}
              </div>
            </div>
              </main>
          </div>
        );
      })}
    </div>
  );
};
