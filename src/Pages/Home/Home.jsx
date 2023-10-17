import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';

import './Home.css';
import Hero from '../../Components/Hero/Hero';
import Features from '../../Components/Features/Features';
import Footer from '../../Components/Footer/Footer';

function Home() {
  return (
    <>
      <Navbar logo="Images/argentBankLogo.png" />
      <main>
        <Hero />
      <section class="features">
        <Features 
        url="../Images/icon-chat.png"
        titleItem="You are our #1 priority"
        content ="Need to talk to a representative? You can get in touch through our
        24/7 chat or through a phone call in less than 5 minutes."/>
        <Features 
        url="../Images/icon-money.png"
        titleItem="More savings means higher rates"
        content="The more you save with us, the higher your interest rate will be!"/>
        <Features 
        url="../Images/icon-security.png"
        titleItem="Security you can trust"
        content="We use top of the line encryption to make sure your data and money
        is always safe."/>
      </section>
      </main>
      <Footer />
    </>
  )
}

export default Home;