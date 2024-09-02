import s from "./index.module.css";
import OfferingsImg from "../../assets/Offerings_img.png";
import OfferingsImg_380 from "../../assets/OfferingImg-380.png"


const SectionServicesFromService = () => {
    return (
        <section className={s.section}>

            <div className={s.main}>
                <img className={s.photo_380} src={OfferingsImg_380} alt="" />
                <div className={s.absolut}>
                    <span className={s.desc}>Services</span>
                    <h2 className={s.title}>Diverse Photography Offerings</h2>
                    <p className={s.text}>Unlock the full spectrum of professional photography services tailored to your vision. From timeless portraits to captivating event coverage,
                        I bring a unique blend of creativity and technical expertise to each project</p>
                </div>
                <img className={s.photo} src={OfferingsImg} alt="" />
            </div>


        </section>
    );
};


export default SectionServicesFromService;
