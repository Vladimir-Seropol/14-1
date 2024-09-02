import { NavLink } from "react-router-dom";
import s from "./index.module.css"
import OfferingsImg3 from "../../assets/Offerings_img3.png"
import Vector from "../../assets/Vector431.svg"
import ButtonLeft from "../../assets/Butto_left.svg?react";
import ButtonRight from "../../assets/Button_right.svg?react";
import Icon from "../../assets/Icon.svg";

const CommercialPhotographyFromServices = () => {
    return (
        <section className={s.section} id="commercial_services">
            <div className={s.main}>
                <div className={s.text}>
                    <strong className={s.strong} >Commercial Photography</strong>
                    <p className={s.paragraph}>In the world of business, a compelling image can make all the difference.
                        Our commercial photography service is designed to enhance your brand's visual identity. We create striking images for your products,
                        services, and marketing campaigns that leave a lasting impact on your audience.</p>
                    <NavLink to="/about" className={s.link} >View Projects<img src={Vector} alt="" /></NavLink>
                </div >
                <div className={s.contanier_img}>
                    <img src={OfferingsImg3} alt="" className={s.photo} />
                    <div className={s.buttons_carousel}>
                        <button className="btn-carousel" > <ButtonLeft className="btn-svg" /></button>
                        <button className="btn-carousel" ><ButtonRight className="btn-svg" /></button>
                    </div>
                </div>
            </div>
            <div className={s.bidding}>

                <div className={s.list}>
                    <p className={s.title}>Product Photography</p>
                    <div className={s.title_price}>
                        <p className={s.price}>$500</p>
                        <NavLink to="/about" className={s.link} >Book a Call<img src={Vector} alt="" /></NavLink>
                    </div>
                </div>
                <div className={s.stars}>
                    <p className={s.star}>
                        <img src={Icon} alt="" />
                        Showcase your products in the best light.
                    </p>
                    <p className={s.star}>
                        <img src={Icon} alt="" />
                        Includes a half-day photoshoot, 20 professionally edited product images, and high-resolution files.
                    </p>
                    <p className={s.star}>
                        <img src={Icon} alt="" />Additional images can be purchased at $20 each.
                    </p>
                </div>



            </div>
            <div className={s.bidding}>

                <div className={s.list}>
                    <p className={s.title}>Real Estate Photography</p>
                    <div className={s.title_price}>
                        <p className={s.price}>$700</p>
                        <NavLink to="/about" className={s.link} >Book a Call<img src={Vector} alt="" /></NavLink>
                    </div>
                </div>
                <div className={s.stars}>
                    <p className={s.star}>
                        <img src={Icon} alt="" />
                        Highlight the beauty of your properties.
                    </p>
                    <p className={s.star}>
                        <img src={Icon} alt="" />
                        Includes interior and exterior shots, a 2-hour photoshoot, and 25 professionally edited images.
                    </p>
                    <p className={s.star}>
                        <img src={Icon} alt="" />Additional images can be purchased at $20 each.
                    </p>
                </div>



            </div>
            <div className={s.bidding}>

                <div className={s.list}>
                    <p className={s.title}>Brand Photography</p>
                    <div className={s.title_price}>
                        <p className={s.price_alert}>Custom
                            Pricing</p>
                        <NavLink to="/about" className={s.link} >Book a Call<img src={Vector} alt="" /></NavLink>
                    </div>
                </div>
                <div className={s.stars}>
                    <p className={s.star}>
                        <img src={Icon} alt="" />
                        Craft a visual narrative that aligns with your brand identity.
                    </p>
                    <p className={s.star}>
                        <img src={Icon} alt="" />
                        Contact us to discuss your brand photography needs and receive a personalized quote.
                    </p>

                </div>



            </div>
        </section>

    );
}

export default CommercialPhotographyFromServices;