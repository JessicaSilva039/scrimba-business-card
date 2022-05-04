import React from "react"

export default function Info(){
    return(
        <div>
            <div className="profile"></div>
            <h3 className="name">Laura Smith</h3>
            <h4 className="job">Frontend Developer</h4>
            <h4 className="site">laurasmith.website</h4>
            
            <div className="buttons">
                <span className="email"><span className="emailicon"></span>Email</span>
            </div>
        </div>
    )
}