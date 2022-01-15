export const Artist=({name,image,l})=>{
    const handlebutton=()=>{
        return(
            <div>
                <div>mera gana</div>
                <div>tera gana</div>
                <div>apna gana</div>

            </div>
        )
    }
return(
    <div className="artist-card">
        <div><img src={image} alt="#" /></div>
            <button onClick={handlebutton}>{name}</button>
            <div>{l}</div>
            </div>
)
}