import "../Home/index.css"
import SectionStunning from "../../components/SectionStunning"
import SectionAbout from "../../components/SectionAbout"
import SectionServices from "../../components/SectionServices"
import SectionPortfolio from "../../components/SectionPortfolio"
import SectionFAQ from "../../components/SectionFAQ"
import SectionTestimonials from "../../components/SectionTestimonials"
import Footer from "../../components/Footer"
import { useState } from "react";
import { Routes } from "react-router-dom"
//import { CSSTransition } from "react-transition-group";


const Home = () => {
    //const [show, setShow] = useState(true);



    return (

        <main>

            <SectionStunning />
            <SectionAbout />
            <SectionServices />
            <SectionPortfolio />
            <SectionFAQ />
            <SectionTestimonials />
            <Footer />

            {/*<Routes>
                <Route exact path="/stunning" element={<SectionStunning />} />
                <Route path="/about_home" element={<SectionAbout />} />
                <Route path="/portfolio_home" element={<SectionPortfolio />} />
                <Route path="/services_home" element={<SectionServices />} />
                <Route path="/testimonials_home" element={<SectionTestimonials />} />
            </Routes>*/}
        </main>

    );
}

export default Home;