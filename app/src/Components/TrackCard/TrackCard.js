import React from "react";

const TrackCard = ({ trackCardContent }) => {
    return <h1>{ trackCardContent.name } <img src={ trackCardContent.img}/></h1>
}

export default TrackCard