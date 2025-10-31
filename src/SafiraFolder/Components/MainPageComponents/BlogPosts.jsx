import React from 'react'
import '../../../App.css'
const BlogPosts = () => {
    return (
        <div className='BlogPostsContainer'>
            <p className='HeadingTop'>Our recent articles about Organic</p>
            <p className='HeadingTitle'>Our Blog Posts</p>
            <div className='InnerBlogPostsContainer'>
                <div className="BlogPostsContainerImg">
                    <img src="/images/blog1.jpg" alt="Blog" />
                    <p>23/06/2021 | <span className='BlogpPostsDesc'>eCommerce</span></p>
                    <p className='BlogpPostsDesc'>Maxime Laborum Voluptas Minus, Est, Unde Eaque Esse Tenetur</p>
                    <p className='BlogpPostsDesc'>SHOW MORE <button className='bpbtn'>▸</button></p>
                </div>
                <div className="BlogPostsContainerImg">
                    <img src="/images/blog2.jpg" alt="Blog" />
                    <p>23/06/2021 | <span className='BlogpPostsDesc'>eCommerce</span></p>
                    <p className='BlogpPostsDesc'>Maxime Laborum Voluptas Minus, Est, Unde Eaque Esse Tenetur</p>
                    <p className='BlogpPostsDesc'>SHOW MORE <button className='bpbtn'>▸</button></p>
                </div>
                <div className="BlogPostsContainerImg">
                    <img src="/images/blog3.jpg" alt="Blog" />
                    <p>23/06/2021 | <span className='BlogpPostsDesc'>eCommerce</span></p>
                    <p className='BlogpPostsDesc'>Maxime Laborum Voluptas Minus, Est, Unde Eaque Esse Tenetur</p>
                    <p className='BlogpPostsDesc'>SHOW MORE <button className='bpbtn'>▸</button></p>
                </div>
            </div>
        </div>
    )
}

export default BlogPosts