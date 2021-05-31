import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import Gallery from 'react-grid-gallery';

import './GalleryArea.css'


const GalleryArea = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios.get("https://hungrypoint-backend.herokuapp.com/api/mainimage").then((response) => {
            console.log(response.data);
            setImages(response.data);
        });
    }, []);

    return (
        <div class='gallery-main'>
            <h4>Gallery</h4>
            <Gallery images={images} enableImageSelection={false}/>
        </div>
    )
}

export default GalleryArea