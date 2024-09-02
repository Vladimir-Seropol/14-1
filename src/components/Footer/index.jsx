import { NavLink, Route, Routes } from "react-router-dom";
import s from "./index.module.css";
import DAMIENT from "../../assets/Damient.png";
import FooterRibbon from "../../assets/Footer_ribbon.png";
import ButtonsContainer from "../../assets/Buttons_Container.png";
import E from "../../assets/E.png";
import e3 from "../../assets/3.png";
import BUTTON from "../../assets/Button.svg?react";



const Footer = () => {


    return (

        <footer className={s.footer}>
            <img className={s.damient} src={DAMIENT} alt="DAMIENT" />
            <img src={FooterRibbon} className={s.photo} alt="navigation tape" />
            <div className={s.section}>
                <img className={s.photo_e} src={E} alt="" />
                <div className={s.border} >
                    <span className={s.desc}>A more meaningful home for photography</span>
                    <div className={s.text}>
                        <h3 className={s.df} >
                            <p className="df"> Let’s
                                <BUTTON className="button-blue" /></p>
                            <p>Work Together</p>
                        </h3>
                    </div>
                </div>
                <div className={s.footer_nav1}>
                    <nav className={s.footerNav} >
                        <span className={s.desc}>
                            Home
                        </span>
                        <a className={s.link} href="/#about_home">About Me</a>
                        {/*<NavLink to="/" className={s.link} >
                            About Me
                        </NavLink>*/}
                        <a className={s.link} href="/#my-werk">My Works</a>
                        {/*<NavLink to="/#my-werk" className={s.link} >
                            My Works
                        </NavLink>*/}
                        <a className={s.link} href="/#testimonials">Testimonials</a>
                        {/*<NavLink to="/#testimonials" className={s.link} >
                            Testimonials
                        </NavLink>*/}
                    </nav>

                    <nav className={s.footerNav} >
                        <span className={s.desc}>
                            Clients
                        </span>
                        <NavLink to="/contact" className={s.link} >
                            Klovesto
                        </NavLink>
                        <NavLink to="/contact" className={s.link} >
                            Nukeway
                        </NavLink>
                        <NavLink to="/contact" className={s.link} >
                            Cloven’s
                        </NavLink>
                        <NavLink to="/contact" className={s.link} >
                            MenVol
                        </NavLink>
                    </nav>
                </div>
                <div className={s.footer_nav2}>
                    <nav className={s.footerNav} >
                        <span className={s.desc}>
                            Portfolio
                        </span>
                        <a className={s.link} href="/portfolio#events">Events</a>
                        {/*<NavLink to="/portfolio#events" className={s.link} >
                            Events
                        </NavLink>*/}
                        <a className={s.link} href="/portfolio#portrait">Portrait</a>
                        {/*<NavLink to="/portfolio#portrait" className={s.link} >
                            Portrait
                        </NavLink>*/}
                        <a className={s.link} href="/portfolio#branding_portfolio">Branding</a>
                        {/*<NavLink to="/portfolio#branding_portfolio" className={s.link} >
                            Branding
                        </NavLink>*/}
                        <a className={s.link} href="/portfolio#commercial">Commerciale</a>
                        {/*<NavLink to="/portfolio#commercial" className={s.link} >
                            Commerciale
                        </NavLink>*/}
                        <a className={s.link} href="/portfolio#branding_portfolio">Wedding</a>
                        {/*<NavLink to="/portfolio#branding_portfolio" className={s.link} >
                            Wedding
                        </NavLink>*/}
                    </nav>

                    <nav className={s.footerNav} >
                        <span className={s.desc}>
                            Services
                        </span>
                        <a className={s.link} href="/services#portrait_services">Portraits</a>
                        {/*<NavLink to="/services#portrait_services" className={s.link} >
                            Portraits
                        </NavLink>*/}
                        <a className={s.link} href="/services#events_services">Events</a>
                        {/*<NavLink to="/services#events_services" className={s.link} >
                            Events
                        </NavLink>*/}
                        <a className={s.link} href="/services#commercial_services">Commercial</a>
                        {/*<NavLink to="/services#commercial_services" className={s.link} >
                            Commercial
                        </NavLink>*/}
                    </nav>
                </div>
                <img className={s.photo_e} src={e3} alt="" />
            </div>

            <div className={s.footer_bootom}>
                <p>Terms & Conditions Privacy Policy</p>
                <img className="buttons-container" src={ButtonsContainer} alt="" />
                <p>© 2024 Damien Braun Photography. All rights reserved.</p>
            </div>

        </footer>
    );
};

export default Footer;
