import React from 'react'
import Header1 from '../Components/MainPageComponents/Header1.jsx'
import Title from '../Components/MainPageComponents/Title.jsx'
import Navigation from '../Components/MainPageComponents/Navigation.jsx'
import LoginBanner from '../Components/LoginComponents/LoginBanner'
import LoginForm from '../Components/LoginComponents/LoginForm'
import FooterBox from '../Components/MainPageComponents/Footer.jsx'
const LoginPage = () => {
    return (
        <div>
            <Header1 />
            <Title />
            <Navigation />
            <LoginBanner />
            <LoginForm />
            <FooterBox />

        </div>
    )
}

export default LoginPage