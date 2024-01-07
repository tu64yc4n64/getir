import { pageMenu } from "../../../utils/consts";
import { NavLink, useParams } from "react-router-dom";
import "./style.css";

const Navigations = () => {
    const { url } = useParams(); // Destructuring the url from useParams

    return (
        <div className="md:flex inline-flex md:w-full w-[411px]">
            {pageMenu.map((item, i) => (
                <NavLink
                    className={url === item.path ? "header-links active py-[12px] md:px-[20px] px-[12px]" : "header-links py-[12px] md:px-[20px] px-[12px]"}
                    key={i}
                    to={item.path}
                >
                    <figure className="">
                        <img className="link-logos md:h-[16px] h-[14px] w-auto object-contain" src={item.src} alt="" />
                    </figure>
                </NavLink>
            ))}
        </div>
    );
};

export default Navigations;
