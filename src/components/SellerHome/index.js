import { Box } from '@mui/material'
import React from 'react';
import Header from "./Header";
import Hero from "./Hero";
import NumbersSection from './NumbersSection';
import WhySeller from './WhySeller';
import Testimonials from './Testimonials';
import HowToSell from './HowToSell';
import FormInformation from './FormInformation';
import Footer from './Footer';


function Index() {
    return (
            <Box>
                <Header/>
                <Hero />
                <NumbersSection />
                <WhySeller />
                <Testimonials />
                <HowToSell />
                <FormInformation />
                <Footer />
            </Box>
    )
}

export default Index
