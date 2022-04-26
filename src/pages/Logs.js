import React from 'react'
import { Link } from 'react-router-dom';
import Authentication from '../components/Authentication'


const Logs = () => {
    if (Authentication.getData() && Authentication.getData().role === 'admin') {
        return (
            <div className='div-forms'>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            
            <ul  className='Logs-li'>
                <li><a href='/logs/admin' target={'_blank'}>admin logs</a></li>
                <li><a href='/logs/employee' target={'_blank'}>employee logs</a></li>
                <li><a href='/logs/guest' target={'_blank'}>guests logs</a></li>
                <li><a href='/logs/hardware' target={'_blank'}>hardware logs</a></li>
                <li><a href='/logs/owner' target={'_blank'}>owner logs</a></li>
                <li><a href='/logs/server' target={'_blank'}>server logs</a></li>
                <li><Link to='/gate/pictures'>Gate Pictures</Link></li>
            </ul>
            </div>
        );
    } else {
        return (
            <h1>Unauthorized</h1>
        );

    }
}

export default Logs