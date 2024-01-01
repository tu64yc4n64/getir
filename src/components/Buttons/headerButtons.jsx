

const HeaderButton = ({ children, onClick }) => {


    return (
        <div className='mr-[4px]'>
            <button onClick={onClick} className="flex items-center text-[#dbdbff] pl-[16px] pr-[12px] py-[7px] text-[14px] leading-[19px] font-[600]">
                {children}
            </button>
        </div>
    )
}

export default HeaderButton
