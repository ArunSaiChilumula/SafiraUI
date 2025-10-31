import React from 'react'
import '../../css/BlogStyle.css'
const BlogContent = () => {
    return (
        <div className='mainContainer'>
            <div className="left">
                <div className='one'>

                    <div className="BlogPostsContainerImg">
                        <img src="/images/blog1.jpg" alt="Blog" />

                        <p className='BlogpPostsDesc'>Maxime Laborum Voluptas Minus, Est, Unde Eaque Esse Tenetur</p>
                        <p>23/06/2021 | <span className='BlogpPostsDesc'>eCommerce</span></p>

                    </div>
                    <div className="BlogPostsContainerImg">
                        <img src="/images/blog2.jpg" alt="Blog" />

                        <p className='BlogpPostsDesc'>Maxime Laborum Voluptas Minus, Est, Unde Eaque Esse Tenetur</p>
                        <p>23/06/2021 | <span className='BlogpPostsDesc'>eCommerce</span></p>

                    </div>
                    <div className="BlogPostsContainerImg">
                        <img src="/images/blog3.jpg" alt="Blog" />

                        <p className='BlogpPostsDesc'>Maxime Laborum Voluptas Minus, Est, Unde Eaque Esse Tenetur</p>
                        <p>23/06/2021 | <span className='BlogpPostsDesc'>eCommerce</span></p>

                    </div>
                </div>
                <div className="one">
                    <div className="BlogPostsContainerImg">
                        <img src="/images/blog1.jpg" alt="Blog" />

                        <p className='BlogpPostsDesc'>Maxime Laborum Voluptas Minus, Est, Unde Eaque Esse Tenetur</p>
                        <p>23/06/2021 | <span className='BlogpPostsDesc'>eCommerce</span></p>

                    </div>
                    <div className="BlogPostsContainerImg">
                        <img src="/images/blog2.jpg" alt="Blog" />

                        <p className='BlogpPostsDesc'>Maxime Laborum Voluptas Minus, Est, Unde Eaque Esse Tenetur</p>
                        <p>23/06/2021 | <span className='BlogpPostsDesc'>eCommerce</span></p>

                    </div>
                    <div className="BlogPostsContainerImg">
                        <img src="/images/blog3.jpg" alt="Blog" />

                        <p className='BlogpPostsDesc'>Maxime Laborum Voluptas Minus, Est, Unde Eaque Esse Tenetur</p>
                        <p>23/06/2021 | <span className='BlogpPostsDesc'>eCommerce</span></p>

                    </div>
                </div>
                <div className="one">
                    <div className="BlogPostsContainerImg">
                        <img src="/images/blog1.jpg" alt="Blog" />

                        <p className='BlogpPostsDesc'>Maxime Laborum Voluptas Minus, Est, Unde Eaque Esse Tenetur</p>
                        <p>23/06/2021 | <span className='BlogpPostsDesc'>eCommerce</span></p>

                    </div>
                    <div className="BlogPostsContainerImg">
                        <img src="/images/blog2.jpg" alt="Blog" />

                        <p className='BlogpPostsDesc'>Maxime Laborum Voluptas Minus, Est, Unde Eaque Esse Tenetur</p>
                        <p>23/06/2021 | <span className='BlogpPostsDesc'>eCommerce</span></p>

                    </div>
                    <div className="BlogPostsContainerImg">
                        <img src="/images/blog3.jpg" alt="Blog" />

                        <p className='BlogpPostsDesc'>Maxime Laborum Voluptas Minus, Est, Unde Eaque Esse Tenetur</p>
                        <p>23/06/2021 | <span className='BlogpPostsDesc'>eCommerce</span></p>

                    </div>
                </div>

            </div>
            <div className="right">
                <div className="search">
                    <p>SEARCH</p>
                    <hr />
                    <input type="text" placeholder='Search...' />
                    <button>SEARCH</button>
                </div>
                <div className="Comments">
                    <p>RECENT COMMENTS</p>
                    <hr />
                    <div>
                        <img src="images/comment2.png.webp" alt="img" />
                        <p><span className='span1'>demo </span><span className='span2'>says:</span> Quisque semper nunc</p>
                    </div>
                    <div>
                        <img src="images/comment2.png.webp" alt="img" />
                        <p>
                            <span className='span1'>admin </span><span className='span2'>says:</span> Quisque orci porta...</p>
                    </div>
                    <div>
                        <img src="images/comment2.png.webp" alt="img" />
                        <p><span className='span1'>demo </span><span className='span2'>says:</span> Quisque semper nunc</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BlogContent