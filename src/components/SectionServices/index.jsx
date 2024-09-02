import s from "./index.module.css";
import ButtonLeft from "../../assets/Butto_left.svg?react";
import ButtonRight from "../../assets/Button_right.svg?react";
import ImageServices from "../../assets/ImageServices.png";
import BUTTON from "../../assets/Button.svg?react";
import Icon from "../../assets/Icon.svg";

const SectionServices = () => {
    return (
        <section className={s.section}>
            <span className={s.desc}>Services</span>
            <div className={s.main_top}>
                <h2 className={s.title}>My Photography Services</h2>
                <div className={s.block_buttons}>
                    <div className="buttons-carousel">
                        <button className="btn-carousel" > <ButtonLeft className="btn-svg" /></button>
                        <button className="btn-carousel" ><ButtonRight className="btn-svg" /></button>
                    </div>
                    <button className="main-btn">
                        View All Services &#8594;
                    </button>
                </div>
            </div>
            <div className={s.main}>
                <div className={s.right_block}>
                    <strong className={s.events}>
                        Events
                        <BUTTON className="button-blue" />
                    </strong>
                    <p className={s.text}>
                        Our event photography service is dedicated to capturing the magic of
                        your special occasions. Whether it's a wedding, corporate event, or
                        milestone celebration, we're there to document every heartfelt
                        moment. We blend into the background, ensuring natural and candid
                        shots that reflect the emotions of the day.
                    </p>
                    <strong className={s.strong}>Service Highlights</strong>
                    <p className={s.stars}>
                        <img src={Icon} alt="" />
                        Coverage for weddings, parties, corporate functions, and more
                    </p>
                    <p className={s.stars}>
                        <img src={Icon} alt="" />
                        Skilled photographers who know how to seize the moment.
                    </p>
                    <p className={s.stars}>
                        <img src={Icon} alt="" />A mix of candid and posed shots for a
                        comprehensive story.
                    </p>
                    <p className={s.stars}>
                        <img src={Icon} alt="" />
                        Quick turnaround for you to relive the day's highlights.
                    </p>
                </div>
                <div className={s.img_photo}>
                    <img src={ImageServices} alt="" className={s.photo} />
                </div>
            </div>
        </section>
    );
};

export default SectionServices;
