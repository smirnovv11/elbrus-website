import AboutCompany from "./about.components/aboutCompany/AboutCompany"
import Contacts from "./about.components/contacts/Contacts"
import Gallery from "./about.components/gallery/Gallery"

const About = () => {
    return (
        <div>
            <AboutCompany/>
            <Gallery/>
            <Contacts/>
        </div>
    )
}

export default About