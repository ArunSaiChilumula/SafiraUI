import React from 'react'
import '../../../App.css'
const BestSellers = () => {
    return (
        <div className='BestSellersContainer'>
            <p className='HeadingTop'>Recently added our store</p>
            <p className='HeadingTitle'>Best Sellers</p>
            <div className='InnerBestSellersContainer'>
                <div className="BestSellersContainerleft">
                    <img src="/images/banner4.jpg" alt="vegetables" />
                </div>
                <div className="BestSellersContainer2">
                    <div className='bsp'>
                        <img src="/images/product1.jpg" alt="" />
                        <div className='tpdescription'>
                            <p className='tpp1'>Lorem Ipsum Lec</p>
                            <p className='tpp2'>Fruits</p>
                            <pre className='tpp3'>$36.00  <span className='strike'>$145.00</span></pre>
                        </div>
                    </div>
                    <div className='bsp'>
                        <img src="public\images\product3.jpg" alt="" />
                        <div className='tpdescription'>
                            <p className='tpp1'>Lorem Ipsum Lec</p>
                            <p className='tpp2'>Fruits</p>
                            <pre className='tpp3'>$36.00  <span className='strike'>$145.00</span></pre>
                        </div>
                    </div>
                    <div className='bsp'>
                        <img src="public\images\product5.jpg" alt="" />
                        <div className='tpdescription'>
                            <p className='tpp1'>Lorem Ipsum Lec</p>
                            <p className='tpp2'>Fruits</p>
                            <pre className='tpp3'>$36.00  <span className='strike'>$145.00</span></pre>
                        </div>
                    </div>
                </div>
                <div className="BestSellersContainer2">
                    <div className='bsp'>
                        <img src="public\images\product9.jpg" alt="" />
                        <div className='tpdescription'>
                            <p className='tpp1'>Lorem Ipsum Lec</p>
                            <p className='tpp2'>Fruits</p>
                            <pre className='tpp3'>$36.00  <span className='strike'>$145.00</span></pre>
                        </div>
                    </div>
                    <div className='bsp'>
                        <img src="public\images\product6.jpg" alt="" />
                        <div className='tpdescription'>
                            <p className='tpp1'>Lorem Ipsum Lec</p>
                            <p className='tpp2'>Fruits</p>
                            <pre className='tpp3'>$36.00  <span className='strike'>$145.00</span></pre>
                        </div>
                    </div>
                    <div className='bsp'>
                        <img src="public\images\product7.jpg" alt="" />
                        <div className='tpdescription'>
                            <p className='tpp1'>Lorem Ipsum Lec</p>
                            <p className='tpp2'>Fruits</p>
                            <pre className='tpp3'>$36.00  <span className='strike'>$145.00</span></pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestSellers