import "./style.css"

const CategoryItem = ({ img, name }) => {
    return (
        <div className="min-h-[109px] flex items-center justify-center rounded-[4px] transition-all hover:bg-[#f3f0fe] category-item" >
            <div className="w-full flex items-center justify-center">
                <a href="" className="flex flex-col items-center justify-center w-full">
                    <figure className="w-[48px] h-[48px] flex items-center justify-center">
                        <img className="
                        border 
                        border-[#1919191a]
                        rounded-[8px]
                        w-full
                        h-full
                        object-cover" src={img} alt="" />
                    </figure>
                    <span className="
                    text-center
                    text-[15px]
                    transition-all
                    text-[#3e3e3e]
                    mt-[12px]
                    font-[600]
                    min-h-[32px]
                    flex
                    items-center
                    justify-center
                    ">{name}</span>
                </a>
            </div>
        </div>
    )
}

export default CategoryItem
