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
        
            <h1 style={{padding: 15}}>GatePictures:</h1>
            {data.map((key, idx) => {
                return (
                    <div className='pictures-log'>
                        <a href={key.entrance_img.url} target='_blank'>
                            <img src={key.entrance_img.url} alt='gate' />
                        </a>
                        <h3>File Name: <h4 style={{fontWeight: 'normal'}}>{key.entrance_img.filename}</h4></h3>
                        <h3>Date Uploaded: <h4 style={{fontWeight: 'normal'}}>{key.entrance_img.dateUploaded}</h4></h3>
                        <hr/>

                    </div>
                )

            })}
        </>

        
    )
}

export default GatePictures