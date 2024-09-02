import s from "./index.module.css";
import Portfolio from "../../assets/Portfolio.png";
import Brands from "../../assets/Brands.png";
import Portfolio_IMG_380 from "../../assets/Potfolio-IMG-380.png"



const SectionPortfolioPortfolio = () => {
    return (
        <section className={s.section} id="branding_portfolio">
            <img className={s.photo_380} src={Portfolio_IMG_380} alt="" />
            <div className={s.main}>
                <div className={s.absolut}>
                    <span className={s.desc}>Portfolio</span>
                    <h2 className={s.title}>Visual Poetry in Pixels</h2>
                    <p className={s.text}>Step into a visual journey that encapsulates the essence of my lens. Each photograph in this portfolio is a narrative,
                        a frozen moment in time, and a testament to the artistry and passion poured into every frame. Explore the diverse tapestry of
                        stories I've had the privilege to capture and witness the world through my lens</p>
                </div>
                <img className={s.photo} src={Portfolio} alt="" />

            </div>
            <div className={s.img_bot}> <img className={s.photo} src={Brands} alt="" /></div>

        </section>
    );
};

export default SectionPortfolioPortfolio;
