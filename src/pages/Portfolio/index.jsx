
import SectionPortfolioPortfolio from "../../components/SectionPortfolio_Portfolio";
import Photography from "../../components/Photography";
import SectionFAQ from "../../components/SectionFAQ";
import SectionTestimonials from "../../components/SectionTestimonials";
import Footer from "../../components/Footer";

const Portfolio = () => {
    return (
        <main>
            <SectionPortfolioPortfolio />
            <Photography />
            <SectionFAQ />
            <SectionTestimonials />
            <Footer />
        </main>
    );
}

export default Portfolio;