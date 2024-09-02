import s from "./index.module.css";
import Vector from "../../assets/Vector431.svg"
import BUTTON from "../../assets/Button.svg?react";




const ContactInformation = () => {
    return (
        <section className={s.section}>
            <form action="#">
                <div className={s.inform}>
                    <div>
                        <p className={s.title}>
                            Contact Information
                        </p>
                        <p className={s.text}>Feel free to reach out to us through various channels.
                            We are available by phone, email, and social media for your convenience</p>
                    </div>

                    <div>
                        <a className={s.phone} href="tel:+1-123-456-7890">+1-123-456-7890 <img className={s.vector} src={Vector} alt="" /> </a>
                    </div>
                    <a className={s.mail} href=" mailto:info@damien braunphotography.com">info@damien braunphotography.com <img className={s.vector} src={Vector} alt="" /></a>
                    <div>
                        <p className={s.title}>
                            Send Me a Message
                        </p>
                        <p className={s.text}>Have a specific inquiry or message for us? Please use the contact form below, and we'll get back to you promptly.</p>
                    </div>

                    <div>
                        <label className={s.label}>First Name </label> <br />
                        <input className={s.input} type="text" Placeholder name="FIRST NAME" />
                    </div>
                    <div>
                        <label className={s.label}>Last Name </label> <br />
                        <input className={s.input} type="text" placeholder="LAST NAME" />
                    </div>
                    <div></div>
                    <div>
                        <label className={s.label}>Email </label> <br />
                        <input className={s.input} type="email" placeholder="EMAIL" />
                    </div>
                    <div>
                        <label className={s.label}>Phone Numbe </label> <br />
                        <input className={s.input} type="phone" placeholder="PHONE NUMBE" />
                    </div>
                    <div className={s.label_textarea}><label className={s.label}>Your Message </label> <br />
                        <textarea className={s.input} name="" id="" placeholder="MESSAGE"> </textarea>
                    </div>

                    <div className={s.desc}><p >Send Message </p><BUTTON type="submit" className="button-blue" /></div>
                </div>
            </form>
        </section>
    );
};

export default ContactInformation;
