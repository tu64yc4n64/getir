import { useEffect, useState } from 'react';
import categoriesData from "../../api/categories.json";
import CategoryItem from "./CategoryItem";
import "./style.css";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(categoriesData);
    }, []);

    return (
        <section className=" bg-[#f5f5f5] md:bg-[#fff] md:py-[24px] md:px-8 lg:px-0 py-3">
            <div className="max-w-[1232px] mx-auto">
                <h6 className='text-[14px] text-[#191919] mb-[8px] font-[600] md:ml-0 ml-4'>Kategoriler</h6>
            </div>

            <div className="max-w-[1232px] mx-auto category">
                {categories && categories.map((item) => (
                    <CategoryItem
                        key={item.id}
                        name={item.name}
                        img={item.img}
                    />
                ))}
            </div>
        </section>
    );
}

export default Categories;
