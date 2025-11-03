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
                        <p><span className='span1'>demo </span><span >says:</span><span className='span2'> Quisque semper nunc</span></p>
                    </div>
                    <div>
                        <img src="images/comment2.png.webp" alt="img" />
                        <p>
                            <span className='span1'>admin </span><span>says:</span><span className='span2'> Quisque orci porta...</span></p>
                    </div>
                    <div>
                        <img src="images/comment2.png.webp" alt="img" />
                        <p><span className='span1'>demo </span><span>says:</span><span className='span2'>Quisque semper nunc</span> </p>
                    </div>

                </div>
                <div className="Posts">
                    <p>RECENT POSTS</p>
                    <hr />
                    <div className='Cards'>
                        <img src="/images/blog2.jpg" alt="img" />
                        <div className='innerCards'>
                            <p className='CommentsDesc'>Blog image post</p>
                            <p className='dates'>March 16, 2018</p>
                        </div>
                    </div>
                    <div className='Cards'>
                        <img src="/images/blog1.jpg" alt="img" />
                        <div className='innerCards'>
                            <p className='CommentsDesc'>Post with Gallery</p>
                            <p className='dates'>March 16, 2018</p>
                        </div>
                    </div>
                    <div className='Cards'>
                        <img src="/images/blog3.jpg" alt="img" />
                        <div className='innerCards'>
                            <p className='CommentsDesc'>Post with Audio</p>
                            <p className='dates'>March 16, 2018</p>
                        </div>
                    </div>

                </div>
                <div className="Categories">
                    <p className='title'>Categories</p>
                    <hr />
                    <div className='innerCatogary'>
                        <p>Audio</p>
                        <p>Company</p>
                        <p>Gallery</p>
                        <p>Image</p>
                        <p>Other</p>
                        <p>Travel</p>
                    </div>
                </div>

                <div className="Categories">
                    <p className='title'>Tag products</p>
                    <hr />
                    <div className='innerCatogary2'>
                        <button>asian</button>
                        <button>brown</button>
                        <button>euro</button>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default BlogContent