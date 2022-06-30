import React, { useState } from 'react'
import './Header.css'

// ion-icon
export default function Header() {
    const [state_search, setState_search] = useState(null);
    const onChangeSearch = (ele) => {
        // let elee = document.getElementsByClassName('search');
        //ele.classList.add('.search_input_affter');
        //this.removeClass('search_input').addClass('search_input_affter');
        // this.addClass('search_input_affter');
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
    return (
        <div className='header'>
            <div className='logo'></div>
            <div className='header_right'>
                <div className='search'>
                    <input id='search' onChange={onChangeSearch} className='search_input' type={'search'} />
                </div>

                {console.log(state_search)}
                <div className='DD'>
                    <ul>
                        <li>TRANG CHỦ</li>
                        <li>ĐĂN NHẬP</li>
                        <li>GIỎ HÀNG</li>
                        <li>DANH SÁCH ƯỚC</li>

                    </ul>

                </div>
            </div>
        </div>
    )
}
