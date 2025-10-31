import React from 'react'
import '../../../App.css'
import '../../css/ShopStyle.css'
const ShopContent = () => {
    return (
        <div className='shopContainer'>
            <div className='left'>
                <div className='Catogary'>
                    <p className='heading'>
                        WOMEN
                    </p>
                    <hr className='hrline' />
                    <div>
                        <span>Shoes</span>
                        <span>+</span>
                    </div>
                    <div>
                        <span>Bags</span>
                        <span>+</span>
                    </div>
                    <div>
                        <span>Clothing</span>
                        <span>+</span>
                    </div>
                </div>
                <div className='Catogary'>
                    <p>FILTER BY PRICE</p>
                    <hr />
                    <input type="range" className='therangecolor' />
                    <div>
                        <button className='rangbtn'>Filter</button>
                        <span>$0 - $398</span>
                    </div>
                </div>
                <div className='Catogary'>
                    <p className='heading'>
                        SELECT BY COLOR
                    </p>
                    <hr />
                    <div>
                        <span>black</span>
                        <span>(6)</span>
                    </div>
                    <div>
                        <span>Blue</span>
                        <span>(8)</span>
                    </div>
                    <div>
                        <span>Brown</span>
                        <span>(10)</span>
                    </div>
                    <div>
                        <span>Green</span>
                        <span>(6)</span>
                    </div>
                    <div>
                        <span>Pink</span>
                        <span>(4)</span>
                    </div>
                </div>
                <div className="Catogary">
                    <p className='heading'>
                        SELECT BY SIZE
                    </p>
                    <hr />
                    <div>
                        <span>S</span>
                        <span>(6)</span>
                    </div>
                    <div>
                        <span>M</span>
                        <span>(8)</span>
                    </div>
                    <div>
                        <span>L</span>
                        <span>(10)</span>
                    </div>
                    <div>
                        <span>XL</span>
                        <span>(6)</span>
                    </div>
                    <div>
                        <span>XXL</span>
                        <span>(4)</span>
                    </div>
                </div>
                <div className="Catogary">
                    <p className='heading'>
                        MANUFACTURER
                    </p>
                    <hr />
                    <div>
                        <span>Brake Parts</span>
                        <span>(6)</span>
                    </div>
                    <div>
                        <span>Accessories</span>
                        <span>(8)</span>
                    </div>
                    <div>
                        <span>Engine parts</span>
                        <span>(10)</span>
                    </div>
                    <div>
                        <span>hermes</span>
                        <span>(6)</span>
                    </div>
                    <div>
                        <span>louis vuitton</span>
                        <span>(4)</span>
                    </div>
                </div>
                <div className="Catogary">
                    <p className='heading'>
                        PRODUCT TAGS
                    </p>
                    <hr />
                </div>
                <div className='Catogarybtn'>
                    <button>Men</button>
                    <button>Women</button>
                    <button>Watches</button>
                    <button>Bags</button>
                    <button>Dress</button>
                    <button>Belt</button>
                    <button>Accessorie</button>
                    <button>Shoes</button>
                </div>

                <div className='banner'>
                    <img src="/images/banner17.webp" alt="banner" />
                </div>
            </div>
            <div className='right'>
                <div className='shopContainerTop'>
                    <div className='gridContainer'>
                        <img src="/images/bkg_grid_hover.png" alt="grid" className='grid1' />
                        <img src="/images/bkg_grid4_hover.png" alt="grid" className='grids' />
                        <img src="/images/bkg_list.png" alt="grid" className='grids' />
                    </div>

                    <select name="SortingTypes" id="SortingTypes">
                        <option value="rating">Sort by average rating</option>
                        <option value="popularity">Sort by popularity</option>
                        <option value="newness">Sort by newness</option>
                        <option value="priceLow">Sort by price: low to high</option>
                        <option value="priceH">Sort by price: high to low</option>
                        <option value="Z">Product Name: Z</option>
                    </select>

                    <p>Showing 1–9 of 21 results</p>
                </div>
                <div className='photoContainer'>
                    <div>
                        <img src="/images/product1.jpg" alt="" />
                        <div className='Shopdescription'>
                            <p className='tpp1'>Lorem Ipsum Lec</p>
                            <p className='tpp2'>Fruits</p>
                            <pre className='tpp3'>$36.00  <span className='strike'>$145.00</span></pre>
                        </div>
                    </div>
                    <div>
                        <img src="/images/product6.jpg" alt="" />
                        <div className='Shopdescription'>
                            <p className='tpp1'>Lorem Ipsum Lec</p>
                            <p className='tpp2'>Fruits</p>
                            <pre className='tpp3'>$36.00  <span className='strike'>$145.00</span></pre>
                        </div>
                    </div>
                    <div>
                        <img src="/images/product3.jpg" alt="" />
                        <div className='Shopdescription'>
                            <p className='tpp1'>Lorem Ipsum Lec</p>
                            <p className='tpp2'>Fruits</p>
                            <pre className='tpp3'>$36.00  <span className='strike'>$145.00</span></pre>
                        </div>
                    </div>
                    <div>
                        <img src="/images/product9.jpg" alt="" />
                        <div className='Shopdescription'>
                            <p className='tpp1'>Lorem Ipsum Lec</p>
                            <p className='tpp2'>Fruits</p>
                            <pre className='tpp3'>$36.00  <span className='strike'>$145.00</span></pre>
                        </div>
                    </div>
                    <div>
                        <img src="/images/product5.jpg" alt="" />
                        <div className='Shopdescription'>
                            <p className='tpp1'>Lorem Ipsum Lec</p>
                            <p className='tpp2'>Fruits</p>
                            <pre className='tpp3'>$36.00  <span className='strike'>$145.00</span></pre>
                        </div>
                    </div>
                    <div>
                        <img src="/images/product6.jpg" alt="" />
                        <div className='Shopdescription'>
                            <p className='tpp1'>Lorem Ipsum Lec</p>
                            <p className='tpp2'>Fruits</p>
                            <pre className='tpp3'>$36.00  <span className='strike'>$145.00</span></pre>
                        </div>
                    </div>
                    <div>
                        <img src="/images/product7.jpg" alt="" />
                        <div className='Shopdescription'>
                            <p className='tpp1'>Lorem Ipsum Lec</p>
                            <p className='tpp2'>Fruits</p>
                            <pre className='tpp3'>$36.00  <span className='strike'>$145.00</span></pre>
                        </div>
                    </div>
                    <div>
                        <img src="/images/product6.jpg" alt="" />
                        <div className='Shopdescription'>
                            <p className='tpp1'>Lorem Ipsum Lec</p>
                            <p className='tpp2'>Fruits</p>
                            <pre className='tpp3'>$36.00  <span className='strike'>$145.00</span></pre>
                        </div>
                    </div>
                    <div>
                        <img src="/images/product9.jpg" alt="" />
                        <div className='Shopdescription'>
                            <p className='tpp1'>Lorem Ipsum Lec</p>
                            <p className='tpp2'>Fruits</p>
                            <pre className='tpp3'>$36.00  <span className='strike'>$145.00</span></pre>
                        </div>
                    </div>
                    <div>
                        <img src="/images/product5.jpg" alt="" />
                        <div className='Shopdescription'>
                            <p className='tpp1'>Lorem Ipsum Lec</p>
                            <p className='tpp2'>Fruits</p>
                            <pre className='tpp3'>$36.00  <span className='strike'>$145.00</span></pre>
                        </div>
                    </div>
                    <div>
                        <img src="/images/product11.jpg" alt="" />
                        <div className='Shopdescription'>
                            <p className='tpp1'>Lorem Ipsum Lec</p>
                            <p className='tpp2'>Fruits</p>
                            <pre className='tpp3'>$36.00  <span className='strike'>$145.00</span></pre>
                        </div>
                    </div>
                    <div>
                        <img src="/images/product12.jpg" alt="" />
                        <div className='Shopdescription'>
                            <p className='tpp1'>Lorem Ipsum Lec</p>
                            <p className='tpp2'>Fruits</p>
                            <pre className='tpp3'>$36.00  <span className='strike'>$145.00</span></pre>
                        </div>
                    </div>
                </div>
                <div className='shopContainerBottom'>
                    <button className='firstbtn'>1</button>
                    <button >2</button>
                    <button >3</button>
                    <button >next</button>
                    <button >&gt;&gt;</button>
                </div>
            </div>
        </div>
    )
}

export default ShopContent