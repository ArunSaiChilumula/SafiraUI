import React from 'react'
import '../../../App.css'
import { Link } from 'react-router-dom'
const Navigation = () => {
    return (
        <div className='NavigationMain'>
            <ul className='navbar'>
                <li className="navdropdown">
                    Home ⏷
                    <div className="navdropdowncontent">
                        <div className="organic">
                            <h4>ORGANIC</h4>
                            <a href="#">Organic 01</a>
                            <a href="#">Organic 02</a>
                            <a href="#">Organic 03</a>
                            <a href="#">Organic 04</a>
                            <a href="#">Organic 05</a>
                        </div>
                        <div className="fashion">
                            <h4>FASHION</h4>
                            <a href="#">Fashion 01</a>
                            <a href="#">Fashion 02</a>
                            <a href="#">Fashion 03</a>
                            <a href="#">Fashion 04</a>
                        </div>
                        <div className="cosmetic">
                            <h4>COSMETIC</h4>
                            <a href="#">Cosmetic 01</a>
                            <a href="#">Cosmetic 02</a>
                            <a href="#">Cosmetic 03</a>
                            <a href="#">Cosmetic 04</a>
                        </div>
                    </div>
                </li>
                <Link to="/Shop" className='textlink'>
                    <li>Shop ⏷</li>
                </Link>

                <Link to="/Blog" className='textlink'>
                    <li>Blog ⏷</li>
                </Link>

                <li>Pages ⏷</li>
                <Link to="/contactUs" className='textlink'>
                    <li >Contact Us</li>
                </Link>
                <li>Vegetables</li>
                <li>Fruits</li>
                <li>Salads</li>
            </ul>
        </div>
    )
}

export default Navigation