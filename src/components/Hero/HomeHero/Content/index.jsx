import RightSide from "./RightSide"
import LeftSide from "./LeftSide"


const HeroContent = () => {
    return (
        <div className="text-[#fff] max-w-[1232px] mx-auto flex justify-between h-[100%] items-center">
            <LeftSide />
            <RightSide />
        </div>
    )
}

export default HeroContent
