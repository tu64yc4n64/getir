import "./style.css"

const ShortInput = ({ content }) => {
    return (
        <div className='ml-[10px] w-[100%]'>
            <div className='relative hero-rightSide-input'>
                <input
                    required
                    className='border-2 
                    border-input
                    rounded-[4px]
                    bg-[#fff]
                    w-[100%]
                    h-[56px]
                    text-[14px]
                    text-[#191918]
                    hover:border-hoverInput
                    focus:border-hoverInput
                    focus-visible:none
                    outline-none
                    px-[14px]
                    peer
                    focus:pt-[5px]
                    valid:pt-[5px]
                    '/>
                <label className="
                text-[#838287]
                absolute
                left-[14px]
                translate-y-[-50%]
                top-[50%]
                text-[14px]
                leading-[16px]
                pointer-events-none
                transition-all
                peer-focus:text-[12px]
                peer-focus:text-[#5d3ebc]
                peer-focus:translate-y-0
                peer-focus:top-[4px]

                peer-valid:text-[12px]
                peer-valid:text-[#5d3ebc]
                peer-valid:translate-y-0
                peer-valid:top-[4px]
                ">{content}</label>
            </div>
        </div>
    )
}

export default ShortInput
