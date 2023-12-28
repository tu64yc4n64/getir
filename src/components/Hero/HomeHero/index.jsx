import HeroContent from './Content'
import Hero from './Hero'
import { homeHero } from "../../../utils/consts"
import "./style.css"
const HomeHero = () => {
    return (
        <div className='home-hero relative'>

            <div className='hero-bg'></div>
            <div className='absolute w-[100%] h-[100%] z-10'>
                <HeroContent />
            </div>

            <Hero slides={homeHero} />
        </div>
    )
}

export default HomeHero
