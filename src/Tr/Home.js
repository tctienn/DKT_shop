import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import './Home.css'
import adsslide from '../dkt_shop/bai ket thuc mon web/imgslide/slide (1).png'
import adsslide2 from '../dkt_shop/bai ket thuc mon web/imgslide/slide (2).png'
import adsslide3 from '../dkt_shop/bai ket thuc mon web/imgslide/slide (3).png'
import { getFakeProducts } from '../services/api'
// import a from '../dkt_shop/bai ket thuc mon web/products/sanpham.jpg'
export default function Home() {
    const [slidee, setSlidee] = useState(adsslide);
    // setSlidee(adsslide);
    const slide = () => {
        if (slidee == adsslide)
            setSlidee(adsslide2)
        else
            if (slidee == adsslide2)
                setSlidee(adsslide3)
            else
                setSlidee(adsslide)
    }
    setTimeout(() => {
        slide()
    }, 2000);

    const [data, setData] = useState()
    useEffect(() => {
        const getAllProducts = async () => {
            //const data = await getFakeProducts();
            const products = await getFakeProducts();
            //console.log('result', result);
            setData(products);

        };

        getAllProducts();

    }, []);
    return (
        <div className='body_home'>
            <Header />
            <div className='QQ'>
                <div className='QQ1'>
                    <img id='image_slide' src={slidee} />
                </div>
                <div className='QQ2'>

                </div>
            </div>
            <div className='mid_home'>
                <div className='loc'></div>
                {
                    data?.map((e, i) => (
                        <div className='item'>
                            <div className='img_item'>
                                <img src={require(e.image)} />
                            </div>
                        </div>
                    ))
                }

                {/* <div className='item'></div> */}
            </div>
        </div>
    )
}
