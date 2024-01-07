import "./style.css"

const Card = ({ header, text, src }) => {
    return (
        <div className='card w-card pt-[60px] pb-[40px] px-4 rounded-lg font-600 text-4 md:mb-0 mb-4'>
            <div className="flex flex-col items-center ">
                <figure className='w-[150px] h-[150px]'>
                    <img className="w-full h-[100%]" src={src} alt="" />
                </figure>
                <h3 className="max-w-[292px] text-center mt-[24px] text-[#5d3ebc] text-[18px] font-[600]">
                    {header}
                </h3>
                <p className="mt-[8px] text-center text-[15px] text-[#697488]">
                    {text}
                </p>
            </div>
        </div>
    )
}

export default Card

