import React from "react";
import '../../../style/placesWorked.css'

const PlacesWorked = () => {
    const companies = [
        "apple",
        "amazon",
        "meta",
        "illumina",
        "atlassian",
        "aerojet",
        "twitter",
        "biolegend",
        "northrop",
        "edwards",
        "salesforce",
        "google",
        "ga",
        "cognex",
        "intuitive",
        "viasat",
        "spacex",
        "dexcom",
        "netflix",
        "uber",
        "solarTurbines",
        "microsoft",
        "activision",
        "visa",
        "tesla",
        "qualcomm",
        "intuit",
        "coinbase",
        "blizzard",
        "twitch",
    ]

    return (
        <div className="placesWorked">
            <div className="placesWorkedTitle">
                <h1>Where We've Worked</h1>
                <div className="titleLine"></div>
            </div>
            <div className="gridContainer">
                {companies.map((company, idx) => (
                    <div key={idx} className="grid-item">
                        <img src={require(`../../../images/companies/${company}.webp`)} alt={company}/>
                    </div>
                ))}
            </div>
            <div className="borderLine2"></div>
        </div>
    )
}

export default PlacesWorked;