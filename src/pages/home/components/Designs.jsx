import { useState } from "react";
import { designs } from "../../../data/home/designs";
import "../../../styles/home/Designs.css";
import DesignCard from "./DesignCard";
import Subheading from "./Subheading";

const Designs = () => {
    const[selectedCategory, setSelectedCategory] = useState("Luxuray");
    const categories = ["Luxuray", "Classic", "Modern", "Traditional"];

    return (
        <section className="design-container">
            <div className="header">
                <div className="text-area">
                    <Subheading title="Our Designs"/>
                    <p className="heading">Elevate your space with creative, stylish designs tailored to your taste.</p>
                </div>

                <div className="catergories">
                    {categories.map(category => (
                        <span key={category} className={`category ${category == selectedCategory ? "active" : ""}`}>{category}</span>
                    ))}
                </div>
            </div>

            <div className="designs">
                {designs.slice(0,8).map(design => (
                    <DesignCard key={design.id} title={design.title} price={500} image={design.image} designer={design.designer}/>
                ))}
            </div>
        </section>
    )
}

export default Designs;