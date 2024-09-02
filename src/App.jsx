import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import Services from "./pages/Services";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import SectionAbout from "./components/SectionAbout";



const ThemeContext = createContext(undefined);


function App() {
    const [isLight, setIsLight] = useState(false);

   

    return (

        <ThemeContext.Provider value={{ isLight, setIsLight }}>
            <div className={`app ${isLight ? "light" : "dark"}`}>
                <Header setIsLight={() => setIsLight((prev) => !prev)} isLight={isLight} />              
                    <Routes>
                        <Route exact path="/" element={<Home  />} />
                        <Route path="/about" element={<AboutMe  />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/contact" element={<ContactPage />} />  
                    </Routes>               
            </div>
        </ThemeContext.Provider>

    )
}

export default App;
