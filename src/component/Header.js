import React, { useState } from 'react'
import './Header.css'
import { Icon } from '@iconify/react';
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

// ion-icon
export default function Header() {
    const [state_search, setState_search] = useState(null);
    const onChangeSearch = (ele) => {
        // let elee = document.getElementsByClassName('search');
        //ele.classList.add('.search_input_affter');
        //this.removeClass('search_input').addClass('search_input_affter');
        // this.addClass('search_input_affter');
        setTextSearch(ele.target.value)
        if (ele.target.value == '') {
            ele.target.classList.remove('search_input_affter')

        }
        else
            // ele.target.classList.remove('search_input')
            ele.target.classList.add('search_input_affter');


        // else
        //     ele.target.classList.add('search_input_affter');
        setState_search(ele.target.value);
        //console.log(elee);

    }
    // const [count, setCount] = useState(0)
    const count_products = useSelector(store => store.count_store.product)
    const change_scroll = () => {
        // console.log(window.scrollY)
        if (window.scrollY > 90) {
            setLogo(false)
        }
        else
            setLogo(true)
        // alert(scro_test)
    }
    window.addEventListener('scroll', change_scroll)
    const [logo, setLogo] = useState(true)

    //search
    const [textSearch, setTextSearch] = useState()
    const navigate = useNavigate()
    const onclickSearch = () => {

        navigate(`?name=${textSearch}`)
    }
    return (
        <div className={logo ? 'header' : 'header2'}>

            <div className='logo' ></div>
            <div className='header_right'>
                <div className='search'>
                    <div type='button' onClick={onclickSearch}><span className="iconify buttonSearch" data-icon="bi:search" ></span></div>
                    <input id='search' onChange={onChangeSearch} className='search_input' type={'search'} />

                </div>


                <div className='DD'>
                    <ul>
                        <li>TRANG CHỦ</li>
                        <li>ĐĂN NHẬP</li>
                        <li>
                            <Link to={'/cart'} >
                                <span className="iconify" data-icon="fa6-solid:cart-flatbed" ></span>
                                <div className='count_cart'>{count_products.length}</div>
                            </Link>
                        </li>
                        <li>DANH SÁCH ƯỚC</li>

                    </ul>

                </div>
            </div>
        </div >
    )
}
