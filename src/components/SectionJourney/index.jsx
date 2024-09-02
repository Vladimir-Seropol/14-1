import s from "./index.module.css";

import Card2005 from "../../assets/Card2005.png";
import Card2010 from "../../assets/Card2010.png";
import Card2012 from "../../assets/Card2012.png";
import Card2015 from "../../assets/Card2015.png";
import Card2017 from "../../assets/Card2017.png";
import Card2020 from "../../assets/Card2020.png";


const SectionJourney = () => {
    return (
        <section className={s.section}>
            <span className={s.desc}>Journey</span>
            <h2 className={s.title}>Damien's Journey - A Timeline</h2>



            <div className={s.cards}>
                <img className={s.photo} src={Card2005} alt="" />
                <img className={s.photo} src={Card2010} alt="" />
                <img className={s.photo} src={Card2012} alt="" />
                <img className={s.photo} src={Card2015} alt="" />
                <img className={s.photo} src={Card2017} alt="" />
                <img className={s.photo} src={Card2020} alt="" />
            </div>

        </section>
    );
};

export default SectionJourney;
