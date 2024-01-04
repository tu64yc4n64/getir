

const CloseModalButton = ({ onClick }) => {
    return (
        <div onClick={onClick} className="w-[32px] h-[32px] absolute top-[-4px] right-[32px] flex items-center justify-center bg-[#f3f3f4] rounded-[8px]">
            <button className="p-0 leading-4 font-[600] cursor-pointer w-full h-full">
                <div className="min-w-[24px] min-h-[24px] flex items-center justify-center">
                    <svg className="w-[10px] h-[10px]" data-testid="icon" name="close" size="10" color="black" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" >
                        <path d="M31.331 0.669c-0.892-0.892-2.334-0.892-3.226 0l-12.104 12.104-12.104-12.104c-0.892-0.892-2.334-0.892-3.226 0s-0.892 2.334 0 3.226l12.104 12.104-12.104 12.104c-0.892 0.892-0.892 2.334 0 3.227s2.334 0.892 3.226 0l12.104-12.105 12.104 12.105c0.892 0.892 2.334 0.892 3.226 0s0.892-2.334 0-3.227l-12.104-12.104 12.104-12.104c0.892-0.869 0.892-2.334 0-3.226z">
                        </path>
                    </svg>
                </div>
            </button>
        </div>
    )
}

export default CloseModalButton
