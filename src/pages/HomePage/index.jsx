import HomeHero from "../../components/Hero/HomeHero"
import { homeHero } from "../../utils/consts"
import CardSection from "../../components/Card/CardSection"
import Cta from "../../components/Cta"
import Categories from "../../components/Categories"

import RightSide from "../../components/Hero/HomeHero/Content/RightSide"

const HomePage = () => {
  return (
    <div>
      <HomeHero slides={homeHero} />
      <RightSide className="md:hidden bg-[#fafafa] px-3" />
      <Categories />
      <Cta />
      <CardSection />
    </div>
  )
}

export default HomePage
