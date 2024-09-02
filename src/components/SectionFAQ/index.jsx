import s from "./index.module.css";
import { Accordion } from "../Accordion";
import { Accordion2 } from "../Accordion";

const faqList = [
    {
        q: "What type of photography do you specialize in?",
        a: "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories"
    },
    {
        q: "How can I book a photography session with you?",
        a: "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories"
    },
    {
        q: "What equipment do you use for your photography?",
        a: "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories"
    },
    {
        q: "Can I request a specific location for a ",
        a: "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories"
    }
];

const faqList_2 = [
    {
        q: "What is your editing process like?",
        a: "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories"
    },
    {
        q: "Are digital files included in your photography packages?",
        a: "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories"
    },
    {
        q: "Do you offer prints of your photographs?",
        a: "Yes, prints are available for purchase. Explore the 'Prints' section for more details on sizes and pricing"
    },
    {
        q: "How long does it take to receive the edited photos after a session?",
        a: "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories"
    }
];


const SectionFAQ = () => {
    return (
        <section className={s.section}>
            <span className={s.desc}>FAQ’S</span>
            <div className={s.main}>
                <h2 className={s.title}>Frequently Asked Questions</h2>

            </div>
            <div className={s.main}>
                <div className={s.accordion}>
                    <Accordion faqList={faqList} />
                    <Accordion2 faqList_2={faqList_2} />
                </div>
            </div>
        </section>
    );
};

export default SectionFAQ;
