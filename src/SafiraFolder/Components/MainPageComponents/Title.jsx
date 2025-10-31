import React from 'react'
import { Link } from 'react-router-dom'
import '../../../App.css'
const Title = () => {
    return (
        <div className='titleComponent'>
            <div className="titleComponent-left">
                <input type="text" placeholder='Search here ....      ' />
                {/* <button className='searchbtn'></button> */}
            </div>
            <div className="titleComponent-center">
                <Link to="/">
                    <img src="/images/logo2.webp" alt="logo" />
                </Link>
            </div>
            <div className="titleComponent-right">
                <div className='loginSection'>

                    <Link to="/login">
                        <a href="#" className='loginTitle'>REGISTER</a>
                    </Link>

                    <span>/</span>
                    <Link to="/login">
                        <a href="#" className='loginTitle'>LOGIN</a>
                    </Link>
                </div>
                <div className="cartSection">

                    <div className="wishlist">
                        <div className='svg2'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" /></svg></div>
                        <div><button className='btncart'>3
                        </button></div>
                    </div>
                    <div className="cart">
                        <div className='svg2'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg></div>
                        <div><button className='btncart'>
                            2
                        </button></div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Title