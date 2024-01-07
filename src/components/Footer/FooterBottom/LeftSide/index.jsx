import "./style.css"

const FooterBottomLeftSide = () => {
    return (
        <div className='md:flex items-center text-center'>
            <span className='mr-3 text-[13px]'>
                © 2024 Getir
            </span>
            <div className="md:m-0 mb-2 mt-1">
                <ul>
                    <li className='text-color flex items-center justify-center text-[13px] footer-bottom-list-item'>Bilgi Toplumu Hizmetleri</li>
                </ul>
            </div>

        </div>
    )
}

export default FooterBottomLeftSide
