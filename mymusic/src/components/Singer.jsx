import { useState } from "react"
import "./music.css"
export const Singer=({image,name})=>{
    var data=["1.mene pyar kia","2.mene pyar kia dusri bar","3.pine do"]
    const [cng,setcng]=useState([])
    const handlechange=(data)=>{
        console.log(data);
        setcng(data)
    }

    return(
        <div>
            <div>
                <img className="singer-image" src={image} alt="#" />
            </div>
            <div>
                <button onClick={()=>window.scrollTo(0, 0)}>get playlist</button>
                
                <button > <a href="http://localhost:3000/login">{name}</a></button>
                
           
            </div>
        </div>

    )
}