import React from "react";
import '../../../style/alumni.css'
import AlumniCarousel from './alumniCarousel';

const Alumni = () => {
    return (
        <div className="alumni">
            <div className="flower-1"></div>
            <div className="flower-2"></div>
            <div className="flower-3"></div>
            <div className="alumniTitle">
                <h1>Our Alumni</h1>
                <div className="titleLine"></div>
            </div>
            <AlumniCarousel/>
        </div>
    )
}

export default Alumni;