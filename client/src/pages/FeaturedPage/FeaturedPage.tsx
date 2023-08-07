import FeaturedWrapper from "../../components/styled/FeaturedWrapper"
import logo from '../../assets/resources/Logo Popcorn.jpg'
import popcorn from '../../assets/resources/popcorn-ico.jpg'
import { useState, useEffect, lazy, Suspense } from "react"
import { fetchData } from "../../api/fetchApi"
import { SpinnerCircular } from 'spinners-react';
import Publicity from "../../components/styled/Publicity";
import premiumMember from '../../assets/resources/Premium-member.jpg'

export interface BrandType {
    id: number
    img: string
    href: string
}
export interface PublicityType {
    id: number
    title: string
    content: string
    image: string
    order: string
    background: string
}
const publicity: PublicityType[] = [
    {
        id: 1,
        title: "Enjoy Premium",
        content: "Become a premium member now and enjoy the benefits: Share your opinion with the world and check other users opinions!",
        image: premiumMember,
        order: 'row',
        background: '#2d545e'
    },
    {
        id: 2,
        title: "Wanna learn to make Popcorn?",
        content: 'Read our recipes and enjoy the best popcorn ever!',
        image: popcorn,
        order: 'reverse-row',
        background: '#ff1d58'
    }
]

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
                            <Suspense key={brand.id} fallback={<SpinnerCircular
                                size={75}
                                color="#f1f1f1" />}>
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
            <Publicity id={publicity[0].id} background={publicity[0].background} title={publicity[0].title} content={publicity[0].content} image={publicity[0].image} order={publicity[0].order} />
            <Publicity id={publicity[1].id} background={publicity[1].background} title={publicity[1].title} content={publicity[1].content} image={publicity[1].image} order={publicity[1].order} />
        </>
    )
}

export default FeaturedPage
