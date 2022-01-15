export const Artist=({name,image})=>{
return(
    <div className="artist-card">
        <div><img src={image} alt="#" /></div>
            <div>{name}</div>
            </div>
)
}