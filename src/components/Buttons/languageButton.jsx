import { useDispatch } from 'react-redux';
import { LanguageModalOpen } from "../../stores/modal";

const LanguageButton = ({ children }) => {
    const dispatch = useDispatch()
    const handleLanguageModalOpen = () => {
        dispatch(LanguageModalOpen(true));
    };
    return (
        <div className='mr-[4px]'>
            <button onClick={handleLanguageModalOpen}
                className='
                font-[400]
                text-[#dbdbff]
                flex items-center
                lg:py-[7px]
                lg:pl-[16px]
                lg:pr-[12px]
                md:p-[6px]
                text-[14px]'>
                {children}
            </button>
        </div>
    )
}

export default LanguageButton
