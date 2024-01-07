import LeftSide from "./LeftSide"
import RightSide from "./RightSide"

const FooterBottom = () => {
    return (
        <div className="md:flex justify-between w-full md:bg-transparent ">
            <LeftSide />
            <RightSide />
        </div>
    )
}

export default FooterBottom
