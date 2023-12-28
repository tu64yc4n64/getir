import HomeHero from "../../components/Hero/HomeHero"
import { homeHero } from "../../utils/consts"

const HomePage = () => {
  return (
    <div>
      <HomeHero slides={homeHero} />
    </div>
  )
}

export default HomePage
