import FeaturedWrapper from "../../components/styled/FeaturedWrapper"
import logo from '../../assets/resources/Logo Popcorn.jpg'

import { useState, useEffect, lazy, Suspense } from "react"
import { fetchData } from "../../api/fetchApi"

export interface BrandType {
    id: number
    img: string
    href: string
}

const LazyBrandLogo = lazy(() => import('../../components/non-styled/BrandLogo/BrandLogo'));

const FeaturedPage = () => {
    const [brands, setBrands] = useState<BrandType[] | []>([])
    useEffect(() => {
        const fetch = async () => {
            const data = await fetchData('brands')
            setBrands(data)
        }
        fetch();
    }, []);

    return (
        <>
            <FeaturedWrapper>
                <img src={logo} alt={`Logo for ${logo}`} />
                <h1>If you can't enjoy it with Popcorn then you should forget it.</h1>
                <h3>With Popcorn you can track a record of the movies and series you watch.<br /> Discover new ones. Share opinions and more.</h3>
                <button>Join for free</button>
                <p>ENJOY YOUR SERIES ON</p>
                <div>
                    {brands.map((brand) => {
                        return (
                            <Suspense key={brand.id} fallback={<div>Loading...</div>}>
                                <LazyBrandLogo
                                    id={brand.id}
                                    img={brand.img}
                                    href={brand.href}
                                />
                            </Suspense>
                        )
                    })}
                </div>
            </FeaturedWrapper>
        </>
    )
}

export default FeaturedPage
