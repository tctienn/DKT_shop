import React from 'react'
import Header from '../component/Header'
import './Cart.css'
export default function Cart() {
    return (
        <div className='body_cart'>
            <Header />
            <div className='left'>
                <div className='item'>
                    <div className='img_item'>
                        <img src='' />

                    </div>
                    <div className='describe'>
                        name
                        <div>gia</div>
                        <div className='Quantity'>Quantity :  <div>+</div> <input className='input_Quantity' value={0} type='text' /> <div>-</div></div>
                    </div>
                </div>
            </div>
            <div className='right'>
                <center>
                    <h3>
                        HÓA ĐƠN
                    </h3>

                </center>
                <div className='tex'>
                    <div>MIỄN GIẢM </div>
                    <div>$</div>
                </div>
                <div className='tex'>
                    <div>PHÍ VẬN CHUYỂN</div>
                    <div>$</div>
                </div>
                <div className='tex'>
                    <div>TỔNG CỘNG</div>
                    <div>$</div>
                </div>
                <button className='thanhtoan'>
                    THANH TOÁN
                </button>
            </div>
        </div>
    )
}
