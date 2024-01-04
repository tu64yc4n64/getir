

const RegisterFormButton = ({ children }) => {
    return (
        <div className="mt-[40px]">
            <div className='
            transition ease-in-out delay-0.2
            cursor-pointer
            text-[14px]
            text-center
            mb-[16px]
            text-[#fff]
            bg-[#5d3ebc]
            
            hover:bg-[#7849f7]
            rounded-[8px]
            overflow-hidden'>
                <button className='h-formButton px-[16px] py-[14px] font-[600] leading-[16px]'>
                    {children}
                </button>
            </div>
        </div>

    )
}

export default RegisterFormButton
