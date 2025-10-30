import React from 'react'
import Header1 from '../Components/MainPageComponents/Header1.jsx'
import Title from '../Components/MainPageComponents/Title.jsx'
import Navigation from '../Components/MainPageComponents/Navigation.jsx'
import Banner from '../Components/ContactUsPageComponents/Banner'
import Map from '../Components/ContactUsPageComponents/Map'
import Form from '../Components/ContactUsPageComponents/Form'
import FooterBox from '../Components/MainPageComponents/Footer.jsx'

const ContactUsPage = () => {
    return (
        <div>
            <Header1 />
            <Title />
            <Navigation />
            <Banner />
            <Map />
            <Form />
            <FooterBox />
        </div>
    )
}

export default ContactUsPage