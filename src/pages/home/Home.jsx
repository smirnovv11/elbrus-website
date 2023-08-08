import styles from './Home.module.css'
import AdvantagesSection from './home.components/advantagesSection/AdvantagesSection'
import IntermediateSlide from './home.components/intermediateSlide/IntermediateSlide'
import ShortInfoSection from './home.components/shortInfoSection/ShortInfoSection'

const Home = () => {
    return (
        <>
            <ShortInfoSection/>
            <IntermediateSlide/>
            <AdvantagesSection/>
        </>
    )
}

export default Home