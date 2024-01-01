import React from 'react'

const LanguageButton = ({ children }) => {
    return (
        <div className='mr-[4px]'>


            <button className='font-[400] text-[#dbdbff] flex items-center py-[7px] pl-[16px] pr-[12px] text-[14px]'>
                {children}
            </button>
        </div>
    )
}

export default LanguageButton
