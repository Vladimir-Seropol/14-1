

import SectionServicesFromService from "../../components/SectionServices_ from_Service";
import PortraitPhotographyFromServices from "../../components/PortraitPhotographyFromServices";
import EventsPhotographyFromServices from "../../components/EventsPhotographyFromServices";
import CommercialPhotographyFromServices from "../../components/CommercialPhotographyFromServices";
import SectionFAQ from "../../components/SectionFAQ";
import Footer from "../../components/Footer";
const Services = () => {
    return (
        <main>
            <SectionServicesFromService />
            <PortraitPhotographyFromServices />
            <EventsPhotographyFromServices />
            <CommercialPhotographyFromServices />
            <SectionFAQ />
            <Footer />
        </main>
    );
}

export default Services;