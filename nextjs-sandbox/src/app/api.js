'use client';
import {useState, useEffect} from 'react';
import axios from 'axios'; 

function ApiTest() {
const [getItems, setGetItems] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/drf/test/') 
            .then(response => {
                setGetItems(response.data);
            })
    }, []);

    return (
        <>
        <h4>{getItems.results}</h4>
        </>
    )
}

export default ApiTest