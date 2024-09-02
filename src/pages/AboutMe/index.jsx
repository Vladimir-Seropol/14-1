
import SectionAboutAboutMe from "../../components/SectionAbout_AboutMe";
import SectionJourney from "../../components/SectionJourney";
import SectionTestimonials from "../../components/SectionTestimonials";
import Footer from "../../components/Footer";
import "../AboutMe/index.css"
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

const AboutMe = () => {
   
    return (
        <main >
            
                <SectionAboutAboutMe />
                <SectionJourney />
                <SectionTestimonials />
                <Footer />
            
        </main>


    );
}

export default AboutMe;