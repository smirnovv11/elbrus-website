import Alert from '../../components/alert/Alert'
import ApplicationFrom from '../../components/applicationForm/ApplicationFrom'
import AdvantagesSection from './home.components/advantagesSection/AdvantagesSection'
import IntermediateSlide from './home.components/intermediateSlide/IntermediateSlide'
import ShortInfoSection from './home.components/shortInfoSection/ShortInfoSection'

const Home = () => {
    return (
        <>
            <ShortInfoSection/>
            <IntermediateSlide/>
            <AdvantagesSection/>
            <ApplicationFrom bgColor={'var(--sub-color)'}/>
            <Alert/>
        </>
    )
}

export default Home