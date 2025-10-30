import React from 'react'
import Header1 from '../Components/MainPageComponents/Header1.jsx'
import Title from '../Components/MainPageComponents/Title.jsx'
import Navigation from '../Components/MainPageComponents/Navigation.jsx'
import FooterBox from '../Components/MainPageComponents/Footer.jsx'
import Banner from '../Components/ShopComponents/Banner.jsx'
import ShopContent from '../Components/ShopComponents/ShopContent.jsx'

const Shop = () => {
    return (
        <div>
            <Header1 />
            <Title />
            <Navigation />
            <Banner />
            <ShopContent />
            <FooterBox />
        </div>
    )
}

export default Shop