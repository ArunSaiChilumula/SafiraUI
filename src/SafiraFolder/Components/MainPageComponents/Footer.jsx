import React from 'react'
import '../../../App.css'
const FooterBox = () => {
    return (
        <div className='FooterContainer'>
            <div className="FooterTop">
                <div className="FooterTop1">
                    <img src="/images/logo.png" alt="Logo" />
                    <p className='FooterTop1Desc'>We are a team of designers and developers that create high quality eCommerce, WordPress, Shopify .</p>
                    <p><span >Address</span>: 4710-4890 Breckinridge USA</p>
                    <p><span>Email</span>:demo@hasthemes.com</p>
                    <p><span>Call us</span>: (08) 23 456 789</p>
                </div>
                <div className="FooterTop2">
                    <p>Information</p>
                    <ul>
                        <li>About Us</li>
                        <li>Delivery Information</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Contact Us</li>
                        <li>Site Map</li>
                    </ul>
                </div>

                <div className="FooterTop2">
                    <p>Extras</p>
                    <ul>
                        <li>Brands</li>
                        <li>Gift Certificates</li>
                        <li>Affiliate</li>
                        <li>Specials</li>
                        <li>Returns</li>
                        <li>Order History</li>
                    </ul>
                </div>
                <div className="FooterTop3">
                    <p>Sign up newsletter</p>
                    <p className='footerp2'>Get updates by subscribe our weekly newsletter</p>
                    <div className='subscribebtn'>
                        <input type="text" placeholder='Enter your email' />
                        <button>SUBCRIBE</button>
                    </div>
                </div>
            </div>
            <div className="FooterBottom">
                <div className='FooterBottomLeft'>
                    <p>
                        Copyright © 2021 Safira . All Rights Reserved.Design by Safira
                    </p>
                </div>
                <div className='FooterBottomRight'>
                    <img src="/images/paypal1.jpg" alt="paypal" />
                    <img src="/images/paypal2.jpg" alt="paypal" />
                    <img src="/images/paypal3.jpg" alt="paypal" />
                    <img src="/images/paypal4.jpg" alt="paypal" />
                </div>
            </div>
        </div>
    )
}

export default FooterBox