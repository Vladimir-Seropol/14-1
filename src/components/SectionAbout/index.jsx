import s from "./index.module.css"
import IMG from "../../assets/Image_sectionAbout.png"
import ButtonsContainer from "../../assets/Buttons_Container.png"
import Icon from "../../assets/Icon1.svg"

const SectionAbout = () => {
    return (
        
        <section className={s.section} id="about_home" >
            <span className={s.desc} >
                About
            </span>
            <div className={s.block_title}>

                <h2 className={s.title}>I am Damien</h2>
                <button className="main-btn">Know More &#8594;</button>
            </div>
            <div className={s.main}>
                <img src={IMG} alt="" className={s.photo} />
                <div className={s.description}>
                    <div className={s.introduction}>

                        <img className={s.icon} src={Icon} alt="" />
                        <strong className={s.element} >Introduction</strong>
                    </div>
                    <p className={s.text}>My journey as a photographer has been a lifelong quest to capture the extraordinary in the ordinary, to freeze
                        fleeting moments in time, and to share the world's beauty as I see it. Based in the enchanting landscapes of the USA,
                        I find inspiration in every corner of this diverse and vibrant country. Join me as we embark on a visual odyssey,
                        where each photograph tells a story, and every frame is a piece of my heart.</p>

                    <div className={s.introduction}>
                        <img className={s.icon} src={Icon} alt="" />
                        <strong className={s.element} >Contact Information</strong>
                    </div>
                    <div className={s.inform}>
                        <div className={s.links} >
                            <div className={s.link} >
                                <p>Email</p>
                                <a href="email:damienbraun@gmail.com" className={s.link}>damienbraun@gmail.com</a>
                            </div>
                            <div className={s.link_phone}>
                                <p className={s.phone}>Phone Number</p>
                                <a href="tel:+00 000000000" className={s.link}>+00 000000000</a>
                            </div>
                        </div>
                        <div className={s.btn_about} >
                            <img className="buttons-container" src={ButtonsContainer} alt="" />
                            <button className="main-btn">Let’s Work</button>
                            <button className="main-btn">Download CV</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
}

export default SectionAbout;