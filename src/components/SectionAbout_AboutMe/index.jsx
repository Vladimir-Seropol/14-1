import s from "./index.module.css"
import IMG from "../../assets/Container2.png"
import IMG_380 from "../../assets/About-380.png"



const SectionAboutAboutMe = () => {
    return (
        <section className={s.section}>
            <div className={s.main_top}>
                <div className={s.absolut}>   <span className={s.desc}>About</span>
                    <h2 className={s.title}>About damien braun</h2></div>
                <img src={IMG} alt="" className={s.photo} />
            </div>
            <div className={s.mobile}>
                <img src={IMG_380} alt="" className={s.photo} />
            </div>
            <div className={s.main}>
                <strong className={s.strong} >My Biography</strong>
                <p className={s.paragraph}>Damien Braun's love affair with photography began at a young age, nurtured by the captivating landscapes and
                    vibrant cultures surrounding her in the heart of the USA. Her passion for storytelling through imagery led her to embark on
                    a photography journey that has spanned over 15 years. <br />
                    Driven by an insatiable curiosity to explore the beauty in everyday moments, Damien has honed her craft meticulously. Her background in digital media
                    provided her with a solid foundation, but it's her keen eye for detail and an innate ability to capture raw emotions that truly set her apart. <br />
                    Damien's journey is more than just taking pictures; it's about capturing the essence of the human spirit, the fleeting magic of nature, and the emotions
                    that define our lives. With each click of her camera, she weaves stories that transcend time and space</p>
            </div>
        </section>

    );
}

export default SectionAboutAboutMe;