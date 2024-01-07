

const FormButton = ({ children }) => {
    return (
        <div className="mt-[4px]">
            <div className='
            transition ease-in-out delay-0.2
            cursor-pointer
            text-[14px]
            text-center
            md:mb-[16px]
            text-color
            bg-formButton
            hover:text-hoverFormButtonColor
            hover:bg-hoverFormButton
            rounded-[8px]
            overflow-hidden'>
                <button className='h-formButton px-[16px] py-[14px] font-[600] leading-[16px]'>
                    {children}
                </button>
            </div>
        </div>

    )
}

export default FormButton
