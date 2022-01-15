import { useEffect, useState } from "react"

export const Home=()=>{
    const [arr,setarr]=useState([])
    const   getdata=async()=>{
        var res=await fetch("http://localhost:3001/Album")
        var data=await res.json()
        console.log(data);
        setarr(data)
    }
    useEffect(()=>{
        
        getdata()
    },[])
    return(

        <div>
            <h1>this is home page</h1>
           
            {
                arr.map((e,ind)=>{
                    return(
                        <div>

                            <div className="artist" key={ind}>{e.artist}</div>
                            <div className="song">{e.song.map((s,i)=>{
                                return(
                                    <div key={i}>{s.title}</div>
                                )
                            })}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}