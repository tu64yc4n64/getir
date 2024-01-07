

const HeaderButton = ({ children, onClick }) => {


    return (
        <div className='mr-[4px]'>
            <button onClick={onClick} className="
            flex
            items-center
            text-[#dbdbff]
            lg:pl-[16px]
            lg:pr-[12px]
            lg:py-[7px]
            md:p-[6px]
            text-[14px]
            leading-[19px]
            font-[600]">
                {children}
            </button>
        </div>
    )
}

export default HeaderButton
