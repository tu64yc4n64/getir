import { pageMenu } from "../../../utils/consts";
import { NavLink, useParams } from "react-router-dom";
import "./style.css";

const Navigations = () => {
    const { url } = useParams(); // Destructuring the url from useParams

    return (
        <div className="flex">
            {pageMenu.map((item, i) => (
                <NavLink
                    className={url === item.path ? "header-links active py-[12px] px-[20px] " : "header-links py-[12px] px-[20px]"}
                    key={i}
                    to={item.path}
                >
                    <div className="">
                        <img className="link-logos h-[16px]" src={item.src} alt="" />
                    </div>
                </NavLink>
            ))}
        </div>
    );
};

export default Navigations;
