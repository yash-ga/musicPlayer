import "./music.css"
import { Singer } from "./Singer"
export const Music=()=>{
    return(
        <div>

            <div className="main">
            <div className="cont">
            <div className="singer"><Singer image="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201908/mika_singh_0.jpeg?VcncGYBX4gWxULCOQZMbrqB9XMGGgtHn&size=1200:675" name={"mika singh"}/></div>
            <div className="singer"><Singer image="https://images.bhaskarassets.com/web2images/521/2021/09/23/kumar_1632382608.jpg" name={"kumar sanu"}/></div>
            <div className="singer"><Singer image="https://images.news18.com/ibnlive/uploads/2021/08/sunidhi.jpg" name={"sunidhi chauhan"}/></div>
            <div className="singer"><Singer image="https://femina.wwmindia.com/content/2019/nov/singer21573632513.jpg" name={"sachet tandon"}/></div>
            <div className="singer"><Singer image="https://i.ytimg.com/vi/Rz2jZdOPHv4/maxresdefault.jpg" name={"paramppara thakur"}/></div>
            <div className="singer"><Singer image="https://wallpaperaccess.com/full/3735768.jpg" name={"milind gaba"}/></div>

        </div>
            
        </div>
        </div>
    )
}