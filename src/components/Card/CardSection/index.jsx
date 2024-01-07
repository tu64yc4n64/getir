import Card from ".."
import { card } from "../../../utils/consts"

const CardSection = () => {
    return (
        <section className="md:mt-[32px] mt-4 md:mb-0 md:pb-[64px] md:px-0 px-4 pb-4 md:bg-transparent bg-[#fafafa]">
            <div className="max-w-[1232px] mx-auto md:flex ">
                {card.map((item, i) => (
                    <Card
                        key={i}
                        src={item.src}
                        header={item.header}
                        text={item.text}
                    />
                ))}
            </div>
        </section>

    )
}

export default CardSection
