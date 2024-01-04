

const FooterListItem = ({ children }) => {
    return (

        <li className='pb-4 pt-0 border-b-0 leading-4'>
            <a href="" className="relative text-[14px] font-400 text-color leading-4 outline-0 decoration-none">
                <span className='text-[#191919] leading-[18px]'>
                    {children}
                </span>
            </a>
        </li>



    )
}

export default FooterListItem
