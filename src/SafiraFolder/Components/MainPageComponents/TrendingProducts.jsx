import React from 'react'
import '../../../App.css'
const TrendingProducts = () => {
    return (
        <div className='CourousalContainer'>
            <p className='HeadingTop'>Recently added our store</p>
            <p className='HeadingTitle'>Trending Products</p>
            <div className='TrendingProductsButtons'>
                <button className='tpbtn1'>VEGETABLES</button>
                <button className='tpbtn'>FRUITS</button>
                <button className='tpbtn'>SALADS</button>
            </div>
            <div className="Courousal">
                <div>
                    <img src="/images/product1.jpg" alt="vegetables" />
                    <p className='tpp1'>Lorem Ipsum Lec</p>
                    <p className='tpp2'>Fruits</p>
                    <pre className='tpp3'>$36.00  <span className='strike'>$145.00</span></pre>
                </div>
                <div>
                    <img src="/images/product3.jpg" alt="vegetables" />
                    <p className='tpp1'>Aliquam Consequat</p>
                    <p className='tpp2'>Fruits</p>
                    <pre className='tpp3'>$26.00  <span className='strike'>$362.00</span></pre>
                </div>
                <div>
                    <img src="/images/product5.jpg" alt="vegetables" />
                    <p className='tpp1'>Donec Non Est</p>
                    <p className='tpp2'>Fruits</p>
                    <pre className='tpp3'>$46.00  <span className='strike'>$382.00</span></pre>
                </div>
                <div>
                    <img src="/images/product7.jpg" alt="vegetables" />
                    <p className='tpp1'>Etiam Gravida</p>
                    <p className='tpp2'>Fruits</p>
                    <pre className='tpp3'>$56.00  <span className='strike'>$322.00</span></pre>
                </div>
                <div>
                    <img src="/images/product9.jpg" alt="vegetables" />
                    <p className='tpp1'>Fusce Aliquam</p>
                    <p className='tpp2'>Fruits</p>
                    <pre className='tpp3'>$66.00  <span className='strike'>$312.00</span></pre>
                </div>

            </div>
        </div>

    )
}

export default TrendingProducts