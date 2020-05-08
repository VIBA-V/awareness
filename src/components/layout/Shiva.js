import React from "react";
import "./style1.css";
import img7 from "./img/7.png"
import img3 from "./img/3.png"
import img6 from "./img/6.png"
import img5 from "./img/8.png"
import img8 from "./img/5.png"
import img1 from "./img/1.png"

export default function Shiva(){
    return(
        <div>
            <div className="kaushik"><h1>Requisites to bolt the pandemic</h1></div>
            <div className="kb">
                <div className="cheya"><img src={img7} /><h2 className='kittu'>Self assessment</h2><p className='chow'>Severity of the corona virus pandemic is guaged as extreme and hence assessing oneself interms of health, hygiene and immunity forms essential basis.</p></div>
                <div className="cheya"><img src={img3} /><h2 className='kittu'>Masking</h2><p className='chow'> Viral invasion into the body is through the air that carries the virus. Hence, a protective layer blocking its entry is through a piece of cloth/a mask/a scarf.</p></div>
                <div className="cheya"><img src={img6} /><h2 className='kittu'>Hand wash</h2><p className='chow'> Virus is contagious. It can be through any means of close contact. A proper handwash ensures its unnecessary spread either through direct or indirect means.</p></div>
                <div className="cheya"><img src={img8} /><h2 className='kittu'>Stay Home</h2><p className='chow'>    As the virus channelling is through people in convergence, a curfew followed by lockdown is implemented to curb people gatherings. So, stay home and stay safe.</p></div>
                <div className="cheya"><img src={img5} /><h2 className='kittu'>Social distancing</h2><p className='chow'>Crowdings or gatherings in an area is like a pat to virus to liberate.  So, maintaining a one arm or one meter distance when into people is an imperative to viral hindrance.</p></div>
                <div className="cheya"><img src={img1} /><h2 className='kittu'>Home quarantine</h2><p className='chow'>When a person is prone to the virus, quarantining oneself to home falls the best way. Isolation in this way can cease the virus spread leading an exponential raising pandemic curve to a flatten with time.</p></div>
            </div>
        </div>
    )
}