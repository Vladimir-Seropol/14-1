import s from "./index.module.css";
import ContactMe from "../../assets/Contact_me_img.png";
import ButtonsContainer from "../../assets/Buttons_Container.png"
import ContactMeImg from "../../assets/ContactMe-img.png"



const SectionContactMe = () => {
    return (
        <section className={s.section}>

            <div className={s.main}>

                <div className={s.contanier_img}>
                    <div className={s.absolut}>
                        <span className={s.desc}>Contact Me</span>
                        <h2 className={s.title}>Get in Touch with Me</h2>
                        <p>Step into a world of timeless photography with Damien Braun. Explore our range of photography services,
                            each crafted to tell your unique story through captivating images. Whether it's the magic of portraits, the emotion of events,
                            or the allure of commercial photography, we're here to bring your vision to life</p>
                    </div>
                    <img className={s.photo_mobile} src={ContactMeImg} alt="" />
                    <img className={s.photo} src={ContactMe} alt="" />
                    <img className={s.btn_about} src={ButtonsContainer} alt="" />
                </div>
            </div>
        </section>
    );
};

export default SectionContactMe;
