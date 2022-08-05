import ContactSection1 from "./ContactSections/ContactSection1/ContactSection1";
import ContactSection2 from "./ContactSections/ContactSection2/ContactSection2";
import "./StyledContactPage.css";


export default function ContactPage() {
    return (
<div className="contact-page">
    <ContactSection1/>
    <ContactSection2/>
    
</div>
    )
}