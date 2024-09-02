import { NavLink } from "react-router-dom";
import s from "./index.module.css"
import OfferingsImg2 from "../../assets/Offerings_img2.png"
import Vector from "../../assets/Vector431.svg"
import ButtonLeft from "../../assets/Butto_left.svg?react";
import ButtonRight from "../../assets/Button_right.svg?react";
import Icon from "../../assets/Icon.svg";

const EventsPhotographyFromServices = () => {
    return (
        <section className={s.section} id="events_services"  >
            <div className={s.main}>
                <div className={s.text}>
                    <strong className={s.strong} >Events Photography</strong>
                    <p className={s.paragraph}>Our event photography service is dedicated to capturing the magic of your special occasions.
                        Whether it's a wedding, corporate event, or milestone celebration, we're there to document every heartfelt moment.
                        We blend into the background, ensuring natural and candid shots that reflect the emotions of the day</p>
                    <NavLink to="/about" className={s.link} >View Projects<img src={Vector} alt="" /></NavLink>
                </div >
                <div className={s.contanier_img}>
                    <img src={OfferingsImg2} alt="" className={s.photo} />
                    <div className={s.buttons_carousel}>
                        <button className="btn-carousel" > <ButtonLeft className="btn-svg" /></button>
                        <button className="btn-carousel" ><ButtonRight className="btn-svg" /></button>
                    </div>
                </div>
            </div>
            <div className={s.bidding}>

                <div className={s.list}>
                    <p className={s.title}>Wedding Photograph</p>
                    <div className={s.title_price}>
                        <p className={s.price}>$1,500</p>
                        <NavLink to="/about" className={s.link} >Book a Call<img src={Vector} alt="" /></NavLink>
                    </div>
                </div>
                <div className={s.stars}>
                    <p className={s.star}>
                        <img src={Icon} alt="" />
                        Capture the magic of your special day.
                    </p>
                    <p className={s.star}>
                        <img src={Icon} alt="" />
                        Includes full-day coverage, a second photographer, and 300+ professionally edited images.
                    </p>
                    <p className={s.star}>
                        <img src={Icon} alt="" />Customizable packages are available to suit your specific wedding needs.
                    </p>
                </div>



            </div>
            <div className={s.bidding}>

                <div className={s.list}>
                    <p className={s.title}>Party Coverage</p>
                    <div className={s.title_price}>
                        <p className={s.price}>$800</p>
                        <NavLink to="/about" className={s.link} >Book a Call<img src={Vector} alt="" /></NavLink>
                    </div>
                </div>
                <div className={s.stars}>
                    <p className={s.star}>
                        <img src={Icon} alt="" />
                        Capture the magic of your special day.
                    </p>
                    <p className={s.star}>
                        <img src={Icon} alt="" />
                        Includes full-day coverage, a second photographer, and 300+ professionally edited images.
                    </p>
                    <p className={s.star}>
                        <img src={Icon} alt="" />Customizable packages are available to suit your specific wedding needs.
                    </p>
                </div>



            </div>
            <div className={s.bidding}>

                <div className={s.list}>
                    <p className={s.title}>Corporate Events</p>
                    <div className={s.title_price}>
                        <p className={s.price_alert}>Custom
                            Pricing</p>
                        <NavLink to="/about" className={s.link} >Book a Call<img src={Vector} alt="" /></NavLink>
                    </div>
                </div>
                <div className={s.stars}>
                    <p className={s.star}>
                        <img src={Icon} alt="" />
                        Tailored solutions for corporate gatherings, conferences, and seminars.
                    </p>
                    <p className={s.star}>
                        <img src={Icon} alt="" />
                        Contact us for a personalized quote based on your event's requirements.
                    </p>

                </div>



            </div>
        </section>

    );
}

export default EventsPhotographyFromServices;