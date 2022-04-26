import React, { useEffect, useState } from 'react'


const GatePictures = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/logs/gate-pictures').then((response) => response.json()).then(json => {
            setData(json.data);
            console.log(json);

        }).catch(err => {
            console.error(err);
        });

    }, [])

    return (
        <>
            <h1>GatePictures</h1>
            {data.map((key, idx) => {
                return (
                    <>
                        <img src={key.entrance_img.url} alt='gate'/>
                        <h3>File Name: {key.entrance_img.filename}</h3>
                        <h3>Date Uploaded: {key.entrance_img.dateUploaded}</h3>
                        <hr/>

                    </>
                )

            })}
        </>

        
    )
}

export default GatePictures