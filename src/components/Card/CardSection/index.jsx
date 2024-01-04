import Card from ".."
import { card } from "../../../utils/consts"

const CardSection = () => {
    return (
        <section className="mt-[32px] pb-[64px]">
            <div className="max-w-[1232px] mx-auto flex">
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
