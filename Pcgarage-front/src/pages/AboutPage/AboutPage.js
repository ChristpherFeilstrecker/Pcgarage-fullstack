
import "./StyledAboutPage.css";
import AboutSection1 from "./AboutSections/AboutSection1/AboutSection1";
import AboutSection2 from "./AboutSections/AboutSection2/AboutSection2";

export default function AboutPage() {
 
    return (
<div className="aboutPage">
    <AboutSection1/>
    <AboutSection2/>
</div>
    )
}