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
        <section className="category-section bg-[#fff] py-[24px]">
            <div className="w-[1232px] mx-auto">
                <h6 className='text-[14px] text-[#191919] mb-[8px] font-[600]'>Kategoriler</h6>
            </div>

            <div className="w-[1232px] mx-auto category">
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
