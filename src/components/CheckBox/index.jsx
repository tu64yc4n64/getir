import { useState } from 'react';
import "./style.css"

const Checkbox = ({ content }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div>
            <label className='flex items-center checkbox-label cursor-pointer'>
                <span className='relative'>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className='
                        absolute
                        w-full
                        h-full
                        pointer
                        opacity-0
                    '
                    />
                    <div className={`w-[22px] h-[22px] border-2 border-[#dfdee2] rounded-[4px] hover:border-[#7849f7] flex items-center justify-center check-box ${isChecked ? "bg-[#5d3ebc]" : ''
                        }`}>
                        {isChecked && <div color="#fff" size="14" version="1.1" xmlns="http://www.w3.org/2000/svg" format="large" ><svg className='w-[14px] h-[14px]' data-testid="icon" name="check" color="#fff" size="14" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" ><path fill='#fff' d="M31.26 4.951c0.987 0.987 0.987 2.586 0 3.573l-18.526 18.526c-0.987 0.987-2.586 0.987-3.573 0l-8.421-8.421c-0.987-0.987-0.987-2.586 0-3.573s2.586-0.987 3.573 0l6.635 6.635 16.74-16.74c0.987-0.987 2.586-0.987 3.573 0z" ></path></svg></div>}
                    </div>
                </span>

                <span className='text-[12px] text-[#a2a2a2] leading-5 pl-3' >
                    {content}
                </span>

            </label>
        </div>
    );
};

export default Checkbox;
