import { NavLink } from "react-router-dom";
import s from "./index.module.css"
import OfferingsImg1 from "../../assets/Offerings_img1.png"
import Vector from "../../assets/Vector431.svg"
import ButtonLeft from "../../assets/Butto_left.svg?react";
import ButtonRight from "../../assets/Button_right.svg?react";
import Icon from "../../assets/Icon.svg";

const PortraitPhotographyFromServices = () => {
    return (
        <section className={s.section} id="portrait_services">
            <div className={s.main}>
                <div className={s.text}>
                    <strong className={s.strong} >Portrait Photography</strong>
                    <p className={s.paragraph}>Our portrait photography service is all about showcasing your unique personality.
                        Whether you need a professional headshot, a family portrait, or a personal photoshoot, we create images that reflect your true self.
                        We work closely with you to bring out your best angles and expressions, ensuring every portrait tells your stor</p>
                    <NavLink to="/about" className={s.link} >View Projects<img src={Vector} alt="" /></NavLink>
                </div >
                <div className={s.contanier_img}>
                    <img src={OfferingsImg1} alt="" className={s.photo} />
                    <div className={s.buttons_carousel}>
                        <button className="btn-carousel" > <ButtonLeft className="btn-svg" /></button>
                        <button className="btn-carousel" ><ButtonRight className="btn-svg" /></button>
                    </div>
                </div>
            </div>
            <div className={s.bidding}>

                <div className={s.list}>

                    <p className={s.title}>Individual Session</p>
                    <div className={s.title_price}>
                        <p className={s.price}>$250</p>
                        <NavLink to="/about" className={s.link} >Book a Call<img src={Vector} alt="" /></NavLink>
                    </div>
                </div>
                <div className={s.stars}>
                    <p className={s.star}>
                        <img src={Icon} alt="" />
                        Ideal for capturing your unique personality and style.
                    </p>
                    <p className={s.star}>
                        <img src={Icon} alt="" />
                        Includes a 2-hour photoshoot and 20 professionally edited images.
                    </p>
                    <p className={s.star}>
                        <img src={Icon} alt="" />Additional images can be purchased at $10 each.
                    </p>
                </div>



            </div>
            <div className={s.bidding}>

                <div className={s.list}>
                    <p className={s.title}>Family Session</p>
                    <div className={s.title_price}>
                        <p className={s.price}>$400</p>
                        <NavLink to="/about" className={s.link} >Book a Call<img src={Vector} alt="" /></NavLink>
                    </div>
                </div>
                <div className={s.stars}>
                    <p className={s.star}>
                        <img src={Icon} alt="" />
                        Perfect for creating lasting memories with your loved ones.
                    </p>
                    <p className={s.star}>
                        <img src={Icon} alt="" />
                        Includes a 3-hour photoshoot and 30 professionally edited images.
                    </p>
                    <p className={s.star}>
                        <img src={Icon} alt="" />Additional images can be purchased at $10 each.
                    </p>
                </div>



            </div>
            <div className={s.bidding}>

                <div className={s.list}>
                    <p className={s.title}>Couple Session</p>
                    <div className={s.title_price}>
                        <p className={s.price}>$300</p>
                        <NavLink to="/about" className={s.link} >Book a Call<img src={Vector} alt="" /></NavLink>
                    </div>
                </div>
                <div className={s.stars}>
                    <p className={s.star}>
                        <img src={Icon} alt="" />
                        Celebrate your love story with an intimate photoshoot.
                    </p>
                    <p className={s.star}>
                        <img src={Icon} alt="" />
                        Includes a 2.5-hour photoshoot and 25 professionally edited images.
                    </p>
                    <p className={s.star}>
                        <img src={Icon} alt="" />Additional images can be purchased at $10 each.
                    </p>
                </div>



            </div>
        </section>

    );
}

export default PortraitPhotographyFromServices;