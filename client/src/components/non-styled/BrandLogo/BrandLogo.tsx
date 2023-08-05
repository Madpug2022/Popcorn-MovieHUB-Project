import { BrandType } from "../../../pages/FeaturedPage/FeaturedPage";
import { useState } from 'react'
import './BrandLogo.css'
const BrandLogo = (props: BrandType) => {
    const { id, img, href } = props
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className="brand-Link-Wrapper" key={id} style={isHovered ? { filter: 'brightness(120%)' } : { filter: 'brightness(50%)' }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <a className="brand-link" href={href}>
                <img className="brand-img" src={img} alt={`Brand logo for ${id}`} />
            </a>
        </div>
    );
};

export default BrandLogo;
