
import s from "./index.module.css";
import ButtonLeft from "../../assets/Butto_left.svg?react";
import ButtonRight from "../../assets/Button_right.svg?react";
import CardPhoto from "../CadrPhoto";


const MockPhoto = [
    {
        id: 1,
        img: "/src/assets/Section_Portfolio-Card1.png",
        name: "Faces of Resilience",
        date: "March 2022",
        link: "View Project",
    },
    {
        id: 2,
        img: " /src/assets/Section_Portfolio-Card2.png ",
        name: "A Wedding Tale",
        date: "January 2020",
        link: "View Project",
    },
    {
        id: 3,
        img: "/src/assets/Section_Portfolio-Card3.png",
        name: "Product Elegance",
        date: "January 2020",
        link: "View Project",
    },
];



const SectionPortfolio = () => {
    return (
        <section  className={s.section} id="my-werks">
            <span className={s.desc}>Portfolio</span>
            <div className={s.main}>
                <h2 className={s.title}>Explore My photography work.</h2>
                <div className="block-buttons">
                    <div className={s.block_buttons}>

                        <div className="buttons-carousel">
                            <button className="btn-carousel" ><ButtonLeft className="btn-svg" /></button>
                            <button className="btn-carousel" ><ButtonRight className="btn-svg" /></button>

                        </div>
                        <button className="main-btn">
                            KView All Works &#8594;
                        </button>
                    </div>
                </div>
            </div>

            <div className={s.photos}>
                {MockPhoto.slice(0, 3).map((item) => (
                    <CardPhoto key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
};

export default SectionPortfolio;
