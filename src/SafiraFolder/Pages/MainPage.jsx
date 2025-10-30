import React from 'react'
import Header1 from '../Components/MainPageComponents/Header1.jsx'
import Title from '../Components/MainPageComponents/Title.jsx'
import Navigation from '../Components/MainPageComponents/Navigation.jsx'
import Banner from '../Components/MainPageComponents/Banner.jsx'
import ShowImages from '../Components/MainPageComponents/ShowImages.jsx'
import TrendingProducts from '../Components/MainPageComponents/TrendingProducts.jsx'
import MostviewProducts from '../Components/MainPageComponents/MostviewProducts.jsx'
import Banner2 from '../Components/MainPageComponents/Banner2.jsx'
import BestSellers from '../Components/MainPageComponents/BestSellers.jsx'
import BlogPosts from '../Components/MainPageComponents/BlogPosts.jsx'
import Banner3 from '../Components/MainPageComponents/Banner3.jsx'
import FeaturedProducts from '../Components/MainPageComponents/FeaturedProducts.jsx'
import BrandImages from '../Components/MainPageComponents/BrandImages.jsx'
import FooterBox from '../Components/MainPageComponents/Footer.jsx'

const MainPage = () => {
    return (
        <>
            <Header1 />
            <Title />
            <Navigation />
            <Banner />
            <ShowImages />
            <TrendingProducts />
            <MostviewProducts />
            <Banner2 />
            <BestSellers />
            <BlogPosts />
            <Banner3 />
            <FeaturedProducts />
            <BrandImages />
            <FooterBox />
        </>
    )
}

export default MainPage
