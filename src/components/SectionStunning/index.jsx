
import s from "./index.module.css";
import DECOR from "../../assets/Clip.png";
import MAIN from "../../assets/Container.png";
import BUTTON from "../../assets/Button.svg?react";


const SectionStunning = () => {
    return (
        <section className={s.section}>
            <div className={s.main}>
                <div className={s.decor}>
                    <span className={s.desc}>
                        Stunning Photography by
                    </span>
                    <h2 className={s.title}>Damien Braun</h2>
                </div >
                <div className={s.idecor}> <img className={s.photo_idecor} src={DECOR} /> </div>
                <div className={s.decor}>
                    <div className={s.text}>
                        <h3 ><p className="df">Let’s <BUTTON className="button-blue" /></p> <strong>Work  Together</strong></h3>
                    </div>

                </div>
            </div>
            <img className={s.photo} src={MAIN} />
        </section>

    );
}

export default SectionStunning;