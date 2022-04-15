import React from 'react'

const GatePictures = () => {

    fetch('/logs/gate-pictures').then((response) => response.json()).then(json => {
        console.log(json);

    }).catch(err => {
        console.error(err);
    });

    return (
        <h1>GatePictures</h1>
        
    )
}

export default GatePictures