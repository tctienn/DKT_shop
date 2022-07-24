import React from 'react'
import Header from '../component/Header'
import './Cart.css'
export default function Cart() {
    return (
        <div className='body_cart'>
            <Header />
            <div className='left_cart'>
                <div className='item_cart'>
                    <div className='img_item_cart'>
                        <img src='' />

                    </div>
                    <div className='describe_cart'>
                        name
                        <div>gia</div>
                        <div className='Quantity_cart'>Quantity :  <div>+</div> <input className='input_Quantity_cart' value={0} type='text' /> <div>-</div></div>
                    </div>
                </div>
            </div>
            <div className='right_cart'>
                <center>
                    <h3>
                        HÓA ĐƠN
                    </h3>

                </center>
                <div className='tex_cart'>
                    <div>MIỄN GIẢM </div>
                    <div>$</div>
                </div>
                <div className='tex_cart'>
                    <div>PHÍ VẬN CHUYỂN</div>
                    <div>$</div>
                </div>
                <div className='tex_cart'>
                    <div>TỔNG CỘNG</div>
                    <div>$</div>
                </div>
                <button className='thanhtoan_cart'>
                    THANH TOÁN
                </button>
            </div>
        </div>
    )
}
