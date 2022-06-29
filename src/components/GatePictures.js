import React, { useEffect, useState } from 'react'


const GatePictures = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/logs/gate-pictures').then((response) => response.json()).then(json => {
            setData(json.data);
            //console.log(json);

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

                        <p style={{fontSize: '1.2rem', padding: '2px 20px'}}><b>Guest Name: </b>{key.name.charAt(0).toUpperCase() + key.name.slice(1)}</p>
                        <p style={{fontSize: '1.2rem', padding: '2px 20px'}}><b>Guest's Car Numbers: </b>{key.car_id}</p>
                        <p style={{fontSize: '1.2rem', padding: '2px 20px'}}><b>Guest's ID: </b>ObjectId('{key._id}')</p>
                        
                        <p style={{fontSize: '1.2rem', padding: '2px 20px'}}><b>Owner's Name: </b>{key.owner_name.charAt(0).toUpperCase() + key.owner_name.slice(1)}</p>
                        <p style={{fontSize: '1.2rem', padding: '2px 20px'}}><b>Owner's Address: </b>{key.owner_address}</p>
                        <p style={{fontSize: '1.2rem', padding: '2px 20px'}}><b>Owner's ID: </b>ObjectId('{key.owner_id}')</p>
                        
                        <p style={{fontSize: '1.2rem', padding: '2px 20px'}}><b>File Name: </b>{key.entrance_img.filename}</p>
                        <p style={{fontSize: '1.2rem', padding: '2px 20px'}}><b>Date Uploaded: </b>{key.entrance_img.dateUploaded}</p>

                        <hr/>

                    </div>
                )

            })}
        </>

        
    )
}

export default GatePictures