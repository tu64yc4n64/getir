import { useState } from 'react';

const RadioButton = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (value) => {
        setSelectedOption(value);
    };

    return (
        <div className='rounded-[8px] border border-[#f3f0fe] flex flex-col '>
            <label className='mr-0 py-[10px] px-[16px] flex border-b border-[#f3f0fe] cursor-pointer'>
                <span className={`w-[22px] h-[22px] rounded-full ${selectedOption === 'option1' && `border-[#5d3ebc]`} border-2 border-[#dfdee2] p-[2px] flex items-center justify-center `} >
                    {selectedOption === 'option1' &&
                        <div className='w-[14px] h-[14px] rounded-full bg-[#5d3ebc] transition-all'>
                        </div>
                    }
                </span>
                <input
                    type="radio"
                    name="options"
                    value="option1"
                    checked={selectedOption === 'option1'}
                    onChange={() => handleOptionChange('option1')}
                    className='absolute opacity-0'
                />
                <div className='flex justify-between w-full items-center pl-[12px]'>
                    Türkçe
                    <img className='w-[18px] h-[13px]' src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/tr.svg" alt="" />
                </div>
            </label>
            <label className='mr-0 py-[10px] px-[16px] flex cursor-pointer'>
                <span className={`w-[22px] h-[22px] rounded-full ${selectedOption === 'option2' && `border-[#5d3ebc]`} border-2 border-[#dfdee2] p-[2px] flex items-center justify-center `} >
                    {selectedOption === 'option2' &&
                        <div className='w-[14px] h-[14px] rounded-full bg-[#5d3ebc] transition-all'>
                        </div>
                    }
                </span>
                <input
                    type="radio"
                    name="options"
                    value="option2"
                    checked={selectedOption === 'option2'}
                    onChange={() => handleOptionChange('option2')}
                    className='absolute opacity-0'
                />
                <div className='flex justify-between w-full items-center pl-[12px]'>
                    English
                    <img className='w-[18px] h-[13px]' src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/gb.svg" alt="" />
                </div>
            </label>
        </div>
    );
};

export default RadioButton;
