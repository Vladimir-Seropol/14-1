import s from "./index.module.css"
import ButtonsContainer from "../../assets/Buttons_Container.png"
import FiveStars from "../../assets/5stars.svg"

const Comment = ({ item }) => {
    return (
        <div className={s.comment}>
            <div className={s.name} >
                <div>
                    <h4>{item.name}</h4>
                    <h5>{item.location}</h5>
                </div>
                <img className="buttons-container" src={ButtonsContainer} alt="" />
            </div>
            <img className="img" src={FiveStars} alt="" />
            <p className={s.text}>{item.text}</p>
        </div>
    );
}

export default Comment;