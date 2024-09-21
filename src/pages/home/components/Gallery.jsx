import React from 'react';
import image_15 from "../../../assets/images/image_15.png";
import image_16 from "../../../assets/images/image_16.png";
import image_17 from "../../../assets/images/image_17.png";
import image_18 from "../../../assets/images/image_18.png";
import image_19 from "../../../assets/images/image_19.png";
import image_20 from "../../../assets/images/image_20.png";
import "../../../styles/home/Gallery.css";
import Subheading from '../components/Subheading';

const Gallery = () => {

    const first_gallery = [image_15, image_16, image_17];
    const second_gallery = [image_18, image_19, image_20];

    return (
        <section className='gallery-container'>
            <Subheading title="Check Our Collection" />
            <h2>Our Furniture Gallery</h2>
            <small>Explore Our Gallery of Inspiring Designs</small>

            <div className="gallery-1">
                {first_gallery.map(image => (
                    <div className="image-wrapper" key={image}>
                        <img src={image} alt="gallery" />
                    </div>
                ))}
            </div>

            <div className="gallery-2">
                {second_gallery.map(image => (
                    <div className="image-wrapper" key={image}>
                        <img src={image} alt="gallery" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;