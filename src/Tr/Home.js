import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import './Home.css'
import adsslide from '../dkt_shop/bai ket thuc mon web/imgslide/slide (1).png'
import adsslide2 from '../dkt_shop/bai ket thuc mon web/imgslide/slide (2).png'
import adsslide3 from '../dkt_shop/bai ket thuc mon web/imgslide/slide (3).png'
import { getFakeProducts, getProducts } from '../services/api'
import { Icon } from '@iconify/react';
import { useSelector, useDispatch } from 'react-redux'
import { add } from '../Reductool/ProductSlide'
import { useNavigate } from 'react-router-dom'
// import a from '../dkt_shop/bai ket thuc mon web/products/sanpham.jpg'
export default function Home() {
    const [slidee, setSlidee] = useState(adsslide);
    const slide = () => {
        if (slidee == adsslide)
            setSlidee(adsslide2)
        else
            if (slidee == adsslide2)
                setSlidee(adsslide3)
            else
                setSlidee(adsslide)
    }
    // setTimeout(() => {
    //     slide()
    // }, 2000);


    const [data, setData] = useState([])

    useEffect(() => {
        console.log(window.location.href)
        const getAllProducts = async () => {
            //const data = await getFakeProducts();
            // const products = await getFakeProducts();
            var url = new URL(window.location.href);
            var productName = url.searchParams.get("name");
            const products = await getProducts({ name: productName });

            //console.log('result', result);
            setData(products.data);
            setRend(products.data.slice(0, 15))
        }
        getAllProducts()
    }, [window.location.href]);
    // const [number, setNumber] = useState([])
    var ayda = []
    const asd = () => {

        // if (data.length < 1) { return }
        for (let i = 0; i < Math.ceil(data.length / 15); i++) {
            ayda.push(i)

        }

        // console.log(ayda)
        // return (ayda.map((e, i) => (
        //     <div key={i} id='page_number'>asdfghjkiop</div>
        // )))

    }

    const [asdS, setAsdS] = useState(asd())// cái này để gọi cho hàm hoạt động giá trị của state không được sử dụng
    const dispatch = useDispatch()
    const count_product = useSelector(store => store.count_store.product)
    const count_item = (item) => () => {
        //alert(item)
        if (window.confirm('bạn muốn thêm sản phẩm này vào giỏ hàng của mình không ?') == false)
            return
        dispatch(add(item))

        // alert(count_product.length)

    }
    const count_products = useSelector(store => store.count_store.product)
    var index = 0
    const uivl = data.slice(index, index + 15)
    var [rend, setRend] = useState()

    // alert(uivl)
    const number_page = (i) => () => {
        index = i * 15
        setRend(data.slice(index, index + 15))
    }
    const change_scroll = () => {
        console.log(window.scrollY)
        if (window.scrollY > 100) {
            setLogo(1)
        }
        // alert(scro_test)
    }
    window.addEventListener('scroll', change_scroll)
    const [logo, setLogo] = useState(0)

    /////////////////
    const sa = useNavigate()
    const vl = () => {
        sa(`?name=ip`)
    }
    return (
        <div className='body_home'  >


            <Header logo={logo} />

            {/* <Icon icon="mdi-light:home" /> */}
            <div className='QQ'>
                <div className='QQ1'>
                    <img id='image_slide' src={slidee} />
                </div>
                <div className='QQ2'>
                </div>
            </div>
            <div className='mid_home' id='body_home'>
                <div className='loc' id='loc' ></div>

                {
                    rend?.map((e, i) => (
                        <div key={i} className='item'>
                            <div className='img_item'>
                                <img id='i' className='img_product' src={(e.image)} />
                            </div>
                            <div className='name_item'>
                                <p className='name_item_p'>{e.name}</p>
                            </div>
                            <div className='gia'>
                                <p className='text_gia'>Giá: {
                                    new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(e.gia)
                                }</p>
                            </div>
                            <div id='iconifyy' onClick={count_item(e.name)}><span className='iconify' data-icon="carbon:shopping-cart-arrow-down" ></span></div>
                        </div>
                    ))
                }


                <div className='color'>

                    {ayda.map((e, i) => (
                        <a key={i} href='#loc'><div id='page_number' onClick={number_page(i)}>{i}</div></a>
                    ))}

                </div>

            </div >
            <div className='p2'>
                <div className='poster'>
                </div>
                <div className='poster2'>

                </div>
                <div className='poster3'>

                </div>
                <div className='poster4'>

                </div>
                <div className='poster5'>
                    <p className='text_poster5'>bạn có vấn đề ?</p>
                    <div className='on_poster5'>
                        liên hệ với chúng tôi
                    </div>
                    <div className='text2_poster5'>
                        Smartphone cao cấp?
                    </div>
                </div>
            </div>

        </div >
    )
}
