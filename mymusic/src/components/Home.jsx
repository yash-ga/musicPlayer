import { useEffect, useState } from "react"
import { Artist } from "./Artist.card"

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

                            <div className="artist" key={ind}>
                            <Artist name={e.artist} image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Amazon_Music_logo.svg/300px-Amazon_Music_logo.svg.png"/>
                            </div>
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