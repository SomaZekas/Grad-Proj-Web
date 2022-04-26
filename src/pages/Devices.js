import React, { useEffect, useState } from 'react'


const Devices = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/devices').then((response) => response.json()).then(json => {
            setData(json.data);
            
        }).catch(err => {
            console.error(err);
        });

    }, [])

    return (
        <>
            <h1>Devices</h1>
            {data.map((key, idx) => {
                return (
                    <>
                        <h2>_id: {key._id}</h2>
                        <h3>Device ID: {key.Device_id}</h3>
                        <h3>Gate Location: {key.Gate_location}</h3>
                        <h3>No of Guest Opend For: {key.no_of_guests_opened}</h3>
                        <h3>Password: {key.password}</h3>

                        <hr/>
                    </>
                )

            })}
        </>
        
    )
}

export default Devices