import { NavLink } from "react-router-dom";
import s from "./index.module.css"
import Vector from "../../assets/Vector431.svg"



const CardPhoto = ({ item }) => {

    return (
        <div className={s.photo}>
            <img className={s.img_photo} src={item.img} alt="" />
            <div className={s.card_title}>
                <div className={s.text} >
                    <strong className={s.name} >{item.name}</strong>
                    <p className={s.data} >{item.date}</p>
                </div>
                <NavLink to="/about" className={s.link} >{item.link} <img className={s.vector} src={Vector} alt="" /></NavLink>
            </div>
        </div>
    );
}




export default CardPhoto;