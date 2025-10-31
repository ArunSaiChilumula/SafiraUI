import React from 'react'
import FooterBox from '../Components/MainPageComponents/Footer.jsx'
import Header1 from '../Components/MainPageComponents/Header1.jsx'
import Title from '../Components/MainPageComponents/Title.jsx'
import Navigation from '../Components/MainPageComponents/Navigation.jsx'
import BlogContent from '../Components/BlogPageComponents/BlogContent.jsx'

const BlogPage = () => {
    return (
        <div>
            <Header1 />
            <Title />
            <Navigation />
            <BlogContent />
            <FooterBox />
        </div>
    )
}

export default BlogPage