import Comment from "../../components/comment";
import s from "./index.module.css";
import ButtonLeft from "../../assets/Butto_left.svg?react";
import ButtonRight from "../../assets/Button_right.svg?react";

const MockComment = [
    {
        id: 1,
        name: "Emily Johnson",
        location: "USA, California",
        text: "Damien's photography doesn't just capture moments; it captures emotions. Hes work is simply mesmerizing.",
    },
    {
        id: 2,
        name: "John Smith",
        location: "USA, California",
        text: "Damien's photography doesn't just capture moments; it captures emotions. Hes work is simply mesmerizing.",
    },
    {
        id: 3,
        name: "Samantha Davis",
        location: "USA, California",
        text: "Damien's photography doesn't just capture moments; it captures emotions. Hes work is simply mesmerizing.",
    },
];

const SectionTestimonials = () => {
    return (
        <section className={s.section} id="testimonials">
            <span className={s.desc}>Testimonials</span>
            <h2 className={s.title}>What My Clients Say</h2>

            <div className={s.main}>
                <div className={s.calk}>
                    Total Reviews <br />
                    323
                </div>
                <div className="block-buttons">
                    <div className="buttons-carousel">
                        <div><button className="btn-carousel" ><ButtonLeft className="btn-svg" /></button></div>
                        <div><button className="btn-carousel" ><ButtonRight className="btn-svg" /></button></div>
                    </div>
                    <button className="main-btn">
                        View All Services &#8594;
                    </button>
                </div>
            </div>

            <div className={s.cards}>
                {MockComment.map((item) => (
                    <Comment key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
};

export default SectionTestimonials;
