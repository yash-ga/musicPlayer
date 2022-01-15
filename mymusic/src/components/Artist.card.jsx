export const Artist=({name,image,l})=>{
return(
    <div className="artist-card">
        <div><img src={image} alt="#" /></div>
            <button>{name}</button>
            <div>{l}</div>
            </div>
)
}