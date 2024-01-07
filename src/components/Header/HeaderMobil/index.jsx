import { useLocation } from "react-router-dom";
import { pageMenu } from "../../../utils/consts";

const HeaderMobil = () => {
    const location = useLocation();
    const paramValue = location.pathname.split('/').pop();

    return (
        <div className="md:hidden flex items-center justify-center w-full bg-color h-16">
            {pageMenu.map((item, i) => (
                <figure key={i} style={{ display: paramValue === item.path ? 'block' : 'none' }}>
                    <img className="h-[22px]" src={item.src} alt="" />
                </figure>
            ))}
            <figure>
                <img src="" alt="" />
            </figure>
        </div>
    )
}

export default HeaderMobil;
