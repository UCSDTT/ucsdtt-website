import React from "react";
import '../../../style/community.css'

const Community = () => {
    return (
        <div className="community">
            <div className="garnet-1"></div>
            <div className="garnet-2"></div>
            <div className="garnet-3"></div>
            <div className="communityTitle">
                <h2>This is Our Community</h2>
                <div className="line"></div>
            </div>
            <div className="community-inner">
                <div className="community-item left">
                    <h1 className="sideNum">30+</h1>
                    <p>COMPANIES</p>
                </div>
                <div className="community-item community-item-large middle"> 
                    <h1 className="middleNum">360</h1>
                    <p>PAST AND PRESENT<br></br>BROTHERS</p>
                </div>
                <div className="community-item right">
                    <h1 className="sideNum">11</h1>
                    <p>DIFFERENT MAJORS</p>
                </div>
            </div>
            <div className="borderLine"></div>
      </div>
    )
}

export default Community;