import "./music.css"
export const Singer=({image,name})=>{
    return(
        <div>
            <div>
                <img className="singer-image" src={image} alt="#" />
            </div>
            <div>
                <button>{name}</button>
            </div>
        </div>

    )
}