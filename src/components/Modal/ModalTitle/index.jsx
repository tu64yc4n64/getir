

const ModalTitle = ({ children }) => {
    return (
        <div className='
        text-[16px] 
        leading-[24px]
        flex
        flex-column
        items-center
        justify-center
        pt-[36px]
        '>
            <h6 className='text-[#5d3ebc] w-full text-center font-[600] relative'>
                {children}
            </h6>
        </div>

    )
}

export default ModalTitle
