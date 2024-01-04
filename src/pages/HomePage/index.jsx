import HomeHero from "../../components/Hero/HomeHero"
import { homeHero } from "../../utils/consts"
import CardSection from "../../components/Card/CardSection"
import Cta from "../../components/Cta"
import Categories from "../../components/Categories"

const HomePage = () => {
  return (
    <div>
      <HomeHero slides={homeHero} />
      <Categories />
      <Cta />
      <CardSection />
    </div>
  )
}

export default HomePage
