
import s from "./index.module.css";
import ButtonLeft from "../../assets/Butto_left.svg?react";
import ButtonRight from "../../assets/Button_right.svg?react";
import CardPhoto from "../CadrPhoto";


const MockPhoto = [
    {
        id: 1,
        img: "/src/assets/Photography1.png",
        name: "Faces of Resilience",
        date: "March 2022",
        link: "View Project",
    },
    {
        id: 2,
        img: " /src/assets/Photography2.png ",
        name: "Innocence Unveiled",
        date: "January 2020",
        link: "View Project",
    },
    {
        id: 3,
        img: "/src/assets/Photography3.png",
        name: "Elegance in Monochrom",
        date: "January 2020",
        link: "View Project",
    },
    {
        id: 4,
        img: "/src/assets/Photography7.png",
        name: "Product Elegance",
        date: "August 2020",
        link: "View Project",
    },
    {
        id: 5,
        img: " /src/assets/Photography8.png ",
        name: "Brand Storytelling",
        date: "May 2019",
        link: "View Project",
    },
    {
        id: 6,
        img: "/src/assets/Photography9.png",
        name: "Culinary Delights",
        date: "February 2017",
        link: "View Project",
    },
    {
        id: 7,
        img: "/src/assets/Photography4.png",
        name: "A Wedding Tale",
        date: "September 2021",
        link: "View Project",
    },
    {
        id: 8,
        img: " /src/assets/Photography5.png ",
        name: "Corporate Excellence Summit",
        date: "November 2019",
        link: "View Project",
    },
    {
        id: 9,
        img: "/src/assets/Photography6.png",
        name: "Festival of Colors",
        date: "March 2018",
        link: "View Project",
    },
];



const Photography = () => {
    return (
        <section className={s.section} id="portraits">

            <div className={s.main}>
                <h2 className={s.title}>Portraits Photography</h2>
                <div className={s.block_buttons}>
                    <div className="buttons-carousel">
                        <button className="btn-carousel" ><ButtonLeft className="btn-svg" /></button>
                        <button className="btn-carousel" ><ButtonRight className="btn-svg" /></button>
                    </div>

                </div>
            </div>

            <div className={s.photos}>

                {MockPhoto.slice(0, 3).map((item) => (
                    <CardPhoto key={item.id} item={item} />
                ))}



            </div>

            <div className={s.main} id="events">
                <h2 className={s.title}>Events Photography</h2>
                <div className={s.block_buttons}>
                    <div className="buttons-carousel">
                        <button className="btn-carousel" ><ButtonLeft className="btn-svg" /></button>
                        <button className="btn-carousel" ><ButtonRight className="btn-svg" /></button>
                    </div>

                </div>
            </div>

            <div className={s.photos}>

                {MockPhoto.slice(6, 9).map((item) => (
                    <CardPhoto key={item.id} item={item} />
                ))}



            </div>

            <div className={s.main} id="commercial">
                <h2 className={s.title}>Commercial Photography</h2>
                <div className={s.block_buttons}>
                    <div className="buttons-carousel">
                        <button className="btn-carousel" ><ButtonLeft className="btn-svg" /></button>
                        <button className="btn-carousel" ><ButtonRight className="btn-svg" /></button>
                    </div>

                </div>
            </div>

            <div className={s.photos}>

                {MockPhoto.slice(3, 6).map((item) => (
                    <CardPhoto key={item.id} item={item} />
                ))}



            </div>

        </section>


    );
};

export default Photography;
